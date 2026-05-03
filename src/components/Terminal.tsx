"use client";

import React from "react";
import Image from "next/image";

export default function Terminal() {
  return (
    <section id="team" className="w-full bg-black px-8 md:px-16 py-24 min-h-screen">
      {/* Massive Title Section */}
      <div className="max-w-[1440px] mx-auto mb-32">
        <h2 className="font-display text-[80px] md:text-[120px] font-bold text-white uppercase break-words leading-[0.85] tracking-tighter">
          THE<br/>
          <span className="text-[#00F0FF]">ARCHITECTS</span>
        </h2>
        <div className="w-full h-1 bg-white mt-8"></div>
      </div>

      {/* Founders Grid */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Founder 01: Mayank */}
        <div className="group relative border-2 border-white bg-black p-6 flex flex-col transition-all duration-300 hover:shadow-[8px_8px_0px_#00F0FF] hover:-translate-y-2">
          <div className="relative w-full aspect-[4/5] overflow-hidden grayscale contrast-125 mb-8 border border-white/20">
            {/* Using a solid background placeholder until images are added */}
            <div className="absolute inset-0 bg-[#111] group-hover:bg-[#222] transition-colors duration-500"></div>
          </div>
          <div className="mt-auto">
            <span className="font-mono text-xs font-bold text-[#00F0FF] tracking-widest block mb-2 uppercase">LEAD ARCHITECT</span>
            <h3 className="font-display text-4xl md:text-5xl text-white font-bold uppercase leading-none tracking-tighter">MAYANK</h3>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 flex justify-between items-center">
            <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">01 / FOUNDER</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </div>
        </div>

        {/* Founder 02: Aniket */}
        <div className="group relative border-2 border-white bg-black p-6 flex flex-col md:translate-y-12 transition-all duration-300 hover:shadow-[8px_8px_0px_#FF003C] hover:-translate-y-2">
          <div className="relative w-full aspect-[4/5] overflow-hidden grayscale contrast-125 mb-8 border border-white/20">
            <div className="absolute inset-0 bg-[#111] group-hover:bg-[#222] transition-colors duration-500"></div>
          </div>
          <div className="mt-auto">
            <span className="font-mono text-xs font-bold text-[#FF003C] tracking-widest block mb-2 uppercase">AI ENGINEER</span>
            <h3 className="font-display text-4xl md:text-5xl text-white font-bold uppercase leading-none tracking-tighter">ANIKET</h3>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 flex justify-between items-center">
            <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">02 / FOUNDER</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF003C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
          </div>
        </div>

        {/* Founder 03: Vashu */}
        <div className="group relative border-2 border-white bg-black p-6 flex flex-col transition-all duration-300 hover:shadow-[8px_8px_0px_#BDFF00] hover:-translate-y-2">
          <div className="relative w-full aspect-[4/5] overflow-hidden grayscale contrast-125 mb-8 border border-white/20">
             <div className="absolute inset-0 bg-[#111] group-hover:bg-[#222] transition-colors duration-500"></div>
          </div>
          <div className="mt-auto">
            <span className="font-mono text-xs font-bold text-[#BDFF00] tracking-widest block mb-2 uppercase">GROWTH DIRECTOR</span>
            <h3 className="font-display text-4xl md:text-5xl text-white font-bold uppercase leading-none tracking-tighter">VASHU</h3>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 flex justify-between items-center">
            <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">03 / FOUNDER</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#BDFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
          </div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="max-w-[1440px] mx-auto mt-48 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-8">
          <p className="font-display text-2xl md:text-3xl font-bold text-white max-w-3xl leading-snug tracking-tight">
            WE DO NOT BUILD FOR COMFORT. WE DESIGN FOR DISRUPTION. THREE MINDS MERGING ARCHITECTURE, INTELLIGENCE, AND SCALE.
          </p>
        </div>
        <div className="md:col-span-4 flex justify-end">
          <div className="w-24 h-24 border-2 border-white flex items-center justify-center hover:bg-white group transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black transition-colors"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>
      </div>
    </section>
  );
}
