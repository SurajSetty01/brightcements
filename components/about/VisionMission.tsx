import Image from "next/image";
import { MISSION_ICON, VISION_ICON } from "@/lib/constants";

export function VisionMission() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-24 py-12 md:py-16 lg:py-20 max-w-7xl mx-auto">
      <div className="mb-16 md:mb-20">
        <div className="flex items-start gap-4 md:gap-6 lg:gap-8">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
            <Image
              src={VISION_ICON}
              alt="Vision"
              width={100}
              height={100}
              className="w-25 h-25"
              unoptimized
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#363437] mb-4 md:mb-6">
              Vision Statement
            </h2>
            <p className="text-[#270935] text-base md:text-lg leading-relaxed mb-4 font-medium text-justify">
              To be the most trusted and innovative cement brand, building the
              foundations of a stronger, sustainable, and progressive India —
              one structure at a time.
            </p>
            <p className="text-[#270935] text-base md:text-lg leading-relaxed font-medium text-justify">
              This vision reflects our unwavering commitment to quality,
              integrity, and advancement in the construction industry. At Bright
              Cements, we don&apos;t just produce cement — we empower builders,
              support communities, and help shape the nation&apos;s future
              through strength, consistency, and innovation.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-start gap-4 md:gap-6 lg:gap-8">
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
            <Image
              src={MISSION_ICON}
              alt="Mission"
              width={80}
              height={80}
              className="w-20 h-20"
              unoptimized
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#363437] mb-4 md:mb-6">
              Mission Statement
            </h2>
            <p className="text-[#270935] text-base md:text-lg leading-relaxed font-medium text-justify">
              To deliver durable, high-quality cement and thoughtfully designed
              living and commercial spaces that stand the test of time - by
              combining construction expertise, technological innovation, and a
              deep understanding of India&apos;s evolving infrastructure and
              housing needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
