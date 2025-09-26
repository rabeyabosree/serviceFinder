import React, { useState } from "react";

function FAQ() {
  const faqs = [
    { id: 1, question: "How do I book a service?", answer: "Go to the services page, choose your service, and click on the book button." },
    { id: 2, question: "Can I cancel a booking?", answer: "Yes, you can cancel from your dashboard before the service starts." },
    { id: 3, question: "What payment methods are accepted?", answer: "We accept credit/debit cards, mobile banking, and cash on delivery." },
    { id: 4, question: "Are providers verified?", answer: "Yes, all providers go through a strict verification process before being listed." },
    { id: 5, question: "Can I rate a service?", answer: "After the service is completed, you can leave a rating and review for the provider." },
    { id: 6, question: "Is customer support available?", answer: "Yes, our customer support team is available 24/7 to assist you." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="py-16 bg-gray-50 p-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Frequently Asked Questions
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
        {faqs.map((faq, index) => (
          <div
            key={faq.id} // unique key
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition flex flex-col"
          >
            <div
              className="flex items-center justify-between"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h2 className="text-lg font-medium text-gray-800">{faq.question}</h2>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </div>

            {openIndex === index && (
              <div className="mt-2 text-gray-600">
                {faq.id}
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;














