"use client"

import { useEffect, useRef } from "react"

type Node = {
  x: number
  y: number
  vx: number
  vy: number
}

export default function ThinkingLayer({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!active) return

    // Respect reduced motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = "100%"
      canvas.style.height = "100%"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    window.addEventListener("resize", resize)

    const nodes: Node[] = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }))

    let mouse = { x: -1000, y: -1000 }

    const onMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener("mousemove", onMouseMove)

    let raf: number

    function animate() {
      // Clear in CSS pixels (important with DPR scaling)
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]

        a.x += a.vx
        a.y += a.vy

        if (a.x < 0 || a.x > window.innerWidth) a.vx *= -1
        if (a.y < 0 || a.y > window.innerHeight) a.vy *= -1

        // Mouse repulsion (guard against divide-by-zero)
        const dx = a.x - mouse.x
        const dy = a.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist > 0 && dist < 140) {
          a.vx += (dx / dist) * 0.05
          a.vy += (dy / dist) * 0.05
        }

        // Soft velocity cap
        a.vx = Math.max(-1, Math.min(1, a.vx))
        a.vy = Math.max(-1, Math.min(1, a.vy))

        // Node
        ctx.beginPath()
        ctx.arc(a.x, a.y, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(249,115,22,0.9)"
        ctx.fill()

        // Connections
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx2 = a.x - b.x
          const dy2 = a.y - b.y
          const d = Math.sqrt(dx2 * dx2 + dy2 * dy2)

          if (d < 140) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(51,65,85,${1 - d / 140})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("resize", resize)
    }
  }, [active])

  if (!active) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}
