
import { MessageCircleIcon } from "lucide-react";

const StickyCTA = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number and message
    const phoneNumber = "5511999999999";
    const message = "Olá! Gostaria de agendar uma avaliação gratuita.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 flex justify-center md:justify-end">
      <button
        onClick={handleWhatsAppClick}
        className="flex items-center bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
      >
        <MessageCircleIcon className="h-5 w-5" />
        <span className="ml-2">Quero minha avaliação gratuita</span>
      </button>
    </div>
  );
};

export default StickyCTA;
