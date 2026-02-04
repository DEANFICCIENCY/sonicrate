
"use client"

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, User, Mail, Apple } from "lucide-react";
import { useAuth, useUser } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

export function Header() {
  const { auth } = useAuth();
  const { user, loading } = useUser();
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSignIn = async () => {
    if (!auth) return;
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setIsSignInOpen(false);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSignOut = async () => {
    if (!auth) return;
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header className="w-full bg-primary border-b border-black sticky top-0 z-50">
      <div className="container mx-auto px-4 flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logoT.webp" 
            alt="Sonicrate Logo" 
            width={32} 
            height={32} 
            className="object-contain"
            priority
          />
        </Link>

        <nav className="flex items-center gap-1 md:gap-4 text-[11px] font-black uppercase tracking-[0.1em] text-black">
          <Link href="/" className="hover:opacity-60 transition-opacity">HOME</Link>
          <span className="opacity-40 select-none">•</span>
          <Link href="/packs" className="hover:opacity-60 transition-opacity">PACKS</Link>
          <span className="opacity-40 select-none">•</span>
          <Link href="/free" className="hover:opacity-60 transition-opacity">FREE</Link>
          <span className="opacity-40 select-none">•</span>
          <Link href="/about" className="hover:opacity-60 transition-opacity">ABOUT</Link>
          <span className="opacity-40 select-none">•</span>
          <Link href="/contact" className="hover:opacity-60 transition-opacity">CONTACT</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer hover:opacity-70 transition-opacity">
            <ShoppingBag size={24} className="text-black" />
          </div>

          {!loading && (
            user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  <Avatar className="h-8 w-8 border-2 border-black">
                    <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
                    <AvatarFallback className="bg-black text-primary font-black text-xs uppercase italic">
                      {user.displayName?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <DropdownMenuLabel className="font-black italic uppercase tracking-tighter border-b border-black/10 py-3">
                    {user.displayName || "MY ACCOUNT"}
                  </DropdownMenuLabel>
                  <DropdownMenuItem className="cursor-pointer font-bold uppercase text-[10px] tracking-widest hover:bg-primary transition-colors py-3">
                    PURCHASES
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer font-bold uppercase text-[10px] tracking-widest hover:bg-primary transition-colors py-3">
                    PROFILE SETTINGS
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-black/10" />
                  <DropdownMenuItem 
                    onClick={handleSignOut}
                    className="cursor-pointer font-black italic uppercase text-xs tracking-tighter text-red-600 hover:bg-red-50 transition-colors py-3"
                  >
                    LOG OUT
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Dialog open={isSignInOpen} onOpenChange={setIsSignInOpen}>
                <DialogTrigger asChild>
                  <User size={24} className="text-black cursor-pointer hover:opacity-70 transition-opacity" />
                </DialogTrigger>
                <DialogContent className="max-w-[400px] p-0 border-none bg-transparent shadow-none overflow-visible">
                  <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4">
                    <DialogTitle className="text-3xl font-black italic uppercase tracking-tighter text-black text-center mb-4">
                      SIGN IN
                    </DialogTitle>
                    
                    <button 
                      onClick={handleSignIn}
                      className="w-full border-2 border-black py-4 flex items-center justify-center gap-3 text-xl font-black italic uppercase tracking-tighter hover:bg-primary transition-colors"
                    >
                      GOOGLE
                    </button>
                    
                    <button className="w-full border-2 border-black py-4 flex items-center justify-center gap-3 text-xl font-black italic uppercase tracking-tighter hover:bg-black hover:text-white transition-colors">
                      <Apple size={20} />
                      APPLE
                    </button>

                    <div className="relative py-4">
                      <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-black/10" /></div>
                      <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest bg-white px-2">OR</div>
                    </div>

                    <div className="space-y-4">
                      <input 
                        type="email" 
                        placeholder="EMAIL" 
                        className="w-full border-2 border-black p-4 font-black italic uppercase placeholder:text-black/30 outline-none focus:bg-primary/5"
                      />
                      <button className="w-full bg-black text-white py-4 text-xl font-black italic uppercase tracking-tighter hover:bg-primary hover:text-black transition-colors">
                        CONTINUE
                      </button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )
          )}
        </div>
      </div>
    </header>
  );
}
