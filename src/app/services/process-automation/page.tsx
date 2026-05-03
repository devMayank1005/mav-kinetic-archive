import React from "react";
import Link from "next/link";

export default function ProcessAutomationPage() {
  return (
    <main className="w-full min-h-screen bg-[#000000] text-white pt-32 p-8 md:p-16 lg:p-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-[#BDFF00] opacity-20 hidden lg:block"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="font-mono text-[#BDFF00] text-sm md:text-base tracking-widest uppercase mb-8 border-l-2 border-[#BDFF00] pl-4">
          // SERVICE MODULE: 03 _ AUTOMATION
        </div>
        
        <h1 className="font-display text-5xl md:text-8xl lg:text-[120px] font-bold uppercase tracking-tighter leading-[0.85] mb-12 text-white">
          PROCESS <br /> <span className="text-[#BDFF00]">AUTOMATION</span>
        </h1>

        <div className="border-2 border-[var(--color-surface)] bg-black p-8 md:p-12 mb-16 relative group">
          <div className="absolute inset-0 bg-[#BDFF00] opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6">Eliminating Human Bottlenecks</h2>
          <p className="font-body text-[#b9cacb] text-lg md:text-xl leading-relaxed">
            Scaling an enterprise requires removing manual overhead. We design bespoke automation pipelines, integrating disparate APIs into seamless orchestration flows. From high-frequency WhatsApp lead capturing bots to automated CRM syncing, we make your systems talk to each other without you lifting a finger.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="border-t-2 border-[#BDFF00] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">API Orchestration</h3>
            <p className="font-body text-[#b9cacb]">Connecting unlinked SaaS platforms (HubSpot, Stripe, Salesforce, Jira) via custom-built middleware.</p>
          </div>
          <div className="border-t-2 border-[#BDFF00] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">WhatsApp / Voice Bots</h3>
            <p className="font-body text-[#b9cacb]">Deploying automated chat and IVR voice systems that interact directly with your central database.</p>
          </div>
          <div className="border-t-2 border-[#BDFF00] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Automated Data Pipelines</h3>
            <p className="font-body text-[#b9cacb]">Extract, Transform, Load (ETL) scripts running on crons to sync millions of records overnight.</p>
          </div>
          <div className="border-t-2 border-[#BDFF00] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Workflow Auditing</h3>
            <p className="font-body text-[#b9cacb]">We analyze your existing operational bottlenecks and replace human data-entry steps with code.</p>
          </div>
        </div>

        <Link href="/contact" className="inline-block bg-[#BDFF00] text-black font-display font-bold text-2xl px-12 py-6 uppercase hover:bg-white transition-colors">
          AUTOMATE YOUR WORKFLOW
        </Link>
      </div>
    </main>
  );
}
