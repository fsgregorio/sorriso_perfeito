
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";

const StickyCTA = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999";
    const message = "Olá! Gostaria de agendar uma avaliação gratuita para Invisalign.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-transform duration-500 ${
        isScrolled ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
      }`}
    >
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <PhoneIcon className="mr-2 h-5 w-5" /> Quero minha avaliação gratuita
      </Button>
    </div>
  );
};

export default StickyCTA;
