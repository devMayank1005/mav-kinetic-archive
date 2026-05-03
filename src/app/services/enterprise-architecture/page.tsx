import React from "react";
import Link from "next/link";

export default function EnterpriseArchitecturePage() {
  return (
    <main className="w-full min-h-screen bg-[#000000] text-white pt-32 p-8 md:p-16 lg:p-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/3 w-[1px] h-full bg-white opacity-20 hidden lg:block"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="font-mono text-white text-sm md:text-base tracking-widest uppercase mb-8 border-l-2 border-white pl-4">
          // SERVICE MODULE: 04 _ ECOSYSTEM
        </div>
        
        <h1 className="font-display text-5xl md:text-8xl lg:text-[120px] font-bold uppercase tracking-tighter leading-[0.85] mb-12 text-white">
          ENTERPRISE <br /> <span className="text-gray-500">ARCHITECTURE</span>
        </h1>

        <div className="border-2 border-[var(--color-surface)] bg-black p-8 md:p-12 mb-16 relative group">
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6">Building Platforms, Not Sites</h2>
          <p className="font-body text-[#b9cacb] text-lg md:text-xl leading-relaxed">
            We deliver robust, full-stack ecosystems designed for extreme performance. When an off-the-shelf template fails to meet your complex business logic, we engineer a custom software architecture from the ground up using React, Next.js, Node, and advanced data modeling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="border-t-2 border-white pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Modern Frontend Apps</h3>
            <p className="font-body text-[#b9cacb]">Hyper-fast Next.js / React single-page applications optimized for Core Web Vitals and SEO.</p>
          </div>
          <div className="border-t-2 border-white pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Custom Microservices</h3>
            <p className="font-body text-[#b9cacb]">De-coupled monolithic structures into scalable, independent microservices for robust API handling.</p>
          </div>
          <div className="border-t-2 border-white pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Mobile Integration</h3>
            <p className="font-body text-[#b9cacb]">Extending your reach with purpose-built React Native mobile applications and progressive web apps.</p>
          </div>
          <div className="border-t-2 border-white pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Performance Optimization</h3>
            <p className="font-body text-[#b9cacb]">Strict performance audits reducing load times by half and managing massive concurrent traffic spikes.</p>
          </div>
        </div>

        <Link href="/contact" className="inline-block bg-white text-black font-display font-bold text-2xl px-12 py-6 uppercase hover:bg-gray-300 transition-colors">
          BUILD YOUR PLATFORM
        </Link>
      </div>
    </main>
  );
}
