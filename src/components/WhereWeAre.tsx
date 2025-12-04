import pateo76Logo from "@/assets/pateo76.png";
import aibrasilLogo from "@/assets/aibrasil.jpeg";
import startupSummitLogo from "@/assets/startup-summit.png";
import weworkLogo from "@/assets/wework.png";

const partners = [
  { name: "Pateo76", logo: pateo76Logo },
  { name: "AI Brasil", logo: aibrasilLogo },
  { name: "Startup Summit 2025", logo: startupSummitLogo },
  { name: "WeWork", logo: weworkLogo },
];

const WhereWeAre = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-brainsmart-light-blue/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Onde você pode testar a BrainSmart
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            Já monitoramos o bem-estar cerebral de mais de 50 pessoas em eventos e espaços parceiros em São Paulo.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Levamos nosso ponto de bem-estar móvel para cafés, coworkings, hubs de inovação e empresas.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-card border border-border shadow-sm flex items-center justify-center p-3 group-hover:border-brainsmart-blue/50 transition-colors">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereWeAre;
