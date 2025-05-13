
import { CheckCircle } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      title: "Excelência Certificada",
      description: "Profissionais credenciados Invisalign",
      icon: <CheckCircle className="h-10 w-10 text-dental-aqua" />,
    },
    {
      title: "Transparência Total",
      description: "Orçamento claro, sem custos ocultos",
      icon: <CheckCircle className="h-10 w-10 text-dental-aqua" />,
    },
    {
      title: "Conforto e Bem-Estar",
      description: "Atendimento humanizado em ambiente acolhedor",
      icon: <CheckCircle className="h-10 w-10 text-dental-aqua" />,
    },
    {
      title: "Resultados Comprovados",
      description: "Sorrisos transformados com fotos de antes e depois",
      icon: <CheckCircle className="h-10 w-10 text-dental-aqua" />,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dental-text mb-12">
          Por que escolher nossa clínica?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-dental-offwhite p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-dental-text mb-2">
                  {value.title}
                </h3>
                <p className="text-dental-text/80">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
