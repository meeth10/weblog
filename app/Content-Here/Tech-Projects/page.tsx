import Link from "next/link";

export default function TechProjects() {
  const projects = [
    {
      title: "TAM/SAM/SOM Framework",
      description:
        "Market sizing methodology for emerging tech sectors. Top-down and bottom-up validation.",
      slug: "tam-sam-som-framework",
    },
    {
      title: "DCF Valuation Model",
      description:
        "Multi-scenario discounted cash flow model for high-growth tech companies.",
      slug: "dcf-model",
    },
    {
      title: "System Design: Cloud Infrastructure",
      description:
        "Scalable cloud architecture for B2B SaaS. Cost optimization and performance trade-offs.",
      slug: "cloud-infrastructure",
    },
    {
      title: "Competitive Analysis Dashboard",
      description:
        "Framework for tracking competitor moves across product, pricing, and positioning.",
      slug: "competitive-dashboard",
    },
  ];

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Tech Projects</h1>
      <p className="text-gray-400 mb-16 leading-relaxed">
        Frameworks, models, and systems blending engineering with strategy.
      </p>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.slug}>
            <h2 className="text-lg text-white mb-2">{project.title}</h2>
            <p className="text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}