"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };
  return (
    <section id="contact" className="px-6 w-full max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Let&apos;s Build Something.</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Whether you have a specific project in mind or just want to explore possibilities, I&apos;m ready to collaborate. Let&apos;s create an experience that stands out.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="w-12 h-12 bg-foreground/5 rounded-full flex items-center justify-center border border-foreground/10">
                <span className="text-xl">📧</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p>arpansingha16703@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="w-12 h-12 bg-foreground/5 rounded-full flex items-center justify-center border border-foreground/10">
                <span className="text-xl">📱</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <p>+91 7001835922</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="w-12 h-12 bg-foreground/5 rounded-full flex items-center justify-center border border-foreground/10">
                <span className="text-xl">🔗</span>
              </div>
              <div>
                <p className="font-medium text-foreground">LinkedIn</p>
                <a href="https://www.linkedin.com/in/-arpansingha-" target="_blank" className="hover:text-primary transition-colors">/in/-arpansingha-</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card/30 backdrop-blur-xl border border-foreground/10 p-8 rounded-3xl"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Name</label>
                <Input placeholder="John Doe" className="bg-white/[0.02] border border-white/10 rounded-xl px-4 focus-visible:border-white/40 focus-visible:bg-white/[0.04] focus-visible:ring-0 transition-all text-white h-12" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-white/[0.02] border border-white/10 rounded-xl px-4 focus-visible:border-white/40 focus-visible:bg-white/[0.04] focus-visible:ring-0 transition-all text-white h-12" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Subject</label>
              <Input placeholder="Project Inquiry" className="bg-white/[0.02] border border-white/10 rounded-xl px-4 focus-visible:border-white/40 focus-visible:bg-white/[0.04] focus-visible:ring-0 transition-all text-white h-12" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Message</label>
              <Textarea placeholder="Tell me about your project..." className="min-h-[150px] bg-white/[0.02] border border-white/10 rounded-xl p-4 focus-visible:border-white/40 focus-visible:bg-white/[0.04] focus-visible:ring-0 transition-all text-white resize-none" required />
            </div>
            <Button className="w-full h-14 text-md font-medium bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.02] active:scale-[0.98] transition-all rounded-xl" disabled={isSubmitted}>
              {isSubmitted ? "Message Sent Successfully!" : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
