import Image from "next/image";
import type { Metadata } from "next";
import { HiCheckCircle, HiCode, HiHeart, HiLightningBolt } from "react-icons/hi";
import TimelineSection from "@/components/TimelineSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Jayneel — a full-stack developer passionate about crafting modern web applications with clean code and thoughtful design.",
};

const highlights = [
  {
    icon: HiCode,
    label: "3+ Years Experience",
    description: "Building production-grade web applications",
  },
  {
    icon: HiLightningBolt,
    label: "20+ Projects",
    description: "Delivered for clients across industries",
  },
  {
    icon: HiHeart,
    label: "Passionate Learner",
    description: "Always exploring new technologies",
  },
  {
    icon: HiCheckCircle,
    label: "Quality Focused",
    description: "Clean code, tested, and well-documented",
  },
];

export default function AboutPage() {
  return (
    <div className="section-padding pt-28 md:pt-32">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="section-header">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="section-subheader">
            Get to know the person behind the code.
          </p>
        </div>

        {/* Profile + Intro */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center mb-16 md:mb-20">
          {/* Image */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative animate-float">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-xl" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl p-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 overflow-hidden">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-darker">
                  <Image
                    src="/images/profile.png"
                    alt="Jayneel"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Hi! I&apos;m <span className="text-cyan-400 font-semibold">Jayneel</span>, a full-stack developer
              with a passion for building modern web applications that are both beautiful and
              functional. I specialize in React, Next.js, and TypeScript, and I love turning
              complex problems into simple, elegant solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey into programming started during college, where I discovered the
              magic of creating things from scratch with code. Since then, I&apos;ve worked with
              startups and agencies, building everything from SaaS dashboards to AI-powered
              applications. I&apos;m driven by the desire to create software that genuinely
              helps people.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new tech,
              contributing to open source, or enjoying a good cup of coffee while
              brainstorming my next project.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 md:mb-20">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="glass p-5 text-center group hover:border-cyan-500/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-cyan-400 mx-auto mb-3 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                <item.icon size={24} />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">
                {item.label}
              </h3>
              <p className="text-gray-500 text-xs">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <TimelineSection />
      </div>
    </div>
  );
}
