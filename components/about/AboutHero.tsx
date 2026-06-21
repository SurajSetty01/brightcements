import Image from "next/image";

export function AboutHero() {
  return (
    <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
      <Image
        src="/assets/aboutUsImage-DLUnp59u.jpg"
        alt="Construction cement mixing"
        fill
        className="w-full h-full object-cover"
        sizes="100vw"
        priority
      />
      <h1 className="absolute inset-0 flex top-20 justify-center text-[#5D187E] text-4xl md:text-5xl lg:text-6xl font-bold">
        About us
      </h1>
    </div>
  );
}
