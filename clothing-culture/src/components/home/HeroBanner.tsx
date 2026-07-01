import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative h-[390px] w-full overflow-hidden">

      <Image
        src="/images/hero/hero-banner.jpg"
        alt="Hero Banner"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-6">

        <h1 className="text-3xl font-bold text-white drop-shadow-lg">
          New Products Launched!
        </h1>

        <button className="mt-3 rounded border border-white bg-black/40 px-6 py-1 text-white transition hover:bg-black/60">
          View
        </button>

      </div>

    </section>
  );
}