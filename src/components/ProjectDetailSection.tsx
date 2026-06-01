import Image from "next/image";
import { HiCheck, HiLightningBolt, HiChip } from "react-icons/hi";

type SectionType =
  | "overview"
  | "features"
  | "techStack"
  | "gallery"
  | "challenges"
  | "architecture";

interface ProjectDetailSectionProps {
  type: SectionType;
  title: string;
  content?: string;
  items?: string[];
  badges?: string[];
  images?: string[];
}

export default function ProjectDetailSection({
  type,
  title,
  content,
  items,
  badges,
  images,
}: ProjectDetailSectionProps) {
  return (
    <div className="glass p-6 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-3">
        {type === "features" && <HiLightningBolt className="text-cyan-400" />}
        {type === "techStack" && <HiChip className="text-cyan-400" />}
        {title}
      </h2>

      {/* Text Content */}
      {content && (
        <p className="text-gray-400 leading-relaxed">{content}</p>
      )}

      {/* Features List */}
      {type === "features" && items && (
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <HiCheck className="text-cyan-400 text-xs" />
              </span>
              <span className="text-gray-300 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tech Badges */}
      {type === "techStack" && badges && (
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300"
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      {/* Gallery */}
      {type === "gallery" && images && images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden border border-white/10"
            >
              <Image
                src={img}
                alt={`Gallery image ${i + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
