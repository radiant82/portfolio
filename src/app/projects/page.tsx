import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web applications, SaaS platforms, and AI-powered tools built with modern technologies.",
};

export default function ProjectsPage() {
  return (
    <div className="section-padding pt-28 md:pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="section-header">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="section-subheader">
            A showcase of my work — from concept to deployment.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
