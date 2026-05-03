"use client";

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-black px-8 md:px-16 py-24 min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        {/* Hero Headline */}
        <div className="mb-16 md:mb-24 border-t-2 border-white pt-8">
          <h2 className="font-display text-[80px] md:text-[120px] font-bold text-white uppercase break-words leading-[0.85] tracking-tighter">
            INITIATE<br/>CONTACT
          </h2>
        </div>

        {/* Main Content 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="border-t-2 border-white pt-8">
              <span className="font-mono text-xs font-bold tracking-widest text-[#00F0FF] block mb-4 uppercase">EMAIL</span>
              <a href="mailto:hello@maventerprises.ai" className="font-display text-4xl md:text-5xl font-bold text-white hover:text-[#00F0FF] transition-colors duration-200 break-words tracking-tight">
                HELLO@MAV.ENGINE
              </a>
            </div>
            
            <div className="border-t-2 border-white pt-8">
              <span className="font-mono text-xs font-bold tracking-widest text-[#00F0FF] block mb-4 uppercase">WHATSAPP</span>
              <a href="tel:+91987XXXXXXX" className="font-display text-4xl md:text-5xl font-bold text-white hover:text-[#00F0FF] transition-colors duration-200 tracking-tight">
                +91 987XXXXXXX
              </a>
            </div>
            
            <div className="mt-auto hidden lg:block border-t-2 border-white pt-8">
              <div className="w-24 h-24 border-2 border-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
            </div>
          </div>

          {/* Right Column: Simple Form */}
          <div className="lg:col-span-7 flex flex-col gap-8 bg-black">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-8">
              
              <div className="group">
                <label className="font-mono text-xs font-bold tracking-widest uppercase text-white mb-2 block">Name</label>
                <input 
                  type="text" 
                  placeholder="ENTER_IDENTITY"
                  className="w-full bg-transparent border-2 border-white text-white font-display text-xl font-bold p-4 focus:outline-none focus:border-[#00F0FF] transition-colors duration-200 placeholder:text-gray-600 rounded-none"
                />
              </div>
              
              <div className="group">
                <label className="font-mono text-xs font-bold tracking-widest uppercase text-white mb-2 block">Email</label>
                <input 
                  type="email" 
                  placeholder="COMM_CHANNEL"
                  className="w-full bg-transparent border-2 border-white text-white font-display text-xl font-bold p-4 focus:outline-none focus:border-[#00F0FF] transition-colors duration-200 placeholder:text-gray-600 rounded-none"
                />
              </div>
              
              <div className="group relative">
                <label className="font-mono text-xs font-bold tracking-widest uppercase text-white mb-2 block">Service Required</label>
                <select 
                  defaultValue=""
                  className="w-full bg-black border-2 border-white text-white font-display text-xl font-bold p-4 focus:outline-none focus:border-[#00F0FF] transition-colors duration-200 appearance-none rounded-none cursor-pointer"
                >
                  <option value="" disabled>SELECT_SERVICE</option>
                  <option value="agentic-ai">Agentic AI Development</option>
                  <option value="cloud-infrastructure">Cloud Infrastructure</option>
                  <option value="process-automation">Process Automation</option>
                  <option value="enterprise-architecture">Enterprise Architecture</option>
                  <option value="other">Other / Custom</option>
                </select>
                <div className="absolute right-4 bottom-5 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
              
              <div className="group">
                <label className="font-mono text-xs font-bold tracking-widest uppercase text-white mb-2 block">Message</label>
                <textarea 
                  rows={5}
                  placeholder="TRANSMIT_INTENT"
                  className="w-full bg-transparent border-2 border-white text-white font-display text-xl font-bold p-4 focus:outline-none focus:border-[#00F0FF] transition-colors duration-200 placeholder:text-gray-600 resize-none rounded-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#00F0FF] text-black font-display font-black text-2xl md:text-3xl uppercase py-6 shadow-[8px_8px_0px_white] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_white] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all duration-150 rounded-none border-2 border-white"
              >
                SEND_MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Decorative Cinematic Element */}
        <div className="mt-32 w-full h-[2px] bg-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#00F0FF] w-1/4 animate-[pulse_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
}
