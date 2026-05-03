"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [typedText, setTypedText] = useState("");
  const fullText = "MAV_INIT";
  const [phase, setPhase] = useState<"typing" | "flash" | "done">("typing");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setPhase("flash"), 600);
        setTimeout(() => {
          setPhase("done");
          onComplete();
        }, 800);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={clsx(
        "fixed inset-0 z-[100] flex items-center justify-center font-mono text-4xl md:text-6xl tracking-widest font-bold transition-all duration-200",
        phase === "typing" 
          ? "bg-[var(--color-surface)] text-[var(--color-background)]" 
          : phase === "flash"
            ? "bg-white text-transparent scale-105"
            : "bg-white opacity-0 pointer-events-none scale-110"
      )}
    >
      <div className={clsx("flex", phase !== "typing" && "hidden")}>
        {typedText}
        <span className="animate-pulse w-4 h-10 md:h-16 bg-[var(--color-background)] inline-block ml-2 align-middle"></span>
      </div>
    </div>
  );
}
