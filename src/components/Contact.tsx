"use client";

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="w-full min-h-screen bg-[var(--color-background)] p-8 md:p-16 lg:p-24 flex flex-col justify-center items-center border-t border-[var(--color-surface)]">
      <h2 className="font-display text-5xl md:text-8xl lg:text-[140px] font-bold uppercase mb-16 text-center tracking-tighter leading-none">
        INITIATE <br className="hidden md:block" />
        <span className="text-[var(--color-primary)] relative inline-block">
          CONTACT
          <span className="absolute bottom-4 left-0 w-full h-[0.2em] bg-[var(--color-primary)] mix-blend-multiply opacity-50 pointer-events-none"></span>
        </span>
      </h2>
      
      <form className="space-y-16 flex flex-col w-full max-w-4xl bg-white border-2 border-[var(--color-surface)] p-8 md:p-16 shadow-[16px_16px_0px_var(--color-surface)]">
        <div className="relative group">
          <input 
            type="text" 
            required
            className="w-full bg-transparent border-b-2 border-[var(--color-surface)] py-4 font-body text-2xl md:text-5xl text-[var(--color-surface)] focus:outline-none focus:border-b-8 focus:border-[var(--color-primary)] transition-all duration-300 peer placeholder-transparent"
            placeholder="NAME"
            id="name"
          />
          <label htmlFor="name" className="absolute left-0 top-4 font-display font-bold text-2xl md:text-5xl text-[var(--color-surface)] opacity-30 peer-focus:-translate-y-12 peer-focus:text-xl peer-focus:text-[var(--color-primary)] peer-focus:opacity-100 peer-valid:-translate-y-12 peer-valid:text-xl peer-valid:opacity-100 transition-all duration-300 pointer-events-none uppercase">
            NAME
          </label>
        </div>

        <div className="relative group">
          <input 
            type="text" 
            required
            className="w-full bg-transparent border-b-2 border-[var(--color-surface)] py-4 font-body text-2xl md:text-5xl text-[var(--color-surface)] focus:outline-none focus:border-b-8 focus:border-[var(--color-primary)] transition-all duration-300 peer placeholder-transparent"
            placeholder="PURPOSE"
            id="purpose"
          />
          <label htmlFor="purpose" className="absolute left-0 top-4 font-display font-bold text-2xl md:text-5xl text-[var(--color-surface)] opacity-30 peer-focus:-translate-y-12 peer-focus:text-xl peer-focus:text-[var(--color-primary)] peer-focus:opacity-100 peer-valid:-translate-y-12 peer-valid:text-xl peer-valid:opacity-100 transition-all duration-300 pointer-events-none uppercase">
            PURPOSE
          </label>
        </div>

        <div className="relative group">
          <input 
            type="text" 
            required
            className="w-full bg-transparent border-b-2 border-[var(--color-surface)] py-4 font-body text-2xl md:text-5xl text-[var(--color-surface)] focus:outline-none focus:border-b-8 focus:border-[var(--color-primary)] transition-all duration-300 peer placeholder-transparent"
            placeholder="BUDGET"
            id="budget"
          />
          <label htmlFor="budget" className="absolute left-0 top-4 font-display font-bold text-2xl md:text-5xl text-[var(--color-surface)] opacity-30 peer-focus:-translate-y-12 peer-focus:text-xl peer-focus:text-[var(--color-primary)] peer-focus:opacity-100 peer-valid:-translate-y-12 peer-valid:text-xl peer-valid:opacity-100 transition-all duration-300 pointer-events-none uppercase">
            BUDGET
          </label>
        </div>

        <button 
          type="submit"
          className="mt-12 bg-[var(--color-surface)] text-[var(--color-background)] px-12 py-8 font-mono font-bold text-2xl md:text-4xl tracking-widest uppercase hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300 self-center shadow-[12px_12px_0px_var(--color-primary)] glitch-hover w-full md:w-auto"
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
}
