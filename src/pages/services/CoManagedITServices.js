import React, { useEffect, useState } from "react";
import ServicesBanner from "../../components/common/ServicesBanner.js";
import UseCasesSection from "../../components/UseCasesSection";
import heroImage from "../../assets/images/hero.png";
import styles from "../styles/CoManagedIT.module.css";
import { getServiceById } from "../../data/services.js";
import PageTitle from "../../components/PageTitle";
import ServiceSection from "./ServiceSection.js";
import CTASection from "../../components/common/CTASection.js";

const CoManagedITServices = () => {
  const service = getServiceById("co-managed-it");

  const [activeService, setActiveService] = useState("network");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderServiceContent = () => {
    switch (activeService) {
      case "network":
        return (
          <div className={styles.serviceContent}>
            <h3 className={styles.serviceHeading}>
              IT Infrastructure Services
            </h3>
            <ul className={styles.servicesList}>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>
                  IT infrastructure management: Monitoring, analyzing, and
                  tuning IT infrastructure performance, deploying new
                  infrastructure components, handling data backups and restore
                  operations, and more.
                </span>
              </li>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>
                  IT infrastructure enhancement: Planning, designing, and
                  implementing IT infrastructure automation and orchestration
                  tools, conducting cloud migration, optimizing cloud resources,
                  and improving ITSM processes.
                </span>
              </li>
            </ul>
          </div>
        );
      case "backup":
        return (
          <div className={styles.serviceContent}>
            <h3 className={styles.serviceHeading}>IT Help Desk</h3>
            <ul className={styles.servicesList}>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>
                  L1 user support: resolving basic issues, such as software
                  setup and user administration.
                </span>
              </li>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>
                  L2 tech support: handling complex technical tasks, such as
                  troubleshooting server and network problems or managing MFA.
                </span>
              </li>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>
                  L3 advanced tech support: handling complex infrastructure and
                  application requests, e.g., server virtualization, network
                  configuration, and code changes.
                </span>
              </li>
            </ul>
          </div>
        );
      case "helpdesk":
        return (
          <div className={styles.serviceContent}>
            <h3 className={styles.serviceHeading}>Related Services</h3>
            <ul className={styles.servicesList}>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>
                  Complementary services to optimize and future-proof your IT
                  environment: 
                  <p>System upgrades and lifecycle planning</p> 
                  <p>Patch management and update scheduling</p>
                 <p>Vendor coordination and third-party support management</p>
                </span>
              </li>
              <li className={styles.serviceItem}>
                <i className={`fas fa-check-circle ${styles.serviceIcon}`}></i>
                <span>
                  Our related IT services ensure your technology remains secure,
                  efficient, and aligned with evolving business needs. By
                  managing upgrades, patches, and vendor relationships, we
                  minimize downtime and reduce the risk of security
                  vulnerabilities. These services also streamline operations,
                  improve asset lifecycle value, and free up your internal team
                  to focus on strategic initiatives.
                </span>
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  const useCases = [
    {
      challenge:
        "Your internal team can no longer handle the growing IT infrastructure, but hiring and training more employees would take a while and incur high costs.",
      solution:
        "We take over the infrastructure management of new components added and your team looks after the existing IT resources.",
    },
    {
      challenge:
        "Business is experiencing a high workload round the clock and it is not possible to provide 24/7 support.",
      solution:
        "DG FutureTech provides support during off-hours like weekends or national holidays to keep the support operations running smoothly.",
    },
    {
      challenge:
        "A business needs to install and configure firewall as a part of compliance procedure but they lack expertise.",
      solution:
        "DG FutureTech can offer support for installation and configuration of the firewall, then give the proper training to inhouse IT team to handle the routine firewall tasks.",
    },
  ];

  return (
    <>
      <PageTitle
        title="Co-Managed IT Services"
        description="Enhance your internal IT team with our co-managed IT services. Get expert support while maintaining control of your IT operations."
      />
      <div className="bg-gradient-to-b from-white to-light-blue min-h-screen">
        <ServicesBanner
          title={service.title}
          subtitle={service.mainHeading}
          description={service.caseStudyDescription}
          heroImage={heroImage}
          compactMode={true}
        />

        <div>
          {/* What is Co-Managed IT Section */}
          <section className={styles.whatIsSection}>
            <div className={styles.whatIsContent}>
              <h2 className={styles.whatIsTitle}>What is Co-Managed IT?</h2>
              <p className={styles.whatIsDescription}>
                With 12+ years of experience IT service management, DG FutureTech
                works together with your businesses’ in-house IT teams to
                enhance infrastructure performance, handle the extra workload to
                improve user satisfaction.
              </p>
              <p className={styles.whatIsDescription}>
                Co-managed IT blends the familiarity of an internal IT
                department with the specialized expertise of a managed service
                provider (MSP). This customized model allows for flexible role
                division between in-house technicians and MSP professionals,
                based on specific technologies, identified skill gaps or areas
                of specialized expertise. It's designed as an ongoing
                partnership, supplementing existing IT teams rather than
                requiring a complete infrastructure overhaul.
              </p>
              <p className={styles.whatIsDescription}>
                Crucially, co-managed IT enables businesses to leverage the
                advantages of comprehensive managed IT services while
                effectively managing limited resources and budgetary
                constraints.
              </p>
            </div>
          </section>

          {/* Services Offered Section */}
          <section className={styles.servicesSection}>
            <div className="container">
              <h2 className={`section-title ${styles.sectionTitle}`}>
                <span>Services Offered Under Co-Managed Model</span>
              </h2>
              <div className={styles.servicesContainer}>
                <div className={styles.servicesTabs}>
                  <div
                    className={`${styles.serviceTab} ${activeService === "network" ? styles.active : ""}`}
                    onClick={() => setActiveService("network")}
                  >
                    <i className="fas fa-network-wired"></i>
                    IT Infrastructure Services
                  </div>
                  <div
                    className={`${styles.serviceTab} ${activeService === "backup" ? styles.active : ""}`}
                    onClick={() => setActiveService("backup")}
                  >
                    <i className="fas fa-headset"></i>
                    IT Help Desk
                  </div>
                  <div
                    className={`${styles.serviceTab} ${activeService === "helpdesk" ? styles.active : ""}`}
                    onClick={() => setActiveService("helpdesk")}
                  >
                    <i className="fas fa-tools"></i>
                    Related Services
                  </div>
                </div>
                {renderServiceContent()}
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <UseCasesSection title="Use Cases" useCases={useCases} />
          {/* Key Benefits Section */}
          <section className={styles.benefitsSection}>
            <div className="container">
              <h2 className={`section-title ${styles.sectionTitle}`}>
                <span>Key Benefits of Co-Managed IT</span>
              </h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>
                    <i className="fas fa-users-cog"></i>
                  </div>
                  <h3 className={styles.benefitTitle}>Specialized Expertise</h3>
                  <p className={styles.benefitDescription}>
                    Supplement your in-house team with specialized expertise.
                  </p>
                </div>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>
                    <i className="fas fa-expand-arrows-alt"></i>
                  </div>
                  <h3 className={styles.benefitTitle}>Flexible Support</h3>
                  <p className={styles.benefitDescription}>
                    Flexible support that scales with your business needs.
                  </p>
                </div>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>
                    <i className="fas fa-dollar-sign"></i>
                  </div>
                  <h3 className={styles.benefitTitle}>Cost-Effective</h3>
                  <p className={styles.benefitDescription}>
                    Cost-effective solution that enhances your existing IT
                    capabilities.
                  </p>
                </div>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>
                    <i className="fas fa-clock"></i>
                  </div>
                  <h3 className={styles.benefitTitle}>Extended Support</h3>
                  <p className={styles.benefitDescription}>
                    Extended support hours to ensure business continuity.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div>
            <ServiceSection />
          </div>
          {/* CTA Section */}
          <CTASection
            title="Ready for stress-free IT?"
            buttonText="Book a Consultation"
            buttonLink="https://calendly.com/rachna-kolhapure-dgfuturetech/30min"
          />
        </div>
      </div>
    </>
  );
};

export default CoManagedITServices;
