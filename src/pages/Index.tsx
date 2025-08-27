import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProcessFlow from "@/components/ProcessFlow";
import Benefits from "@/components/Benefits";
import BetaTester from "@/components/BetaTester";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProcessFlow />
      <Benefits />
      <BetaTester />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
