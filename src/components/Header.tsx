import { Button } from "@/components/ui/button";
import brainsmartLogo from "@/assets/brainsmart-logo.png";

const Header = () => {
  const scrollToCalendly = () => {
    const calendlySection = document.getElementById("calendly-section");
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={brainsmartLogo} 
            alt="BrainSmart" 
            className="h-10 w-auto"
          />
        </div>
        
        <Button 
          variant="brainsmart" 
          size="lg" 
          onClick={scrollToCalendly}
        >
          Quero testar de graça
        </Button>
      </div>
    </header>
  );
};

export default Header;
