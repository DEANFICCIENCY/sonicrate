
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { SoundCard } from "@/components/ui/sound-card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, AudioLines, Repeat, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function Home() {
  const featuredPacks = [
    { id: "1", title: "Industrial Techno Vol. 1", category: "Sample Pack", price: 29, imageUrl: "https://picsum.photos/seed/pack1/400/400" },
    { id: "2", title: "Ethereal Landscapes", category: "Ambient Loops", price: 19, imageUrl: "https://picsum.photos/seed/pack2/400/400" },
    { id: "3", title: "Analog Brutalism", category: "Drum Kit", price: 24, imageUrl: "https://picsum.photos/seed/pack3/400/400" },
    { id: "4", title: "Distorted Reality", category: "Synth Presets", price: 15, imageUrl: "https://picsum.photos/seed/pack4/400/400" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <div className="animate-marquee whitespace-nowrap text-[20vw] font-black uppercase text-foreground">
              SONICRATE SONICRATE SONICRATE SONICRATE
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-20">
            <div className="max-w-4xl space-y-8">
              <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] italic text-foreground">
                RAW <br />
                <span className="bg-foreground text-primary px-4">UNDERGROUND</span> <br />
                SOUNDS
              </h1>
              <p className="text-xl md:text-2xl font-bold max-w-2xl text-foreground/80 leading-relaxed">
                Precision-engineered sonic tools for modern electronic music production. No fluff, just raw audio energy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild className="bg-foreground text-background hover:bg-foreground/90 rounded-none h-16 px-10 text-xl font-black uppercase tracking-widest italic group">
                  <Link href="/packs">
                    EXPLORE PACKS <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-foreground text-foreground hover:bg-foreground hover:text-primary rounded-none h-16 px-10 text-xl font-black uppercase tracking-widest italic">
                  <Link href="/free">
                    GET FREE PACK
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-1/3 h-2/3 hidden lg:block asymmetric-border border-l-8 border-t-8 border-foreground overflow-hidden translate-x-10 translate-y-10">
            <Image 
              src="https://picsum.photos/seed/sonicrate-hero/800/800" 
              alt="Hero Visual" 
              fill 
              className="object-cover grayscale"
              data-ai-hint="sound waves"
            />
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Curated Selections</span>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Latest Drops</h2>
              </div>
              <Link href="/packs" className="group flex items-center text-lg font-black uppercase tracking-widest hover:text-primary transition-colors">
                VIEW ALL PACKS <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredPacks.map((pack) => (
                <SoundCard key={pack.id} {...pack} />
              ))}
            </div>
          </div>
        </section>

        {/* What Matters Section */}
        <section className="py-24 bg-foreground text-background overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative aspect-square md:aspect-video lg:aspect-square bg-primary rotate-[-2deg] flex items-center justify-center p-4">
                <div className="absolute inset-0 border-4 border-background translate-x-4 translate-y-4 -z-10"></div>
                <Image 
                  src="https://picsum.photos/seed/sonicrate-about/800/800" 
                  alt="Process" 
                  fill 
                  className="object-cover grayscale mix-blend-multiply"
                  data-ai-hint="audio hardware"
                />
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-primary italic">Sonic Philosophy</span>
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic">WHAT MATTERS TO US</h2>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="bg-primary text-foreground p-3 mt-1">
                      <Zap size={32} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-black uppercase italic">High-Voltage Quality</h4>
                      <p className="text-muted-foreground leading-relaxed text-lg">Every sample is captured using high-end analog gear and processed through precision digital chains.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="bg-primary text-foreground p-3 mt-1">
                      <AudioLines size={32} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-black uppercase italic">Signature Textures</h4>
                      <p className="text-muted-foreground leading-relaxed text-lg">We don't do generic. Our sounds carry a unique, raw fingerprint designed to sit perfectly in your mix.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="bg-primary text-foreground p-3 mt-1">
                      <Repeat size={32} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-black uppercase italic">Endless Utility</h4>
                      <p className="text-muted-foreground leading-relaxed text-lg">Loops that actually loop. One-shots that punch. Presets that spark inspiration instantly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Weekly Section */}
        <section className="py-24 bg-background relative border-y border-foreground/10">
          <div className="container mx-auto px-4">
            <div className="bg-primary/5 border-2 border-primary p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center space-y-8">
              <div className="absolute top-0 right-0 p-8 opacity-20 hidden md:block">
                <Download size={120} className="rotate-[15deg] text-primary" />
              </div>
              
              <Badge className="bg-foreground text-background text-lg font-black rounded-none px-6 py-2 uppercase italic tracking-[0.2em]">
                WEEKLY FREE DROP
              </Badge>
              
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">DARK AMBIENT LAYERS</h2>
                <p className="text-xl font-bold opacity-80">A collection of 25 cinematic drones, field recordings, and ethereal pad loops. Available for free for the next 7 days.</p>
              </div>

              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-none h-16 px-12 text-xl font-black uppercase tracking-widest italic">
                DOWNLOAD NOW (0.00$)
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
