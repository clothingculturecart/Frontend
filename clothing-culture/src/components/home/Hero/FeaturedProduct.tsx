import Image from "next/image";

export default function FeaturedProduct() {
  return (
    <section className="bg-black py-8">

      <div className="mx-auto max-w-6xl">

        <Image
          src="/images/featured/featured-shirt.png"
          alt="Featured Shirt"
          width={1200}
          height={600}
          className="w-full rounded-lg object-cover"
        />

      </div>

    </section>
  );
}