import {
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Phone,
} from "lucide-react";
import viewLogo from "@/assets/imgs/company/View-logo.png";
import febrafarLogo from "@/assets/home/febrafar.webp";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const institucionalLinks = [
  { label: "Quem somos", href: "#" },
  { label: "Associativismo", href: "#" },
  { label: "Compliance", href: "#" },
  { label: "Eventos", href: "#" },
  { label: "Privacidade", href: "#" },
  { label: "Soluções", href: "#" },
];

const associadosLinks = [
  { label: "Parceiros", href: "#" },
  { label: "Notícias", href: "#" },
  { label: "Contato", href: "#" },
  { label: "Fale conosco", href: "#" },
  { label: "Área restrita", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-brand relative w-full overflow-hidden px-6 py-16 text-white">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 grid gap-12 lg:grid-cols-4">
          <div className="space-y-6">
            <img className="w-40" src={viewLogo} alt="Febrafar logo" />
            <p className="text-sm leading-relaxed">
              Federação Brasileira das Redes Associativistas e Independentes de
              Farmácias.
            </p>

            <ul className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white transition-colors hover:bg-white hover:text-orange-700"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Institucional" className="space-y-4">
            <h3 className="mb-6 text-lg font-semibold">Institucional</h3>
            <ul className="space-y-3 text-sm">
              {institucionalLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:underline">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Associados" className="space-y-4">
            <h3 className="mb-6 text-lg font-semibold">Associados</h3>
            <ul className="space-y-3 text-sm">
              {associadosLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:underline">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <address className="space-y-4 not-italic">
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 lg:h-10 lg:w-10" />
              <p className="text-sm">
                R. Domingos de Morais, 2709 - Vila Mariana - São Paulo
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 shrink-0" />
              <a href="tel:+551132853494" className="text-sm hover:underline">
                (11) 3285-3494
              </a>
            </div>

            <div className="w-44 pt-4">
              <a href="https://febrafar.com.br/" className="">
                <img src={febrafarLogo} alt="Febrafar Logo" />
              </a>
            </div>
          </address>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
            <p>
              © {new Date().getFullYear()} Febrafar. Todos os direitos
              reservados
            </p>
            <a href="#" className="hover:underline">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
