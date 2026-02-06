
'use client';

import { useState, useEffect, useRef } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Save, Lock, Upload, Image as ImageIcon } from "lucide-react";
import Image from 'next/image';

export default function AdminPage() {
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const adminRef = useMemoFirebase(() => {
    if (!db || !user) return null;
    return doc(db, 'emails', user.uid);
  }, [db, user]);

  const { data: adminDoc, isLoading: isAdminLoading } = useDoc(adminRef);

  // Form State
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    category: '',
    image: '',
    price: 0,
    discountedPrice: 0,
    saveAmount: 0,
    descTitle: 'THE RUNDOWN',
    description: '',
    technicalInfo: {
      totalSounds: 0,
      drumLoops: 0,
      drumSounds: 0,
      drumFills: 0,
      melodyLoops: 0,
      projectMixTemplates: 0,
      percLoops: 0,
      drumMidi: 0
    }
  });

  const [tracks, setTracks] = useState([{ name: '', bpm: '', key: '' }]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith('tech-')) {
      const field = name.split('tech-')[1];
      const numValue = value === '' ? 0 : Number(value);
      if (isNaN(numValue)) return;
      
      setFormData(prev => ({
        ...prev,
        technicalInfo: { ...prev.technicalInfo, [field]: numValue }
      }));
    } else {
      const numberFields = ['price', 'discountedPrice', 'saveAmount'];
      if (numberFields.includes(name)) {
        const numValue = value === '' ? 0 : Number(value);
        if (isNaN(numValue)) return;
        setFormData(prev => ({ ...prev, [name]: numValue }));
      } else {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result as string }));
        toast({
          title: "IMAGE SELECTED",
          description: "FILE HAS BEEN PREPARED FOR UPLOAD.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTrackChange = (index: number, field: string, value: string) => {
    const newTracks = [...tracks];
    newTracks[index] = { ...newTracks[index], [field]: value };
    setTracks(newTracks);
  };

  const addTrack = () => setTracks([...tracks, { name: '', bpm: '', key: '' }]);
  const removeTrack = (index: number) => setTracks(tracks.filter((_, i) => i !== index));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db || !formData.id) {
      toast({
        variant: "destructive",
        title: "REQUIRED FIELD",
        description: "PLEASE ENTER A DOC ID.",
      });
      return;
    }

    try {
      const productRef = doc(db, 'products', formData.id);
      await setDoc(productRef, {
        ...formData,
        tracks: tracks.filter(t => t.name),
        createdAt: serverTimestamp()
      }, { merge: true });

      toast({
        title: "PRODUCT SAVED",
        description: `Successfully updated ${formData.title.toUpperCase() || 'PRODUCT'}`,
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "SAVE ERROR",
        description: error.message.toUpperCase(),
      });
    }
  };

  if (!mounted || isUserLoading || isAdminLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user || adminDoc?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 text-center space-y-8">
        <Lock size={80} className="text-primary" />
        <h1 className="text-6xl font-black italic tracking-tighter uppercase">ACCESS DENIED</h1>
        <p className="text-xs font-bold tracking-widest opacity-60 max-w-md">
          THIS AREA IS FOR AUTHORIZED PRODUCERS ONLY. <br />
          LOG IN WITH AN ADMIN ACCOUNT TO ACCESS THE SONICRATE VAULT CONTROLS.
        </p>
        <Button asChild className="bg-primary text-black hover:bg-white rounded-none h-12 px-12 font-black italic uppercase tracking-tighter">
          <a href="/">BACK TO HOME</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-body bg-black text-white selection:bg-primary selection:text-black">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-24 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b-8 border-primary pb-8">
          <h1 className="text-8xl md:text-[120px] font-black italic tracking-tighter uppercase leading-[0.7] transform -skew-x-6">
            VAULT<br />CONTROL
          </h1>
          <div className="text-right">
            <p className="text-xs font-black tracking-widest text-primary uppercase">ADMIN PORTAL</p>
            <p className="text-sm font-bold uppercase opacity-60">LOGGED IN AS: {user.email}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-24">
          <section className="space-y-12">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter border-l-4 border-primary pl-6">01. PRODUCT IDENTITY</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary">DOC ID (DB REFERENCE)</label>
                <Input 
                  name="id" 
                  value={formData.id} 
                  onChange={handleInputChange} 
                  placeholder="e.g. basement-tapes"
                  className="h-16 bg-white/5 border-2 border-white/10 rounded-none text-xl font-black italic uppercase placeholder:text-white/10 focus:border-primary transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary">TITLE</label>
                <Input 
                  name="title" 
                  value={formData.title} 
                  onChange={handleInputChange} 
                  placeholder="e.g. THE BASEMENT TAPES"
                  className="h-16 bg-white/5 border-2 border-white/10 rounded-none text-xl font-black italic uppercase placeholder:text-white/10 focus:border-primary transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary">CATEGORY</label>
                <Input 
                  name="category" 
                  value={formData.category} 
                  onChange={handleInputChange} 
                  placeholder="e.g. EXPERIMENTAL / INDIE SUITE"
                  className="h-16 bg-white/5 border-2 border-white/10 rounded-none text-xl font-black italic uppercase placeholder:text-white/10 focus:border-primary transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary">PRODUCT ARTWORK</label>
                <div className="flex gap-4 items-center">
                  <div className="relative h-16 w-16 bg-white/5 border-2 border-white/10 overflow-hidden shrink-0 flex items-center justify-center">
                    {formData.image ? (
                      <Image src={formData.image} alt="Preview" fill className="object-cover" />
                    ) : (
                      <ImageIcon className="text-white/10" size={24} />
                    )}
                  </div>
                  <div className="flex-grow">
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      className="hidden" 
                      accept="image/*" 
                      onChange={handleFileChange} 
                    />
                    <button 
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full flex items-center justify-center h-16 bg-white/5 border-2 border-white/10 rounded-none text-xs font-black italic uppercase cursor-pointer hover:border-primary hover:text-primary transition-all px-8 text-center"
                    >
                      <Upload size={18} className="mr-2" />
                      {formData.image ? "CHANGE IMAGE" : "SELECT FILE FROM PC"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter border-l-4 border-primary pl-6">02. PRICING & VALUE</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary">BASE PRICE ($)</label>
                <Input 
                  type="number" 
                  name="price" 
                  value={formData.price || ''} 
                  onChange={handleInputChange} 
                  placeholder="100"
                  className="h-16 bg-white/5 border-2 border-white/10 rounded-none text-3xl font-black text-primary placeholder:text-primary/10" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary">DISCOUNTED PRICE ($)</label>
                <Input 
                  type="number" 
                  name="discountedPrice" 
                  value={formData.discountedPrice || ''} 
                  onChange={handleInputChange} 
                  placeholder="40"
                  className="h-16 bg-white/5 border-2 border-white/10 rounded-none text-3xl font-black text-blue-500 placeholder:text-blue-500/10" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary">SAVE AMOUNT ($)</label>
                <Input 
                  type="number" 
                  name="saveAmount" 
                  value={formData.saveAmount || ''} 
                  onChange={handleInputChange} 
                  placeholder="60"
                  className="h-16 bg-white/5 border-2 border-white/10 rounded-none text-3xl font-black text-white placeholder:text-white/10" 
                />
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter border-l-4 border-primary pl-6">03. THE NARRATIVE</h2>
            <div className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary">DESCRIPTION TITLE</label>
                <Input 
                  name="descTitle" 
                  value={formData.descTitle} 
                  onChange={handleInputChange} 
                  placeholder="e.g. THE RUNDOWN"
                  className="h-16 bg-white/5 border-2 border-white/10 rounded-none text-xl font-black italic uppercase placeholder:text-white/10" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary">DESCRIPTION BODY</label>
                <Textarea 
                  name="description" 
                  value={formData.description} 
                  onChange={handleInputChange} 
                  rows={6} 
                  placeholder="DESCRIBE THE SONIC TEXTURE..."
                  className="bg-white/5 border-2 border-white/10 rounded-none text-sm font-bold uppercase tracking-wider leading-relaxed p-6 placeholder:text-white/10" 
                />
              </div>
            </div>
          </section>

          <section className="space-y-12">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter border-l-4 border-primary pl-6">04. TECHNICAL SPECS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.keys(formData.technicalInfo).map((key) => (
                <div key={key} className="space-y-2">
                  <label className="text-[8px] font-black uppercase tracking-widest text-primary">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
                  <Input 
                    type="number" 
                    name={`tech-${key}`} 
                    value={(formData.technicalInfo as any)[key] || ''} 
                    onChange={handleInputChange} 
                    placeholder="0"
                    className="h-12 bg-white/5 border border-white/10 rounded-none text-xl font-black placeholder:text-white/10"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-12">
            <div className="flex items-center justify-between border-l-4 border-primary pl-6">
              <h2 className="text-3xl font-black italic uppercase tracking-tighter">05. TRACK PREVIEWS</h2>
              <Button 
                type="button" 
                onClick={addTrack} 
                className="bg-primary text-white rounded-none hover:bg-primary/90 transition-all hover:scale-105 h-16 px-10 text-xl font-black italic uppercase tracking-tighter"
              >
                <Plus size={24} className="mr-2" /> ADD TRACK
              </Button>
            </div>
            
            <div className="space-y-4">
              {tracks.map((track, index) => (
                <div key={index} className="flex gap-4 items-center bg-white/5 p-4 border border-white/10">
                  <Input 
                    placeholder="TRACK NAME (e.g. BLOSSOM)" 
                    value={track.name} 
                    onChange={(e) => handleTrackChange(index, 'name', e.target.value)} 
                    className="bg-transparent border-none rounded-none text-lg font-black italic uppercase placeholder:text-white/10" 
                  />
                  <Input 
                    placeholder="BPM" 
                    value={track.bpm} 
                    onChange={(e) => handleTrackChange(index, 'bpm', e.target.value)} 
                    className="w-24 bg-transparent border-none rounded-none text-lg font-black placeholder:text-white/10" 
                  />
                  <Input 
                    placeholder="KEY" 
                    value={track.key} 
                    onChange={(e) => handleTrackChange(index, 'key', e.target.value)} 
                    className="w-24 bg-transparent border-none rounded-none text-lg font-black placeholder:text-white/10" 
                  />
                  <button type="button" onClick={() => removeTrack(index)} className="text-red-500 hover:text-white transition-colors p-2">
                    <Trash2 size={24} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          <div className="pt-12 pb-24">
            <Button 
              type="submit" 
              className="w-full h-24 bg-black text-primary border-4 border-primary hover:bg-primary hover:text-black rounded-none text-4xl font-black italic uppercase tracking-tighter shadow-[12px_12px_0px_0px_rgba(215,255,0,0.3)] transition-all flex gap-6"
            >
              <Save size={40} />
              PUBLISH TO VAULT
            </Button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
