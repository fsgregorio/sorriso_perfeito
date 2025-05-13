
import { WhatsappIcon } from "lucide-react";

// Custom implementation of WhatsappIcon since it may not be available in lucide-react
const CustomWhatsappIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-message-circle"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

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
        className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 animate-pulse hover:animate-none"
      >
        <CustomWhatsappIcon />
        <span className="ml-2">Quero minha avaliação gratuita</span>
      </button>
    </div>
  );
};

export default StickyCTA;
