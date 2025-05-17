import { Check } from "lucide-react";

const InvisalignProcess = () => {
  const steps = [
    {
      title: "Escaneamento 3D do seu sorriso",
      description: "Captura digital precisa e sem desconforto.",
      image: "/lovable-uploads/2_escanamento_3D.png",
    },
    {
      title: "Simulação do resultado final",
      description: "Veja como será seu sorriso antes de iniciar o tratamento.",
      image: "/lovable-uploads/3_simulacao_resultado_final.png",
    },
    {
      title: "Início do uso dos alinhadores invisíveis",
      description: "Troque os alinhadores a cada duas semanas e acompanhe o progresso.",
      image: "/lovable-uploads/4_colocando_alinhadores.png",
    },
    {
      title: "Sorriso alinhado, sem aparelhos metálicos",
      description: "Resultado final com conforto e discrição durante todo o processo.",
      image: "/lovable-uploads/5_sorriso_alinhado.png",
    },
  ];

  return (
    <section id="invisalign-process" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-dental-text">
          Como funciona o Invisalign?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-pink-100 flex flex-col items-center text-center transition-all hover:shadow-lg"
            >
              <div className="mb-4 bg-pink-50 rounded-full p-3">
                <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-600 font-bold text-xl">
                  {index + 1}
                </div>
              </div>
              <div className="rounded-lg overflow-hidden mb-4 h-48 w-full">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dental-text">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvisalignProcess;
