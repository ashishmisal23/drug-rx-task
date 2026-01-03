import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Carousel from "@/components/features/Carousel";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DrugRx - Digital Excellence | Web Development & Design Agency</title>
        <meta
          name="description"
          content="DrugRx is a premier digital agency specializing in web development, UI/UX design, and digital strategy. Transform your digital presence with our expert team."
        />
        <meta
          name="keywords"
          content="web development, UI/UX design, digital agency, mobile apps, digital strategy"
        />
        <link rel="canonical" href="https://DrugRx.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="DrugRx - Digital Excellence" />
        <meta
          property="og:description"
          content="Transform your digital presence with our expert team of designers and developers."
        />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "DrugRx",
            description: "Digital agency specializing in web development and design",
            url: "https://DrugRx.com",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-234-567-890",
              contactType: "customer service",
            },
          })}
        </script>
      </Helmet>

      <Layout>
        <Carousel />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </Layout>
    </>
  );
};

export default Index;
