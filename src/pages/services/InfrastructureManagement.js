import React, { useState, useEffect } from "react";
import "../../pages/styles/infrastructureManagement.css";
import ServicesBanner from "../../components/ServicesBanner";
import { getInfrastructureManagementData } from "../../services/infrastructureManagementService";
import { getServiceById } from "../../data/services";
import PageTitle from "../../components/PageTitle";

const InfrastructureManagement = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      try {
        const infrastructureData = getInfrastructureManagementData();
        setData(infrastructureData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching infrastructure data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <>
      <PageTitle 
        title="Infrastructure Management" 
        description="Comprehensive infrastructure management services to optimize your IT environment and ensure reliability, security, and performance."
      />
      <div className="bg-gradient-to-b from-white to-security-blue-light min-h-screen">
        <ServicesBanner
          title={data.title}
          // subtitle="Infrastructure Management Services"
          heroImage={data.heroImage}
          // caseStudyDescription={getServiceById("infrastructure-management")?.caseStudyDescription || "Create an infrastructure that is always ready for any opportunity."}
          compactMode={true}
        />
        <div className="infra-manage">
          <div className="infra-top-text" data-aos="fade-up">
            <p className="infra-heading">{data.description}</p>
            <p className="infra-sub">{data.subDescription}</p>
          </div>

          <div className="infra-content-container-data">
            <div className="infra-content" data-aos="fade-right">
              <img
                src={data.infraImage}
                alt="Infrastructure"
                className="infraOne"
              />
            </div>
            <div className="infra-right-data" data-aos="fade-left">
              <h2>{data.servicesHeading}</h2>
              <ul>
                {data.servicesList.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfrastructureManagement;
