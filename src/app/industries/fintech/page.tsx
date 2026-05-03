import React from "react";
import Link from "next/link";

export default function FintechIndustryPage() {
  return (
    <main className="w-full min-h-screen bg-[#000000] text-white pt-32 p-8 md:p-16 lg:p-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-[#FFB800] opacity-20 hidden lg:block"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="font-mono text-[#FFB800] text-sm md:text-base tracking-widest uppercase mb-8 border-l-2 border-[#FFB800] pl-4">
          // DOMAIN: 01 _ FINTECH
        </div>
        
        <h1 className="font-display text-5xl md:text-8xl lg:text-[120px] font-bold uppercase tracking-tighter leading-[0.85] mb-12 text-white">
          FINTECH & <br /> <span className="text-[#FFB800]">WEB3</span>
        </h1>

        <div className="border-2 border-[var(--color-surface)] bg-black p-8 md:p-12 mb-16 relative group">
          <div className="absolute inset-0 bg-[#FFB800] opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6">Zero-Latency Data Routing</h2>
          <p className="font-body text-[#b9cacb] text-lg md:text-xl leading-relaxed">
            In financial technology, milliseconds dictate market dominance. We engineer high-frequency trading platforms, decentralized ledgers, and secure payment gateways that operate with absolute precision and zero-trust security frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="border-t-2 border-[#FFB800] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">High-Frequency Architecture</h3>
            <p className="font-body text-[#b9cacb]">WebSockets and gRPC streams designed to handle millions of real-time market data ticks without dropping packets.</p>
          </div>
          <div className="border-t-2 border-[#FFB800] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Blockchain Integration</h3>
            <p className="font-body text-[#b9cacb]">Smart contract deployment, wallet integrations, and secure bridging protocols for decentralized finance (DeFi) applications.</p>
          </div>
          <div className="border-t-2 border-[#FFB800] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Bank-Grade Security</h3>
            <p className="font-body text-[#b9cacb]">SOC2 compliance ready. AES-256 encryption at rest, TLS 1.3 in transit, and immutable audit logging.</p>
          </div>
          <div className="border-t-2 border-[#FFB800] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Payment Orchestration</h3>
            <p className="font-body text-[#b9cacb]">Unified APIs abstracting Stripe, Plaid, and global banking partners into a single scalable gateway.</p>
          </div>
        </div>

        <Link href="/contact" className="inline-block bg-[#FFB800] text-black font-display font-bold text-2xl px-12 py-6 uppercase hover:bg-white transition-colors">
          SECURE YOUR VAULT
        </Link>
      </div>
    </main>
  );
}
