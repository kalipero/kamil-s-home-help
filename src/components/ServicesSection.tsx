import { Wrench, WashingMachine, Paintbrush, Droplets, Zap, TreePine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Drobné opravy a montáže",
    description: "Montáž nábytku, poliček, garnýží a dalšího vybavení domácnosti.",
  },
  {
    icon: WashingMachine,
    title: "Instalace spotřebičů",
    description: "Zapojení praček, myček, svítidel a dalších domácích spotřebičů.",
  },
  {
    icon: Paintbrush,
    title: "Údržba a renovace",
    description: "Malování, drobné zednické práce a celková údržba interiérů.",
  },
  {
    icon: Droplets,
    title: "Instalatérské služby",
    description: "Výměna baterií, opravy potrubí a řešení problémů s vodou.",
  },
  {
    icon: Zap,
    title: "Elektrikářské práce",
    description: "Drobné elektrické opravy, zapojení zásuvek a vypínačů.",
  },
  {
    icon: TreePine,
    title: "Zahradní práce",
    description: "Sekání trávy, drobné zahradní úpravy a údržba venkovních prostor.",
  },
];

const ServicesSection = () => {
  return (
    <section id="sluzby" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Služby
        </h2>
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-none bg-accent/40 shadow-none transition-colors hover:bg-accent/70"
            >
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
