import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section
      id="section1"
      className="relative w-full h-[500px] flex items-stretch overflow-hidden"
    >
      <Image
        src="/assets/image1Phone-B4Ohl1I0.webp"
        alt="Factory building next to water (Mobile)"
        fill
        loading="lazy"
        className="w-full h-full object-cover absolute inset-0 z-0 md:hidden"
        sizes="100vw"
      />
      <Image
        src="/assets/homeImage1-DHqonrdY.png"
        alt="Factory building next to water (Desktop)"
        fill
        loading="lazy"
        className="w-full h-full object-cover absolute inset-0 z-0 hidden md:block"
        sizes="100vw"
      />
      <Container className="w-full flex flex-row">
        <div className="hidden sm:block flex-1" />
        <div className="flex-1 relative z-20 flex flex-col items-center justify-center h-full w-full text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#5D187E] leading-tight mb-4">
            Built to Last,
            <br />
            Trusted by the Vast.
          </h1>
          <p className="text-lg md:text-2xl font-semibold text-[#774E8A] max-w-xl">
            promise that reflects our unwavering commitment to strength,
            quality, and reliability.
          </p>
        </div>
      </Container>
    </section>
  );
}
