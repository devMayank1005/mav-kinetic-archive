import React from "react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-[#000000] text-white pt-32 p-8 md:p-16 lg:p-24 relative overflow-hidden">
      {/* Decorative scanner line */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-[#00F0FF] opacity-20 hidden lg:block"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="font-display text-6xl md:text-8xl lg:text-[140px] font-bold uppercase tracking-tighter leading-[0.85] mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
          SYSTEM <br /> ARCHITECTURE
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <Link href="/services/agentic-ai" className="group block border-2 border-[var(--color-surface)] p-8 hover:border-[#00F0FF] transition-colors relative">
            <div className="text-[#00F0FF] font-mono text-sm mb-6 border-b border-[var(--color-surface)] pb-2">// 01 _ AI CORE</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-4 group-hover:text-[#00F0FF] transition-colors">AGENTIC AI & LLMS</h2>
            <p className="font-body text-[#b9cacb] text-lg">Intelligent autonomous agents capable of handling complex tasks, decision-making, and specialized reasoning using cutting-edge models.</p>
          </Link>

          <Link href="/services/cloud-infrastructure" className="group block border-2 border-[var(--color-surface)] p-8 hover:border-[#FF003C] transition-colors relative">
            <div className="text-[#FF003C] font-mono text-sm mb-6 border-b border-[var(--color-surface)] pb-2">// 02 _ INFRA</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-4 group-hover:text-[#FF003C] transition-colors">CLOUD INFRASTRUCTURE</h2>
            <p className="font-body text-[#b9cacb] text-lg">High-available serverless architectures, real-time databases, and ironclad security protocols to protect your enterprise data.</p>
          </Link>

          <Link href="/services/process-automation" className="group block border-2 border-[var(--color-surface)] p-8 hover:border-[#BDFF00] transition-colors relative">
            <div className="text-[#BDFF00] font-mono text-sm mb-6 border-b border-[var(--color-surface)] pb-2">// 03 _ AUTOMATION</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-4 group-hover:text-[#BDFF00] transition-colors">PROCESS AUTOMATION</h2>
            <p className="font-body text-[#b9cacb] text-lg">Eliminate manual overhead with custom workflow automations. WhatsApp bots, voice integration, and seamless API orchestration.</p>
          </Link>

          <Link href="/services/enterprise-architecture" className="group block border-2 border-[var(--color-surface)] p-8 hover:border-white transition-colors relative">
            <div className="text-white font-mono text-sm mb-6 border-b border-[var(--color-surface)] pb-2">// 04 _ ECOSYSTEM</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-4">ENTERPRISE ARCHITECTURE</h2>
            <p className="font-body text-[#b9cacb] text-lg">Robust frontend & backend solutions designed for scalability and extreme performance. We don't just build sites; we build platforms.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
