import React from "react";
import Link from "next/link";

export default function CloudInfrastructurePage() {
  return (
    <main className="w-full min-h-screen bg-[#000000] text-white pt-32 p-8 md:p-16 lg:p-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-[#FF003C] opacity-20 hidden lg:block"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="font-mono text-[#FF003C] text-sm md:text-base tracking-widest uppercase mb-8 border-l-2 border-[#FF003C] pl-4">
          // SERVICE MODULE: 02 _ INFRA
        </div>
        
        <h1 className="font-display text-5xl md:text-8xl lg:text-[120px] font-bold uppercase tracking-tighter leading-[0.85] mb-12 text-white">
          CLOUD <br /> <span className="text-[#FF003C]">INFRASTRUCTURE</span>
        </h1>

        <div className="border-2 border-[var(--color-surface)] bg-black p-8 md:p-12 mb-16 relative group">
          <div className="absolute inset-0 bg-[#FF003C] opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6">99.99% Uptime Engineering</h2>
          <p className="font-body text-[#b9cacb] text-lg md:text-xl leading-relaxed">
            We architect high-available, serverless backends designed for extreme scaling. Utilizing the full power of AWS, GCP, and Cloudflare, we ensure your enterprise applications remain highly resilient, globally distributed, and impervious to massive traffic spikes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="border-t-2 border-[#FF003C] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Serverless Computing</h3>
            <p className="font-body text-[#b9cacb]">Dynamic auto-scaling infrastructure that charges only for exact compute usage, eliminating idle server costs.</p>
          </div>
          <div className="border-t-2 border-[#FF003C] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Real-Time Databases</h3>
            <p className="font-body text-[#b9cacb]">Distributed low-latency databases (PostgreSQL, Redis, DynamoDB) tailored for high-frequency writes.</p>
          </div>
          <div className="border-t-2 border-[#FF003C] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Zero-Trust Security</h3>
            <p className="font-body text-[#b9cacb]">Ironclad security protocols. End-to-end encryption, strict IAM roles, and automated threat detection.</p>
          </div>
          <div className="border-t-2 border-[#FF003C] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Global Edge Networks</h3>
            <p className="font-body text-[#b9cacb]">Deploying logic directly to edge nodes, ensuring sub-50ms latency for global users regardless of their location.</p>
          </div>
        </div>

        <Link href="/contact" className="inline-block bg-[#FF003C] text-black font-display font-bold text-2xl px-12 py-6 uppercase hover:bg-white transition-colors">
          ARCHITECT YOUR BACKEND
        </Link>
      </div>
    </main>
  );
}
