import React, { useState } from "react";
import { Element } from "react-scroll";

const FandQ = () => {
  const faqs = [
    {
      "question": "What is the best RO system for home use?",
      "answer": "For home use, we recommend domestic RO water purifiers like Kent, Aquaguard, or customized RO systems based on your water quality. Our team provides installation, service, and AMC for all types of home RO systems."
    },
    {
      "question": "Do you provide commercial RO plant installation?",
      "answer": "Yes, we specialize in commercial RO plant installation for offices, schools, hotels, restaurants, and corporate buildings. We also offer maintenance, servicing, and filter replacement for commercial setups."
    },
    {
      "question": "What is the price of a 50 LPH RO system?",
      "answer": "The 50 LPH RO system price depends on the brand, membrane quality, and features. Contact us for a free consultation and the best quote. We also provide installation and service."
    },
    {
      "question": "How often should I service my RO water purifier?",
      "answer": "Regular RO maintenance is essential every 3 to 6 months to replace filters, membranes, and check pump efficiency. We offer AMC packages for hassle-free service."
    },
    {
      "question": "What is the cost of an industrial RO plant?",
      "answer": "The cost of an industrial RO plant varies based on capacity (500 LPH, 1000 LPH, 2000 LPH, etc.), filtration stages, and automation levels. Contact us for a customized quote and professional installation."
    },
    {
      "question": "Do you provide water softener installation?",
      "answer": "Yes, we provide whole-house water softener installation for homes, apartments, hotels, and industries. Our services include resin replacement, salt refilling, and system maintenance."
    },
    {
      "question": "What is the difference between RO water and soft water?",
      "answer": "RO water removes TDS, heavy metals, and impurities, making it safe for drinking. Soft water removes hardness (calcium & magnesium) but retains minerals, making it better for skin, hair, and appliances. We provide both RO systems and water softeners for residential and commercial use."
    },
    {
      "question": "Do you offer AMC for commercial RO plants?",
      "answer": "Yes, we provide Annual Maintenance Contracts (AMC) for commercial and industrial RO plants, covering filter replacements, membrane cleaning, and system servicing."
    },
    {
      "question": "What is the best filtration system for hard water?",
      "answer": "For hard water, we recommend:\n- Water softeners for homes and industries\n- RO systems for drinking water\n- Multi-grade filters & activated carbon filters for commercial and industrial applications"
    },
    {
      "question": "Do you provide spare parts for RO systems?",
      "answer": "Yes, we supply RO spare parts like membranes, filters, pumps, cartridges, UV lamps, and pressure tanks for all brands and models."
    },
    {
      "question": "How does a multi-grade filter (MGF) work?",
      "answer": "A multi-grade filter (MGF) removes suspended particles, dirt, and turbidity using layers of sand and gravel. We offer installation, servicing, and media replacement for MGF systems."
    },
    {
      "question": "What are the benefits of an activated carbon filter?",
      "answer": "An activated carbon filter removes chlorine, odors, organic impurities, and bad taste from water. We provide installation, media replacement, and maintenance."
    },
    {
      "question": "Do you provide hot and cold RO dispensers?",
      "answer": "Yes, we supply and service hot and cold RO water dispensers for homes, offices, schools, and hotels, ensuring pure and temperature-controlled drinking water."
    },
    {
      "question": "How can I book RO service in Dehradun?",
      "answer": "You can book an RO service in Dehradun by calling us, visiting our website www.rohub.in, or filling out our online service request form."
    },
    {
      "question": "Why choose Shreeansh Aqua Solutions for RO services?",
      "answer": "15+ years of experience in the water purification industry\n- Expert technicians for installation & servicing\n- Affordable pricing & genuine spare parts\n- Quick response & doorstep service"
    }, 
    {
      "question": "How does a UV water purifier work?",
      "answer": "A UV water purifier uses ultraviolet light to kill bacteria, viruses, and microorganisms without altering the taste or minerals of water. We offer UV purifier installation and maintenance services."
    },
    {
      "question": "What is a TDS controller in an RO system?",
      "answer": "A TDS controller adjusts the Total Dissolved Solids (TDS) level in purified water by mixing some filtered water with RO-purified water to retain essential minerals. We provide RO systems with TDS control settings."
    },
    {
      "question": "Do you provide alkaline RO water purifiers?",
      "answer": "Yes, we offer alkaline RO water purifiers that maintain a pH level of 7 to 9, making the water healthier and better for digestion."
    },
    {
      "question": "What is the maintenance cost of an RO plant?",
      "answer": "The RO plant maintenance cost depends on capacity, usage, and filter replacement frequency. We provide affordable AMC plans for commercial and industrial RO plants."
    },
    {
      "question": "How do I check the TDS level of my water?",
      "answer": "You can use a TDS meter to check the water quality at home. If the TDS is above 500 ppm, you need an RO system. We offer free water testing services to suggest the best purification solution."
    },
    {
      "question": "Which RO plant is best for schools and colleges?",
      "answer": "For schools and colleges, we recommend 250 LPH to 1000 LPH RO plants with UV and UF filtration to ensure safe drinking water for students and staff."
    },
    {
      "question": "What is the best RO system for a restaurant or hotel?",
      "answer": "Hotels and restaurants require high-capacity RO plants like 100 LPH, 250 LPH, or 500 LPH systems to provide safe, purified water for cooking and drinking."
    },
    {
      "question": "What is the best water purification solution for factories?",
      "answer": "Factories require industrial RO plants with capacities of 1000 LPH, 2000 LPH, or more, depending on water usage and industry type. We provide customized RO plant installations for factories."
    },
    {
      "question": "Can I use borewell water in an RO system?",
      "answer": "Yes, but borewell water usually has high TDS and hardness, so you may need a pre-treatment system like a water softener before RO purification. We provide free water testing and the right purification setup."
    },
    {
      "question": "How does a dual-membrane RO system work?",
      "answer": "A dual-membrane RO system has two RO membranes for higher efficiency and faster purification, making it ideal for commercial and industrial applications."
    },
    {
      "question": "What is the difference between UF, UV, and RO water purifiers?",
      "answer": "UF (Ultrafiltration): Removes bacteria & dirt but not dissolved salts. Best for low-TDS water.\nUV (Ultraviolet): Kills viruses & bacteria but does not remove TDS.\nRO (Reverse Osmosis): Removes TDS, heavy metals, and contaminants, making water completely safe.\nWe provide all types of water purification systems based on water quality."
    },
    {
      "question": "Do you offer doorstep RO repair services?",
      "answer": "Yes, we provide doorstep RO repair, filter replacement, and servicing in Dehradun and nearby areas."
    },
    {
      "question": "How can I reduce water wastage in an RO system?",
      "answer": "RO systems waste some water during purification. You can reduce waste by reusing rejected water for cleaning, gardening, or using a zero-waste RO system."
    },
    {
      "question": "Do you provide commercial RO plant AMC services?",
      "answer": "Yes, we offer Annual Maintenance Contracts (AMC) for commercial and industrial RO plants, covering filter replacements, chemical cleaning, and regular check-ups."
    },
    {
      "question": "How long does an RO membrane last?",
      "answer": "An RO membrane typically lasts 1 to 2 years, depending on water quality and usage. Regular maintenance extends its life. We provide genuine RO membrane replacements."
    },
    {
      "question": "Do you install industrial RO plants with automatic operation?",
      "answer": "Yes, we provide fully automatic industrial RO plants with PLC control panels and remote monitoring for factories, manufacturing units, and industries."
    },
    {
      "question": "How does a sand filter work in water purification?",
      "answer": "A sand filter removes suspended particles, dirt, and turbidity, making it useful for pre-treatment before RO plants. We offer sand filter installation and servicing."
    },
    {
      "question": "Do you provide water quality testing services?",
      "answer": "Yes, we offer free water quality testing to check TDS, hardness, and contaminants, helping customers choose the right purification system."
    },
    {
      "question": "What are the benefits of an iron removal filter?",
      "answer": "An iron removal filter removes iron, manganese, and rust particles, preventing yellow stains and bad taste in water. Ideal for borewell and municipal water supply."
    },
    {
      "question": "How can I increase the life of my RO system?",
      "answer": "- Regular filter and membrane replacement\n- Periodic servicing and cleaning\n- Using pre-filters for sediment removal\nWe offer professional RO servicing to ensure long-lasting performance."
    },
    {
      "question": "Do you provide wastewater treatment solutions?",
      "answer": "Yes, we offer Effluent Treatment Plants (ETP) and Sewage Treatment Plants (STP) for industries, hotels, and large establishments."
    },
    {
      "question": "What is the cost of a 1000 LPH RO plant?",
      "answer": "The cost depends on components, filtration stages, and automation level. Contact us for a custom quote and professional installation."
    },
    {
      "question": "Do you provide RO system installation outside Dehradun?",
      "answer": "Yes, we provide RO system sales, installation, and servicing across Uttarakhand and nearby states."
    },
    {
      "question": "What is the warranty period for your RO systems?",
      "answer": "Our RO systems come with a standard warranty on parts and service. We also offer extended warranty plans."
    },
    {
      "question": "Why is my RO system not working properly?",
      "answer": "Common reasons include clogged filters, faulty membrane, low water pressure, or pump failure. We offer quick troubleshooting and repair services."
    },
    {
      "question": "Do you provide service for Kent RO water purifiers?",
      "answer": "Yes, we provide Kent RO service, repair, and AMC for all models, including Kent Grand, Kent Pearl, Kent Supreme, Kent Prime Plus, and Kent Elite."
    },
    {
      "question": "Can you repair Aquaguard water purifiers?",
      "answer": "Yes, we offer Aquaguard RO repair and maintenance for models like Aquaguard Geneus, Aquaguard Magna, Aquaguard Enhance, and Aquaguard Reviva."
    },
    {
      "question": "Do you provide Livpure RO service?",
      "answer": "Yes, we provide Livpure RO filter replacement, servicing, and installation for models such as Livpure Glo, Livpure Pep Pro Plus, and Livpure Envy."
    },
    {
      "question": "Is Blue Star RO repair service available?",
      "answer": "Yes, we repair and maintain Blue Star RO systems, including Blue Star Stella, Blue Star Prisma, Blue Star Imperia, and Blue Star Aristo."
    },
    {
      "question": "Do you service Havells RO water purifiers?",
      "answer": "Yes, we provide Havells RO servicing for models like Havells Max, Havells Digitouch, Havells Fab, and Havells UTC RO."
    },
    {
      "question": "Can you repair HUL Pureit RO systems?",
      "answer": "Yes, we offer HUL Pureit RO repair and filter change services for models like Pureit Ultima, Pureit Classic, Pureit Copper+, and Pureit Marvella."
    },
    {
      "question": "Do you provide service for AO Smith RO purifiers?",
      "answer": "Yes, we service AO Smith RO purifiers, including AO Smith Z8, AO Smith Z9, AO Smith X8, and AO Smith Intelli UV+."
    },
    {
      "question": "Can I get Eureka Forbes RO service at home?",
      "answer": "Yes, we provide doorstep Eureka Forbes RO service and AMC for models such as Aquaguard Aura, Aquaguard Blaze, and Dr. Aquaguard Nrich."
    },
    {
      "question": "Do you repair LG RO water purifiers?",
      "answer": "Yes, we repair LG RO purifiers like LG WW182EP, LG WW151NP, and LG Puricare RO systems."
    },
    {
      "question": "Is Tata Swach RO service available?",
      "answer": "Yes, we offer Tata Swach RO repair and maintenance for models like Tata Swach Ultima Silver, Tata Swach Nova, and Tata Swach Cristella."
    },
    {
      "question": "Can you service Nasaka RO water purifiers?",
      "answer": "Yes, we provide Nasaka RO filter replacement and AMC for models like Nasaka Tulip, Nasaka Max Sure, and Nasaka Cosmos."
    },
    {
      "question": "Do you repair Panasonic RO systems?",
      "answer": "Yes, we repair and maintain Panasonic RO models like Panasonic TK-CS43 and Panasonic TK-CS80."
    },
    {
      "question": "Do you provide repair services for Whirlpool RO water purifiers?",
      "answer": "Yes, we repair Whirlpool RO purifiers, including Whirlpool Minerala Platinum, Whirlpool Purasense, and Whirlpool Destroyer."
    },
    {
      "question": "Can I get Voltas RO service and filter change?",
      "answer": "Yes, we provide Voltas RO repair and filter replacement for models such as Voltas Pure, Voltas Grand, and Voltas Maximus."
    },
    {
      "question": "Do you service Sunpure RO systems?",
      "answer": "Yes, we offer Sunpure RO repair and installation for all models."
    },
    {
      "question": "Do you provide repair and servicing for local RO brands?",
      "answer": "Yes, we service all local and unbranded RO purifiers, including custom-built RO systems, wall-mounted RO, under-sink RO, and commercial RO plants."
    },
    {
      "question": "What is the cost of RO filter replacement for different brands?",
      "answer": "The cost depends on the brand and model. We provide genuine RO filters, membranes, and spare parts at affordable prices for all brands."
    },
    {
      "question": "Do you provide RO AMC services for all brands?",
      "answer": "Yes, we offer Annual Maintenance Contracts (AMC) for Kent, Aquaguard, Pureit, AO Smith, Blue Star, Livpure, Havells, and all local RO brands."
    },
    {
      "question": "Can I book an RO service online for any brand?",
      "answer": "Yes, you can book an RO service online through our website www.rohub.in or call us for quick doorstep service."
    },
    {
      "question": "Do you provide spare parts and accessories for all RO brands?",
      "answer": "Yes, we sell and install RO filters, membranes, pumps, UV lamps, TDS controllers, and SMPS adapters for all brands."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Element name="faqs" className="bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
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
                <span className="text-gray-500 md:text-3xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </h4>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 whitespace-pre-line mt-2 md:text-xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default FandQ;
