import { HeroSection } from "@/components/home/HeroSection";
import { MapTeaserSection } from "@/components/home/MapTeaserSection";
import { SpacerSection } from "@/components/home/SpacerSection";
import { WhoWeAreSection } from "@/components/home/WhoWeAreSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <SpacerSection />
      <MapTeaserSection />
    </>
  );
}
