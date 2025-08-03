// Services.jsx
import React from 'react';

// The Services component displays the different types of massages offered.
export default function Services() {
  // Array of services to be rendered dynamically
  const services = [
    {
      title: "Happy Ending",
      description: "A gentle and intimate moment, designed to leave you with a profound sense of peace and satisfaction. Our masseuses focus on providing a relaxing and sensual experience.\n\nEnjoy good vibes and flowing, erotic strokes that are crafted to maximize your satisfaction and create a memorable, uplifting experience."
    },
    {
      title: "Deep Tissue Massage",
      description: "This massage targets the deeper layers of muscle and connective tissue to relieve chronic pain and muscle tension. It is particularly beneficial for those with postural problems or recurring strain from activities.\n\nOur expert therapists apply firm pressure and slow strokes to reach the sub-layers of muscles and fascia, helping to break up knots and restore motion."
    },
    {
      title: "Swedish Massage",
      description: "A classic and gentle massage that uses long, flowing strokes to relax the entire body and relieve stress. It is an ideal choice for those new to massage or who want to unwind and de-stress.\n\nTechniques include effleurage, petrissage, friction, and tapping, all designed to promote circulation, improve flexibility, and leave you feeling refreshed and invigorated."
    },
    {
      title: "Aromatherapy Massage",
      description: "This therapeutic massage uses scented essential oils to enhance physical and emotional well-being. Each oil is chosen for its specific properties—from calming lavender to energizing peppermint.\n\nOur therapists will help you select the perfect oil blend to address your specific needs, combining the benefits of massage with the power of scent to create a truly holistic and soothing experience."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Adjusted header font size for a larger appearance */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-12 text-gray-900">Our Services</h2>
        
        {/*
          Standard single-column grid layout for all screen sizes.
          - `grid grid-cols-1`: Sets a single column layout.
          - `gap-8`: Provides spacing between the cards.
          - `lg:max-w-4xl lg:mx-auto`: Centers the cards on larger screens and gives them a maximum width for readability.
        */}
        <div className="grid grid-cols-1 gap-8 lg:max-w-4xl lg:mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 transition-transform hover:scale-105 duration-300
                         flex flex-col overflow-hidden"
            >
              {/* Header text with top margin for spacing */}
              <h3 className="text-2xl font-bold mt-2 pb-2 text-orange-600 text-left">{service.title}</h3>
              
              {/*
                Body text container with left justification and paragraph rendering.
                The fixed padding from the previous layout has been removed to ensure
                the text fits correctly on all screen sizes.
              */}
              <div className="text-gray-600 text-left break-words">
                {service.description.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4 last:mb-0 leading-relaxed text-base">{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
