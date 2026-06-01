import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import type { Project } from "@/data/projects";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section id="project-hero" className="section-padding pt-28 md:pt-32 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          href="/projects"
          id="back-to-projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 mb-8 group"
        >
          <HiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {project.title}
            </h1>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  <FaGithub />
                  View Code
                </a>
              )}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-darker/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
