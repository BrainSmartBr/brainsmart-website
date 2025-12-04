import { Button } from "@/components/ui/button";
import { Building2, Users, Sparkles } from "lucide-react";

const B2BSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brainsmart-light-orange/50 via-background to-brainsmart-light-blue/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brainsmart-orange/10 text-brainsmart-orange px-4 py-2 rounded-full mb-6">
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-medium">Para empresas e espaços</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Leve um ponto de bem-estar BrainSmart para o seu espaço
          </h2>

          <div className="space-y-4 mb-10 text-lg text-muted-foreground max-w-2xl mx-auto">
            <p className="flex items-center gap-3 justify-center">
              <Sparkles className="w-5 h-5 text-brainsmart-orange flex-shrink-0" />
              Transforme seu café, coworking ou empresa em um canal de bem-estar com neurotecnologia em 1 minuto.
            </p>
            <p className="flex items-center gap-3 justify-center">
              <Users className="w-5 h-5 text-brainsmart-blue flex-shrink-0" />
              Atraia, engaje e cuide de clientes, colaboradores e comunidade com uma experiência de monitoramento cerebral ao vivo.
            </p>
          </div>

          <Button 
            variant="brainsmart" 
            size="lg" 
            className="text-lg px-8 py-5 h-auto"
            asChild
          >
            <a 
              href="https://u0d0j.share.hsforms.com/20kaaARWsSa-crC5DWzWMZw" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Quero ser um canal de bem-estar
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default B2BSection;
