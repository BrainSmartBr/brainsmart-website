import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "A BrainSmart trouxe uma nova dimensão ao cuidado com nossos colaboradores.",
      author: "RH de empresa parceira",
      role: "Recursos Humanos"
    },
    {
      quote: "Me senti acompanhado, mesmo fora do consultório.",
      author: "Usuário beta-tester",
      role: "Paciente"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-brainsmart-light-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Depoimentos</h2>
          <p className="text-xl text-muted-foreground">
            O que nossos parceiros e usuários estão falando
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-brainsmart-blue to-brainsmart-orange rounded-full text-white">
                    <Quote className="h-5 w-5" />
                  </div>
                  <div>
                    <blockquote className="text-lg font-medium text-foreground mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-l-4 border-brainsmart-blue pl-4">
                      <p className="font-semibold text-brainsmart-blue">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
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

export default Testimonials;