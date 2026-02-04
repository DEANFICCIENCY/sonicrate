'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { NewsletterForm } from "@/components/newsletter/NewsletterForm";
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';

export default function FreePage() {
  const { user } = useUser();
  const db = useFirestore();

  const subscriptionRef = useMemoFirebase(() => {
    if (!db || !user) return null;
    return doc(db, 'emails', user.uid);
  }, [db, user]);

  const { data: subscription } = useDoc(subscriptionRef);

  return (
    <div className="min-h-screen flex flex-col font-body bg-black">
      <Header />
      
      <main className="flex-grow flex flex-col lg:flex-row">
        {/* Left Section: Polaroid and Description */}
        <div className="w-full lg:w-1/2 bg-black flex flex-col items-center justify-center p-8 md:p-20 border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="relative aspect-square w-full max-w-xl mb-12">
            {/* Neon Glow Effect */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-50" />
            
            <div className="relative p-6 bg-white shadow-2xl">
              <div className="relative aspect-square bg-black overflow-hidden border-2 border-black/10">
                <Image 
                  src="https://picsum.photos/seed/free-vault/800/800" 
                  alt="Sonicrate Vault" 
                  fill 
                  className="object-cover grayscale"
                  data-ai-hint="polaroid cassette"
                />
              </div>
              <div className="pt-8 pb-4 space-y-4">
                <div className="flex justify-between items-center border-b-2 border-black pb-2">
                  <h3 className="text-2xl font-black italic tracking-tighter uppercase leading-none text-black">
                    "BASEMENT TAPES"
                  </h3>
                  <div className="h-6 w-1/3 bg-black/5" />
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase text-black/40">
                  <span>1. CURRENTS</span>
                  <span>2. SEROTONIN</span>
                  <span>3. SONICATE</span>
                </div>
                <div className="pt-4 flex justify-between items-end">
                  <p className="text-[10px] font-black italic uppercase text-black">PRODUCED BY O'NEIL</p>
                  <div className="h-8 w-24 bg-black/10 flex items-center justify-center">
                    <div className="w-full h-[2px] bg-black/20 mx-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-md text-center">
            <p className="text-xs md:text-sm font-medium text-white/60 leading-relaxed uppercase tracking-wider font-mono">
              Subscribe and get hand-picked loops from the vault every week, 
              alternative textures, experimental sounds, production-ready stems. 
              No spam, no gimmicks. Just sounds. 
              Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Right Section: Subscription Form */}
        <div className="w-full lg:w-1/2 bg-primary flex flex-col items-center justify-center p-8 md:p-20">
          <div className="max-w-2xl w-full space-y-24">
            {subscription?.subscribed ? (
              <div className="space-y-4">
                <h1 className="text-6xl md:text-[100px] font-black italic tracking-tighter leading-[0.85] text-black uppercase">
                  YOU'RE IN.<br />
                  WELCOME TO THE<br />
                  VAULT.
                </h1>
                <p className="text-2xl md:text-3xl font-black italic tracking-tight text-blue-600 uppercase">
                  CHECK YOUR INBOX FOR THE FIRST DROP.
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-[100px] font-black italic tracking-tighter leading-[0.85] text-black uppercase">
                    3 SOUNDS.<br />
                    EVERY WEEK.<br />
                    ZERO COST.
                  </h1>
                  
                  <p className="text-2xl md:text-3xl font-black italic tracking-tight text-blue-600 uppercase">
                    JOIN THE SONIC UNDERGROUND.
                  </p>
                </div>

                <div className="w-full">
                  <NewsletterForm variant="contact" className="border-black text-black" />
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
