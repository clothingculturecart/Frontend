import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">

        {/* Left Navigation */}
        <nav className="flex items-center gap-8 text-sm">
          <Link href="/">Home</Link>
          <Link href="/catalog">Catalog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Center Logo */}
        <Link href="/" className="text-2xl font-bold text-orange-500">
          Clothing Culture
        </Link>

        {/* Right Navigation */}
        <nav className="flex items-center gap-8 text-sm">
          <Link href="/about">About</Link>
          <Link href="/login">Login</Link>
        </nav>

      </div>
    </header>
  );
}