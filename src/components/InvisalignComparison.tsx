
import { Check, X } from "lucide-react";

const InvisalignComparison = () => {
  const comparisonPoints = [
    {
      feature: "Aparência discreta",
      invisalign: true,
      traditional: false,
    },
    {
      feature: "Conforto no dia a dia",
      invisalign: true,
      traditional: false,
    },
    {
      feature: "Sem restrição alimentar",
      invisalign: true,
      traditional: false,
    },
    {
      feature: "Facilidade de higiene",
      invisalign: true,
      traditional: false,
    },
    {
      feature: "Removível quando necessário",
      invisalign: true,
      traditional: false,
    },
  ];

  return (
    <section id="invisalign-comparison" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-dental-text">
          Por que Invisalign é diferente?
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 font-medium text-dental-text">Característica</div>
              <div className="p-4 font-medium text-center text-pink-500 border-l">Invisalign</div>
              <div className="p-4 font-medium text-center text-gray-500 border-l">Aparelho Tradicional</div>
            </div>
            
            {comparisonPoints.map((point, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 ${index !== comparisonPoints.length - 1 ? 'border-b' : ''}`}
              >
                <div className="p-4 text-dental-text">{point.feature}</div>
                <div className="p-4 flex justify-center items-center border-l">
                  {point.invisalign ? (
                    <Check className="text-pink-500 h-6 w-6" />
                  ) : (
                    <X className="text-gray-400 h-6 w-6" />
                  )}
                </div>
                <div className="p-4 flex justify-center items-center border-l">
                  {point.traditional ? (
                    <Check className="text-green-500 h-6 w-6" />
                  ) : (
                    <X className="text-gray-400 h-6 w-6" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvisalignComparison;
