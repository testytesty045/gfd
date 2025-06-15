import React, { useEffect, useState } from 'react';
import faqData from '../data/faq';
import heroImage from "../assets/images/hero.png";
import ServicesBanner from '../components/common/ServicesBanner';
import PageTitle from '../components/PageTitle';

const FAQ = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <PageTitle 
        title="FAQ" 
        description="Frequently asked questions about our IT services, managed solutions, and technology consulting."
      />
      <div>
        <ServicesBanner
          title="Frequently Asked Questions"
          heroImage={heroImage}
          description="Everything You Need to Know About Our Managed IT Services."
          compactMode={true}
        />
        <section id="faq-section" className="section bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-secondary-900 mt-0 mb-0">Frequently Asked Questions: Managed IT vs. In-House IT</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6 animate-slideUp">
                {faqData.map((item, index) => (
                  <div 
                    key={index} 
                    className={`bg-white rounded-xl shadow-subtle overflow-hidden transition-all duration-300 ${expandedItems[index] ? 'shadow-medium' : ''}`}
                  >
                    <button
                      className="w-full p-6 text-left flex items-center justify-between"
                      onClick={() => toggleItem(index)}
                      aria-expanded={expandedItems[index]}
                    >
                      <h3 className="text-xl font-semibold text-secondary-900">{item.question}</h3>
                      <div className={`text-primary transition-transform duration-300 ${expandedItems[index] ? 'rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 overflow-hidden ${expandedItems[index] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div 
                        className="p-6 pt-0 text-neutral-600 border-t border-neutral-100"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;