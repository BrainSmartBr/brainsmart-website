import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import WhereWeAre from "@/components/WhereWeAre";
import UserBenefits from "@/components/UserBenefits";
import B2BSection from "@/components/B2BSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorks />
      <WhereWeAre />
      <UserBenefits />
      <B2BSection />
      <Footer />
    </div>
  );
};

export default Index;
