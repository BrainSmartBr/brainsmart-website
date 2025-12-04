import { Card, CardContent } from "@/components/ui/card";
import tiaraImg from "@/assets/tiara.png";
import panelImg from "@/assets/panel.png";
import diagnosticoImg from "@/assets/diagnostico-ai.png";

const steps = [
  {
    number: "1",
    title: "Coloque a tiara",
    description: "Você coloca a tiara de monitoramento cerebral e relaxa por 1 minuto enquanto capturamos seus sinais em tempo real.",
    image: tiaraImg,
  },
  {
    number: "2",
    title: "Veja seus sinais na hora",
    description: "Na tela, você vê seus principais indicadores de foco, engajamento, estresse e excitação de forma simples e visual.",
    image: panelImg,
  },
  {
    number: "3",
    title: "Receba um plano com IA",
    description: "A inteligência artificial gera um plano de ação personalizado, com sugestões práticas para cuidar do seu bem-estar ao longo das semanas.",
    image: diagnosticoImg,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Como funciona na prática
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Em apenas alguns minutos, você entende seu estado mental e recebe orientações personalizadas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-2 border-border hover:border-brainsmart-blue/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-brainsmart-light-blue to-brainsmart-light-orange">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-brainsmart-blue flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                  {step.number}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
