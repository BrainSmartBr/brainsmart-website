import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TestTube2 } from "lucide-react";

const BetaTester = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-brainsmart-light-orange to-background border-brainsmart-orange/20">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-brainsmart-orange to-brainsmart-blue rounded-full text-white">
                <TestTube2 className="h-8 w-8" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quer testar a BrainSmart como usuário?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Inscreva-se como beta-tester individual e receba um plano de ação 
              personalizado para seu bem-estar mental.
            </p>
            
            <Button variant="brainsmart-outline" size="lg" className="text-lg px-8 py-4 h-auto">
              Quero testar como beta-tester individual
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BetaTester;