import Image from "next/image";

const products = [
  "/images/products/hero-product-1.png",
  "/images/products/hero-product-2.png",
  "/images/products/hero-product-3.png",
];

export default function HeroProducts() {
  return (
    <section className="bg-black pb-10">

      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">

        {products.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-zinc-700"
          >
            <Image
              src={image}
              alt={`Product ${index + 1}`}
              width={400}
              height={300}
              className="w-full object-cover transition hover:scale-105"
            />
          </div>
        ))}

      </div>

    </section>
  );
}