"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = {
  role: "user" | "agent";
  content: string;
};

const SUGGESTIONS = [
  "🚀 Current Role",
  "💻 Tech Stack",
  "📁 Projects",
  "🎓 Education",
  "📄 Resume",
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "agent", content: "Hi! I'm Arpan's AI assistant. Ask me anything about his work at Predixion AI, tech stack, or projects!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSendText = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg = text.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      
      setMessages((prev) => [...prev, { role: "agent", content: data.reply || "I didn't quite get that, but feel free to ask about Arpan's projects, experience, or skills!" }]);
    } catch {
      setMessages((prev) => [...prev, { role: "agent", content: "I'm having a brief connection hitch. Please ask again or reach Arpan directly via the contact form!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendText(input);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <Button
        size="icon"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-105 active:scale-95"
        style={{
          background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
          boxShadow: "0 8px 32px rgba(59, 130, 246, 0.4)",
          color: "#fff",
        }}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 max-w-[400px] bg-card/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
            style={{
              boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(59, 130, 246, 0.15)",
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-950/40 via-blue-900/20 to-transparent border-b border-white/10 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                    Arpan&apos;s AI Assistant
                  </h3>
                  <p className="text-[10px] text-muted-foreground flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online · Powered by Knowledge Graph
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground rounded-full hover:bg-white/5"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Quick Suggestions Chips */}
            <div className="px-3 pt-3 pb-2 flex gap-1.5 overflow-x-auto no-scrollbar border-b border-white/5">
              {SUGGESTIONS.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleSendText(chip.replace(/^[^\s]+\s*/, ""))}
                  disabled={isLoading}
                  className="text-[11px] whitespace-nowrap px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground border border-white/10 transition-colors flex-shrink-0 cursor-pointer disabled:opacity-50"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Messages Scroll Area */}
            <div className="h-72 sm:h-80 overflow-y-auto p-4 space-y-3 flex flex-col text-sm">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed text-xs sm:text-sm ${
                      m.role === "user"
                        ? "bg-blue-600 text-white rounded-br-sm shadow-md"
                        : "bg-white/[0.04] text-foreground/90 border border-white/10 rounded-bl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.04] border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-3 bg-black/40 border-t border-white/10 flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my work, skills, or projects..."
                className="h-10 text-xs bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-1 focus-visible:ring-blue-500 rounded-xl"
              />
              <Button
                size="icon"
                type="submit"
                disabled={isLoading || !input.trim()}
                className="h-10 w-10 shrink-0 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-transform active:scale-95 disabled:opacity-50"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
