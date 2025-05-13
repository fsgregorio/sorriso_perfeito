
import { MapPin } from "lucide-react";

const Location = () => {
  const openGoogleMaps = () => {
    // Replace with your actual location coordinates
    window.open(
      "https://www.google.com/maps?q=-23.550520,-46.633308",
      "_blank"
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dental-text mb-12">
          Nossa Localização
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-md h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976748967504!2d-46.6354965842855!3d-23.550520184685693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59aa5d2ca63f%3A0x21b7d9c48ce02e41!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1620305823288!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Mapa da localização"
            ></iframe>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-dental-text mb-4">
                Clínica Odontológica
              </h3>
              <p className="text-dental-text/80 mb-2 flex items-center justify-center md:justify-start">
                <MapPin className="w-5 h-5 mr-2 text-dental-aqua" />
                Av. Paulista, 1000, Bela Vista
              </p>
              <p className="text-dental-text/80 mb-4">São Paulo - SP, 01310-100</p>
              <button
                onClick={openGoogleMaps}
                className="text-dental-aqua hover:text-dental-aqua/80 font-semibold underline underline-offset-2"
              >
                Abrir no Google Maps
              </button>
            </div>
            <div className="bg-dental-offwhite p-6 rounded-xl shadow-sm w-full">
              <h4 className="text-xl font-semibold text-dental-text mb-4">
                Horário de Funcionamento
              </h4>
              <div className="space-y-2 text-dental-text/80">
                <p className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span>08:00 - 19:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Sábado:</span>
                  <span>08:00 - 12:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
