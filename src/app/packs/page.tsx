'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Box, Zap, Fingerprint, Lock, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useFirestore, useDoc, useCollection, useMemoFirebase } from '@/firebase';
import { doc, collection } from 'firebase/firestore';
import { useState, useEffect } from "react";

export default function PacksPage() {
  const db = useFirestore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch the main featured product
  const productRef = useMemoFirebase(() => {
    if (!db) return null;
    return doc(db, 'products', 'basement-tapes');
  }, [db]);

  const { data: product, isLoading: isProductLoading } = useDoc(productRef);

  // Fetch all products for the suggestions section
  const productsQuery = useMemoFirebase(() => {
    if (!db) return null;
    return collection(db, 'products');
  }, [db]);

  const { data: allProducts, isLoading: isCollectionLoading } = useCollection(productsQuery);

  if (!mounted || isProductLoading || isCollectionLoading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const displayProduct = product || {
    title: "BASEMENT TAPES",
    category: "EXPERIMENTAL / INDIE SUITE",
    image: "https://picsum.photos/seed/basement-main/800/800",
    price: 100,
    discountedPrice: 40,
    saveAmount: 60,
    descTitle: "THE RUNDOWN",
    description: "Months of live recording, analog processing, and basement sessions in one kit. In-sounds-distortion factor loops with lo-fi stone concrete-room drum breaks, detailed synth pads, experimental bass, and atmospheric noise. Organised by key and BPM. Recorded through real gear in real spaces with adding warmth digital can't touch. Producer-ready textures for shoegaze, post-punk, dream pop, grunge, and experimental indie.",
    tracks: [
      { name: "BLOSSOM", bpm: "100", key: "EMIN" },
      { name: "ECHO", bpm: "120", key: "CMAJ" },
      { name: "GRIT", bpm: "95", key: "GMIN" },
      { name: "HAZE", bpm: "140", key: "DMIN" },
      { name: "DRIFT", bpm: "110", key: "AMAJ" },
      { name: "NOISE", bpm: "130", key: "FMIN" }
    ],
    technicalInfo: {
      totalSounds: 417,
      melodyLoops: 20,
      drumLoops: 18,
      projectMixTemplates: 3,
      drumSounds: 250,
      percLoops: 85,
      drumFills: 30,
      drumMidi: 30
    }
  };

  // Filter out the main product from suggestions
  const suggestions = allProducts?.filter(p => p.id !== 'basement-tapes') || [];

  return (
    <div className="min-h-screen flex flex-col font-body bg-black text-white selection:bg-primary selection:text-black">
      <Header />
      
      <main className="flex-grow">
        {/* Product Detail Section */}
        <section className="flex flex-col lg:flex-row min-h-[900px]">
          {/* Left Side: Artwork (Black) */}
          <div className="w-full lg:w-1/2 bg-black flex items-center justify-center p-8 md:p-20 border-b lg:border-b-0 lg:border-r border-primary/10">
            <div className="relative aspect-square w-full max-w-xl">
              <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-50" />
              <div className="relative border-[16px] border-white/5 p-4 bg-black shadow-2xl overflow-hidden group">
                <Image 
                  src={displayProduct.image} 
                  alt={displayProduct.title} 
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  data-ai-hint="cd jewel case"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Info (Acid Yellow) */}
          <div className="w-full lg:w-1/2 bg-primary text-black p-8 md:p-20 flex flex-col justify-center">
            <div className="max-w-xl mx-auto lg:mx-0 space-y-12">
              <div className="space-y-4">
                <p className="text-xs font-black italic tracking-widest opacity-60 uppercase">SONICRATE</p>
                <h1 className="text-7xl md:text-[100px] font-black italic tracking-tighter uppercase leading-[0.8] text-blue-600">
                  "{displayProduct.title}"
                </h1>
                <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter opacity-80">
                  {displayProduct.category}
                </p>
              </div>

              <div className="flex items-center gap-8">
                <span className="text-4xl font-bold line-through opacity-20">${displayProduct.price}</span>
                <span className="text-8xl font-black text-blue-600 tracking-tighter">${displayProduct.discountedPrice}</span>
                <div className="bg-white px-6 py-3 text-sm font-black uppercase tracking-widest border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  SAVE ${displayProduct.saveAmount}
                </div>
              </div>

              <Button className="w-full bg-black text-primary border-4 border-primary hover:bg-black/90 rounded-none h-24 text-4xl font-black italic uppercase tracking-tighter transition-all px-16 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)]">
                ADD TO CART
              </Button>

              {/* Waveforms Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-10 border-t-4 border-black/10">
                {(displayProduct.tracks || []).map((track: any, i: number) => (
                  <div key={i} className="space-y-3">
                    <div className="h-14 flex gap-[3px] items-center">
                      {Array.from({ length: 20 }).map((_, j) => (
                        <div 
                          key={j} 
                          className="w-[3px] bg-black/40" 
                          style={{ height: `${20 + Math.random() * 80}%` }} 
                        />
                      ))}
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-tighter opacity-50">
                      '{track.name}' - {track.bpm} BPM - {track.key}
                    </p>
                  </div>
                ))}
              </div>

              {/* The Rundown */}
              <div className="space-y-8">
                <h3 className="text-4xl font-black italic tracking-tighter uppercase">{displayProduct.descTitle || "THE RUNDOWN"}</h3>
                <p className="text-xs font-bold leading-relaxed opacity-80 uppercase tracking-tight max-w-lg">
                  {displayProduct.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1 text-[11px] font-black uppercase tracking-tight">
                  <div className="flex justify-between border-b-2 border-black/5 py-2"><span>TOTAL SOUNDS:</span> <span>{displayProduct.technicalInfo?.totalSounds}</span></div>
                  <div className="flex justify-between border-b-2 border-black/5 py-2"><span>MELODY LOOPS:</span> <span>{displayProduct.technicalInfo?.melodyLoops}+</span></div>
                  <div className="flex justify-between border-b-2 border-black/5 py-2"><span>DRUM LOOPS:</span> <span>{displayProduct.technicalInfo?.drumLoops}</span></div>
                  <div className="flex justify-between border-b-2 border-black/5 py-2"><span>PROJECT / MIX TEMPLATES:</span> <span>{displayProduct.technicalInfo?.projectMixTemplates}</span></div>
                  <div className="flex justify-between border-b-2 border-black/5 py-2"><span>DRUM SOUNDS:</span> <span>{displayProduct.technicalInfo?.drumSounds}+</span></div>
                  <div className="flex justify-between border-b-2 border-black/5 py-2"><span>PERC LOOPS:</span> <span>{displayProduct.technicalInfo?.percLoops}+</span></div>
                  <div className="flex justify-between border-b-2 border-black/5 py-2"><span>DRUM FILLS:</span> <span>{displayProduct.technicalInfo?.drumFills}+</span></div>
                  <div className="flex justify-between border-b-2 border-black/5 py-2"><span>DRUM MIDI:</span> <span>{displayProduct.technicalInfo?.drumMidi}+</span></div>
                </div>

                <p className="text-[9px] font-black text-center opacity-30 pt-10 uppercase tracking-[0.2em] leading-relaxed">
                  ALL SOUNDS AND SAMPLES IN THIS KIT ARE ROYALTY FREE UNDER 1,000,000 STREAMS OR UNLESS MAJOR PLACEMENT.<br />
                  FOR CLEARANCE OR CUSTOM PRODUCTION ENQUIRIES EMAIL: TEAM@SONICRATE.COM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Suggestion Section */}
        <section className="py-40 bg-black border-t-8 border-white/5">
          <div className="container mx-auto px-4">
            <h2 className="text-[12vw] font-black italic tracking-tighter text-center text-primary uppercase mb-32 drop-shadow-[0_0_20px_rgba(215,255,0,0.4)]">
              YOU MAY ALSO LIKE
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
              {suggestions.map((pack) => (
                <div key={pack.id} className="group relative bg-white rounded-[40px] border-[10px] border-white shadow-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-6">
                  <Link href={`/packs`} className="flex flex-col h-full">
                    <div className="p-8 relative">
                      {/* Square White Cart Icon */}
                      <div className="absolute top-10 left-10 h-12 w-12 bg-white border-4 border-black flex items-center justify-center text-black z-20 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        <ShoppingBag size={22} strokeWidth={4} />
                      </div>
                      
                      {/* Save badge (Acid Yellow Square) */}
                      <div className="absolute top-10 right-10 bg-primary px-5 py-2.5 text-xs font-black uppercase tracking-widest z-20 text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        SAVE ${pack.saveAmount || 0}
                      </div>

                      <div className="relative w-full aspect-square rounded-[30px] overflow-hidden bg-black shadow-inner">
                        <Image 
                          src={pack.image || 'https://picsum.photos/seed/placeholder/400/400'} 
                          alt={pack.title} 
                          fill 
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110" 
                          data-ai-hint="brutalist sound design"
                        />
                      </div>
                    </div>
                    
                    <div className="p-10 pt-0 text-center space-y-4 flex flex-col flex-grow">
                      <div className="space-y-1">
                        <h4 className="font-black text-4xl uppercase tracking-tighter leading-[0.85] text-black">
                          {pack.title?.split('|')[0] || pack.title}
                        </h4>
                      </div>
                      <p className="text-[12px] font-black opacity-30 uppercase tracking-[0.2em] text-black pb-8">
                        {pack.category}
                      </p>
                      
                      <div className="mt-auto flex justify-center items-center gap-8 border-t-2 border-black/5 pt-8">
                        <span className="text-7xl font-black text-blue-600 tracking-tighter">${pack.discountedPrice || 0}</span>
                        <span className="text-5xl font-bold line-through opacity-10 text-black tracking-tighter">${pack.price || 0}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
              
              {/* Fallback empty state */}
              {suggestions.length === 0 && (
                <div className="col-span-full py-32 text-center">
                  <p className="text-sm font-black uppercase tracking-[0.5em] opacity-20">VAULT EMPTY</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* What Matters Section */}
        <section className="bg-primary py-24 border-t-8 border-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto text-black text-center">
              <div className="space-y-4">
                <div className="flex justify-center"><Box size={32} /></div>
                <h4 className="font-black uppercase tracking-widest text-xs">INSTANT DELIVERY</h4>
                <p className="text-[10px] font-bold opacity-60 uppercase leading-tight">100% DIGITAL, INSTANT DELIVERY STRAIGHT TO YOUR INBOX</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-center"><Zap size={32} /></div>
                <h4 className="font-black uppercase tracking-widest text-xs">PLUG & PLAY</h4>
                <p className="text-[10px] font-bold opacity-60 uppercase leading-tight">UNIVERSAL WAV FORMAT, COMPATIBLE WITH EVERY DAW AND SAMPLER</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-center"><Fingerprint size={32} /></div>
                <h4 className="font-black uppercase tracking-widest text-xs">ALTERNATIVE DNA</h4>
                <p className="text-[10px] font-bold opacity-60 uppercase leading-tight">DESIGNED FOR AUTHENTIC ALTERNATIVE GRIT, NO COOKIE CUTTER SAMPLES</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-center"><Lock size={32} /></div>
                <h4 className="font-black uppercase tracking-widest text-xs">LOCKED DOWN & SECURE</h4>
                <p className="text-[10px] font-bold opacity-60 uppercase leading-tight">WE ACCEPT ALL MAJOR PAYMENT METHODS</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
