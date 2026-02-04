'use client';

import Link from "next/link";
import { Youtube, Instagram, Music2 } from "lucide-react";
import { NewsletterForm } from "@/components/newsletter/NewsletterForm";
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Newsletter Section */}
        <div className="w-full max-w-xl text-center space-y-12 mb-24">
          <NewsletterSectionWrapper />
        </div>

        {/* Social Icons */}
        <div className="flex space-x-12 mb-16">
          <Link href="#" className="text-white hover:text-primary transition-colors"><Youtube size={40} /></Link>
          <Link href="#" className="text-white hover:text-primary transition-colors"><Instagram size={40} /></Link>
          <Link href="#" className="text-white hover:text-primary transition-colors"><Music2 size={40} /></Link>
        </div>

        {/* Bottom Bar */}
        <div className="w-full max-w-4xl text-center space-y-12">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 leading-relaxed mx-auto max-w-2xl">
            SONICRATE IS A PRODUCER-FIRST PLATFORM FOUNDED BY O'NEIL, BUILT TO CONNECT THE COMMUNITY THROUGH EXCLUSIVE SAMPLE RELEASES, PREMIUM SOUND DESIGN, AND TOOLS THAT FUEL YOUR CREATIVE PROCESS.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
             <div className="flex flex-col gap-2 text-[9px] font-black uppercase tracking-widest text-primary">
              <Link href="/license" className="hover:text-white transition-colors">CREATIVE RIGHTS (license agreement)</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">YOUR PRIVACY (privacy policy)</Link>
            </div>

            <div className="flex flex-col gap-2 text-[9px] font-black uppercase tracking-widest text-primary">
              <Link href="/refund" className="hover:text-white transition-colors">DIGITAL GOODS POLICY (refund policy)</Link>
              <Link href="/about#faq" className="hover:text-white transition-colors">THE ESSENTIALS (FAQ)</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Internal wrapper to handle the heading visibility alongside the form
function NewsletterSectionWrapper() {
  return (
    <div className="space-y-12">
      <NewsletterContentWithHeader />
    </div>
  );
}

function NewsletterContentWithHeader() {
  const { user } = useUser();
  const db = useFirestore();

  const subscriptionRef = useMemoFirebase(() => {
    if (!db || !user) return null;
    return doc(db, 'emails', user.uid);
  }, [db, user]);

  const { data: subscription } = useDoc(subscriptionRef);

  if (subscription?.subscribed) {
    return null;
  }

  return (
    <>
      <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic text-primary leading-none">
        GET EXCLUSIVE DROPS <br /> & INSIDER ACCESS
      </h3>
      <NewsletterForm />
    </>
  );
}
