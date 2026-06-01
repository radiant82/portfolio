import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowRight, HiMail } from "react-icons/hi";

const socialLinks = [
  { href: "https://github.com/jayneel", icon: FaGithub, label: "GitHub" },
  { href: "https://linkedin.com/in/jayneel", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://twitter.com/jayneel", icon: FaTwitter, label: "Twitter" },
];

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] flex items-center section-padding pt-28 md:pt-32"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-cyan-400">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for work
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-gradient">Jayneel</span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300">
              Full-Stack{" "}
              <span className="text-gradient">Developer</span> &{" "}
              <span className="text-gradient">Designer</span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              I craft modern, performant web applications with clean code and
              thoughtful design. Passionate about creating digital experiences
              that make a difference.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/projects" id="hero-cta-projects" className="btn-primary">
                View My Work
                <HiArrowRight className="text-lg" />
              </Link>
              <Link href="/contact" id="hero-cta-contact" className="btn-secondary">
                <HiMail className="text-lg" />
                Get In Touch
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 justify-center lg:justify-start pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:scale-110 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative animate-float">
              {/* Glow Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-xl animate-glow" />
              {/* Border Ring */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full p-1 bg-gradient-to-r from-cyan-500 to-blue-600">
                <div className="w-full h-full rounded-full overflow-hidden bg-darker">
                  <Image
                    src="/images/profile.png"
                    alt="Jayneel - Full-Stack Developer"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-2 -right-2 glass px-4 py-2 rounded-xl shadow-lg">
                <span className="text-sm font-medium text-cyan-400">3+ Years Exp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
