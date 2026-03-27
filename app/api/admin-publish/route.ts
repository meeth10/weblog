import { NextResponse } from "next/server"

const GITHUB_TOKEN   = process.env.GITHUB_TOKEN
const GITHUB_REPO    = process.env.GITHUB_REPO
const GITHUB_BRANCH  = process.env.GITHUB_BRANCH ?? "main"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "changeme"

async function ghGet(path: string) {
  const r = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`, {
    headers: { Authorization: `Bearer ${GITHUB_TOKEN}`, Accept: "application/vnd.github+json" }, cache: "no-store",
  })
  if (r.status === 404) return null
  if (!r.ok) throw new Error(`GitHub GET failed: ${await r.text()}`)
  return r.json()
}

async function ghPut(path: string, contentBase64: string, message: string, sha?: string) {
  const body: Record<string, unknown> = { message, content: contentBase64, branch: GITHUB_BRANCH }
  if (sha) body.sha = sha
  const r = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`, {
    method: "PUT", headers: { Authorization: `Bearer ${GITHUB_TOKEN}`, Accept: "application/vnd.github+json", "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
  if (!r.ok) throw new Error(`GitHub PUT failed: ${await r.text()}`)
  return r.json()
}

export async function POST(req: Request) {
  try {
    if (req.headers.get("x-admin-password") !== ADMIN_PASSWORD)
      return new NextResponse("Unauthorized", { status: 401 })

    const { type, pdfBase64, pdfFilename, meta } = await req.json()
    const folder = type === "reading" ? "public/reading" : "public/writing"
    const pdfPath = `${folder}/${pdfFilename}`

    const existing = await ghGet(pdfPath)
    await ghPut(pdfPath, pdfBase64, `Upload PDF: ${pdfFilename}`, existing?.sha)

    const indexPath = `${folder}/index.json`
    const indexFile = await ghGet(indexPath)
    let entries: unknown[] = []
    if (indexFile) entries = JSON.parse(Buffer.from(indexFile.content, "base64").toString("utf-8"))
    entries = (entries as Record<string,unknown>[]).filter(e => e.file !== pdfFilename)
    entries.unshift({ ...meta, file: pdfFilename })

    await ghPut(indexPath, Buffer.from(JSON.stringify(entries, null, 2)).toString("base64"), `Add ${type}: ${meta.title}`, indexFile?.sha)
    return NextResponse.json({ ok: true })
  } catch (err) {
    return new NextResponse(String(err), { status: 500 })
  }
}
