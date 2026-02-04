import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-black text-white selection:bg-primary selection:text-black">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none text-primary mb-12">
          YOUR PRIVACY
        </h1>
        <div className="space-y-12 text-sm font-medium leading-relaxed opacity-80 uppercase tracking-widest font-mono">
          <section className="space-y-4">
            <h2 className="text-2xl font-black italic text-primary">01. DATA COLLECTION</h2>
            <p>
              WE COLLECT MINIMAL DATA NECESSARY TO DELIVER YOUR DIGITAL GOODS. THIS INCLUDES YOUR NAME, EMAIL ADDRESS, AND PAYMENT INFORMATION PROCESSED THROUGH SECURE THIRD-PARTY PROVIDERS. WE DO NOT STORE CREDIT CARD DETAILS ON OUR SERVERS.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black italic text-primary">02. HOW WE USE IT</h2>
            <p>
              YOUR INFORMATION IS USED EXCLUSIVELY FOR ORDER FULFILLMENT, ACCOUNT MANAGEMENT, AND—IF YOU OPTED IN—OUR "PLUG IN" NEWSLETTER. WE DO NOT SELL OR SHARE YOUR DATA WITH THIRD-PARTY ADVERTISERS.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black italic text-primary">03. COOKIES & TRACKING</h2>
            <p>
              WE USE ESSENTIAL COOKIES TO MAINTAIN YOUR SESSION AND CART. ANALYTICAL TOOLS MAY BE USED TO UNDERSTAND SITE TRAFFIC IN AN ANONYMIZED FORMAT TO IMPROVE THE USER EXPERIENCE.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black italic text-primary">04. DATA RIGHTS</h2>
            <p>
              YOU HAVE THE RIGHT TO REQUEST A COPY OF THE DATA WE HOLD ABOUT YOU OR TO REQUEST ITS DELETION. CONTACT TEAM@SONICRATE.COM FOR ANY PRIVACY-RELATED INQUIRIES.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
