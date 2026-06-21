import Image from "next/image";

export function FoundersSection() {
  return (
    <div className="relative bg-[#FEF8ED] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1920 1374"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M661.357 798.96C11.1504 1017.58 -80 1342.2 -80 1374H124.927C163.89 1073.5 643.802 931.9 888.22 862.559C1414.87 700.382 1835.51 428.707 1980 347V0C1855.54 319 1092.8 694.287 661.357 798.96Z"
            fill="#F6EBD7"
            fillOpacity="0.66"
          />
        </svg>
      </div>

      <section id="about-the-founder">
        <div className="relative z-10 px-4 md:px-8 lg:px-16 xl:px-24 py-12 md:py-16 lg:py-20 max-w-7xl mx-auto">
          <h2 className="text-[#363437] text-2xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 lg:mb-20">
            About the Founders
          </h2>

          <div className="space-y-8 md:space-y-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
                <div className="flex-1">
                  <h3 className="text-[#181718] text-xl md:text-2xl font-bold mb-4">
                    Mr. Jayram N,
                  </h3>
                  <p className="text-[#181718] text-sm md:text-base leading-relaxed mb-4 text-justify">
                    CEO of Ultra Bright Cements Ltd., is a seasoned business
                    leader with over three decades of experience in Cement,
                    Automotive, and Real Estate sectors. He began his journey in
                    1985 as a cement dealer and grew into a leading distributor
                    and manufacturer with multiple plants across Karnataka.
                  </p>
                  <p className="text-[#181718] text-sm md:text-base leading-relaxed text-justify">
                    His leadership was recognized during his tenure as President
                    of the Small-Scale Cement Manufacturers Association. He also
                    runs successful two-wheeler and four-wheeler dealerships and
                    has delivered landmark residential projects in Bengaluru.
                    Driven by vision and excellence, he continues to lead with a
                    focus on growth, innovation, and lasting impact.
                  </p>
                </div>
                <div className="flex-shrink-0 lg:w-64">
                  <div className="relative inline-block">
                    <Image
                      src="/assets/founder-CrkyJ8cg.webp"
                      alt="Founder"
                      width={256}
                      height={320}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-[#181718] text-base font-bold mt-4 text-center">
                    Mr. Jayram N,
                  </p>
                  <p className="text-[#181718] text-sm italic text-center">
                    CEO of Ultra Bright Cements Ltd
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">
              <h3 className="text-[#181718] text-xl md:text-2xl font-bold mb-4">
                Mr. NJ Deekshith,
              </h3>
              <p className="text-[#181718] text-sm md:text-base leading-relaxed mb-4 text-justify">
                Managing Director of Ultra Bright Cements Ltd., is a dynamic
                second-generation entrepreneur with a BBA in Marketing from
                Singapore.
              </p>
              <p className="text-[#181718] text-sm md:text-base leading-relaxed mb-4 text-justify">
                He brings global vision and deep-rooted expertise in Cement,
                Automotive, and Real Estate sectors. Under his leadership, the
                company is scaling operations, adopting advanced technologies,
                and ensuring superior product quality.
              </p>
              <p className="text-[#181718] text-sm md:text-base leading-relaxed text-justify">
                He is also driving innovation in sustainable construction and
                smart urban development through strategic real estate ventures.
                Committed to excellence, he envisions positioning Ultra Bright
                Cements as a leading force in India&apos;s infrastructure
                growth.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">
              <h3 className="text-[#181718] text-xl md:text-2xl font-bold mb-4">
                Mr. R.N. Nagaraja,
              </h3>
              <p className="text-[#181718] text-sm md:text-base leading-relaxed text-justify">
                Director at Ultra Bright Cements Ltd., brings over 42 years of
                cross-functional leadership experience. An MBA graduate, he has
                held pivotal roles in Accounts, HR, Administration, Legal
                Affairs, and Liaising across reputed organizations. His expertise
                in banking, finance, and regulatory compliance makes him a
                strategic asset to the company. Known for navigating complex
                operations, he ensures efficiency, governance, and team
                alignment across departments. Mr. Nagaraja&apos;s advisory
                acumen continues to shape the company&apos;s growth and
                operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
