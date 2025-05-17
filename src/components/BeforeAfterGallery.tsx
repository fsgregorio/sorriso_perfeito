import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const BeforeAfterGallery = () => {
  const transformations = [
    {
      before: "/lovable-uploads/6_antes_depois1.png",
      after: "/lovable-uploads/6_antes_depois1.png",
      name: "Ana C.",
      description: "Correção de espaçamento e alinhamento em 8 meses"
    },
    {
      before: "/lovable-uploads/7_antes_depois2.png",
      after: "/lovable-uploads/7_antes_depois2.png",
      name: "Júlia P.",
      description: "Alinhamento completo em apenas 6 meses"
    },
    {
      before: "/lovable-uploads/8_antes_depois3.png",
      after: "/lovable-uploads/8_antes_depois3.png",
      name: "Rafael M.",
      description: "Correção de mordida cruzada em 10 meses"
    },
  ];

  return (
    <section id="before-after" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-dental-text">
          Sorrisos reais transformados
        </h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {transformations.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="overflow-hidden rounded-xl shadow-md bg-white border border-pink-100 h-full">
                    <div className="grid grid-cols-2 gap-2 p-2">
                      <div className="overflow-hidden rounded-lg">
                        <AspectRatio ratio={3/4}>
                          <div className="relative w-full h-full">
                            <img 
                              src={item.before} 
                              alt={`Antes - ${item.name}`} 
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute bottom-0 left-0 bg-pink-500 text-white px-2 py-1 text-xs font-semibold">
                              ANTES
                            </div>
                          </div>
                        </AspectRatio>
                      </div>
                      <div className="overflow-hidden rounded-lg">
                        <AspectRatio ratio={3/4}>
                          <div className="relative w-full h-full">
                            <img 
                              src={item.after} 
                              alt={`Depois - ${item.name}`} 
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute bottom-0 left-0 bg-pink-500 text-white px-2 py-1 text-xs font-semibold">
                              DEPOIS
                            </div>
                          </div>
                        </AspectRatio>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative static translate-y-0 mr-2" />
            <CarouselNext className="relative static translate-y-0 ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
