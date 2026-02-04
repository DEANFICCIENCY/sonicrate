import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RefundPage() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-black text-white selection:bg-primary selection:text-black">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none text-primary mb-12">
          DIGITAL GOODS
        </h1>
        <div className="space-y-12 text-sm font-medium leading-relaxed opacity-80 uppercase tracking-widest font-mono">
          <section className="space-y-4">
            <h2 className="text-2xl font-black italic text-primary">REFUND POLICY</h2>
            <p className="text-xl font-black text-white border-l-4 border-primary pl-6 py-2">
              ALL SALES ARE FINAL. NO EXCEPTIONS.
            </p>
            <p>
              DUE TO THE NATURE OF DIGITAL DOWNLOADS, PRODUCTS CANNOT BE "RETURNED" ONCE ACCESS HAS BEEN GRANTED. BY COMPLETING A PURCHASE AT SONICRATE, YOU AGREE THAT YOU ARE PURCHASING NON-TANGIBLE, IRREVOCABLE GOODS.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black italic text-primary">01. DOWNLOAD ISSUES</h2>
            <p>
              IF YOU ENCOUNTER ANY TECHNICAL ISSUES WITH YOUR DOWNLOAD LINK OR CORRUPTED FILES, PLEASE CONTACT US IMMEDIATELY AT TEAM@SONICRATE.COM WITH YOUR ORDER NUMBER. WE WILL ENSURE YOU RECEIVE A FUNCTIONAL COPY OF YOUR PURCHASE.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black italic text-primary">02. UNAUTHORIZED CHARGES</h2>
            <p>
              WE RECOMMEND CONTACTING YOUR BANK OR PAYMENT PROVIDER IMMEDIATELY IF YOU SUSPECT UNAUTHORIZED ACTIVITY. SONICRATE IS NOT RESPONSIBLE FOR PURCHASES MADE BY UNAUTHORIZED THIRD PARTIES USING YOUR PAYMENT METHOD.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
