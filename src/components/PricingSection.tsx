import { CheckSquare } from "lucide-react";

const factors = [
  { bold: "Náročnosti práce", text: "– jednoduché opravy jsou levnější než složité rekonstrukce." },
  { bold: "Použitých materiálů", text: "– pokud je potřeba speciální materiál, zahrneme jej do ceny." },
  { bold: "Časové náročnosti", text: "– účtujeme buď hodinově, nebo paušálně dle dohody." },
  { bold: "Lokality", text: "– v některých případech může být započítána doprava mimo běžnou oblast působnosti." },
];

const PricingSection = () => {
  return (
    <section id="cenik" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold text-foreground">
            Ceník služeb hodinového manžela
          </h2>
          <h3 className="mb-4 text-xl font-semibold text-foreground">
            Cena vždy na míru – férově a transparentně
          </h3>
          <p className="mb-6 text-muted-foreground">
            Každá zakázka je jedinečná a vyžaduje individuální přístup. Proto nemáme pevný ceník, ale nabízíme{" "}
            <strong className="text-foreground">férové a transparentní ceny</strong>, které se odvíjejí od:
          </p>

          <ul className="space-y-3">
            {factors.map((f) => (
              <li key={f.bold} className="flex items-start gap-3">
                <CheckSquare className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">{f.bold}</strong> {f.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
