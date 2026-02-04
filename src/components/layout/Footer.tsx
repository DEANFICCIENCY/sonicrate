import Link from "next/link";
import { Youtube, Instagram, Music2, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Newsletter Section */}
        <div className="w-full max-w-xl text-center space-y-8 mb-24">
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic text-primary">
            GET EXCLUSIVE DROPS <br /> & INSIDER ACCESS
          </h3>
          
          <form className="relative flex items-center">
            <input 
              type="email" 
              placeholder="E-MAIL ADDRESS" 
              className="w-full bg-transparent border-2 border-primary/40 focus:border-primary p-4 pl-6 text-xs font-black uppercase tracking-widest outline-none transition-all placeholder:text-white/20"
            />
            <button className="absolute right-2 bg-primary text-black p-2 hover:bg-primary/80 transition-colors">
              <ChevronRight size={24} strokeWidth={3} />
            </button>
          </form>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-8 mb-16">
          <Link href="#" className="text-white hover:text-primary transition-colors"><Youtube size={32} /></Link>
          <Link href="#" className="text-white hover:text-primary transition-colors"><Instagram size={32} /></Link>
          <Link href="#" className="text-white hover:text-primary transition-colors"><Music2 size={32} /></Link>
        </div>

        {/* Footer Info */}
        <div className="text-center space-y-8 max-w-2xl">
          <p className="text-[10px] font-black uppercase tracking-widest text-white/40 leading-relaxed">
            SONICRATE™ IS A PRODUCER-FIRST PLATFORM FOUNDED BY O'NEIL, BUILT TO CONNECT THE COMMUNITY THROUGH EXCLUSIVE SAMPLE RELEASES, PREMIUM SOUND DESIGN, AND TOOLS THAT FUEL YOUR CREATIVE PROCESS.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[9px] font-black uppercase tracking-widest text-white/60">
            <Link href="#" className="hover:text-primary transition-colors">CREATIVE RIGHTS (license agreement)</Link>
            <Link href="#" className="hover:text-primary transition-colors">YOUR PRIVACY (privacy policy)</Link>
            <Link href="#" className="hover:text-primary transition-colors">DIGITAL GOODS POLICY (refund policy)</Link>
            <Link href="#" className="hover:text-primary transition-colors">THE ESSENTIALS (FAQ)</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
