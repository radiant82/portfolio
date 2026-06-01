import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      id={`project-card-${project.slug}`}
      className="group glass overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 space-y-3">
        <h3 className="text-lg font-bold text-white group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/5 text-gray-500">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Read More */}
        <div className="flex items-center gap-1 text-sm text-cyan-400 font-medium pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Details
          <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}
