import { useState } from "react";
import { Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Vyplňte prosím všechna povinná pole.", variant: "destructive" });
      return;
    }
    toast({ title: "Zpráva odeslána!", description: "Děkuji, ozvu se vám co nejdříve." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="domu" className="relative bg-primary py-20 md:py-28 lg:py-36">
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — headline & CTA */}
          <div className="text-primary-foreground">
            <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              Potřebujete rychlou opravu nebo montáž? Zavolejte spolehlivého hodinového manžela!
            </h1>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              Potřebujete opravit, smontovat nebo vylepšit něco ve svém domě či bytě? Jsem zkušený hodinový manžel, který vám pomůže s drobnými opravami, montáží nábytku, zednickými pracemi, malováním, zahradními pracemi a mnohem více. Pracuji spolehlivě, rychle a za férové ceny.
            </p>
            <a
              href="tel:+420777111222"
              className="inline-flex items-center gap-3 text-lg font-semibold text-primary-foreground transition-opacity hover:opacity-80 md:text-xl"
            >
              <Phone className="h-6 w-6" />
              Zavolejte: +420 777 111 222
            </a>
          </div>

          {/* Right — contact form card */}
          <div className="rounded-xl bg-card p-6 shadow-xl sm:p-8">
            <h2 className="mb-1 text-xl font-bold text-card-foreground">
              Zanechte kontakt
            </h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Vyplňte formulář a my se vám ozveme co nejdříve!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Jméno"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <Input
                type="email"
                placeholder="Váš Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <Input
                type="tel"
                placeholder="Vaše telefonní číslo"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <Textarea
                placeholder="Vaše zpráva"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <Button type="submit" size="lg">
                <Send className="mr-2 h-4 w-4" />
                Zavolejte mi
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
