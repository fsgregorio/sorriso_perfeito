
const Services = () => {
  const services = [
    {
      title: "Clareamento dental profissional",
      description:
        "Tenha um sorriso mais branco e brilhante com nosso tratamento de clareamento profissional.",
      image:
        "https://images.unsplash.com/photo-1606811842243-4b555ba5417a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      title: "Alinhamento ortodôntico com Invisalign",
      description:
        "Alinhe seus dentes de forma discreta e confortável com a tecnologia Invisalign.",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Gengivoplastia de precisão",
      description:
        "Procedimento de contorno gengival para harmonizar o seu sorriso.",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1068&q=80",
    },
    {
      title: "Estética dentária geral",
      description:
        "Transformação completa do seu sorriso com procedimentos estéticos de última geração.",
      image:
        "https://images.unsplash.com/photo-1620775997650-c1e5a4df78e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80",
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
