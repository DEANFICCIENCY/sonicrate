
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                <div className="space-y-4">
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Get In Touch</span>
                  <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none italic">CONTACT</h1>
                  <p className="text-xl font-bold opacity-70 max-w-md">
                    Have questions about our packs, licensing, or just want to send us some demos? We're listening.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="bg-primary text-foreground p-4">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase tracking-widest text-sm text-primary mb-1">EMAIL US</h4>
                      <p className="text-xl font-bold">SUPPORT@SONICRATE.COM</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="bg-primary text-foreground p-4">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase tracking-widest text-sm text-primary mb-1">COMMUNITY</h4>
                      <p className="text-xl font-bold italic">DISCORD.GG/SONICRATE</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="bg-primary text-foreground p-4">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase tracking-widest text-sm text-primary mb-1">OFFICE</h4>
                      <p className="text-xl font-bold">KREUZBERG, BERLIN, DE</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-foreground text-background p-8 md:p-12 asymmetric-border rotate-[-0.5deg]">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest">Your Name</label>
                      <Input 
                        placeholder="NAME" 
                        className="bg-background/10 border-background/20 text-background placeholder:text-muted-foreground rounded-none h-14 font-black uppercase tracking-widest outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest">Your Email</label>
                      <Input 
                        placeholder="EMAIL" 
                        className="bg-background/10 border-background/20 text-background placeholder:text-muted-foreground rounded-none h-14 font-black uppercase tracking-widest outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest">Subject</label>
                    <Input 
                      placeholder="SUBJECT" 
                      className="bg-background/10 border-background/20 text-background placeholder:text-muted-foreground rounded-none h-14 font-black uppercase tracking-widest outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest">Message</label>
                    <Textarea 
                      placeholder="HOW CAN WE HELP?" 
                      className="bg-background/10 border-background/20 text-background placeholder:text-muted-foreground rounded-none min-h-[150px] font-black uppercase tracking-widest outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <Button className="w-full bg-primary text-foreground hover:bg-primary/90 rounded-none h-16 text-xl font-black uppercase tracking-widest italic flex items-center justify-center">
                    SEND MESSAGE <Send className="ml-3 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
