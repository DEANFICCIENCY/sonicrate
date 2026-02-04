
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Github, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">
              Sonicrate<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground max-w-xs font-medium">
              Underground audio tools for the modern producer. Raw textures, industrial rhythms, and sonic artifacts.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors"><Instagram /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Twitter /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Github /></Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Catalog</h4>
            <ul className="space-y-4 font-bold text-lg">
              <li><Link href="/packs" className="hover:pl-2 transition-all inline-flex items-center">Sample Packs <ArrowUpRight className="ml-2 h-4 w-4 opacity-50" /></Link></li>
              <li><Link href="/packs?category=synths" className="hover:pl-2 transition-all inline-flex items-center">Synth Presets <ArrowUpRight className="ml-2 h-4 w-4 opacity-50" /></Link></li>
              <li><Link href="/free" className="hover:pl-2 transition-all inline-flex items-center">Free Tools <ArrowUpRight className="ml-2 h-4 w-4 opacity-50" /></Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Info</h4>
            <ul className="space-y-4 font-bold text-lg">
              <li><Link href="/about" className="hover:pl-2 transition-all">About Us</Link></li>
              <li><Link href="/contact" className="hover:pl-2 transition-all">Support</Link></li>
              <li><Link href="#" className="hover:pl-2 transition-all">Licensing</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Newsletter</h4>
            <p className="text-sm font-medium">Get the weekly free pack directly in your inbox.</p>
            <div className="flex space-x-2">
              <Input 
                placeholder="YOUR@EMAIL.COM" 
                className="bg-background/10 border-background text-background placeholder:text-muted-foreground rounded-none"
              />
              <Button variant="default" className="bg-primary text-foreground hover:bg-primary/90 rounded-none font-black px-6">JOIN</Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-muted-foreground space-y-4 md:space-y-0">
          <p>© 2024 SONICRATE. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
