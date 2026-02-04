
"use client"

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, User, Apple, X } from "lucide-react";
import { useAuth, useUser } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
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
  DialogClose,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Header() {
  const auth = useAuth();
  const { user, loading } = useUser();
  const { toast } = useToast();
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    if (!auth || isSigningIn) {
      if (!auth) console.error("Firebase Auth is not initialized.");
      return;
    }

    setIsSigningIn(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setIsSignInOpen(false);
    } catch (error: any) {
      if (error.code !== 'auth/cancelled-popup-request' && error.code !== 'auth/popup-closed-by-user') {
        toast({
          variant: "destructive",
          title: "SIGN IN ERROR",
          description: error.message.toUpperCase(),
        });
      }
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleEmailAuth = async () => {
    if (!auth || !email || !password || isSigningIn) return;
    
    setIsSigningIn(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsSignInOpen(false);
    } catch (error: any) {
      // If user doesn't exist, attempt to create account
      if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          setIsSignInOpen(false);
        } catch (createError: any) {
          toast({
            variant: "destructive",
            title: "AUTH ERROR",
            description: createError.message.toUpperCase(),
          });
        }
      } else {
        toast({
          variant: "destructive",
          title: "AUTH ERROR",
          description: error.message.toUpperCase(),
        });
      }
    } finally {
      setIsSigningIn(false);
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
                    {user.displayName || user.email || "MY ACCOUNT"}
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
                <DialogContent className="max-w-[440px] p-0 border-none bg-transparent shadow-none overflow-visible">
                  <div className="bg-white border-[6px] border-black p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
                    <DialogClose className="absolute right-6 top-6 hover:opacity-60 transition-opacity">
                      <X size={24} className="text-black" strokeWidth={3} />
                    </DialogClose>
                    
                    <DialogTitle className="text-6xl font-black italic uppercase tracking-tighter text-black text-center mb-12">
                      SIGN IN
                    </DialogTitle>
                    
                    <div className="flex flex-col gap-6">
                      <button 
                        onClick={handleSignIn}
                        disabled={isSigningIn}
                        className="w-full h-20 border-[3px] border-black flex items-center justify-center text-3xl font-black italic uppercase tracking-tighter hover:bg-blue-600 hover:text-white transition-all focus:border-blue-600 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSigningIn ? "SIGNING IN..." : "GOOGLE"}
                      </button>
                      
                      <button className="w-full h-20 border-[3px] border-black flex items-center justify-center gap-4 text-3xl font-black italic uppercase tracking-tighter hover:bg-black hover:text-white transition-all outline-none">
                        <Apple size={32} />
                        APPLE
                      </button>

                      <div className="flex items-center justify-center py-6">
                        <span className="text-xs font-black uppercase tracking-widest bg-white px-4 z-10">OR</span>
                        <div className="absolute w-full h-[1px] bg-black/10 left-0" />
                      </div>

                      <div className="space-y-4">
                        <input 
                          type="email" 
                          placeholder="EMAIL" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full h-16 border-[3px] border-black px-8 text-xl font-black italic uppercase placeholder:text-black/20 outline-none focus:border-blue-600 bg-[#f0f7ff]"
                        />
                        <input 
                          type="password" 
                          placeholder="PASSWORD" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full h-16 border-[3px] border-black px-8 text-xl font-black italic uppercase placeholder:text-black/20 outline-none focus:border-blue-600 bg-[#f0f7ff]"
                        />
                        <button 
                          onClick={handleEmailAuth}
                          disabled={isSigningIn}
                          className="w-full h-20 bg-black text-white text-3xl font-black italic uppercase tracking-tighter hover:bg-blue-600 transition-all disabled:opacity-50"
                        >
                          {isSigningIn ? "..." : "CONTINUE"}
                        </button>
                      </div>
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
