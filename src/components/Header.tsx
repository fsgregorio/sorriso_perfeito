
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
    // Replace with your actual WhatsApp number and message
    const phoneNumber = "5511999999999";
    const message = "Olá! Gostaria de agendar uma avaliação gratuita.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          <div className="flex items-center space-x-4">
            <a
              href="tel:+551199999999"
              className="hidden md:block text-dental-text hover:text-pink-500 transition-colors"
            >
              (11) 99999-9999
            </a>
            
            <Button
              onClick={handleWhatsAppClick}
              className="hidden md:flex bg-pink-500 hover:bg-pink-600 text-white"
            >
              Agendar avaliação
            </Button>
            
            <button 
              className="md:flex"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-dental-text" />
              ) : (
                <MenuIcon className="h-6 w-6 text-dental-text" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu - keeping all options for mobile */}
      {isMobileMenuOpen && (
        <div className="bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav>
              <ul className="flex flex-col space-y-3">
                <li>
                  <a
                    href="#servicos"
                    className="block py-2 text-dental-text hover:text-pink-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#invisalign-process"
                    className="block py-2 text-dental-text hover:text-pink-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Como funciona
                  </a>
                </li>
                <li>
                  <a
                    href="#invisalign-comparison"
                    className="block py-2 text-dental-text hover:text-pink-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Comparação
                  </a>
                </li>
                <li>
                  <a
                    href="#before-after"
                    className="block py-2 text-dental-text hover:text-pink-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Resultados
                  </a>
                </li>
                <li>
                  <a
                    href="#depoimentos"
                    className="block py-2 text-dental-text hover:text-pink-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="block py-2 text-dental-text hover:text-pink-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre"
                    className="block py-2 text-dental-text hover:text-pink-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="block py-2 text-dental-text hover:text-pink-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contato
                  </a>
                </li>
                <li>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white mt-2"
                  >
                    Agendar avaliação gratuita
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
