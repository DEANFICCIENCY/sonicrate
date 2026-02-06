import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Box, Zap, Fingerprint, Lock, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PacksPage() {
  const suggestedPacks = [
    { id: "s1", title: "O'NEIL | 'BASEMENT TAPES'", category: "EXPERIMENTAL / INDIE SUITE", price: 40, oldPrice: 100, imageUrl: "https://picsum.photos/seed/s1/400/400", save: 60 },
    { id: "s2", title: "O'NEIL | 'BASEMENT TAPES'", category: "EXPERIMENTAL / INDIE SUITE", price: 40, oldPrice: 100, imageUrl: "https://picsum.photos/seed/s2/400/400", save: 60 },
    { id: "s3", title: "O'NEIL | 'BASEMENT TAPES'", category: "EXPERIMENTAL / INDIE SUITE", price: 40, oldPrice: 100, imageUrl: "https://picsum.photos/seed/s3/400/400", save: 60 },
  ];

  return (
    <div className="min-h-screen flex flex-col font-body bg-black text-white">
      <Header />
      
      <main className="flex-grow">
        {/* Product Detail Section */}
        <section className="flex flex-col lg:flex-row min-h-[800px]">
          {/* Left Side: Artwork */}
          <div className="w-full lg:w-1/2 bg-black flex items-center justify-center p-8 md:p-20 border-b lg:border-b-0 lg:border-r border-primary/20">
            <div className="relative aspect-square w-full max-w-xl group">
              <div className="absolute inset-0 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative border-4 border-white/10 p-2 bg-black/40 backdrop-blur-sm shadow-2xl overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/basement-main/800/800" 
                  alt="Basement Tapes CD" 
                  width={800}
                  height={800}
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  data-ai-hint="cd jewel case"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Info (Acid Yellow) */}
          <div className="w-full lg:w-1/2 bg-primary text-black p-8 md:p-16 flex flex-col justify-center">
            <div className="max-w-xl mx-auto lg:mx-0 space-y-8">
              <div className="space-y-2">
                <p className="text-xs font-black italic tracking-widest text-center lg:text-left">SONICRATE</p>
                <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none text-blue-600 text-center lg:text-left">
                  "BASEMENT TAPES"
                </h1>
                <p className="text-xl md:text-2xl font-black uppercase tracking-tight text-center lg:text-left">
                  EXPERIMENTAL / INDIE SUITE
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className="text-3xl font-bold line-through opacity-50">$100</span>
                <span className="text-6xl font-black text-blue-600">$40</span>
                <div className="bg-white px-3 py-1 text-xs font-black uppercase tracking-widest border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  SAVE $60
                </div>
              </div>

              <Button className="w-full bg-black text-primary hover:bg-black/90 rounded-none h-20 text-3xl font-black italic uppercase tracking-tighter transition-all px-16 border border-primary">
                ADD TO CART
              </Button>

              {/* Waveforms Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-10 flex gap-[2px] items-center">
                      {Array.from({ length: 15 }).map((_, j) => (
                        <div 
                          key={j} 
                          className="w-[2px] bg-black/60" 
                          style={{ height: `${20 + Math.random() * 80}%` }} 
                        />
                      ))}
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-tighter opacity-70">
                      'BLAH' - 100 BPM - EMIN
                    </p>
                  </div>
                ))}
              </div>

              {/* The Rundown */}
              <div className="space-y-6 pt-8 border-t border-black/10">
                <h3 className="text-3xl font-black italic tracking-tighter uppercase">THE RUNDOWN</h3>
                <p className="text-xs font-bold leading-relaxed opacity-80 uppercase">
                  Months of live recording, analog processing, and basement sessions in one kit. 
                  In-sounds-distortion factor loops with lo-fi stone concrete-room drum breaks, detailed synth pads, 
                  experimental bass, and atmospheric noise. Organised by key and BPM. 
                  Recorded through real gear in real spaces with adding warmth digital can't touch. 
                  Producer-ready textures for shoegaze, post-punk, dream pop, grunge, and experimental indie.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1 text-[11px] font-black uppercase">
                  <div className="flex justify-between border-b border-black/10 py-1"><span>TOTAL SOUNDS:</span> <span>417</span></div>
                  <div className="flex justify-between border-b border-black/10 py-1"><span>MELODY LOOPS:</span> <span>20+</span></div>
                  <div className="flex justify-between border-b border-black/10 py-1"><span>DRUM LOOPS:</span> <span>18</span></div>
                  <div className="flex justify-between border-b border-black/10 py-1"><span>PROJECT / MIX TEMPLATES:</span> <span>3</span></div>
                  <div className="flex justify-between border-b border-black/10 py-1"><span>DRUM SOUNDS:</span> <span>250+</span></div>
                  <div className="flex justify-between border-b border-black/10 py-1"><span>PERC LOOPS:</span> <span>85+</span></div>
                  <div className="flex justify-between border-b border-black/10 py-1"><span>DRUM FILLS:</span> <span>30+</span></div>
                  <div className="flex justify-between border-b border-black/10 py-1"><span>DRUM MIDI:</span> <span>30+</span></div>
                </div>

                <p className="text-[8px] font-black text-center opacity-60 pt-4 uppercase tracking-widest">
                  ALL SOUNDS AND SAMPLES IN THIS KIT ARE ROYALTY FREE UNDER 1,000,000 STREAMS OR UNLESS MAJOR PLACEMENT.<br />
                  ANY QUESTIONS EMAIL: TEAM@SONICRATE.COM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Suggestion Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter text-center text-primary uppercase mb-20">
              YOU MAY ALSO LIKE
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {suggestedPacks.map((pack) => (
                <div key={pack.id} className="group relative bg-white rounded-[32px] border-[6px] border-white shadow-md overflow-hidden flex flex-col transition-transform hover:-translate-y-2 duration-300">
                  <Link href={`/packs`} className="flex flex-col h-full">
                    {/* Image Container with Padding */}
                    <div className="p-4 relative">
                      {/* Square White Cart Icon */}
                      <div className="absolute top-6 left-6 h-8 w-8 bg-white border border-black flex items-center justify-center text-black z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <ShoppingBag size={14} strokeWidth={3} />
                      </div>
                      
                      {/* Save badge - Square Brutalist Styling */}
                      <div className="absolute top-6 right-6 bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-widest z-10 text-black border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        SAVE ${pack.save}
                      </div>

                      <div className="relative w-full aspect-square rounded-[24px] overflow-hidden shadow-sm bg-black">
                        <Image 
                          src={pack.imageUrl} 
                          alt={pack.title} 
                          fill 
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                          data-ai-hint="abstract brutalist"
                        />
                      </div>
                    </div>
                    
                    {/* Text Content */}
                    <div className="p-6 pt-2 text-center space-y-3 flex flex-col flex-grow">
                      <div className="space-y-1">
                        <h4 className="font-black text-2xl uppercase tracking-tighter leading-none text-black">
                          {pack.title.split('|')[0]}
                        </h4>
                        <h4 className="font-black text-2xl uppercase tracking-tighter leading-none text-black">
                          {pack.title.split('|')[1]}
                        </h4>
                      </div>
                      <p className="text-[10px] font-bold opacity-30 uppercase tracking-[0.2em] text-black">
                        {pack.category}
                      </p>
                      
                      <div className="mt-auto flex justify-center items-center gap-4 pt-4 pb-2">
                        <span className="text-5xl font-black text-blue-600">${pack.price}</span>
                        <span className="text-4xl font-bold line-through opacity-10 text-black">${pack.oldPrice}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Matters Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-black text-center">
              <div className="space-y-2">
                <div className="flex justify-center"><Box size={24} /></div>
                <h4 className="font-black uppercase tracking-widest text-[10px]">INSTANT DELIVERY</h4>
                <p className="text-[8px] font-bold opacity-60 uppercase">100% DIGITAL, INSTANT DELIVERY STRAIGHT TO YOUR INBOX</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center"><Zap size={24} /></div>
                <h4 className="font-black uppercase tracking-widest text-[10px]">PLUG & PLAY</h4>
                <p className="text-[8px] font-bold opacity-60 uppercase">UNIVERSAL WAV FORMAT, COMPATIBLE WITH EVERY DAW AND SAMPLER</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center"><Fingerprint size={24} /></div>
                <h4 className="font-black uppercase tracking-widest text-[10px]">ALTERNATIVE DNA</h4>
                <p className="text-[8px] font-bold opacity-60 uppercase">DESIGNED FOR AUTHENTIC ALTERNATIVE GRIT, NO COOKIE CUTTER SAMPLES</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center"><Lock size={24} /></div>
                <h4 className="font-black uppercase tracking-widest text-[10px]">LOCKED DOWN & SECURE</h4>
                <p className="text-[8px] font-bold opacity-60 uppercase">WE ACCEPT ALL MAJOR PAYMENT METHODS</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
