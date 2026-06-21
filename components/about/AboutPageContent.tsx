"use client";

import { useEffect } from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { FoundersSection } from "@/components/about/FoundersSection";
import { VisionMission } from "@/components/about/VisionMission";

export function AboutPageContent() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FEF8ED]">
      <AboutHero />
      <VisionMission />
      <FoundersSection />
    </div>
  );
}
