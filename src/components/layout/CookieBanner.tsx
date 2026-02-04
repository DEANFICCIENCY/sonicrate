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
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-4xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="bg-primary border-[6px] border-black p-6 md:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        {/* Decorative Skewed Background Element */}
        <div className="absolute top-0 right-0 w-32 h-full bg-black/5 -skew-x-12 translate-x-16 pointer-events-none" />
        
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          <div className="space-y-2 text-center lg:text-left flex-grow">
            <h4 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter leading-none text-black">
              WE USE COOKIES
            </h4>
            <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.12em] text-black leading-tight max-w-xl">
              TO ENSURE YOU GET THE BEST EXPERIENCE ON OUR SITE. WE USE THEM FOR ANALYTICS AND ESSENTIAL FUNCTIONS. 
              READ OUR FULL <Link href="/privacy" className="underline decoration-[3px] underline-offset-2 hover:text-blue-600 transition-colors">PRIVACY POLICY</Link> FOR DETAILS.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={handleAccept}
              className="bg-black text-primary px-10 py-3 text-xl font-black italic uppercase tracking-tighter hover:bg-blue-600 hover:text-white transition-all border-none transform active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
            >
              ACCEPT
            </button>
            <button
              onClick={handleDecline}
              className="border-[3px] border-black text-black px-10 py-2.5 text-xl font-black italic uppercase tracking-tighter hover:bg-white transition-all transform active:scale-95"
            >
              NO THANKS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
