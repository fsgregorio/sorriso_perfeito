import { Heart } from "lucide-react";

const AboutClinic = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Nossa equipe"
              className="rounded-xl shadow-md w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <Heart className="text-pink-500 mr-3 h-6 w-6" />
              <h2 className="text-3xl font-bold text-dental-text">Sobre nossa clínica</h2>
            </div>
            <p className="text-xl font-light italic mb-6 text-dental-text">
              "Transformamos sorrisos, melhoramos vidas."
            </p>
            <p className="mb-4 text-gray-600">
              Na Sorriso Perfeito, acreditamos que um sorriso bonito e saudável transforma não só sua aparência, mas também sua autoestima e qualidade de vida. Nossa clínica foi fundada com o compromisso de oferecer tratamentos odontológicos de excelência em um ambiente acolhedor e confortável.
            </p>
            <p className="mb-4 text-gray-600">
              Contamos com uma equipe qualificada de especialistas em odontologia estética, certificados nas mais modernas técnicas, incluindo Invisalign. Nossa abordagem é centrada no paciente, com planos de tratamento personalizados que respeitam suas necessidades e objetivos.
            </p>
            <p className="text-gray-600">
              Utilizamos tecnologia de ponta e materiais de alta qualidade para garantir resultados excepcionais em todos os procedimentos. Venha conhecer nossa clínica e descubra como podemos transformar o seu sorriso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClinic;
