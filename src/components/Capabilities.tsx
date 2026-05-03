"use client";

import { useState } from "react";
import clsx from "clsx";

const services = [
  {
    num: "01",
    tag: "FULL STACK",
    title: "ECOSYSTEMS",
    stack: "NEXT.JS • REACT • SUPABASE • SCALABILITY",
    desc: "Robust frontend & backend solutions designed for scalability and extreme performance. We don't just build sites; we build platforms.",
  },
  {
    num: "02",
    tag: "CROSS_PLATFORM",
    title: "MOBILE INTEGRATION",
    stack: "REACT NATIVE • IOS • ANDROID • PWA",
    desc: "Extending your reach with purpose-built mobile applications and responsive mobile-first web experiences.",
  },
  {
    num: "03",
    tag: "AI_CORE",
    title: "AGENTIC AI & LLMS",
    stack: "GEMINI • LANGCHAIN • AUTONOMOUS AGENTS",
    desc: "Intelligent autonomous agents capable of handling complex tasks, decision-making, and specialized reasoning using cutting-edge Gemini models.",
  },
  {
    num: "04",
    tag: "CONVERSATIONAL",
    title: "VOICE CHATBOTS",
    stack: "SPEECH-TO-TEXT • ELEVENLABS • AI VOICE",
    desc: "Human-like auditory interactions powered by AI. Real-time voice processing for customer support and interactive experiences.",
  },
  {
    num: "05",
    tag: "EFFICIENCY",
    title: "PROCESS AUTOMATION",
    stack: "WHATSAPP API • TWILIO • WORKFLOWS",
    desc: "Eliminate manual overhead with custom workflow automations. WhatsApp bots, voice integration, and seamless API orchestration.",
  },
  {
    num: "06",
    tag: "INFRASTRUCTURE",
    title: "CLOUD SERVICES",
    stack: "SERVERLESS • DATABASES • SECURITY",
    desc: "High-available serverless architectures, real-time databases, and ironclad security protocols to protect your enterprise data.",
  },
];

export default function Capabilities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="w-full py-24 px-8 md:px-16 bg-[var(--color-background)] border-t border-[var(--color-surface)] overflow-hidden">
      <h2 className="font-mono text-2xl md:text-4xl font-bold tracking-widest uppercase mb-16">
        SERVICES
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 w-full">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={clsx(
              "group relative flex flex-col justify-between min-h-[400px] border-2 border-[var(--color-surface)] p-8 transition-all duration-500 cursor-crosshair",
              hoveredIndex === idx
                ? "bg-[var(--color-surface)] text-[var(--color-background)] shadow-none translate-y-2 translate-x-2"
                : "bg-[var(--color-background)] text-[var(--color-surface)] shadow-[8px_8px_0px_var(--color-surface)]"
            )}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Background Marquee on Hover */}
            <div
              className={clsx(
                "absolute inset-0 flex items-center whitespace-nowrap opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none overflow-hidden mix-blend-overlay",
              )}
            >
              <div className="animate-[marquee_10s_linear_infinite] font-mono text-6xl font-bold text-[var(--color-primary)]">
                {service.stack} • {service.stack} • {service.stack}
              </div>
            </div>

            <div className="relative z-10 flex flex-col">
              <div className="flex justify-between items-start mb-6 font-mono font-bold">
                <span className="text-2xl">{service.num}</span>
                <span className="text-xs tracking-widest border border-current px-2 py-1">{service.tag}</span>
              </div>
              <h3 className="font-display text-4xl xl:text-4xl font-bold tracking-tighter uppercase mb-6 leading-tight">
                {service.title}
              </h3>
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              <p className={clsx(
                "font-body text-lg leading-relaxed transition-opacity duration-500",
                hoveredIndex === idx ? "opacity-100" : "opacity-80"
              )}>
                {service.desc}
              </p>
              
              <div className={clsx(
                "font-mono text-sm tracking-widest font-bold uppercase transition-colors duration-500 mt-4",
                hoveredIndex === idx ? "text-[var(--color-primary)]" : "text-[var(--color-surface)]"
              )}>
                [ DISCOVER MORE ]
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
