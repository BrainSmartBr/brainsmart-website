import { Card, CardContent } from "@/components/ui/card";
import { Activity, BarChart3, HeadphonesIcon, Award } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Activity,
      title: "Monitoramento de bem-estar com neurofeedback em tempo real",
      description: "Acompanhamento contínuo do estado mental através de tecnologia avançada"
    },
    {
      icon: BarChart3,
      title: "Relatórios automáticos e planos de ação personalizados",
      description: "Insights detalhados e recomendações específicas para cada caso"
    },
    {
      icon: HeadphonesIcon,
      title: "Acompanhamento contínuo com suporte técnico e terapêutico",
      description: "Assistência especializada durante todo o processo de implementação"
    },
    {
      icon: Award,
      title: "Validação científica e diferencial competitivo",
      description: "Tecnologia baseada em neurociência com respaldo científico comprovado"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-brainsmart-light-blue to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefícios para empresas e espaços parceiros
          </h2>
          <p className="text-xl text-muted-foreground">
            Tecnologia de ponta para revolucionar o cuidado com a saúde mental
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-brainsmart-blue to-brainsmart-orange rounded-lg text-white">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;