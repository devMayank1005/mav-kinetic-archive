"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const phases = [
  {
    title: "DISCOVERY",
    metric: "SPEED: 2.4x",
    desc: "We tear down your current assumptions and rebuild them based on brutal data and engineering reality.",
  },
  {
    title: "ARCHITECTURE",
    metric: "STRUCTURE: RIGID",
    desc: "Designing the unshakeable foundation. Zero templates, pure custom logic designed for absolute scale.",
  },
  {
    title: "AUTOMATION",
    metric: "SPRINT: 7 DAYS",
    desc: "Integrating Agentic AI and workflows that turn manual drudgery into aggressive, automated velocity.",
  },
  {
    title: "DEPLOYMENT",
    metric: "IMPACT: MASSIVE",
    desc: "Going live. No soft launches. We deploy systems that demand attention and command your market.",
  },
];

export default function Engine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".engine-panel");

      const tl = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: "+=300%",
          onUpdate: (self) => {
            gsap.set(".progress-bar", { scaleX: self.progress });
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} className="w-full h-screen bg-[var(--color-background)] overflow-hidden flex relative border-t border-[var(--color-surface)]">
      {/* Title Sidebar */}
      <div className="absolute left-0 top-0 w-16 md:w-32 h-full flex flex-col justify-center items-center border-r border-[var(--color-surface)] bg-[var(--color-surface)] text-[var(--color-background)] z-20">
        <h2 className="font-mono text-2xl md:text-5xl font-bold tracking-widest whitespace-nowrap -rotate-90">
          THE PROCESS / HOW WE WORK
        </h2>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-16 md:left-32 right-0 h-2 bg-transparent z-30 overflow-hidden">
        <div className="progress-bar w-full h-full bg-[var(--color-primary)] origin-left scale-x-0"></div>
      </div>

      {/* Horizontal Scroll Wrapper */}
      <div
        ref={scrollWrapperRef}
        className="flex h-full w-[400vw] ml-16 md:ml-32"
      >
        {phases.map((phase, idx) => (
          <div
            key={idx}
            className="engine-panel w-[100vw] h-full flex items-center justify-center border-r border-[var(--color-surface)] p-8 md:p-24 relative"
          >
            {/* Background Number */}
            <div className="absolute top-8 left-8 md:top-16 md:left-16 font-display text-[20vw] font-bold text-[var(--color-surface)] opacity-5 leading-none pointer-events-none select-none">
              0{idx + 1}
            </div>

            <div className="relative z-10 w-full max-w-4xl flex flex-col items-start">
              <div className="font-mono text-[var(--color-primary)] font-bold text-xl md:text-3xl mb-8 border-2 border-[var(--color-surface)] px-4 py-2 inline-block bg-[var(--color-surface)] text-[var(--color-background)] shadow-[4px_4px_0px_var(--color-primary)]">
                {phase.metric}
              </div>
              <h3 className="font-display text-6xl md:text-9xl font-bold uppercase tracking-tighter text-[var(--color-surface)] mb-8">
                {phase.title}
              </h3>
              <p className="font-body text-xl md:text-3xl text-[var(--color-surface)] max-w-2xl border-l-4 border-[var(--color-primary)] pl-6">
                {phase.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
