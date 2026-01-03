import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "Transform Your Digital Presence",
    subtitle: "We craft exceptional web experiences that captivate audiences and drive results.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=80",
  },
  {
    id: 2,
    title: "Innovation Meets Excellence",
    subtitle: "Cutting-edge solutions tailored to your unique business needs and goals.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
  },
  {
    id: 3,
    title: "Your Success, Our Mission",
    subtitle: "Partner with us to unlock your brand's full potential in the digital landscape.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-foreground/60" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-4">
            <div className="container-custom text-center">
              <h1
                className={`font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6 max-w-4xl mx-auto leading-tight transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                {slide.title}
              </h1>
              <p
                className={`text-background/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                {slide.subtitle}
              </p>
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center h-14 px-10 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-glow hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center h-14 px-10 rounded-xl border-2 border-background/30 text-background font-semibold hover:bg-background/10 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/20 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/20 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-background/40 hover:bg-background/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
