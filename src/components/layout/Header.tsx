"use client"

import Link from "next/link";
import { Grid, ShoppingBag } from "lucide-react";

export function Header() {
  return (
    <header className="w-full bg-primary border-b border-black sticky top-0 z-50">
      <div className="container mx-auto px-4 flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Grid size={24} className="text-black" />
        </div>

        <nav className="flex items-center space-x-2 md:space-x-4 text-[10px] font-black uppercase tracking-[0.2em] text-black">
          <Link href="/" className="hover:opacity-60 transition-opacity">HOME</Link>
          <span className="opacity-20">·</span>
          <Link href="/packs" className="hover:opacity-60 transition-opacity">PACKS</Link>
          <span className="opacity-20">·</span>
          <Link href="/free" className="hover:opacity-60 transition-opacity">FREE</Link>
          <span className="opacity-20">·</span>
          <Link href="/about" className="hover:opacity-60 transition-opacity">ABOUT</Link>
          <span className="opacity-20">·</span>
          <Link href="/contact" className="hover:opacity-60 transition-opacity">CONTACT</Link>
        </nav>

        <div className="flex items-center">
          <ShoppingBag size={24} className="text-black" />
        </div>
      </div>
    </header>
  );
}
