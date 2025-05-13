
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Em quanto tempo verei resultado?",
      answer:
        "Os primeiros resultados começam a ser visíveis entre 6 a 8 semanas. O tempo total do tratamento varia de 6 a 18 meses, dependendo da complexidade do seu caso.",
    },
    {
      question: "Posso comer e beber normalmente?",
      answer:
        "Sim! Diferente dos aparelhos convencionais, os alinhadores Invisalign são removíveis. Você pode retirá-los para comer e beber o que quiser, sem restrições.",
    },
    {
      question: "Posso parcelar o tratamento?",
      answer:
        "Absolutamente! Oferecemos parcelamento em até 24x, facilitando o acesso ao seu novo sorriso. Também aceitamos todos os principais convênios odontológicos.",
    },
    {
      question: "O tratamento com Invisalign dói?",
      answer:
        "O desconforto com Invisalign é significativamente menor quando comparado aos aparelhos tradicionais. Você pode sentir uma leve pressão nos primeiros dias após trocar para um novo alinhador, mas é temporário e facilmente administrável.",
    },
    {
      question: "Preciso usar os alinhadores o tempo todo?",
      answer:
        "Para resultados ideais, recomendamos usar os alinhadores por 20-22 horas diárias, removendo-os apenas para comer, beber (exceto água) e para higienização.",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <HelpCircle className="text-pink-500 mr-3 h-8 w-8" />
          <h2 className="text-3xl font-bold text-dental-text">
            Dúvidas Frequentes
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-dental-text hover:text-pink-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
