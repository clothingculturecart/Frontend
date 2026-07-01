import Link from "next/link";

interface HeroButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function HeroButton({
  href,
  children,
  variant = "primary",
}: HeroButtonProps) {
  return (
    <Link
      href={href}
      className={`rounded-lg px-6 py-3 font-semibold transition-all duration-300 ${
        variant === "primary"
          ? "bg-orange-500 text-white hover:bg-orange-600"
          : "border border-white text-white hover:bg-white hover:text-black"
      }`}
    >
      {children}
    </Link>
  );
}