import React from "react";
import Link from "next/link";

export default function IndustriesPage() {
  return (
    <main className="w-full min-h-screen bg-[#000000] text-white pt-32 p-8 md:p-16 lg:p-24 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-[#FF003C] opacity-20 hidden lg:block"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="font-display text-6xl md:text-8xl lg:text-[140px] font-bold uppercase tracking-tighter leading-[0.85] mb-8 text-[#FF003C]">
          DOMAINS
        </h1>
        <p className="font-mono text-xl md:text-2xl text-white tracking-widest uppercase border-l-4 border-white pl-6 py-2 mb-16">
          Verticals we dominate
        </p>

        <div className="flex flex-col gap-8">
          <Link href="/industries/fintech" className="group flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-[var(--color-surface)] pb-8 hover:border-[#FF003C] transition-colors">
            <div>
              <h2 className="font-display text-5xl md:text-7xl font-bold uppercase group-hover:text-[#FF003C] transition-colors">FINTECH</h2>
              <p className="font-mono text-[#b9cacb] mt-4 tracking-widest">High-Frequency Data Routing // Secure Vaults</p>
            </div>
            <div className="font-display text-8xl font-bold text-[var(--color-surface)] mt-4 md:mt-0">01</div>
          </Link>

          <Link href="/industries/ecommerce" className="group flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-[var(--color-surface)] pb-8 hover:border-[#FF003C] transition-colors">
            <div>
              <h2 className="font-display text-5xl md:text-7xl font-bold uppercase group-hover:text-[#FF003C] transition-colors">E-COMMERCE</h2>
              <p className="font-mono text-[#b9cacb] mt-4 tracking-widest">D2C Scaling // Enterprise Marketplaces</p>
            </div>
            <div className="font-display text-8xl font-bold text-[var(--color-surface)] mt-4 md:mt-0">02</div>
          </Link>

          <Link href="/industries/healthcare" className="group flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-[var(--color-surface)] pb-8 hover:border-[#FF003C] transition-colors">
            <div>
              <h2 className="font-display text-5xl md:text-7xl font-bold uppercase group-hover:text-[#FF003C] transition-colors">HEALTHCARE</h2>
              <p className="font-mono text-[#b9cacb] mt-4 tracking-widest">HIPAA Compliance // Telemedicine Portals</p>
            </div>
            <div className="font-display text-8xl font-bold text-[var(--color-surface)] mt-4 md:mt-0">03</div>
          </Link>
        </div>
      </div>
    </main>
  );
}
