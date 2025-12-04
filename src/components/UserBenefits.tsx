import { Brain, Sparkles, Heart } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    text: "Medimos em poucos minutos indicadores objetivos do seu estado mental, como foco e estresse.",
  },
  {
    icon: Sparkles,
    text: "Você recebe um plano de ação personalizado gerado por IA para melhorar sua rotina de bem-estar.",
  },
  {
    icon: Heart,
    text: "A BrainSmart complementa terapia e acompanhamento profissional, sem substituir psicólogos ou médicos.",
  },
];

const UserBenefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Como a BrainSmart cuida do seu bem-estar
          </h2>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-5 p-6 rounded-xl bg-card border border-border hover:border-brainsmart-blue/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brainsmart-blue to-brainsmart-orange flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-lg text-foreground leading-relaxed pt-2">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserBenefits;
