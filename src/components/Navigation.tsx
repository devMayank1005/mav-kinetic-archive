"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-between">
      {/* Top Header */}
      <div className="w-full px-8 py-6 flex justify-between items-center font-mono text-sm tracking-widest uppercase text-white bg-black/90 backdrop-blur-md border-b border-white/10 pointer-events-auto">
        <Link href="/" className="hover-underline-center cursor-pointer text-xl font-display font-bold">
          MAV ©2026
        </Link>
        
        <div className="flex items-center gap-8 pointer-events-auto">
          {/* Services Dropdown */}
          <div className="relative group">
            <Link href="/services" className="hover-underline-center cursor-pointer py-4">
              SERVICES
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-black border-2 border-white p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-2 gap-4">
              <Link href="/services/agentic-ai" className="block border border-white/20 p-4 hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors">
                <div className="text-xs mb-2 opacity-50">// 01</div>
                <div>AGENTIC AI & LLMS</div>
              </Link>
              <Link href="/services/cloud-infrastructure" className="block border border-white/20 p-4 hover:border-[#FF003C] hover:text-[#FF003C] transition-colors">
                <div className="text-xs mb-2 opacity-50">// 02</div>
                <div>CLOUD INFRASTRUCTURE</div>
              </Link>
              <Link href="/services/process-automation" className="block border border-white/20 p-4 hover:border-[#BDFF00] hover:text-[#BDFF00] transition-colors">
                <div className="text-xs mb-2 opacity-50">// 03</div>
                <div>PROCESS AUTOMATION</div>
              </Link>
              <Link href="/services/enterprise-architecture" className="block border border-white/20 p-4 hover:border-white transition-colors">
                <div className="text-xs mb-2 opacity-50">// 04</div>
                <div>ENTERPRISE ARCHITECTURE</div>
              </Link>
            </div>
          </div>

          {/* Industries Dropdown */}
          <div className="relative group">
            <Link href="/industries" className="hover-underline-center cursor-pointer py-4">
              INDUSTRIES
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[500px] bg-black border-2 border-white p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col gap-4">
              <Link href="/industries/fintech" className="block border border-white/20 p-4 hover:border-[#FFB800] hover:text-[#FFB800] transition-colors">
                FINTECH & WEB3
              </Link>
              <Link href="/industries/ecommerce" className="block border border-white/20 p-4 hover:border-[#B000FF] hover:text-[#B000FF] transition-colors">
                ENTERPRISE E-COMMERCE
              </Link>
              <Link href="/industries/healthcare" className="block border border-white/20 p-4 hover:border-[#00FF85] hover:text-[#00FF85] transition-colors">
                HEALTHCARE & MEDTECH
              </Link>
            </div>
          </div>

          <Link href="/platform" className="hover-underline-center cursor-pointer py-4">
            PLATFORM
          </Link>
          <Link href="/#team" className="hover-underline-center cursor-pointer py-4">
            TEAM
          </Link>
          
          {/* Let's Connect Button */}
          <Link href="/contact" className="relative group ml-4">
            <div className="absolute inset-0 bg-[#00F0FF] translate-x-1.5 translate-y-1.5 group-hover:translate-x-2.5 group-hover:translate-y-2.5 transition-transform duration-300"></div>
            <div className="relative bg-black border border-white px-6 py-3 flex items-center gap-3 hover:text-[#00F0FF] transition-colors z-10 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>LET'S CONNECT</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom Footer Elements */}
      <div className="p-8 flex justify-between items-end font-mono text-sm tracking-widest uppercase text-white mix-blend-difference pointer-events-none">
        <div className="pointer-events-auto hover-underline-center cursor-pointer">
          SCROLL
        </div>
        <div className="pointer-events-auto text-right">
          LOCAL TIME<br/>IND / {time}
        </div>
      </div>
    </div>
  );
}
