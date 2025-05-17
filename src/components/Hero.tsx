import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number and message
    const phoneNumber = "5511999999999";
    const message = "Olá! Gostaria de agendar uma avaliação gratuita.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-white opacity-60"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-dental-text mb-4 leading-tight">
              O sorriso perfeito começa aqui
            </h1>
            <p className="text-xl md:text-2xl text-dental-text/80 mb-8 max-w-lg">
              Planos justos, atendimento acolhedor e resultados que você merece
            </p>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <PhoneIcon className="mr-2 h-5 w-5" /> Agende sua avaliação gratuita
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/lovable-uploads/1_hero.png"
                alt="Sorriso perfeito"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dental-text/30 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
