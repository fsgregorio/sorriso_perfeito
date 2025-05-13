
const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "Meu tratamento com Invisalign superou todas as expectativas. A equipe foi incrível do início ao fim.",
    },
    {
      name: "Carlos Oliveira",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "O clareamento dental transformou meu sorriso. Agora tenho muito mais confiança ao sorrir.",
    },
    {
      name: "Mariana Costa",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote:
        "Profissionais dedicados e atenciosos. O ambiente da clínica é super acolhedor e confortável.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-dental-pink/20 to-dental-aqua/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dental-text mb-4">
          O que nossos pacientes dizem
        </h2>
        <p className="text-xl text-center text-dental-text/80 mb-12">
          +95% de pacientes recomendam nossos serviços
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-dental-aqua">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <blockquote className="text-dental-text/80 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <p className="font-semibold text-dental-text">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
