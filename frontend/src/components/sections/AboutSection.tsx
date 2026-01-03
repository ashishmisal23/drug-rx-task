import { CheckCircle, Users, Award, Zap } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Our talented professionals bring years of industry experience to every project.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in design and development across multiple industries.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile methodologies ensure timely delivery without compromising on quality.",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Team Members" },
  { value: "12+", label: "Years Experience" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-wrapper bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            We Create Digital
            <span className="text-gradient"> Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're a passionate team of designers, developers, and strategists dedicated to 
            crafting exceptional digital experiences that drive growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why Choose DrugRx?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We combine creativity with technical expertise to deliver solutions that not only 
              look stunning but also perform exceptionally. Our client-first approach ensures 
              your vision becomes reality.
            </p>
            <ul className="space-y-4">
              {[
                "Custom solutions tailored to your needs",
                "Transparent communication throughout",
                "Ongoing support and maintenance",
                "Cutting-edge technologies and practices",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg hidden md:block">
              <p className="font-display text-3xl font-bold">12+</p>
              <p className="text-primary-foreground/80">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6">
              <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
