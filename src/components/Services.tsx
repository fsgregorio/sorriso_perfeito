const Services = () => {
  const services = [
    {
      title: "Clareamento dental profissional",
      description:
        "Tenha um sorriso mais branco e brilhante com nosso tratamento de clareamento profissional.",
      image:
        "/lovable-uploads/9_clareamento_dental.png",
    },
    {
      title: "Alinhamento ortodôntico com Invisalign",
      description:
        "Alinhe seus dentes de forma discreta e confortável com a tecnologia Invisalign.",
      image:
        "/lovable-uploads/10_alinhamento_ortodontico.png",
    },
    {
      title: "Gengivoplastia de precisão",
      description:
        "Procedimento de contorno gengival para harmonizar o seu sorriso.",
      image:
        "/lovable-uploads/11_gengivoplastia.jpg",
    },
    {
      title: "Estética dentária geral",
      description:
        "Transformação completa do seu sorriso com procedimentos estéticos de última geração.",
      image:
        "/lovable-uploads/12_estetica_dentaria.png",
    },
  ];

  return (
    <section className="py-16 bg-dental-offwhite">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dental-text mb-12">
          Nossos Serviços Estéticos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dental-text mb-2">
                  {service.title}
                </h3>
                <p className="text-dental-text/80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
