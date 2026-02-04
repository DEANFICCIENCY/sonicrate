"use client"

import Link from "next/link";
import { ShoppingBag, Grid } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full bg-primary border-b border-black">
      <div className="container mx-auto px-4 flex h-14 items-center justify-between">
        <Button variant="ghost" size="icon" className="text-black hover:bg-black/10">
          <Grid className="h-6 w-6" />
        </Button>

        <nav className="flex items-center space-x-6 text-[10px] font-black uppercase tracking-[0.3em] text-black">
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

        <Button variant="ghost" size="icon" className="text-black hover:bg-black/10 relative">
          <ShoppingBag className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}
