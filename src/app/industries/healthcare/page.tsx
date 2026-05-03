import React from "react";
import Link from "next/link";

export default function HealthcareIndustryPage() {
  return (
    <main className="w-full min-h-screen bg-[#000000] text-white pt-32 p-8 md:p-16 lg:p-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-[#00FF85] opacity-20 hidden lg:block"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="font-mono text-[#00FF85] text-sm md:text-base tracking-widest uppercase mb-8 border-l-2 border-[#00FF85] pl-4">
          // DOMAIN: 03 _ HEALTHCARE
        </div>
        
        <h1 className="font-display text-5xl md:text-8xl lg:text-[120px] font-bold uppercase tracking-tighter leading-[0.85] mb-12 text-white">
          HEALTHCARE & <br /> <span className="text-[#00FF85]">MEDTECH</span>
        </h1>

        <div className="border-2 border-[var(--color-surface)] bg-black p-8 md:p-12 mb-16 relative group">
          <div className="absolute inset-0 bg-[#00FF85] opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6">HIPAA-Compliant Ecosystems</h2>
          <p className="font-body text-[#b9cacb] text-lg md:text-xl leading-relaxed">
            In MedTech, privacy is paramount. We build secure telemedicine portals, patient data management systems, and wearable API integrations that strictly adhere to HIPAA and GDPR regulations, ensuring patient data is never compromised.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="border-t-2 border-[#00FF85] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Telemedicine Portals</h3>
            <p className="font-body text-[#b9cacb]">WebRTC-powered secure video conferencing, integrated scheduling, and automated prescription routing.</p>
          </div>
          <div className="border-t-2 border-[#00FF85] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">EHR Integrations</h3>
            <p className="font-body text-[#b9cacb]">Seamless bi-directional syncing with major Electronic Health Record systems (Epic, Cerner) using HL7/FHIR standards.</p>
          </div>
          <div className="border-t-2 border-[#00FF85] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">IoT & Wearables</h3>
            <p className="font-body text-[#b9cacb]">Aggregating real-time biometric data from consumer wearables (Apple Watch, Oura) into actionable medical dashboards.</p>
          </div>
          <div className="border-t-2 border-[#00FF85] pt-6">
            <h3 className="font-display text-2xl font-bold uppercase mb-2">Strict Compliance</h3>
            <p className="font-body text-[#b9cacb]">Anonymized databases, encrypted data lakes, and strict role-based access control (RBAC) to ensure legal compliance.</p>
          </div>
        </div>

        <Link href="/contact" className="inline-block bg-[#00FF85] text-black font-display font-bold text-2xl px-12 py-6 uppercase hover:bg-white transition-colors">
          BUILD COMPLIANT TECH
        </Link>
      </div>
    </main>
  );
}
