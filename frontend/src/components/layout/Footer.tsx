import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">
                  A
                </span>
              </div>
              <span className="font-display text-xl font-semibold">
                DrugRx
              </span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Creating exceptional digital experiences that transform businesses and delight users.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-background/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "UI/UX Design",
                "Mobile Apps",
                "Digital Strategy",
              ].map((service) => (
                <li key={service}>
                  <span className="text-background/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                <span className="text-background/70">
                  123 Innovation Street<br />
                  Tech City, TC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-background/70 hover:text-primary transition-colors duration-200"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <a
                  href="mailto:hello@DrugRx.com"
                  className="text-background/70 hover:text-primary transition-colors duration-200"
                >
                  hello@DrugRx.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} DrugRx. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/50 hover:text-primary text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-background/50 hover:text-primary text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
