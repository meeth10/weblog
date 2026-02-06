import Link from "next/link";

export default function TechProjects() {
  const projects = [
    {
      title: "TAM/SAM/SOM Framework",
      description:
        "Market sizing methodology applied to emerging tech sectors. Combining top-down and bottom-up approaches to validate addressable markets.",
      type: "Framework",
      tags: ["market-sizing", "methodology", "validation"],
      slug: "tam-sam-som-framework",
    },
    {
      title: "DCF Valuation Model",
      description:
        "Multi-scenario discounted cash flow model with sensitivity analysis. Built for high-growth tech companies with uncertain trajectories.",
      type: "Model",
      tags: ["valuation", "finance", "modeling"],
      slug: "dcf-model",
    },
    {
      title: "System Design: Cloud Infrastructure",
      description:
        "Designing scalable cloud architecture for B2B SaaS platforms. Focus on cost optimization and performance trade-offs.",
      type: "Architecture",
      tags: ["systems", "cloud", "scalability"],
      slug: "cloud-infrastructure",
    },
    {
      title: "Competitive Analysis Dashboard",
      description:
        "Framework for tracking competitor moves across product, pricing, and positioning. Real-time data aggregation and insight generation.",
      type: "Tool",
      tags: ["competitive-intel", "data", "strategy"],
      slug: "competitive-dashboard",
    },
  ];

  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Tech Projects</h1>
      <p className="text-gray-300 mb-12 leading-relaxed">
        Technical frameworks, models, and systems I've built. From market sizing
        to system architecture, these projects blend engineering rigor with
        strategic thinking.
      </p>

      <div className="grid gap-8">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl font-medium text-white">
                {project.title}
              </h2>
              <span className="text-xs px-2 py-1 bg-blue-900/30 rounded text-blue-400">
                {project.type}
              </span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}