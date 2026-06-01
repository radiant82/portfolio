import {
  HiCode,
  HiServer,
  HiCube,
} from "react-icons/hi";
import { IconType } from "react-icons";

interface SkillCategory {
  name: string;
  icon: IconType;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: HiCode,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "JavaScript",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    name: "Backend",
    icon: HiServer,
    skills: [
      "Node.js",
      "Python",
      "FastAPI",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma",
    ],
  },
  {
    name: "Tools & Others",
    icon: HiCube,
    skills: [
      "Git",
      "Docker",
      "AWS",
      "Vercel",
      "Netlify",
      "Figma",
      "CI/CD",
      "REST APIs",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills-section" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-header">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-subheader">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="glass p-6 sm:p-8 hover:border-cyan-500/30 transition-all duration-500 group"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
