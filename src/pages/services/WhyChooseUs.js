import React from 'react'
import heroImage from "../../assets/images/hero.png";
import ServicesBanner from '../../components/common/ServicesBanner';
import "../styles/WhyChooseUs.css";
import { whyChooseUs } from '../../data/services';
import PageTitle from '../../components/PageTitle';
import { getServiceById } from "../../data/services";
// import UseCasesSection from '../../components/UseCasesSection';

const service = getServiceById("why-choose-us");

const WhyChooseUs = () => {
  return (
    <>
      <PageTitle 
        title="Why Choose Us" 
        description="Discover why businesses trust DG Future Tech for their IT needs and how we deliver exceptional technology solutions."
      />
      <div>
        <ServicesBanner
          title={service.title}
          heroImage={heroImage}
          compactMode={true}
          description={service.caseStudyDescription}
        />
        <div className="dgft-why-choose-us">
          <div className="dgft-container">
            <section className="dgft-security">
              <div className="dgft-security__content">
                <h2 className="dgft-security__title">Benefits</h2>
                <ul className="dgft-security__list">
                  <li className="dgft-security__list-item">Accessible & Responsive Support for your employees enhances productivity</li>
                  <li className="dgft-security__list-item">Diverse Expertise ensures all of your support needs are met</li>
                  <li className="dgft-security__list-item">Reduce costs through a proactive support model</li>
                  <li className="dgft-security__list-item">Stabilize and secure your environment</li>
                  <li className="dgft-security__list-item">Guaranteed Service Levels ensure you have support when you need it</li>
                  <li className="dgft-security__list-item">Ongoing business reviews ensure we are providing the support you need</li>
                </ul>
              </div>
              {whyChooseUs.sections.map((section, index) => (
                <div key={index} className="dgft-security__content">
                  <h2 className="dgft-security__title">{section.title}</h2>
                  <p className="dgft-security__text">
                    {section.content}
                  </p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs
