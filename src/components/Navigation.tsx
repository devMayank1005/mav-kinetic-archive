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
    <div className="fixed inset-0 pointer-events-none z-50 p-8 flex flex-col justify-between mix-blend-difference text-white">
      <div className="flex justify-between items-start font-mono text-sm tracking-widest uppercase">
        <div className="pointer-events-auto hover-underline-center cursor-pointer">
          MAV ©2024
        </div>
        <div className="flex flex-col items-end gap-2">
          <Link href="/services" className="pointer-events-auto hover-underline-center cursor-pointer">
            SERVICES
          </Link>
          <Link href="/industries" className="pointer-events-auto hover-underline-center cursor-pointer">
            INDUSTRIES
          </Link>
          <Link href="/platform" className="pointer-events-auto hover-underline-center cursor-pointer">
            PLATFORM
          </Link>
          <Link href="/#team" className="pointer-events-auto hover-underline-center cursor-pointer">
            TEAM
          </Link>
          <Link href="/contact" className="pointer-events-auto hover-underline-center cursor-pointer">
            CONTACT
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-end font-mono text-sm tracking-widest uppercase">
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
