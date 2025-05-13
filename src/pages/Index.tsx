
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import Header from "@/components/Header";
import InvisalignProcess from "@/components/InvisalignProcess";
import InvisalignComparison from "@/components/InvisalignComparison";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import FAQ from "@/components/FAQ";
import AboutClinic from "@/components/AboutClinic";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16"> {/* Space for fixed header */}
        <Hero />
        <ValueProposition />
        <InvisalignProcess />
        <InvisalignComparison />
        <BeforeAfterGallery />
        <Services />
        <AboutClinic />
        <Testimonials />
        <FAQ />
        <Location />
        <Footer />
        <StickyCTA />
      </div>
    </div>
  );
};

export default Index;
