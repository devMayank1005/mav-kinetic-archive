"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Engine from "@/components/Engine";
import Terminal from "@/components/Terminal";
import Contact from "@/components/Contact";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <main className="w-full">
        <Navigation />
        <Hero />
        <Capabilities />
        <Engine />
        <Terminal />
        <Contact />
      </main>
    </>
  );
}

