import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/features/ContactForm";
import MapSection from "@/components/features/MapSection";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@DrugRx.com",
    href: "mailto:hello@DrugRx.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Innovation St, Tech City",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri: 9AM - 6PM",
    href: null,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-wrapper bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Start a
            <span className="text-gradient"> Conversation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll 
            respond as soon as possible.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-md border border-border">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Send us a message
            </h3>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h4 className="font-medium text-foreground mb-1">{info.title}</h4>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Response Promise */}
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Quick Response Promise
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We typically respond within 24 hours during business days. For urgent 
                    matters, give us a call directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <MapSection />
      </div>
    </section>
  );
};

export default ContactSection;
