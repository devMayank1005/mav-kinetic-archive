import React from "react";
import Link from "next/link";

export default function EcommerceIndustryPage() {
  return (
    <main className="w-full min-h-screen bg-[#000000] text-white pt-32 p-8 md:p-16 lg:p-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-[#B000FF] opacity-20 hidden lg:block"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="font-mono text-[#B000FF] text-sm md:text-base tracking-widest uppercase mb-8 border-l-2 border-[#B000FF] pl-4">
          // DOMAIN: 02 _ E-COMMERCE
        </div>
        
        <h1 className="font-display text-5xl md:text-8xl lg:text-[120px] font-bold uppercase tracking-tighter leading-[0.85] mb-12 text-white">
          ENTERPRISE <br /> <span className="text-[#B000FF]">E-COMMERCE</span>
        </h1>

        <div className="border-2 border-[var(--color-surface)] bg-black p-8 md:p-12 mb-16 relative group">
          <div className="absolute inset-0 bg-[#B000FF] opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6">Headless Digital Storefronts</h2>
          <p className="font-body text-[#b9cacb] text-lg md:text-xl leading-relaxed">
            We separate your presentation layer from your backend logic to create hyper-fast, conversion-optimized storefronts. By utilizing Next.js coupled with Shopify Plus or custom inventory databases, we build shopping experiences that load instantly and scale infinitely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="border-t-2 border-[#B000FF] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Headless Architecture</h3>
            <p className="font-body text-[#b9cacb]">Decoupled frontends (React/Next.js) talking to robust backends (Shopify, BigCommerce) via GraphQL for maximum speed.</p>
          </div>
          <div className="border-t-2 border-[#B000FF] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Inventory Syncing</h3>
            <p className="font-body text-[#b9cacb]">Automated real-time inventory bridging across multiple warehouses, 3PL providers, and physical retail POS systems.</p>
          </div>
          <div className="border-t-2 border-[#B000FF] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Conversion Optimization</h3>
            <p className="font-body text-[#b9cacb]">A/B testing infrastructure, personalized product recommendation engines driven by AI, and sub-second page loads.</p>
          </div>
          <div className="border-t-2 border-[#B000FF] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">B2B Marketplaces</h3>
            <p className="font-body text-[#b9cacb]">Complex pricing matrices, tiered corporate accounts, and automated procurement workflows built into the platform.</p>
          </div>
        </div>

        <Link href="/contact" className="inline-block bg-[#B000FF] text-white font-display font-bold text-2xl px-12 py-6 uppercase hover:bg-white hover:text-black transition-colors">
          SCALE YOUR STOREFRONT
        </Link>
      </div>
    </main>
  );
}
