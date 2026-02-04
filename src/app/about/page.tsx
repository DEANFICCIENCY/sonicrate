
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { ArrowRight, Zap, Target, History } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      
      <main className="flex-grow">
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Est. 2024</span>
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] italic">DECODING <br /><span className="text-primary">THE STATIC</span></h1>
                <p className="text-xl md:text-2xl font-bold leading-relaxed max-w-2xl">
                  Sonicrate was born from a dissatisfaction with generic, over-processed sound libraries. We provide raw, uncompromising audio tools for producers who live in the fringes of electronic music.
                </p>
              </div>
              <div className="lg:col-span-5 relative aspect-square bg-foreground p-2 asymmetric-border rotate-[1deg]">
                <Image 
                  src="https://picsum.photos/seed/about-main/800/800" 
                  alt="Studio" 
                  fill 
                  className="object-cover grayscale"
                  data-ai-hint="music studio"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="space-y-6">
                <div className="h-16 w-16 bg-primary flex items-center justify-center text-foreground">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-black uppercase italic">OUR MISSION</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  To democratize high-end underground sound design. We focus on the textures that larger labels ignore: the noise, the grit, and the beautiful failures of analog circuitry.
                </p>
              </div>

              <div className="space-y-6">
                <div className="h-16 w-16 bg-primary flex items-center justify-center text-foreground">
                  <Zap size={32} />
                </div>
                <h3 className="text-3xl font-black uppercase italic">OUR PROCESS</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  We spend hundreds of hours in the studio with modular synths, vintage hardware, and field recorders to capture sounds that can't be replicated by software alone.
                </p>
              </div>

              <div className="space-y-6">
                <div className="h-16 w-16 bg-primary flex items-center justify-center text-foreground">
                  <History size={32} />
                </div>
                <h3 className="text-3xl font-black uppercase italic">OUR STORY</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  Founded by a collective of Berlin-based sound designers and techno producers, Sonicrate is more than a store—it's a resource for sonic exploration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center space-y-12">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic">JOIN THE <br />UNDERGROUND</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-primary text-foreground px-12 py-5 font-black uppercase tracking-widest text-xl italic hover:bg-primary/90 transition-colors">
                VIEW CATALOG
              </button>
              <button className="border-2 border-foreground px-12 py-5 font-black uppercase tracking-widest text-xl italic hover:bg-foreground hover:text-background transition-colors">
                CONTACT US
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
