import Posts from "../components/posts";

export default function Blog() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-16">My Blog</h1>
      <Posts />
    </div>
  );
}