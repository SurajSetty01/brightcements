import Image from "next/image";

export function MapTeaserSection() {
  return (
    <section id="section4" className="relative w-full">
      <Image
        src="/assets/phone-D6L41qIX.webp"
        alt="Our Mission (Mobile)"
        width={1200}
        height={600}
        className="w-full h-auto md:hidden"
      />
      <Image
        src="/assets/Artboard-C0nmiT73.png"
        alt="Our Mission (Desktop)"
        width={1920}
        height={800}
        className="w-full h-auto hidden md:block"
      />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[10%] sm:top-[10%] left-1/2 transform -translate-x-1/2 text-center w-[90%] max-w-3xl">
          <div className="mb-2 sm:mb-4 flex justify-center items-center">
            <Image
              src="/assets/globe-CPCcBVS6.svg"
              alt="Globe"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">
            Right here on the map
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
            your path to us starts here.
          </p>
        </div>
      </div>
    </section>
  );
}
