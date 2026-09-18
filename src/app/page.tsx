import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Facilities } from "@/components/Facilities";
import { HowItWorks } from "@/components/HowItWorks";
import { WalkIns } from "@/components/WalkIns";
import { TrustPayment } from "@/components/TrustPayment";
import { BookCta } from "@/components/BookCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Facilities />
        <HowItWorks />
        <WalkIns />
        <TrustPayment />
        <BookCta />
      </main>
      <Footer />
    </>
  );
}
