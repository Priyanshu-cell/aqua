import React, { useState } from "react";

const FandQ = () => {
  const faqs = [
    {
      question: "What services do you offer at Shreeansh Aqua Solutions?",
      answer:
        "We specialize in:\nRO Water Purifier Repair & Service\nRO Water Purifier Installation\nRO AMC (Annual Maintenance Contracts)\nWater Softener Services\nHot & Cold RO Water Dispensers\nIndustrial, Commercial & Domestic Water Purifiers",
    },
    {
      question: "Why should I choose Shreeansh Aqua Solutions for my RO service in Dehradun?",
      answer:
        "✔️ 15+ Years of Experience\n✔️ Certified & Professional Technicians\n✔️ 100% Customer Satisfaction\n✔️ Affordable Pricing & AMC Packages\n✔️ Quick & Reliable Service",
    },
    {
      question: "How often should I get my RO water purifier serviced?",
      answer:
        "We recommend servicing your RO purifier every 3-6 months to ensure:\n\nProper removal of contaminants \nEfficient membrane and filter performance \nPrevention of clogging or water flow issues",
    },
    {
      question: "What is an RO AMC, and why do I need it?",
      answer:
        "An Annual Maintenance Contract (AMC) ensures regular maintenance of your RO system throughout the year.\nBenefits of AMC: \nPeriodic filter changes\nRegular servicing to prevent breakdowns \nLong-term cost savings \nEnsures consistent water purity",
    },
    {
      question: "Do you provide water purifier installation services?",
      answer:
        "Yes! We provide professional RO water purifier installation services for: \nHomes \nOffices \nIndustries & Commercial Spaces \nOur technicians ensure the correct setup for maximum efficiency and longer lifespan of your purifier.",
    },
    {
      question: "How can I book an RO service with Shreeansh Aqua Solutions?",
      answer:
        "Booking an RO service is easy! \nCall Us: +91-7579008065 \nVisit Our Website: www.rohub.in \nService Area: Dehradun, Uttarakhand",
    },
    {
      question: "Which RO brands do you service?",
      answer:
        "We provide service for all major RO brands, including: \nAquaguard \nKent \nHUL Pureit \nLivpure \nAO Smith \nAquafresh and more!",
    },
    {
      question: "What should I do if my RO system stops working?",
      answer:
        "If your RO purifier stops working, you can: \nCheck the power supply. \nEnsure the water inlet is open. \nContact our service experts for a professional checkup. \nWe offer same-day service to get your RO running smoothly again!",
    },
    {
      question: "How much does an RO service cost in Dehradun?",
      answer:
        "Our service charges are affordable and transparent. Pricing varies based on: \nType of Service: Repair, Installation, AMC \nRO Capacity & Brand \nSpare Parts Replacement (if needed) \nCall us now at +91-7579008065 for a free quote!",
    },
    {
      question: "Do you offer water softener services in Dehradun?",
      answer:
        "Yes, we specialize in water softener installation, repair, and maintenance to prevent hard water issues in your home or business.",
    },
    {
      question: "Can I get a customized AMC plan for my RO system?",
      answer:
        "Absolutely! We offer customized AMC packages tailored to your water usage and RO system capacity. Contact us for a personalized quote.",
    },
    {
      question: "Is it necessary to use original spare parts for my RO system?",
      answer:
        "Yes, using genuine spare parts ensures: \nOptimal Performance \nLonger RO Lifespan \nConsistent Water Purity \nWe only use authentic spare parts during service.",
    },
    {
      question: "Do you provide same-day RO service in Dehradun?",
      answer:
        "Yes, we offer same-day service for most RO repair and maintenance needs in Dehradun and nearby areas.",
    },
    {
      question: "How can I identify if my RO filter needs replacement?",
      answer:
        "Common signs include: \nReduced water flow \nChange in water taste or odor \nIndicator lights blinking (if available) \nWe recommend replacing filters every 6 months for optimal performance.",
    },
    {
      question: "What areas do you serve apart from Dehradun?",
      answer:
        "We primarily serve Dehradun, but also cover nearby areas in Uttarakhand and adjoining states. Contact us for specific service locations.",
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
    </div>
  );
};

export default FandQ;
