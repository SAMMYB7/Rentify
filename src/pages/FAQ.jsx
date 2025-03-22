import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  { question: "How do I rent a car?", answer: "Simply sign up, choose a car, select the rental duration, and confirm your booking." },
  { question: "What payment methods do you accept?", answer: "We accept credit cards, debit cards, and online payments." },
  { question: "Is insurance included?", answer: "Yes, basic insurance is included. You can opt for additional coverage if needed." },
  { question: "Can I cancel my booking?", answer: "Yes, you can cancel up to 24 hours before your rental period starts for a full refund." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow cursor-pointer" onClick={() => setOpenIndex(index === openIndex ? null : index)}>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{faq.question}</h3>
              <FaChevronDown className={`transform ${openIndex === index ? "rotate-180" : ""}`} />
            </div>
            {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
