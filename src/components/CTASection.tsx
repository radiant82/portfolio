import Link from "next/link";
import { HiArrowRight, HiMail } from "react-icons/hi";

export default function CTASection() {
  return (
    <section id="cta-section" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="glass p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Let&apos;s{" "}
              <span className="text-gradient">Work Together</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Have a project in mind or just want to chat? I&apos;m always open
              to discussing new opportunities, creative ideas, or ways to bring
              your vision to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" id="cta-contact" className="btn-primary">
                <HiMail className="text-lg" />
                Get In Touch
              </Link>
              <Link href="/projects" id="cta-projects" className="btn-secondary">
                View Projects
                <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
