import { Phone, ArrowDown, Wrench, WashingMachine, Paintbrush, Droplets, Zap, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickServices = [
  { icon: Wrench, label: "Opravy" },
  { icon: WashingMachine, label: "Instalace" },
  { icon: Paintbrush, label: "Renovace" },
  { icon: Droplets, label: "Instalatér" },
  { icon: Zap, label: "Elektrikář" },
  { icon: TreePine, label: "Zahrada" },
];

const HeroSection = () => {
  return (
    <section id="domu" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Placeholder photo */}
          <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-accent">
            <Wrench className="h-12 w-12 text-primary" />
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Kamil Vavřička
          </h1>
          <p className="mb-2 text-xl font-medium text-primary md:text-2xl">
            Hodinový manžel
          </p>
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
            Spolehlivé řemeslné služby pro váš domov. Od drobných oprav po
            komplexní údržbu — postarám se o vše, co potřebujete.
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="tel:+420777111222">
                <Phone className="mr-2 h-5 w-5" />
                Zavolat
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#kontakt">
                <ArrowDown className="mr-2 h-5 w-5" />
                Kontaktovat
              </a>
            </Button>
          </div>

          {/* Quick service icons */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {quickServices.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
