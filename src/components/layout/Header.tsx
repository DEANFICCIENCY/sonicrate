
"use client"

import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-black tracking-tighter uppercase glitch-text leading-none">
            Sonicrate<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest">
          <Link href="/packs" className="hover:text-primary transition-colors">Packs</Link>
          <Link href="/free" className="hover:text-primary transition-colors">Free</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hover:bg-primary/20">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative hover:bg-primary/20">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-[10px] flex items-center justify-center font-black rounded-none">0</span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden hover:bg-primary/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-b bg-background animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-4 space-y-4 font-black uppercase tracking-tighter text-xl">
            <Link href="/packs" onClick={() => setIsMenuOpen(false)}>Packs</Link>
            <Link href="/free" onClick={() => setIsMenuOpen(false)}>Free</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
