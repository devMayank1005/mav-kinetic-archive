import React from "react";
import Link from "next/link";

export default function PlatformPage() {
  return (
    <main className="w-full min-h-screen bg-[#000000] text-white pt-32 p-8 md:p-16 lg:p-24 relative overflow-hidden">
      {/* Decorative scanner lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-[#BDFF00] opacity-20 hidden lg:block"></div>
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-[#BDFF00] opacity-20 hidden lg:block"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="w-full lg:w-1/2">
          <h1 className="font-display text-6xl md:text-8xl lg:text-[140px] font-bold uppercase tracking-tighter leading-[0.85] mb-8 text-[#BDFF00]">
            THE <br /> ENGINE
          </h1>
          <p className="font-mono text-xl md:text-2xl text-white tracking-widest uppercase border-l-4 border-[#BDFF00] pl-6 py-2 mb-12">
            Our Proprietary Multi-Agent Operating System
          </p>
          <p className="font-body text-[#b9cacb] text-xl leading-relaxed mb-12">
            The MAV Engine isn't just software. It's a living, thinking framework. We deploy autonomous agents that orchestrate planning, execution, and extreme scaling without human bottlenecking.
          </p>
          <Link href="/contact" className="inline-block bg-[#BDFF00] text-black font-display font-bold text-2xl px-12 py-6 uppercase hover:bg-white hover:text-black transition-colors">
            INITIALIZE SEQUENCE
          </Link>
        </div>

        <div className="w-full lg:w-1/2 border-2 border-[#BDFF00] p-8 relative">
          <div className="absolute -top-4 -left-4 bg-black text-[#BDFF00] font-mono border-2 border-[#BDFF00] px-4 py-1">
            [TERMINAL ACTIVE]
          </div>
          <div className="font-mono text-[#b9cacb] text-sm md:text-base space-y-4">
            <p className="text-white">&gt; SYSTEM_BOOT: <span className="text-[#BDFF00]">ONLINE</span></p>
            <p>&gt; MAV_AGENT_01: "Analyzing enterprise architecture..."</p>
            <p>&gt; MAV_AGENT_02: "Identifying redundant protocols..."</p>
            <p>&gt; MAV_AGENT_03: "Injecting high-frequency scaling nodes..."</p>
            <div className="w-full h-1 bg-[#2a2a2a] mt-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-[#BDFF00] w-2/3 animate-pulse"></div>
            </div>
            <p className="text-[#BDFF00] animate-pulse mt-4">_ AWAITING COMMAND</p>
          </div>
        </div>

      </div>
    </main>
  );
}
