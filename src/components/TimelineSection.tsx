import { HiBriefcase, HiAcademicCap } from "react-icons/hi";
import { IconType } from "react-icons";

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: IconType;
  type: "work" | "education";
}

const timelineItems: TimelineItem[] = [
  {
    year: "2024 — Present",
    title: "Senior Frontend Developer",
    subtitle: "TechVista Solutions",
    description:
      "Leading frontend architecture for enterprise SaaS products. Mentoring junior developers and driving adoption of modern React patterns and performance best practices.",
    icon: HiBriefcase,
    type: "work",
  },
  {
    year: "2022 — 2024",
    title: "Full-Stack Developer",
    subtitle: "InnovateLab Inc.",
    description:
      "Built and maintained multiple client-facing web applications using Next.js, Node.js, and PostgreSQL. Implemented CI/CD pipelines and automated testing workflows.",
    icon: HiBriefcase,
    type: "work",
  },
  {
    year: "2021 — 2022",
    title: "Junior Web Developer",
    subtitle: "PixelCraft Digital",
    description:
      "Developed responsive websites and interactive UIs for clients across various industries. Gained deep experience with React, TypeScript, and modern CSS.",
    icon: HiBriefcase,
    type: "work",
  },
  {
    year: "2017 — 2021",
    title: "B.S. Computer Science",
    subtitle: "State University",
    description:
      "Graduated with honors. Specialized in web technologies and software engineering. Completed capstone project on real-time collaborative editing systems.",
    icon: HiAcademicCap,
    type: "education",
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline-section" className="mt-16 md:mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12">
        My <span className="text-gradient">Journey</span>
      </h2>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent" />

        <div className="space-y-8 md:space-y-12">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="relative pl-12 md:pl-20 group"
            >
              {/* Dot */}
              <div className="absolute left-2.5 md:left-6 top-1 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 ring-4 ring-darker group-hover:ring-cyan-500/20 transition-all duration-300" />

              {/* Card */}
              <div className="glass p-5 sm:p-6 hover:border-cyan-500/20 transition-all duration-500">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {item.year}
                  </span>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <item.icon size={14} />
                    <span className="text-xs uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-cyan-400/80 text-sm font-medium mb-3">
                  {item.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
