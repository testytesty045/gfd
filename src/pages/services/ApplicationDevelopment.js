import React, { useState, useEffect } from "react";
import { getServiceById } from "../../data/services";
import ServicesBanner from "../../components/common/ServicesBanner.js";
import heroImage from "../../assets/images/hero.png";
import styles from "./ApplicationDevelopment.module.css";
import PageTitle from "../../components/PageTitle";
import ServiceSection from "./ServiceSection.js";
import CTASection from "../../components/common/CTASection.js";

const ApplicationDevelopment = () => {
  const service = getServiceById("application-development");
  const [activeService, setActiveService] = useState("web");

  // Default fallback data if service object is incomplete
  const fallbackData = {
    developmentProcess: [
      {
        title: "In-depth System Requirement Analysis",
        description:
          "We start by thoroughly understanding your business needs, user requirements, and technical specifications to build a solid foundation for development.",
      },
      {
        title: "Architecture Design & Planning",
        description:
          "Our experts design a scalable, secure architecture that aligns with your business goals and technical requirements.",
      },
      {
        title: "Application Development & Coding",
        description:
          "We follow industry best practices and coding standards to develop robust, maintainable applications.",
      },
      {
        title: "Component Integration",
        description:
          "We seamlessly integrate all components and third-party services to create a cohesive solution.",
      },
      {
        title: "Seamless Market Rollout",
        description:
          "We ensure a smooth deployment process with comprehensive testing and user training.",
      },
    ],
    developmentServices: [
      {
        title: "Web & Intranet Portal Development",
        description: "Secure, scalable platforms for business operation.",
      },
      {
        title: "CMS Development",
        description:
          "Custom content management systems for seamless digital experiences.",
      },
      {
        title: "eCommerce Portal Development",
        description: "Feature-rich, high-converting online storefronts.",
      },
      {
        title: "Microsite Development",
        description:
          "Targeted, high-impact web solutions for specific campaigns.",
      },
    ],
    differentiators: [
      {
        title: "Design With an Eye to The Future",
        description:
          "We build applications with scalability and future enhancements in mind, ensuring your solution grows with your business.",
      },
      {
        title: "Agile & Adaptive Development",
        description:
          "We stay flexible and responsive throughout the process, making sure the final solution fits your evolving needs and delivers long-term value.",
      },
      {
        title: "End-to-End Expertise",
        description:
          "From strategy to support, we handle every stage of your IT journey—so you get seamless, integrated solutions without the hassle of multiple vendors.",
      },
      {
        title: "Modern Design and Technology",
        description:
          "We leverage the latest technologies and design principles to create cutting-edge applications with intuitive interfaces.",
      },
    ],
  };

  // Define merged service data with fallbacks
  const serviceData = {
    ...service,
    developmentProcess:
      service?.developmentProcess || fallbackData.developmentProcess,
    developmentServices:
      service?.developmentServices || fallbackData.developmentServices,
    differentiators: service?.differentiators || fallbackData.differentiators,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define specific icons for each expertise card based on the title
  const getExpertiseIcon = (title) => {
    const iconMap = {
      "Web & Intranet Portal Development": "globe",
      "SaaS-Based Product Development": "cloud",
      "Software Product Modernization": "sync",
      "MVP Development": "rocket",
      "CMS Development": "file-code",
      "eCommerce Portal Development": "shopping-cart",
    };

    return iconMap[title] || "star";
  };

  // Define specific icons for each process step based on the title
  const getProcessIcon = (title) => {
    const iconMap = {
      "In-depth System Requirement Analysis": "search",
      "Architecture Design & Planning": "sitemap",
      "Application Development & Coding": "code",
      "Component Integration": "puzzle-piece",
      "Seamless Market Rollout": "truck",
    };

    return iconMap[title] || "cogs";
  };

  // Define specific icons for each differentiator based on the title
  const getDifferentiatorIcon = (title) => {
    const iconMap = {
      "Design With an Eye to The Future": "eye",
      "Customer-First Approach": "users",
      "Value with Cost-Effective Solutions": "dollar-sign",
      "Modern Design and Technology": "paint-brush",
    };

    return iconMap[title] || "star";
  };

  const renderServiceContent = () => {
    switch (activeService) {
      case "web":
        return (
          <div className={styles.serviceContent}>
            <h3>Web Application Development</h3>
            <ul className={styles.servicesList}>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>Responsive web applications</span>
              </li>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>Progressive web apps (PWAs)</span>
              </li>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>E-commerce solutions</span>
              </li>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>Custom web portals and dashboards</span>
              </li>
            </ul>
          </div>
        );
      case "mobile":
        return (
          <div className={styles.serviceContent}>
            <h3>Mobile Application Development</h3>
            <ul className={styles.servicesList}>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>Native iOS and Android apps</span>
              </li>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>Cross-platform applications</span>
              </li>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>React Native and Flutter development</span>
              </li>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>Mobile app maintenance and updates</span>
              </li>
            </ul>
          </div>
        );
      case "custom":
        return (
          <div className={styles.serviceContent}>
            <h3>Custom Software Development</h3>
            <ul className={styles.servicesList}>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>Enterprise software solutions</span>
              </li>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>Industry-specific applications</span>
              </li>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>Legacy system modernization</span>
              </li>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>Process automation software</span>
              </li>
            </ul>
          </div>
        );
      case "api":
        return (
          <div className={styles.serviceContent}>
            <h3>API Development & Integration</h3>
            <ul className={styles.servicesList}>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>RESTful API development</span>
              </li>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>GraphQL implementation</span>
              </li>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>Third-party API integration</span>
              </li>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>Microservices architecture</span>
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <PageTitle
        title="Application Development"
        description="Custom application development services including web, mobile, and enterprise solutions to meet your business needs."
      />
      <div className="bg-gradient-to-b from-white to-security-blue-light min-h-screen">
        {/* Banner Section */}
        <ServicesBanner
          title={serviceData.title || "Application Development"}
          subtitle={serviceData.mainHeading || "Application Development"}
          description={
            serviceData.caseStudyDescription ||
            "Custom software development services tailored to your specific business needs, from web applications and mobile apps to enterprise solutions that drive efficiency and digital transformation."
          }
          heroImage={heroImage}
          compactMode={true}
        />

        {/* Services We Offer Section */}
        <section className={styles.whatIsSection}>
          <div className={styles.whatIsContent}>
            <h2 className={`${styles.whatIsTitle} ${styles.sectionTitle}`}>
              <span>Services We Offer</span>
            </h2>
            <p className={styles.whatIsDescription}>
              At DG FutureTech, we specialize in custom software
              development, delivering solutions that range from simple content
              management systems to complex enterprise applications, workflow
              interfaces, and e-commerce platforms. From architecture and
              functionality design to security and ongoing support, our
              comprehensive services ensure a seamless application development
              experience tailored to your business needs.
            </p>
          </div>
        </section>

        {/* Product Development Section */}
        <section className={styles.servicesSection}>
          <div className="container">
            <h2 className={`${styles.servicesTitle} ${styles.sectionTitle}`}>
              <span>Application Development</span>
            </h2>
            <div className={styles.productContent}>
              <p className={styles.productDescription}>
                At DG FutureTech, we craft powerful, enterprise-grade custom 
                applications that drive long-term value for your customers. Our
                expert team collaborates with you to turn ideas into innovative,
                high-impact digital applications that give your business a
                competitive edge.
              </p>

              <div className={styles.servicesContainer}>
                <div className={styles.servicesTabs}>
                  <div
                    className={`${styles.serviceTab} ${activeService === "web" ? styles.active : ""}`}
                    onClick={() => setActiveService("web")}
                  >
                    <i className="fas fa-laptop-code"></i>
                    Web Development
                  </div>
                  <div
                    className={`${styles.serviceTab} ${activeService === "mobile" ? styles.active : ""}`}
                    onClick={() => setActiveService("mobile")}
                  >
                    <i className="fas fa-mobile-alt"></i>
                    Mobile Development
                  </div>
                  <div
                    className={`${styles.serviceTab} ${activeService === "custom" ? styles.active : ""}`}
                    onClick={() => setActiveService("custom")}
                  >
                    <i className="fas fa-cogs"></i>
                    Custom Software
                  </div>
                  <div
                    className={`${styles.serviceTab} ${activeService === "api" ? styles.active : ""}`}
                    onClick={() => setActiveService("api")}
                  >
                    <i className="fas fa-plug"></i>
                    API Development
                  </div>
                </div>
                {renderServiceContent()}
              </div>
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section className={styles.processSection}>
          <div className="container">
            <h2 className={`${styles.processTitle} ${styles.sectionTitle}`}>
              <span>Our Comprehensive Development Process</span>
            </h2>
            <div className={styles.processGrid}>
              {serviceData.developmentProcess.map((step, index) => (
                <div key={index} className={styles.processCard}>
                  <div className={styles.processIconContainer}>
                    <div className={styles.processIcon}>
                      <i className={`fas fa-${getProcessIcon(step.title)}`}></i>
                    </div>
                  </div>
                  <div className={styles.processContent}>
                    <h3 className={styles.processCardTitle}>{step.title}</h3>
                    <p className={styles.processCardDescription}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Applications Section */}
        <section className={styles.enterpriseSection}>
          <div className="container">
            <h2 className={`${styles.enterpriseTitle} ${styles.sectionTitle}`}>
              <span>High-Performance Enterprise Web Applications</span>
            </h2>
            <div className={styles.enterpriseContent}>
              <p className={styles.enterpriseDescription}>
                At DG FutureTech, we specialize in developing agile and advanced
                web portals tailored for customers, businesses, and self-service
                solutions. Our portals are designed with a strong focus on
                usability, ensuring seamless navigation, fast response times,
                reliability, credibility, and high-quality content for both B2B
                and B2C applications.
              </p>
              <p className={styles.enterpriseDescription}>
                We helped a UK-based retail enterprise in modernize its
                web application, enhancing efficiency and user experience. 
              </p>
            </div>
          </div>
        </section>

        {/* How We Can Help Section */}
        <section className={styles.helpSection}>
          <div className="container">
            <h2 className={`${styles.helpTitle} ${styles.sectionTitle}`}>
              <span>Our Services</span>
            </h2>
            <div className={styles.helpContent}>
              <div className={styles.servicesColumn}>
               
                <ul className={styles.serviceList}>
                  {serviceData.developmentServices.map((item, index) => (
                    <li key={index} className={styles.serviceListItem}>
                      <span className={styles.serviceDot}>🔹</span>
                      <div>
                        <h4 className={styles.serviceItemTitle}>
                          {item.title}
                        </h4>
                        <p className={styles.serviceItemDescription}>
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.differentiatorSection}>
          <div className="container">
            <h2
              className={`${styles.differentiatorTitle} ${styles.sectionTitle}`}
            >
              <span>Our Key Differentiators</span>
            </h2>
            <div className={styles.differentiatorRow}>
              {serviceData.differentiators.map((item, index) => (
                <div key={index} className={styles.differentiatorCard}>
                  <div className={styles.differentiatorIcon}>
                    <i
                      className={`fas fa-${getDifferentiatorIcon(item.title)}`}
                    ></i>
                  </div>
                  <h3 className={styles.differentiatorCardTitle}>
                    {item.title}
                  </h3>
                  <p className={styles.differentiatorCardDescription}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div>
          <ServiceSection/>
        </div>
         {/* CTA Section */}
          <CTASection
            title="Ready for stress-free IT?"
            buttonText="Book a Consultation"
            buttonLink="https://calendly.com/rachna-kolhapure-dgfuturetech/30min"
          />
      </div>
    </>
  );
};
export default ApplicationDevelopment;