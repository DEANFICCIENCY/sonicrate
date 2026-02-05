'use client';

import { useState, useEffect } from 'react';
import { ChevronsRight } from 'lucide-react';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface NewsletterFormProps {
  variant?: 'default' | 'contact';
  className?: string;
}

export function NewsletterForm({ variant = 'default', className }: NewsletterFormProps) {
  const { user } = useUser();
  const db = useFirestore();
  const { toast } = useToast();
  const [emailInput, setEmailInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoize the document reference for the user's subscription status
  const subscriptionRef = useMemoFirebase(() => {
    if (!db || !user) return null;
    return doc(db, 'emails', user.uid);
  }, [db, user]);

  const { data: subscription, isLoading } = useDoc(subscriptionRef);

  // If the user is already subscribed or we haven't mounted yet, hide the entire component
  if (!mounted || subscription?.subscribed) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || isSubmitting) return;

    if (!user) {
      toast({
        title: "SIGN IN REQUIRED",
        description: "PLEASE SIGN IN TO SUBSCRIBE TO OUR NEWSLETTER.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const docRef = doc(db, 'emails', user.uid);
    const data = {
      id: user.uid,
      email: emailInput,
      subscribed: true,
    };

    setDoc(docRef, data, { merge: true })
      .then(() => {
        toast({
          title: "SUCCESS",
          description: "YOU HAVE BEEN ADDED TO THE VAULT.",
        });
        setEmailInput('');
      })
      .catch(async (error) => {
        const permissionError = new FirestorePermissionError({
          path: docRef.path,
          operation: 'write',
          requestResourceData: data,
        });
        errorEmitter.emit('permission-error', permissionError);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (variant === 'contact') {
    return (
      <div className={cn("w-full max-w-md", className)}>
        <form onSubmit={handleSubmit} className="relative flex items-center border-2 border-primary focus-within:border-primary transition-all p-1 bg-black">
          <input 
            type="email" 
            placeholder="E-MAIL ADDRESS" 
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            required
            className="w-full bg-transparent p-4 pl-6 text-xs font-black uppercase tracking-widest outline-none text-primary placeholder:text-primary/30"
          />
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-primary text-black px-6 h-12 hover:bg-white transition-colors disabled:opacity-50"
          >
            <ChevronsRight size={24} strokeWidth={3} />
          </button>
        </form>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("relative flex items-center border-2 border-primary/40 focus-within:border-primary transition-all p-1", className)}>
      <input 
        type="email" 
        placeholder="E-MAIL ADDRESS" 
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
        required
        className="w-full bg-transparent p-4 pl-6 text-xs font-black uppercase tracking-widest outline-none placeholder:text-white/20 text-white"
      />
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="bg-primary text-black px-6 h-12 hover:bg-white transition-colors disabled:opacity-50"
      >
        <ChevronsRight size={24} strokeWidth={3} />
      </button>
    </form>
  );
}
