import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function WhoWeAreSection() {
  return (
    <section
      id="section2"
      className="relative bg-[url(/assets/homePageImage2-CzRizqFY.webp)] bg-cover bg-center bg-no-repeat"
    >
      <div className="md:hidden absolute inset-0 bg-[#FEF2DD]/95" />
      <Container className="relative z-10 md:bg-[#FEF2DD]/95 lg:bg-transparent">
        <div>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 p-4 md:p-8 lg:p-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/assets/homePageImage3-pYEn_p1B.webp"
                alt="Our Mission"
                width={480}
                height={480}
                className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[420px] xl:max-w-[480px] h-auto object-cover rounded-lg"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-[#343335] font-Poppins font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 md:mb-6">
                Who We Are
              </h2>
              <p className="text-[#343335] text-sm sm:text-base md:text-base lg:text-lg font-normal mb-6 md:mb-8 leading-relaxed text-justify">
                Bright Cements stands as a bold symbol of strength, precision,
                and trust across South India&apos;s evolving skyline. Backed by
                three decades of expertise and a legacy of excellence, we
                deliver more than just cement, we deliver confidence with every
                bag. From megastructures to modest homes, from urban growth
                corridors to rural infrastructure, Bright Cements is engineered
                to endure, designed to perform, and trusted by builders,
                developers, and dreamers alike. With an unyielding focus on
                quality and innovation, we&apos;re here to build a future
                that&apos;s not just strong — but truly bright.
              </p>
              <Link href="/about-us">
                <button
                  type="button"
                  className="bg-[#5D187E] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md cursor-pointer text-sm sm:text-base lg:text-lg font-semibold shadow-md hover:bg-[#774E8A] transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  About us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
