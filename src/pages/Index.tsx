import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhatWeDo from "@/components/WhatWeDo";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative isolate">
      <div className="premium-ambient" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhatWeDo />
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
