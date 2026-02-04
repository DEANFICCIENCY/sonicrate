import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChevronRight, Instagram, Youtube, Music2, Globe, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-black text-white selection:bg-primary selection:text-black">
      <Header />
      
      <main className="flex-grow">
        {/* Top Section: PLUG IN */}
        <section className="py-24 flex flex-col items-center text-center space-y-12 px-4">
          <h1 className="text-[15vw] font-black italic tracking-tighter leading-none text-primary drop-shadow-[0_0_20px_rgba(215,255,0,0.5)]">
            PLUG IN
          </h1>

          <div className="w-full max-w-md">
            <div className="flex items-center border-4 border-primary p-1 bg-black">
              <input 
                type="email" 
                placeholder="E-MAIL ADDRESS" 
                className="w-full bg-transparent p-4 text-xs font-black uppercase tracking-widest outline-none text-primary placeholder:text-primary/30"
              />
              <button className="bg-primary text-black px-4 py-2 hover:bg-white transition-colors">
                <div className="flex gap-[2px]">
                  <ChevronRight size={24} strokeWidth={4} />
                  <ChevronRight size={24} strokeWidth={4} className="-ml-4" />
                </div>
              </button>
            </div>
          </div>

          <p className="text-[10px] md:text-xs font-bold leading-relaxed opacity-60 uppercase tracking-widest max-w-2xl mx-auto px-4">
            FORGET GENERIC MARKETING EMAILS. <br />
            THIS IS EARLY ACCESS TO PACKS, REAL STUDIO KNOWLEDGE, A<br />
            ND THE ANALOG SECRETS THAT SEPARATE YOUR SOUND FROM THE DIGITAL MASSES.<br />
            WE RESPECT YOUR INBOX.<br />
            ONLY ESSENTIAL DROPS, NO FLUFF.
          </p>

          <div className="pt-8">
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <rect x="0" y="15" width="40" height="10" fill="currentColor" />
              <rect x="42" y="10" width="8" height="20" rx="4" fill="currentColor" />
              <rect x="52" y="5" width="28" height="30" rx="4" fill="currentColor" />
            </svg>
          </div>
        </section>

        {/* Form Section: CONTACT (Neon Yellow) */}
        <section className="bg-primary text-black py-24 px-4 flex flex-col items-center">
          <div className="max-w-4xl w-full">
            <div className="mb-12">
              <h2 className="text-8xl md:text-[120px] font-black italic tracking-tighter uppercase leading-[0.7] transform -skew-x-12 inline-block border-b-[12px] border-black">
                CONTACT
              </h2>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="NAME" 
                  className="w-full h-16 bg-transparent border-4 border-black rounded-full px-8 text-xl font-black italic uppercase placeholder:text-black/30 outline-none focus:bg-white/10"
                />
                <input 
                  type="text" 
                  placeholder="SURNAME" 
                  className="w-full h-16 bg-transparent border-4 border-black rounded-full px-8 text-xl font-black italic uppercase placeholder:text-black/30 outline-none focus:bg-white/10"
                />
              </div>
              <input 
                type="tel" 
                placeholder="PHONE NUMBER" 
                className="w-full h-16 bg-transparent border-4 border-black rounded-full px-8 text-xl font-black italic uppercase placeholder:text-black/30 outline-none focus:bg-white/10"
              />
              <textarea 
                placeholder="COMMENTS" 
                rows={4}
                className="w-full bg-transparent border-4 border-black rounded-3xl p-8 text-xl font-black italic uppercase placeholder:text-black/30 outline-none focus:bg-white/10 resize-none"
              />
              
              <div className="flex justify-center pt-8">
                <button type="submit" className="bg-black text-primary px-16 py-4 rounded-full text-3xl font-black italic uppercase tracking-tighter hover:bg-black/90 transition-all">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-black py-32 px-4">
          <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-20">
            {/* Massive Handwritten FAQS */}
            <div className="lg:w-1/2 flex items-center justify-center">
               <h2 className="text-[20vw] lg:text-[15vw] font-black text-white italic tracking-tighter leading-none select-none transform -rotate-12">
                FAQS
              </h2>
            </div>

            {/* Questions List */}
            <div className="lg:w-1/2 space-y-16">
              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-black italic text-primary uppercase tracking-tighter">
                  ARE THESE KITS ROYALTY FREE?
                </h4>
                <p className="text-[10px] md:text-xs font-bold leading-relaxed opacity-60 uppercase tracking-widest font-mono">
                  The kits on our site are royalty free for online beat leasing and small (under 1 million stream) releases. However, once a release has reached over 1 million streams, the loop must be cleared and the royalties / publishing will be split fairly.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-black italic text-primary uppercase tracking-tighter">
                  CAN I USE THE KITS IN DAW?
                </h4>
                <p className="text-[10px] md:text-xs font-bold leading-relaxed opacity-60 uppercase tracking-widest font-mono">
                  Yes! All of our loop kits, drum kits, one shot kits, and midi kits will work in any DAW that accepts MP3, WAV, and MIDI forms.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-black italic text-primary uppercase tracking-tighter">
                  WHAT IS THE REFUND POLICY?
                </h4>
                <p className="text-[10px] md:text-xs font-bold leading-relaxed opacity-60 uppercase tracking-widest font-mono">
                  All purchases are final and no refunds will be issued under any circumstances. By purchasing, you are agreeing to these terms. The reason we cannot provide a refund is that once a digital good has been downloaded, it cannot be revoked.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-black italic text-primary uppercase tracking-tighter">
                  HOW WILL MY KITS BE DELIVERED?
                </h4>
                <p className="text-[10px] md:text-xs font-bold leading-relaxed opacity-60 uppercase tracking-widest font-mono">
                  You'll be provided with a download link right after purchase. In addition, we send you a confirmation email with your download link so you can download it later if you want.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Link Up Section */}
        <section className="bg-white text-black py-24 px-4 overflow-hidden">
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-12 w-full md:w-auto">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-3 bg-black text-white group-hover:bg-primary group-hover:text-black transition-colors">
                  <Instagram size={32} />
                </div>
                <span className="text-2xl font-black italic uppercase tracking-tighter">@SONICRATE</span>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-3 bg-black text-white group-hover:bg-primary group-hover:text-black transition-colors">
                  <Youtube size={32} />
                </div>
                <span className="text-2xl font-black italic uppercase tracking-tighter">@PRODBYONEIL</span>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-3 bg-black text-white group-hover:bg-primary group-hover:text-black transition-colors">
                  <MessageSquare size={32} />
                </div>
                <span className="text-2xl font-black italic uppercase tracking-tighter">DISCORD.GG/PRODBYONEIL</span>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <h2 className="text-[12vw] font-black tracking-tighter leading-none mb-8">
                LINK UP
              </h2>
              <div className="flex flex-col items-center space-y-2 opacity-100">
                <Globe size={80} strokeWidth={1} />
                <div className="flex gap-2">
                  <div className="w-12 h-1 bg-black" />
                  <div className="w-8 h-1 bg-black" />
                  <div className="w-4 h-1 bg-black" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
