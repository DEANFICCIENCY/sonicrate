
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SoundCard } from "@/components/ui/sound-card";
import { Download, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FreePage() {
  const freePacks = [
    { id: "f1", title: "Dark Ambient Layers", category: "Free Weekly", price: 0, imageUrl: "https://picsum.photos/seed/free1/400/400", isFree: true },
    { id: "f2", title: "Techno Kick Starter", category: "Essential", price: 0, imageUrl: "https://picsum.photos/seed/free2/400/400", isFree: true },
    { id: "f3", title: "Industrial Percussion", category: "Found Sounds", price: 0, imageUrl: "https://picsum.photos/seed/free3/400/400", isFree: true },
    { id: "f4", title: "Bit-Crushed Melodies", category: "Melodic", price: 0, imageUrl: "https://picsum.photos/seed/free4/400/400", isFree: true },
  ];

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      
      <main className="flex-grow">
        {/* Banner Section */}
        <section className="bg-primary py-24 border-b-4 border-foreground">
          <div className="container mx-auto px-4 text-center space-y-8 relative overflow-hidden">
            <Gift className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-64 w-64 text-foreground/5 rotate-[-15deg]" />
            <div className="space-y-4">
              <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none italic">ZERO COST</h1>
              <p className="text-xl md:text-3xl font-black uppercase tracking-widest text-foreground/70">NO STRINGS ATTACHED. JUST SOUND.</p>
            </div>
            <p className="max-w-2xl mx-auto text-lg font-bold">
              We believe in fueling the underground community. Here you'll find our curated collection of free sample packs, presets, and production tools.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12 border-b-2 border-foreground pb-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic">AVAILABLE DOWNLOADS</h2>
              <span className="font-black text-primary bg-foreground px-4 py-1 uppercase tracking-widest text-xs">4 ARTIFACTS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {freePacks.map((pack) => (
                <SoundCard key={pack.id} {...pack} />
              ))}
            </div>
            
            <div className="mt-24 p-12 bg-foreground text-background text-center space-y-8 asymmetric-border">
              <h3 className="text-4xl font-black uppercase tracking-tighter italic">NEVER MISS A FREE DROP</h3>
              <p className="max-w-xl mx-auto text-muted-foreground font-bold">
                Our best free packs are only available for 7 days. Subscribe to our newsletter to get the notification immediately when a new one drops.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="YOUR@EMAIL.COM" 
                  className="bg-transparent border-2 border-background text-background placeholder:text-muted-foreground p-4 font-black uppercase tracking-widest flex-grow outline-none focus:border-primary transition-colors"
                />
                <Button className="bg-primary text-foreground hover:bg-primary/90 rounded-none h-14 px-8 font-black uppercase tracking-widest italic">SUBSCRIBE</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
