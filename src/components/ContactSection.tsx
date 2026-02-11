import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Zadejte jméno";
    if (!form.email.trim()) e.email = "Zadejte e-mail";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Neplatný e-mail";
    if (!form.message.trim()) e.message = "Napište zprávu";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    toast({
      title: "Zpráva odeslána!",
      description: "Děkuji, ozvu se vám co nejdříve.",
    });
    setForm({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <section id="kontakt" className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Kontakt
        </h2>

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Neváhejte mě kontaktovat — rád vám pomohu s čímkoliv kolem
              domácnosti.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+420777111222"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">777 111 222</span>
              </a>

              <a
                href="mailto:test@seznam.cz"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">test@seznam.cz</span>
              </a>

              <div className="flex items-center gap-3 text-foreground">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">Hanušovice</span>
              </div>
            </div>

            <Button size="lg" className="mt-4 w-full sm:w-auto" asChild>
              <a href="tel:+420777111222">
                <Phone className="mr-2 h-5 w-5" />
                Zavolat nyní
              </a>
            </Button>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Jméno</Label>
              <Input
                id="name"
                placeholder="Vaše jméno"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-destructive">{errors.name}</p>
              )}
            </div>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="vas@email.cz"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">{errors.email}</p>
              )}
            </div>
            <div>
              <Label htmlFor="message">Zpráva</Label>
              <Textarea
                id="message"
                placeholder="Popište, s čím potřebujete pomoct..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Odeslat zprávu
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
