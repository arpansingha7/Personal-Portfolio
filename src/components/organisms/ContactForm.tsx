"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight, Mail, Phone, ExternalLink } from "lucide-react";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "arpansingha16703@gmail.com",
    href: "mailto:arpansingha16703@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7001835922",
    href: "tel:+917001835922",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "/in/-arpansingha-",
    href: "https://www.linkedin.com/in/-arpansingha-",
  },
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3500);
  };

  return (
    <section id="contact" className="py-24 px-6 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/25 font-light mb-3">
            Get in Touch
          </p>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              letterSpacing: "0.02em",
              lineHeight: 1,
              background: "linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.4))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
            }}
          >
            Let&apos;s Build Something.
          </h2>
          <p className="text-white/35 text-sm font-light leading-relaxed mb-12 max-w-sm">
            Whether you have a project in mind or just want to connect — I&apos;m ready to collaborate
            and build experiences that matter.
          </p>

          <div className="flex flex-col gap-6">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl border border-white/[0.07] bg-white/[0.03] flex items-center justify-center shrink-0 group-hover:border-white/20 group-hover:bg-white/[0.06] transition-all">
                  <Icon size={15} className="text-white/40 group-hover:text-white/70 transition-colors" />
                </div>
                <div>
                  <p className="text-white/25 text-xs tracking-widest uppercase font-light">{label}</p>
                  <p className="text-white/65 text-sm mt-0.5 group-hover:text-white/90 transition-colors">{value}</p>
                </div>
                <ArrowUpRight size={12} className="ml-auto text-white/15 group-hover:text-white/50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Form card */}
          <div className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-xl p-8">
            {/* Subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-light tracking-widest uppercase text-white/30">Name</label>
                  <Input
                    placeholder="Arpan Singha"
                    className="h-11 bg-white/[0.03] border-white/[0.08] rounded-xl text-white/80 placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-white/25 hover:border-white/15 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-light tracking-widest uppercase text-white/30">Email</label>
                  <Input
                    type="email"
                    placeholder="you@google.com"
                    className="h-11 bg-white/[0.03] border-white/[0.08] rounded-xl text-white/80 placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-white/25 hover:border-white/15 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-light tracking-widest uppercase text-white/30">Subject</label>
                <Input
                  placeholder="Project Collaboration"
                  className="h-11 bg-white/[0.03] border-white/[0.08] rounded-xl text-white/80 placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-white/25 hover:border-white/15 transition-colors"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-light tracking-widest uppercase text-white/30">Message</label>
                <Textarea
                  placeholder="Tell me about your project or idea..."
                  className="min-h-[130px] bg-white/[0.03] border-white/[0.08] rounded-xl text-white/80 placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-white/25 hover:border-white/15 transition-colors resize-none"
                  required
                />
              </div>

              <Button
                className="w-full h-12 rounded-xl font-light tracking-widest text-xs uppercase bg-white text-black hover:bg-white/92 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_24px_rgba(255,255,255,0.08)]"
                disabled={isSubmitted}
              >
                {isSubmitted ? "✓ Message Sent" : "Send Message"}
              </Button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
