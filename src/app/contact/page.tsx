import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { HiLocationMarker, HiClock } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jayneel. Let's discuss your project, collaboration opportunities, or just say hello.",
};

const socialLinks = [
  {
    href: "https://github.com/jayneel",
    icon: FaGithub,
    label: "GitHub",
    handle: "@jayneel",
  },
  {
    href: "https://linkedin.com/in/jayneel",
    icon: FaLinkedin,
    label: "LinkedIn",
    handle: "/in/jayneel",
  },
  {
    href: "https://twitter.com/jayneel",
    icon: FaTwitter,
    label: "Twitter",
    handle: "@jayneel",
  },
  {
    href: "mailto:hello@jayneel.dev",
    icon: FaEnvelope,
    label: "Email",
    handle: "hello@jayneel.dev",
  },
];

export default function ContactPage() {
  return (
    <div className="section-padding pt-28 md:pt-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="section-header">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="section-subheader">
            Have a project in mind? Let&apos;s talk about how I can help bring
            your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-6">
                Send me a message
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info Cards */}
            <div className="glass p-6 space-y-5">
              <h2 className="text-xl font-bold text-white">Info</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <HiLocationMarker size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white text-sm font-medium">India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <HiClock size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Availability</p>
                    <p className="text-white text-sm font-medium">
                      Open to opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-6 space-y-5">
              <h2 className="text-xl font-bold text-white">Connect</h2>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300">
                      <social.icon size={18} />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors duration-300">
                        {social.label}
                      </p>
                      <p className="text-gray-500 text-xs">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
