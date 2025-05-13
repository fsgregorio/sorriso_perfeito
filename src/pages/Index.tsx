
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-dental-offwhite">
      <Header />
      <div className="pt-16"> {/* Space for fixed header */}
        <Hero />
        <ValueProposition />
        <Services />
        <Testimonials />
        <Location />
        <Footer />
        <StickyCTA />
      </div>
    </div>
  );
};

export default Index;
