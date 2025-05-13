
import { PhoneIcon, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dental-text text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Clínica Odontológica</h3>
            <p className="mb-4 text-gray-300">
              Transformando sorrisos e elevando a autoestima dos nossos pacientes
              desde 2010.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <PhoneIcon className="w-5 h-5 mr-2" />
                (11) 99999-9999
              </p>
              <p className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2" />
                Av. Paulista, 1000, Bela Vista, São Paulo - SP
              </p>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm pt-6 border-t border-gray-700">
          <p>© {currentYear} Clínica Odontológica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
