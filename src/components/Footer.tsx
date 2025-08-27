import brainsmartLogo from "@/assets/brainsmart-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center space-y-4">
          <img 
            src={brainsmartLogo} 
            alt="BrainSmart" 
            className="h-16 w-auto opacity-80 grayscale hover:grayscale-0 transition-all duration-300"
          />
          
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tecnologia ética em saúde mental baseada em neurociência e IA
          </p>
          
          <div className="pt-6 text-sm text-muted-foreground">
            © 2024 BrainSmart. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;