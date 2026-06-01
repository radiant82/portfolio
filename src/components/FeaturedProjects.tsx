import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import ProjectCard from "./ProjectCard";
import { featuredProjects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-header">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subheader">
            A selection of my recent work — from SaaS platforms to AI-powered
            applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/projects" id="view-all-projects" className="btn-secondary">
            View All Projects
            <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
