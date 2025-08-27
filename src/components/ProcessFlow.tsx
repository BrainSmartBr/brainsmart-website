import { Card, CardContent } from "@/components/ui/card";
import { 
  UserCheck, 
  UserPlus, 
  MessageSquare, 
  Lightbulb, 
  TrendingUp, 
  FileText, 
  Target, 
  Users 
} from "lucide-react";

const ProcessFlow = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Terapeuta faz login no sistema",
      description: "Acesso seguro à plataforma BrainSmart"
    },
    {
      icon: UserPlus,
      title: "Terapeuta registra o paciente",
      description: "Criação do perfil e histórico do paciente"
    },
    {
      icon: MessageSquare,
      title: "Paciente relata uma preocupação",
      description: "Compartilhamento de questões e sentimentos"
    },
    {
      icon: Lightbulb,
      title: "IA sugere três soluções",
      description: "Algoritmos geram recomendações personalizadas"
    },
    {
      icon: TrendingUp,
      title: "Terapeuta acompanha o progresso",
      description: "Monitoramento contínuo da evolução"
    },
    {
      icon: FileText,
      title: "Relatório é gerado",
      description: "Análise automática dos dados coletados"
    },
    {
      icon: Target,
      title: "Relatório determina ação baseada no paciente",
      description: "Insights específicos para cada caso"
    },
    {
      icon: Users,
      title: "Plano de ação é criado com o paciente",
      description: "Desenvolvimento colaborativo do tratamento"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona</h2>
          <p className="text-xl text-muted-foreground">
            Jornada completa do paciente com suporte de IA
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brainsmart-blue to-brainsmart-orange rounded-full p-3 text-white">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="pt-8">
                  <div className="text-sm font-bold text-brainsmart-blue mb-2">
                    Etapa {index + 1}
                  </div>
                  <h3 className="font-semibold text-sm mb-3 text-foreground leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <img 
            src="/lovable-uploads/e5574afb-094e-4b1e-ba2f-93045fd7e38c.png" 
            alt="Fluxo visual completo do processo terapêutico BrainSmart com IA" 
            className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;