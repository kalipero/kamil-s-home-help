import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-bold text-foreground">Hodinový manžel Alex</p>
            <p className="text-sm text-muted-foreground">Hodinový manžel</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a
              href="tel:+420777111222"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              777 111 222
            </a>
            <a
              href="mailto:test@seznam.cz"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              test@seznam.cz
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              Hanušovice
            </span>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Hodinový manžel Alex. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
