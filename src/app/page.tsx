import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Volume2, Box, Zap, Fingerprint, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredSounds = [
    {
      id: "static-bloom",
      title: "STATIC BLOOM",
      description: "Fuzz-drenched riffs, overdriven basslines, and gritty drum breaks. Built for post-punk, grunge, and shoegaze tracks that need controlled chaos and analog distortion.",
      imageUrl: "https://picsum.photos/seed/bloom/800/800",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-foreground selection:text-primary overflow-x-hidden">
      <Header />
      
      {/* Sale Bar */}
      <div className="bg-[#0000FF] text-white py-2 text-center text-[10px] font-black uppercase tracking-[0.3em]">
        SALE 25% OFF ALL PACKS
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary pt-24 pb-32 text-center">
          <div className="container mx-auto px-4 flex flex-col items-center space-y-12">
            <h1 className="text-[12vw] font-black italic tracking-tighter leading-none text-foreground select-none">
              SONICRATE <span className="text-[4vw] align-top not-italic">TM</span>
            </h1>
            
            <div className="max-w-3xl space-y-6">
              <p className="text-xs md:text-sm font-black uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
                SONICRATE™ IS A PRODUCER-FIRST PLATFORM BY O'NEIL, <br />
                CONNECTING THE ALTERNATIVE MUSIC COMMUNITY THROUGH EXCLUSIVE SAMPLE PACKS. <br />
                WE'RE SOUND DESIGNERS FOR THE SUBCULTURE <br />
                DELIVERING AUTHENTIC SHOEGAZE, POST-PUNK, DREAM POP, AND GRUNGE TEXTURES <br />
                WITHOUT $10K IN VINTAGE GEAR. <br />
                GET THE TEXTURE AND WARMTH YOU CAN'T RECREATE YOURSELF.
              </p>
            </div>

            <div className="py-8">
              <Volume2 size={48} strokeWidth={3} className="text-foreground" />
            </div>

            <Button asChild className="bg-black text-primary hover:bg-black/90 rounded-full h-12 px-12 text-2xl font-black italic tracking-tighter uppercase border-none group">
              <Link href="/packs">
                SHOP
              </Link>
            </Button>
          </div>
        </section>

        {/* Featured Sounds Section - Fixed Overlap */}
        <section className="bg-black py-48 relative overflow-hidden">
          <div className="container mx-auto px-4">
            {featuredSounds.map((pack) => (
              <div key={pack.id} className="relative flex flex-col lg:flex-row items-center justify-center min-h-[600px]">
                
                {/* Massive Background Text */}
                <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none z-0">
                  <h2 className="text-[18vw] font-black text-white uppercase tracking-tighter leading-[0.75] opacity-100">
                    FEATURED
                  </h2>
                  <h2 className="text-[18vw] font-black text-white uppercase tracking-tighter leading-[0.75] opacity-100">
                    SOUNDS
                  </h2>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                  
                  {/* Image with precise border */}
                  <div className="relative w-full max-w-[500px] aspect-square border-[10px] border-[#1a1a1a] flex-shrink-0">
                    <Image 
                      src={pack.imageUrl} 
                      alt={pack.title} 
                      fill 
                      className="object-cover grayscale"
                      data-ai-hint="brutalist architecture"
                    />
                  </div>
                  
                  {/* Text content */}
                  <div className="max-w-md space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-5xl lg:text-7xl font-black italic text-primary uppercase tracking-tighter">
                        {pack.title}
                      </h3>
                      <p className="text-white/60 text-sm font-bold leading-relaxed">
                        {pack.description}
                      </p>
                    </div>
                    
                    {/* Stylized Waveform */}
                    <div className="py-4">
                      <svg width="200" height="40" viewBox="0 0 200 40" className="text-white/40">
                        {Array.from({ length: 40 }).map((_, i) => (
                          <rect 
                            key={i} 
                            x={i * 5} 
                            y={20 - (Math.sin(i * 0.5) * 15 + 2)} 
                            width="2" 
                            height={Math.sin(i * 0.5) * 30 + 4} 
                            fill="currentColor" 
                          />
                        ))}
                      </svg>
                    </div>

                    <Button className="bg-primary text-black font-black italic text-2xl uppercase tracking-tighter px-12 h-16 rounded-none hover:bg-primary/80">
                      ADD +
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Matters Section */}
        <section className="bg-primary py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-8xl md:text-[10vw] font-black italic tracking-tighter uppercase leading-none mb-20 select-none">
              WHAT MATTERS?
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
              <div className="space-y-4">
                <div className="flex justify-center"><Box size={32} /></div>
                <h4 className="font-black uppercase tracking-widest text-sm">INSTANT DELIVERY</h4>
                <p className="text-[10px] font-bold opacity-60 uppercase">100% DIGITAL, INSTANT DELIVERY STRAIGHT TO YOUR INBOX</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-center"><Zap size={32} /></div>
                <h4 className="font-black uppercase tracking-widest text-sm">PLUG & PLAY</h4>
                <p className="text-[10px] font-bold opacity-60 uppercase">UNIVERSAL WAV FORMAT, COMPATIBLE WITH EVERY DAW AND SAMPLER</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-center"><Fingerprint size={32} /></div>
                <h4 className="font-black uppercase tracking-widest text-sm">ALTERNATIVE DNA</h4>
                <p className="text-[10px] font-bold opacity-60 uppercase">DESIGNED FOR AUTHENTIC ALTERNATIVE GRIT, NO COOKIE CUTTER SAMPLES</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-center"><Lock size={32} /></div>
                <h4 className="font-black uppercase tracking-widest text-sm">LOCKED DOWN & SECURE</h4>
                <p className="text-[10px] font-bold opacity-60 uppercase">WE ACCEPT ALL MAJOR PAYMENT METHODS</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
