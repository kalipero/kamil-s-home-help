import { CheckCircle } from "lucide-react";

const benefits = [
  "Spolehlivost a dochvilnost",
  "Férové ceny bez skrytých poplatků",
  "Široký rozsah služeb pod jednou střechou",
  "Rychlá domluva a flexibilní termíny",
  "Čistota a pořádek po dokončení práce",
];

const AboutSection = () => {
  return (
    <section id="o-mne" className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
            O mně
          </h2>
          <p className="mb-6 text-center text-lg leading-relaxed text-muted-foreground">
            Jsem Alex a nabízím kompletní řemeslné služby pro domácnosti i
            firmy v okolí Hanušovic. Ať už potřebujete opravit kapající kohoutek,
            pověsit poličku nebo provést drobnou renovaci — rád vám pomohu.
          </p>
          <p className="mb-8 text-center text-lg leading-relaxed text-muted-foreground">
            S každou zakázkou přistupuji poctivě a svědomitě. Záleží mi na tom,
            abyste byli spokojeni s výsledkem i s celkovým průběhem spolupráce.
          </p>

          <div className="mx-auto max-w-md">
            <h3 className="mb-4 text-center text-lg font-semibold text-foreground">
              Co můžete očekávat
            </h3>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
