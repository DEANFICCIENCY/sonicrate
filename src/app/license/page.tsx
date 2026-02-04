import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function LicensePage() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-black text-white selection:bg-primary selection:text-black">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none text-primary mb-12">
          CREATIVE RIGHTS
        </h1>
        <div className="space-y-12 text-sm font-medium leading-relaxed opacity-80 uppercase tracking-widest font-mono">
          <section className="space-y-4">
            <h2 className="text-2xl font-black italic text-primary">LICENSE AGREEMENT</h2>
            <p>
              BY PURCHASING ANY SAMPLE PACK FROM SONICRATE, YOU ARE GRANTED A NON-EXCLUSIVE LICENSE TO USE THE SOUNDS WITHIN YOUR MUSICAL COMPOSITIONS.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black italic text-primary">01. ROYALTY FREE LIMITS</h2>
            <p>
              ALL SAMPLES ARE 100% ROYALTY-FREE FOR INDEPENDENT RELEASES, BEAT LEASING, AND CONTENT CREATION UP TO 1,000,000 (ONE MILLION) STREAMS ACROSS ALL PLATFORMS.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black italic text-primary">02. MAJOR PLACEMENTS</h2>
            <p>
              ONCE A TRACK UTILIZING SONICRATE SAMPLES EXCEEDS 1,000,000 STREAMS OR IS PLACED WITH A MAJOR LABEL, THE LOOP/SAMPLE MUST BE CLEARED. ROYALTIES, PUBLISHING, AND ADVANCES WILL BE SPLIT FAIRLY BETWEEN THE PRODUCER AND SONICRATE (O'NEIL).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black italic text-primary">03. PROHIBITED USES</h2>
            <p>
              YOU MAY NOT REDISTRIBUTE, RESELL, OR REPACK SONICRATE SAMPLES AS PART OF ANY OTHER SAMPLE PACK, VIRTUAL INSTRUMENT, OR SOUND LIBRARY. THE SOUNDS MUST BE USED WITHIN THE CONTEXT OF A MUSICAL WORK.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
