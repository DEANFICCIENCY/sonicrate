import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { Volume2, Box, Zap, Fingerprint, Lock } from "lucide-react";

export default function AboutPage() {
  const manifesto = [
    {
      title: "CRAFTING THE SOUNDS YOU CAN'T RECREATE YOURSELF.",
      content: "WE EXIST BECAUSE THE BEDROOM PRODUCER REVOLUTION ISN'T JUST ABOUT BEATS ANYMORE, IT'S ABOUT ATMOSPHERE, TEXTURE, AND THE ELUSIVE 'STUDIO MAGIC' THAT BRINGS INDIE, SHOEGAZE, AND POST-PUNK VISIONS TO LIFE."
    },
    {
      title: "THE PROBLEM WE SOLVE",
      content: "YOU'RE TRYING TO CAPTURE THAT HAZY SLOWDIVE SHIMMER, THAT CONCRETE-BASEMENT CURE DRUM SOUND, OR THAT ANALOG WARMTH OF TAME IMPALA—BUT DIGITAL PLUGINS ALONE WON'T GET YOU THERE. THE 'WALL OF SOUND' SHOULDN'T TAKE WEEKS TO BUILD. IT SHOULD TAKE MINUTES."
    },
    {
      title: "OUR PHILOSOPHY",
      content: "WE'RE NOT LOOP MAKERS. WE'RE SOUND DESIGNERS FOR A SUBCULTURE. WHILE OTHERS FLOOD THE MARKET WITH TRAP KITS, WE CAPTURE THE BREATH OF REAL ROOMS, THE GRIT OF PEDALS, AND THE DRIFT OF ANALOG IMPERFECTION. EVERY SAMPLE SOLVES THE TEXTURE PROBLEM THAT PLAGUES INDIE PRODUCERS: HOW DO I MAKE THIS SOUND REAL?"
    },
    {
      title: "WHAT MAKES US DIFFERENT?",
      content: "NUANCE OVER LOUDNESS. OUR DRUMS BREATHE. OUR GUITARS BLEED. OUR SYNTHS DRIFT OUT OF TUNE LIKE THE RECORDS YOU LOVE. WE DON'T SELL YOU A SNARE, WE GIVE YOU A CONCRETE BASEMENT WITH REVERB BAKED IN. DI TRACKS INCLUDED. TEXTURES THAT SIT IN THE MIX, NOT FIGHT FOR SPACE. WE SOLVE PROBLEMS, NOT SELL SOUNDS."
    },
    {
      title: "WHO WE SERVE",
      content: "THE BEDROOM PRODUCER CHASING THAT AUTHENTIC GARAGE SOUND. THE MEDIA COMPOSER NEEDING INSTANT CINEMATIC ATMOSPHERE. THE EMO-RAP ARTIST SAMPLING REAL MIDWEST-EMO RIFFS. THE INDIE GAME DEVELOPER SCORING THEIR PIXELATED DREAMSCAPE. IF YOU'RE WORKING IN ABLETON AT 2 AM TRYING TO FINISH SOMETHING THAT FEELS RIGHT THIS IS FOR YOU."
    },
    {
      title: "OUR PROMISE",
      content: "EVERY PACK WE RELEASE HAS BEEN ROAD-TESTED IN REAL SESSIONS. IF IT HELPS YOU FINISH A SONG, WE'VE DONE OUR JOB. IF IT BECOMES YOUR SECRET WEAPON, EVEN BETTER. WELCOME TO THE STUDIO YOU WISHED YOU HAD ACCESS TO."
    }
  ];

  const faqs = [
    {
      q: "ARE THESE KITS ROYALTY FREE?",
      a: "The kits on our site are royalty free for online beat leasing and small (under 1 million stream) releases. However, once a release has reached over 1 million streams, the loop must be cleared and the royalties / publishing will be split fairly."
    },
    {
      q: "CAN I USE THE KITS IN DAW?",
      a: "Yes! All of our loop kits, drum kits, one shot kits, and midi kits will work in any DAW that accepts MP3, WAV, and MIDI forms."
    },
    {
      q: "WHAT IS THE REFUND POLICY?",
      a: "All purchases are final and no refunds will be issued under any circumstances. By purchasing, you are agreeing to these terms. The reason we cannot provide a refund is that once a digital good has been downloaded, it cannot be revoked."
    },
    {
      q: "HOW WILL MY KITS BE DELIVERED?",
      a: "You'll be provided with a download link right after purchase. In addition, we send you a confirmation email with your download link so you can download it later if you want."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-body bg-white text-black">
      <Header />
      
      <main className="flex-grow">
        {/* Top Manifesto Section */}
        <section className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Column: Text */}
          <div className="w-full lg:w-1/2 p-8 md:p-20 flex flex-col items-center justify-center text-center space-y-16">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none flex items-start justify-center">
                SONICRATE
              </h1>
            </div>

            <div className="max-w-xl space-y-12">
              {manifesto.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-sm md:text-base font-black uppercase tracking-widest">{section.title}</h3>
                  <p className="text-[10px] md:text-xs font-bold leading-relaxed opacity-70 uppercase tracking-tight">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Volume2 size={48} strokeWidth={3} className="text-black" />
            </div>
          </div>

          {/* Right Column: Studio Collage */}
          <div className="w-full lg:w-1/2 bg-black relative min-h-[600px] lg:min-h-0">
            <Image 
              src="https://picsum.photos/seed/studio-collage/1000/1500" 
              alt="Studio Gear" 
              fill 
              className="object-cover grayscale"
              data-ai-hint="music studio"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-black text-white py-32">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-20">
            {/* Massive FAQ Text */}
            <div className="lg:sticky lg:top-40">
              <h2 className="text-[15vw] lg:text-[10vw] font-black italic tracking-tighter uppercase leading-[0.7] opacity-100">
                FAQS
              </h2>
            </div>

            {/* Questions List */}
            <div className="max-w-xl space-y-16">
              {faqs.map((faq, idx) => (
                <div key={idx} className="space-y-4">
                  <h4 className="text-xl md:text-2xl font-black italic text-primary uppercase tracking-tighter">
                    {faq.q}
                  </h4>
                  <p className="text-xs md:text-sm font-medium leading-relaxed opacity-60">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Matters Section */}
        <section className="bg-primary py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-6xl md:text-[8vw] font-black italic tracking-tighter uppercase leading-none mb-24">
              WHAT MATTERS?
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
              <div className="space-y-4 flex flex-col items-center">
                <div className="mb-2"><Box size={32} /></div>
                <h4 className="font-black uppercase tracking-widest text-xs">INSTANT DELIVERY</h4>
                <p className="text-[9px] font-bold opacity-60 uppercase leading-tight">100% DIGITAL, INSTANT DELIVERY STRAIGHT TO YOUR INBOX</p>
              </div>

              <div className="space-y-4 flex flex-col items-center">
                <div className="mb-2"><Zap size={32} /></div>
                <h4 className="font-black uppercase tracking-widest text-xs">PLUG & PLAY</h4>
                <p className="text-[9px] font-bold opacity-60 uppercase leading-tight">UNIVERSAL WAV FORMAT, COMPATIBLE WITH EVERY DAW AND SAMPLER</p>
              </div>

              <div className="space-y-4 flex flex-col items-center">
                <div className="mb-2"><Fingerprint size={32} /></div>
                <h4 className="font-black uppercase tracking-widest text-xs">ALTERNATIVE DNA</h4>
                <p className="text-[9px] font-bold opacity-60 uppercase leading-tight">DESIGNED FOR AUTHENTIC ALTERNATIVE GRIT, NO COOKIE CUTTER SAMPLES</p>
              </div>

              <div className="space-y-4 flex flex-col items-center">
                <div className="mb-2"><Lock size={32} /></div>
                <h4 className="font-black uppercase tracking-widest text-xs">LOCKED DOWN & SECURE</h4>
                <p className="text-[9px] font-bold opacity-60 uppercase leading-tight">WE ACCEPT ALL MAJOR PAYMENT METHODS</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
