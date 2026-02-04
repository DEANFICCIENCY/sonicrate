
import Image from "next/image";
import Link from "next/link";
import { Play, Download, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SoundCardProps {
  id: string;
  title: string;
  category: string;
  price: string | number;
  imageUrl: string;
  isFree?: boolean;
}

export function SoundCard({ id, title, category, price, imageUrl, isFree }: SoundCardProps) {
  return (
    <div className="group relative bg-card border hover:border-primary transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button variant="secondary" size="icon" className="rounded-none h-12 w-12 bg-foreground text-background hover:bg-primary hover:text-foreground">
            <Play className="fill-current" />
          </Button>
        </div>
        {isFree && (
          <Badge className="absolute top-2 left-2 rounded-none bg-primary text-foreground font-black uppercase">
            FREE
          </Badge>
        )}
      </div>
      
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-widest text-primary">{category}</p>
            <h3 className="font-bold uppercase tracking-tight text-lg line-clamp-1 group-hover:text-primary transition-colors">{title}</h3>
          </div>
          <div className="text-right">
            <span className="font-black text-xl leading-none">
              {typeof price === 'number' ? `$${price}` : price}
            </span>
          </div>
        </div>
        
        <div className="pt-2">
          <Button 
            variant="outline" 
            className="w-full rounded-none border-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-foreground transition-all uppercase font-black tracking-widest text-xs h-10"
          >
            {isFree ? (
              <span className="flex items-center"><Download className="mr-2 h-4 w-4" /> Download Now</span>
            ) : (
              <span className="flex items-center"><ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart</span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
