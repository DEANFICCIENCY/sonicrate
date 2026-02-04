'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user has already made a choice to avoid hydration mismatch
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Redirect to privacy page as requested
    router.push('/privacy');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-3xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="bg-primary border-[6px] border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        {/* Decorative Skewed Background Element */}
        <div className="absolute top-0 right-0 w-32 h-full bg-black/5 -skew-x-12 translate-x-16 pointer-events-none" />
        
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 text-center lg:text-left flex-grow">
            <h4 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none text-black">
              WE USE COOKIES
            </h4>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-black leading-tight max-w-xl">
              TO ENSURE YOU GET THE BEST EXPERIENCE ON OUR SITE. WE USE THEM FOR ANALYTICS AND ESSENTIAL FUNCTIONS. 
              READ OUR FULL <Link href="/privacy" className="underline decoration-4 underline-offset-4 hover:text-blue-600 transition-colors">PRIVACY POLICY</Link> FOR DETAILS.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <button
              onClick={handleAccept}
              className="bg-black text-primary px-12 py-4 text-2xl font-black italic uppercase tracking-tighter hover:bg-blue-600 hover:text-white transition-all border-none transform active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
            >
              ACCEPT
            </button>
            <button
              onClick={handleDecline}
              className="border-4 border-black text-black px-12 py-3 text-2xl font-black italic uppercase tracking-tighter hover:bg-white transition-all transform active:scale-95"
            >
              NO THANKS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
