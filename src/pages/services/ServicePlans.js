import React, { useState } from "react";
import "../styles/ServicePlans.css";
import ScrollTriggeredContactForm from "../../components/ScrollTriggeredContactForm";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PageTitle from "../../components/PageTitle";

const ServicePlans = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleClickAnywhere = () => {
    setShowContactForm(true);
  };

  const getServiceData = () => {
    return [
      {
        category: "Basic Network Management",
        description: "Basic network setup with monitoring and reports",
        basic: true,
        standard: true,
        premium: true,
      },
      {
        category: "Security Assessment",
        description: "Basic vulnerability assessment with basic protection",
        basic: true,
        standard: true,
        premium: true,
      },
      {
        category: "Proactive Monitoring 24x7x365",
        description: "Protection against phishing and email-based malware",
        basic: true,
        standard: true,
        premium: true,
      },
      {
        category: "Cyber: Email Security",
        description: "Enhanced email security for businesses",
        basic: false,
        standard: true,
        premium: true,
      },
      {
        category: "Technology Modernization",
        description:
          "Upgrades to IT infrastructure for performance improvements",
        basic: false,
        standard: true,
        premium: true,
      },
      {
        category: "Advanced Remote Monitoring & Management",
        description:
          "Continuous remote monitoring and management for optimal IT health",
        basic: false,
        standard: true,
        premium: true,
      },
      {
        category: "Dedicated Solution Advisor & Service Team",
        description: "Personalized IT guidance and proactive management",
        basic: false,
        standard: false,
        premium: true,
      },
      {
        category: "Standardized Service Reporting & Management Portal",
        description: "Real-time access to service data and advanced reporting",
        basic: false,
        standard: false,
        premium: true,
      },
      {
        category: "Application and Infrastructure Support",
        description: "Dedicated support for critical issues and infrastructure",
        basic: true,
        standard: true,
        premium: true,
      },
      {
        category: "Proactive Maintenance",
        description: "Preventive maintenance to ensure system stability",
        basic: false,
        standard: true,
        premium: true,
      },
      {
        category: "Ticket-based Workflow",
        description: "Advanced ticket management with SLA tracking",
        basic: false,
        standard: true,
        premium: true,
      },
      {
        category: "Patch Deployment",
        description: "Automated patching and deployment",
        basic: true,
        standard: true,
        premium: true,
      },
      {
        category: "Endpoint Detection & Response (EDR)",
        description: "Continuous endpoint monitoring and protection",
        basic: false,
        standard: true,
        premium: true,
      },
    ];
  };

  const serviceData = getServiceData();

  return (
    <>
      <PageTitle
        title="Service Plans"
        description="Explore our flexible service plans designed to meet your business needs and IT requirements."
      />
      <div className="service-plans" onClick={handleClickAnywhere}>
        <div className="plans-comparison">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="service-header">Service Category</th>
                <th className="description-header">Description</th>
                <th className="basic-header">Basic</th>
                <th className="standard-header">Standard</th>
                <th className="premium-header">Premium</th>
              </tr>
              <tr className="plan-price-row">
                <th colSpan="2"></th>
                <th colSpan="3" className="plan-price-cell">
                  Price : (INR)
                </th>
              </tr>
            </thead>
            <tbody>
              {serviceData.map((service, index) => (
                <tr key={index}>
                  <td className="service-category">{service.category}</td>
                  <td className="service-description">{service.description}</td>
                  <td className="plan-cell basic-cell">
                    {service.basic ? (
                      <span className="check">
                        {" "}
                        <i className="fas fa-check icon-circle blue-circle"></i>{" "}
                      </span>
                    ) : (
                      <span className="cross">
                        {" "}
                        <i className="fas fa-times icon-circle gray-circle"></i>
                      </span>
                    )}
                  </td>
                  <td className="plan-cell standard-cell">
                    {service.standard ? (
                      <span className="check">
                        {" "}
                        <i className="fas fa-check icon-circle blue-circle"></i>{" "}
                      </span>
                    ) : (
                      <span className="cross">
                        {" "}
                        <i className="fas fa-times icon-circle gray-circle"></i>
                      </span>
                    )}
                  </td>
                  <td className="plan-cell premium-cell">
                    {service.premium ? (
                      <span className="check">
                        {" "}
                        <i className="fas fa-check icon-circle blue-circle"></i>{" "}
                      </span>
                    ) : (
                      <span className="cross">
                        {" "}
                        <i className="fas fa-times icon-circle gray-circle"></i>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showContactForm && (
          <div onClick={(e) => e.stopPropagation()}>
            <ScrollTriggeredContactForm />
          </div>
        )}
      </div>
    </>
  );
};

export default ServicePlans;
