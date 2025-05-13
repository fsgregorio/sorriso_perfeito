
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <div className="text-dental-text font-bold text-2xl">
            Sorriso Perfeito
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#servicos"
                  className="text-dental-text hover:text-dental-aqua transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-dental-text hover:text-dental-aqua transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-dental-text hover:text-dental-aqua transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-dental-text hover:text-dental-aqua transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          <a
            href="tel:+551199999999"
            className="text-dental-text hover:text-dental-aqua transition-colors"
          >
            (11) 99999-9999
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
