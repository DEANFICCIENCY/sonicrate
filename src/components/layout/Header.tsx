"use client"

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export function Header() {
  return (
    <header className="w-full bg-primary border-b border-black sticky top-0 z-50">
      <div className="container mx-auto px-4 flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logoT.png" 
            alt="Sonicrate Logo" 
            width={32} 
            height={32} 
            className="object-contain"
            priority
          />
        </Link>

        <nav className="flex items-center gap-1 md:gap-4 text-[11px] font-black uppercase tracking-[0.1em] text-black">
          <Link href="/" className="hover:opacity-60 transition-opacity">HOME</Link>
          <span className="opacity-40 select-none">•</span>
          <Link href="/packs" className="hover:opacity-60 transition-opacity">PACKS</Link>
          <span className="opacity-40 select-none">•</span>
          <Link href="/free" className="hover:opacity-60 transition-opacity">FREE</Link>
          <span className="opacity-40 select-none">•</span>
          <Link href="/about" className="hover:opacity-60 transition-opacity">ABOUT</Link>
          <span className="opacity-40 select-none">•</span>
          <Link href="/contact" className="hover:opacity-60 transition-opacity">CONTACT</Link>
        </nav>

        <div className="flex items-center">
          <ShoppingBag size={24} className="text-black cursor-pointer hover:opacity-70 transition-opacity" />
        </div>
      </div>
    </header>
  );
}
