import { Code, Palette, Smartphone, TrendingUp, Globe, Shield } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
    color: "primary",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that enhance user experience and drive engagement.",
    color: "secondary",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver seamless experiences.",
    color: "primary",
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy",
    description: "Data-driven strategies to maximize your online presence and achieve business goals.",
    color: "secondary",
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description: "Powerful online stores with secure payments and inventory management systems.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Maintenance",
    description: "Ongoing support, updates, and security monitoring to keep your digital assets running smoothly.",
    color: "secondary",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-wrapper bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We
            <span className="text-gradient"> Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card border border-border overflow-hidden hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Background */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  service.color === "primary" ? "bg-primary" : "bg-secondary"
                }`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                    service.color === "primary"
                      ? "bg-primary/10 group-hover:bg-primary-foreground/20"
                      : "bg-secondary/10 group-hover:bg-secondary-foreground/20"
                  }`}
                >
                  <service.icon
                    className={`w-7 h-7 transition-colors duration-500 ${
                      service.color === "primary"
                        ? "text-primary group-hover:text-primary-foreground"
                        : "text-secondary group-hover:text-secondary-foreground"
                    }`}
                  />
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary-foreground mb-3 transition-colors duration-500">
                  {service.title}
                </h3>

                <p className="text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed transition-colors duration-500">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <span className="text-primary-foreground font-medium">Learn more</span>
                  <svg
                    className="w-4 h-4 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
