import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-brainsmart-light-blue via-background to-brainsmart-light-orange">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transforme o{" "}
            <span className="bg-gradient-to-r from-brainsmart-blue to-brainsmart-orange bg-clip-text text-transparent">
              bem-estar mental
            </span>{" "}
            com inteligência artificial
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            A BrainSmart está em fase de testes e busca empresas e espaços de bem-estar para oferecer 
            neurofeedback inteligente e planos de ação personalizados aos seus colaboradores e clientes.
          </p>
          
          <Button variant="brainsmart" size="lg" className="text-lg px-8 py-4 h-auto">
            Quero ser um canal de bem-estar com IA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;