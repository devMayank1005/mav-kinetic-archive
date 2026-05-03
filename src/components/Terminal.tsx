"use client";

import React from "react";

export default function Terminal() {
  return (
    <section id="team" className="w-full min-h-screen bg-[#000000] p-8 md:p-16 lg:p-24 border-t border-[var(--color-surface)] flex flex-col relative overflow-hidden">
      {/* Decorative scanner line */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-[#00F0FF] opacity-20 hidden lg:block"></div>
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-[#FF003C] opacity-20 hidden lg:block"></div>
      
      <div className="relative z-10 mb-24 max-w-5xl">
        <h2 className="font-display text-6xl md:text-8xl lg:text-[140px] font-bold uppercase tracking-tighter text-white leading-[0.85] mb-8">
          THE TEAM <br /> BEHIND MAV
        </h2>
        <p className="font-mono text-xl md:text-2xl text-[#00F0FF] tracking-widest uppercase border-l-4 border-[#FF003C] pl-6 py-2">
          Architects of disruption
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 relative z-10 pb-16">
        
        {/* Founder 1 */}
        <div className="relative group lg:-translate-y-8">
          <div className="absolute inset-0 bg-[#00F0FF] translate-x-3 translate-y-3 transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
          <div className="relative bg-black border-2 border-white p-8 h-full flex flex-col z-10">
            <div className="text-white font-mono text-sm mb-12 border-b-2 border-[#00F0FF] pb-2 inline-block w-max">
              // 01
            </div>
            <h3 className="font-display text-5xl font-bold text-white mb-2 uppercase">MAYANK</h3>
            <h4 className="font-mono text-[#00F0FF] text-sm tracking-widest mb-8">ARCHITECT / FULL-STACK</h4>
            <p className="font-body text-[#e2e2e2] text-lg leading-relaxed mt-auto">
              Engineered the foundational monolithic structures of the MAV system. Specializes in low-latency high-frequency distribution protocols and aggressive system-level optimizations.
            </p>
          </div>
        </div>

        {/* Founder 2 */}
        <div className="relative group lg:translate-y-16">
          <div className="absolute inset-0 bg-[#FF003C] translate-x-3 translate-y-3 transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
          <div className="relative bg-black border-2 border-white p-8 h-full flex flex-col z-10">
            <div className="text-white font-mono text-sm mb-12 border-b-2 border-[#FF003C] pb-2 inline-block w-max">
              // 02
            </div>
            <h3 className="font-display text-5xl font-bold text-white mb-2 uppercase">ANIKET</h3>
            <h4 className="font-mono text-[#FF003C] text-sm tracking-widest mb-8">AI ENGINEER / AGENTIC SYSTEMS</h4>
            <p className="font-body text-[#e2e2e2] text-lg leading-relaxed mt-auto">
              Pioneer of agentic swarm logic. Translating complex neural architectures into actionable autonomous systems that redefine operational speed.
            </p>
          </div>
        </div>

        {/* Founder 3 */}
        <div className="relative group">
          <div className="absolute inset-0 bg-[#BDFF00] translate-x-3 translate-y-3 transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
          <div className="relative bg-black border-2 border-white p-8 h-full flex flex-col z-10">
            <div className="text-white font-mono text-sm mb-12 border-b-2 border-[#BDFF00] pb-2 inline-block w-max">
              // 03
            </div>
            <h3 className="font-display text-5xl font-bold text-white mb-2 uppercase">VASHU</h3>
            <h4 className="font-mono text-[#BDFF00] text-sm tracking-widest mb-8">GROWTH / AUTOMATION ENG</h4>
            <p className="font-body text-[#e2e2e2] text-lg leading-relaxed mt-auto">
              Scaling systems beyond human limitations. Integrates automation loops with growth metrics to ensure MAV's dominance in high-frequency environments.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
