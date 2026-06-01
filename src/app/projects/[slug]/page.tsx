import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectHero from "@/components/ProjectHero";
import ProjectDetailSection from "@/components/ProjectDetailSection";

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHero project={project} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-6">
        {/* Overview */}
        <ProjectDetailSection
          type="overview"
          title="Overview"
          content={project.overview}
        />

        {/* Features */}
        <ProjectDetailSection
          type="features"
          title="Key Features"
          items={project.features}
        />

        {/* Tech Stack */}
        <ProjectDetailSection
          type="techStack"
          title="Tech Stack"
          badges={project.tech}
        />

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <ProjectDetailSection
            type="gallery"
            title="Gallery"
            images={project.gallery}
          />
        )}

        {/* Challenges & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectDetailSection
            type="challenges"
            title="Challenges"
            content={project.challenges}
          />
          <ProjectDetailSection
            type="challenges"
            title="Solution"
            content={project.solution}
          />
        </div>

        {/* Architecture */}
        {project.architecture && (
          <ProjectDetailSection
            type="architecture"
            title="Architecture"
            content={project.architecture}
          />
        )}
      </div>
    </>
  );
}
