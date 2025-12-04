import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scrollToCalendly = () => {
    const calendlySection = document.getElementById("calendly-section");
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-brainsmart-light-blue via-background to-brainsmart-light-orange min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transforme o{" "}
            <span className="bg-gradient-to-r from-brainsmart-blue to-brainsmart-orange bg-clip-text text-transparent">
              bem-estar mental
            </span>{" "}
            com inteligência artificial
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground font-medium mb-4">
            Faça um teste de bem-estar cerebral grátis e receba um plano de monitoramento contínuo.
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Experiência rápida em pontos de bem-estar BrainSmart em cafés e empresas parceiras, 
            complementando terapia e acompanhamento psicológico sem substituí-los.
          </p>
          
          <Button 
            variant="brainsmart" 
            size="lg" 
            className="text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={scrollToCalendly}
          >
            Quero testar de graça
          </Button>
        </div>

        {/* Calendly Section */}
        <div id="calendly-section" className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-foreground">
            Agende sua experiência BrainSmart
          </h2>
          <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/brainsmart/15min" 
              style={{ minWidth: "320px", height: "700px", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
