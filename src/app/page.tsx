import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
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
            <h1 className="text-[12vw] font-black italic tracking-tighter leading-none text-foreground select-none flex items-start justify-center">
              SONICRATE
            </h1>
            
            <div className="max-w-3xl space-y-6">
              <p className="text-xs md:text-sm font-black uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
                SONICRATE IS A PRODUCER-FIRST PLATFORM BY O'NEIL, <br />
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

        {/* Featured Sounds Section */}
        <section className="bg-black py-48 relative overflow-hidden flex items-center min-h-[800px]">
          <div className="container mx-auto px-4 relative">
            {featuredSounds.map((pack) => (
              <div key={pack.id} className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
                
                {/* Massive Background Text */}
                <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none -z-10 translate-x-[10%] lg:translate-x-[20%]">
                  <h2 className="text-[25vw] font-black text-white uppercase tracking-tighter leading-[0.7] opacity-80 whitespace-nowrap">
                    FEATURED
                  </h2>
                  <h2 className="text-[25vw] font-black text-white uppercase tracking-tighter leading-[0.7] opacity-80 whitespace-nowrap">
                    SOUNDS
                  </h2>
                </div>

                {/* Content Overlay */}
                <div className="relative z-20 w-full flex flex-col lg:flex-row items-center lg:items-end justify-center gap-12 lg:gap-24">
                  
                  {/* Image */}
                  <div className="relative w-full max-w-[500px] aspect-square border-[16px] border-[#1a1a1a] flex-shrink-0 shadow-2xl">
                    <Image 
                      src={pack.imageUrl} 
                      alt={pack.title} 
                      fill 
                      className="object-cover grayscale"
                      data-ai-hint="brutalist architecture"
                    />
                  </div>
                  
                  {/* Text content */}
                  <div className="max-w-md space-y-12">
                    <div className="space-y-6">
                      <div className="space-y-0">
                        <h3 className="text-7xl lg:text-9xl font-black italic text-primary uppercase tracking-tighter leading-[0.8]">
                          {pack.title.split(' ')[0]}
                        </h3>
                        <h3 className="text-7xl lg:text-9xl font-black italic text-primary uppercase tracking-tighter leading-[0.8] ml-4 lg:ml-8">
                          {pack.title.split(' ')[1]}
                        </h3>
                      </div>
                      
                      <p className="text-white text-sm font-bold leading-relaxed max-w-xs drop-shadow-md">
                        {pack.description}
                      </p>
                    </div>
                    
                    {/* Stylized Waveform */}
                    <div className="flex gap-1 h-12 items-center">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="w-[2px] bg-white/60" 
                          style={{ 
                            height: `${20 + Math.sin(i * 0.8) * 60}%` 
                          }} 
                        />
                      ))}
                    </div>

                    <Button className="bg-primary text-black font-black italic text-3xl uppercase tracking-tighter px-16 h-20 rounded-none hover:bg-white transition-colors">
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
