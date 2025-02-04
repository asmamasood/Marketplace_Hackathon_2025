"use client";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How do I rent a car?",
      answer: "To rent a car, simply select your preferred vehicle, choose the rental dates, and complete the booking process online.",
    },
    {
      question: "What documents do I need to rent a car?",
      answer: "You need a valid driver's license, a credit card for the security deposit, and a government-issued ID.",
    },
    {
      question: "Do you offer insurance with the rental?",
      answer: "Yes, we offer insurance packages for an additional fee to ensure peace of mind during your trip.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 24 hours before pickup are fully refundable. Cancellations within 24 hours may incur a fee.",
    },
    {
      question: "Are there any mileage limits on rental cars?",
      answer: "Most of our rental cars come with unlimited mileage. However, some premium vehicles have specific mileage limits.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Car Rental FAQs</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-sm bg-white">
            <button
              className="w-full text-left font-semibold text-lg flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
