import React from "react";
import Link from "next/link";

export default function AgenticAIPage() {
  return (
    <main className="w-full min-h-screen bg-[#000000] text-white pt-32 p-8 md:p-16 lg:p-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-[#00F0FF] opacity-20 hidden lg:block"></div>
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-[#00F0FF] opacity-20 hidden lg:block"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="font-mono text-[#00F0FF] text-sm md:text-base tracking-widest uppercase mb-8 border-l-2 border-[#00F0FF] pl-4">
          // SERVICE MODULE: 01 _ AI CORE
        </div>
        
        <h1 className="font-display text-5xl md:text-8xl lg:text-[120px] font-bold uppercase tracking-tighter leading-[0.85] mb-12 text-white">
          AGENTIC <br /> <span className="text-[#00F0FF]">AI & LLMS</span>
        </h1>

        <div className="border-2 border-[var(--color-surface)] bg-black p-8 md:p-12 mb-16 relative group">
          <div className="absolute inset-0 bg-[#00F0FF] opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6">Autonomous Decision Engines</h2>
          <p className="font-body text-[#b9cacb] text-lg md:text-xl leading-relaxed">
            We don't build standard chatbots. We engineer intelligent autonomous agents capable of handling complex operational tasks, decision-making, and specialized reasoning using cutting-edge models like Gemini 1.5 Pro and Claude 3.5 Sonnet.
            Our agents run in "swarm logic," collaborating with one another to execute multi-step workflows faster than humanly possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="border-t-2 border-[#00F0FF] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Swarm Architecture</h3>
            <p className="font-body text-[#b9cacb]">Multi-agent systems designed to break down, delegate, and execute complex enterprise tasks automatically.</p>
          </div>
          <div className="border-t-2 border-[#00F0FF] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Retrieval-Augmented Generation (RAG)</h3>
            <p className="font-body text-[#b9cacb]">Grounding LLMs in your proprietary enterprise data to ensure zero hallucinations and extreme accuracy.</p>
          </div>
          <div className="border-t-2 border-[#00F0FF] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Voice & Multimodal</h3>
            <p className="font-body text-[#b9cacb]">Human-like auditory interactions powered by AI. Real-time voice processing for customer support.</p>
          </div>
          <div className="border-t-2 border-[#00F0FF] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Continuous Learning</h3>
            <p className="font-body text-[#b9cacb]">Feedback loops integrated directly into the agent architecture, allowing them to improve decision accuracy over time.</p>
          </div>
        </div>

        <Link href="/contact" className="inline-block bg-[#00F0FF] text-black font-display font-bold text-2xl px-12 py-6 uppercase hover:bg-white transition-colors">
          DEPLOY AN AGENT
        </Link>
      </div>
    </main>
  );
}
