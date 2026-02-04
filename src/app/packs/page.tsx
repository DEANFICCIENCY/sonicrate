
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SoundCard } from "@/components/ui/sound-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function PacksPage() {
  const allPacks = [
    { id: "1", title: "Industrial Techno Vol. 1", category: "Sample Pack", price: 29, imageUrl: "https://picsum.photos/seed/pack1/400/400" },
    { id: "2", title: "Ethereal Landscapes", category: "Ambient Loops", price: 19, imageUrl: "https://picsum.photos/seed/pack2/400/400" },
    { id: "3", title: "Analog Brutalism", category: "Drum Kit", price: 24, imageUrl: "https://picsum.photos/seed/pack3/400/400" },
    { id: "4", title: "Distorted Reality", category: "Synth Presets", price: 15, imageUrl: "https://picsum.photos/seed/pack4/400/400" },
    { id: "5", title: "Cyber-Organic Bass", category: "Sample Pack", price: 35, imageUrl: "https://picsum.photos/seed/pack5/400/400" },
    { id: "6", title: "Glitch Archeology", category: "Audio Artifacts", price: 12, imageUrl: "https://picsum.photos/seed/pack6/400/400" },
    { id: "7", title: "Modular Madness", category: "Sample Pack", price: 40, imageUrl: "https://picsum.photos/seed/pack7/400/400" },
    { id: "8", title: "Vapor Echoes", category: "Synth Presets", price: 18, imageUrl: "https://picsum.photos/seed/pack8/400/400" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      
      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Full Catalog</span>
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">SOUND TOOLS</h1>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="SEARCH PACKS..." className="pl-10 h-12 rounded-none border-foreground/20 focus:border-primary transition-colors" />
              </div>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px] h-12 rounded-none border-foreground/20 uppercase font-black tracking-widest text-xs">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent className="rounded-none border-foreground uppercase font-black tracking-widest text-xs">
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low-High</SelectItem>
                  <SelectItem value="price-high">Price: High-Low</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {allPacks.map((pack) => (
              <SoundCard key={pack.id} {...pack} />
            ))}
          </div>
          
          <div className="mt-20 flex justify-center">
            <button className="px-12 py-4 border-2 border-foreground font-black uppercase tracking-[0.2em] hover:bg-primary hover:border-primary transition-all italic text-xl">
              LOAD MORE ARTIFACTS
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
