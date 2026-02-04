
"use client"

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, User } from "lucide-react";
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
                  <div className="relative">
                    {/* Blue horizontal bar decoration as per mockup */}
                    <div className="absolute top-1/2 left-[-100px] right-[-100px] h-12 bg-blue-600 -translate-y-1/2 -z-10" />
                    
                    <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
                      <DialogTitle className="sr-only">Sign In</DialogTitle>
                      <button 
                        onClick={handleSignIn}
                        className="w-full text-2xl font-black italic uppercase tracking-tighter text-black hover:opacity-70 transition-opacity py-4"
                      >
                        SIGN IN WITH GOOGLE
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
