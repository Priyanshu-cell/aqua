import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Button } from "../ui/button";

const HomeFandQ = () => {
  const faqs = [
    {
      question: "What services do you offer at Shreeansh Aqua Solutions?",
      answer:
        "We specialize in:\nRO Water Purifier Repair & Service\nRO Water Purifier Installation\nRO AMC (Annual Maintenance Contracts)\nWater Softener Services\nHot & Cold RO Water Dispensers\nIndustrial, Commercial & Domestic Water Purifiers",
    },
    {
      question:
        "Why should I choose Shreeansh Aqua Solutions for my RO service in Dehradun?",
      answer:
        "✔️ 15+ Years of Experience\n✔️ Certified & Professional Technicians\n✔️ 100% Customer Satisfaction\n✔️ Affordable Pricing & AMC Packages\n✔️ Quick & Reliable Service",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Frequently Asked Questions (FAQs)
        </h3>

        {/* FAQ Section */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-white cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h4 className="text-xl font-bold text-gray-800 flex justify-between items-center">
                {faq.question}
                <span className="text-gray-500">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </h4>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 whitespace-pre-line mt-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pt-4">
        <Link to="/about">
          <Button>View More</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeFandQ;
