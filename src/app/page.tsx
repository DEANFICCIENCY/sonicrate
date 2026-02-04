import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Volume2, Box, Zap, Fingerprint, Lock, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredSounds = [
    {
      id: "static-bloom",
      title: "STATIC BLOOM",
      description: "Fuzz-drenched riffs, overdriven basslines, and gritty drum breaks. Built for post-punk, grunge, and shoegaze tracks that need controlled chaos and analog distortion.",
      imageUrl: "https://picsum.photos/seed/bloom/400/400",
    },
    {
      id: "nocturne-archive",
      title: "NOCTURNE ARCHIVE",
      description: "Late-night, reverb-soaked guitar loops, washed-out synth pads, and hazy drum textures. Perfect for dream pop and lo-fi productions that live in the 2 AM headspace.",
      imageUrl: "https://picsum.photos/seed/nocturne/400/400",
    },
    {
      id: "velvet-drift",
      title: "VELVET DRIFT",
      description: "Slow-burning ambient guitars, drifting synth layers, and soft percussion. Designed for slowcore, indie, and cinematic atmospheres that breathe and evolve.",
      imageUrl: "https://picsum.photos/seed/velvet/400/400",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-foreground selection:text-primary">
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

        {/* Featured Sounds Section */}
        <section className="bg-black py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left Title */}
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <h2 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85]">
                  FEATURED <br /> SOUNDS
                </h2>
              </div>

              {/* Right Cards */}
              <div className="lg:col-span-8 space-y-32">
                {featuredSounds.map((pack, idx) => (
                  <div key={pack.id} className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500"></div>
                      <div className="relative w-64 h-64 border-4 border-primary/20 group-hover:border-primary transition-colors">
                        <Image 
                          src={pack.imageUrl} 
                          alt={pack.title} 
                          fill 
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4 text-center md:text-left">
                      <h3 className="text-3xl font-black italic text-primary uppercase tracking-tighter">{pack.title}</h3>
                      <p className="text-white/60 text-xs font-bold leading-relaxed max-w-md">
                        {pack.description}
                      </p>
                      
                      <div className="py-4">
                        {/* Waveform Mockup */}
                        <svg width="200" height="40" viewBox="0 0 200 40" className="text-white opacity-40">
                          <rect x="0" y="15" width="2" height="10" fill="currentColor" />
                          <rect x="5" y="10" width="2" height="20" fill="currentColor" />
                          <rect x="10" y="5" width="2" height="30" fill="currentColor" />
                          <rect x="15" y="12" width="2" height="16" fill="currentColor" />
                          <rect x="20" y="18" width="2" height="4" fill="currentColor" />
                          <rect x="25" y="8" width="2" height="24" fill="currentColor" />
                          <rect x="30" y="2" width="2" height="36" fill="currentColor" />
                          <rect x="35" y="10" width="2" height="20" fill="currentColor" />
                          <rect x="40" y="15" width="2" height="10" fill="currentColor" />
                          <rect x="45" y="12" width="2" height="16" fill="currentColor" />
                          <rect x="50" y="10" width="2" height="20" fill="currentColor" />
                          <rect x="55" y="5" width="2" height="30" fill="currentColor" />
                          <rect x="60" y="15" width="2" height="10" fill="currentColor" />
                          <rect x="65" y="18" width="2" height="4" fill="currentColor" />
                          <rect x="70" y="8" width="2" height="24" fill="currentColor" />
                          <rect x="75" y="2" width="2" height="36" fill="currentColor" />
                          <rect x="80" y="10" width="2" height="20" fill="currentColor" />
                          <rect x="85" y="15" width="2" height="10" fill="currentColor" />
                          <rect x="90" y="5" width="2" height="30" fill="currentColor" />
                          <rect x="95" y="12" width="2" height="16" fill="currentColor" />
                          <rect x="100" y="18" width="2" height="4" fill="currentColor" />
                          <rect x="105" y="8" width="2" height="24" fill="currentColor" />
                          <rect x="110" y="2" width="2" height="36" fill="currentColor" />
                          <rect x="115" y="10" width="2" height="20" fill="currentColor" />
                          <rect x="120" y="15" width="2" height="10" fill="currentColor" />
                          <rect x="125" y="12" width="2" height="16" fill="currentColor" />
                          <rect x="130" y="10" width="2" height="20" fill="currentColor" />
                          <rect x="135" y="5" width="2" height="30" fill="currentColor" />
                          <rect x="140" y="15" width="2" height="10" fill="currentColor" />
                          <rect x="145" y="18" width="2" height="4" fill="currentColor" />
                          <rect x="150" y="8" width="2" height="24" fill="currentColor" />
                          <rect x="155" y="2" width="2" height="36" fill="currentColor" />
                          <rect x="160" y="10" width="2" height="20" fill="currentColor" />
                          <rect x="165" y="15" width="2" height="10" fill="currentColor" />
                          <rect x="170" y="5" width="2" height="30" fill="currentColor" />
                          <rect x="175" y="12" width="2" height="16" fill="currentColor" />
                          <rect x="180" y="18" width="2" height="4" fill="currentColor" />
                          <rect x="185" y="8" width="2" height="24" fill="currentColor" />
                          <rect x="190" y="2" width="2" height="36" fill="currentColor" />
                        </svg>
                      </div>

                      <Button className="bg-primary text-black font-black italic text-lg uppercase tracking-tighter px-8 hover:bg-primary/80">
                        ADD +
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
