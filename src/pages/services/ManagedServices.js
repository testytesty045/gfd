import React, { useEffect } from "react";
import { getServiceById } from "../../data/services";

import styles from "../styles/ManagedIT.module.css";
import heroImage from "../../assets/images/hero.png";
import ServicesBanner from "../../components/common/ServicesBanner";
import UseCasesSection from "../../components/UseCasesSection";
import PageTitle from "../../components/PageTitle";
import mangaitimg from "../../assets/images/manageit.webp";
import CTASection from "../../components/common/CTASection";
import ServiceSection from "./ServiceSection";

const ManagedITServices = () => {
  const service = getServiceById("managed-it");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const useCases = [
    {
      challenge:
        "A growing law firm with 20 employees struggles with frequent IT downtime, slow computers, and lack of cybersecurity measures. They have no dedicated IT team, and handling technical issues disrupts productivity.",
      solution: 
        "Implemented 24x7 IT support to resolve technical issues quickly. \nDeployed cybersecurity solutions to protect against data breaches.\nSetup routine system maintenance to prevent slowdowns and crashes.",
      },
    {
      challenge:
        "A business using outdated on-premise servers for inventory management, leading to slow data processing and frequent crashes during peak sales periods.",
      solution:
        "Migrated the inventory system to a Azure cloud platform.\n Implemented real-time data syncing for better stock management.\n Set up automated backups to prevent data loss.",
    },
  ];

  return (
    <>
      <PageTitle
        title="Managed IT Services"
        description="Comprehensive managed IT services to optimize your business operations, enhance security, and provide 24x7 technical support."
      />
      <div className="bg-gradient-to-b from-white to-light-blue min-h-screen">
        <ServicesBanner
          title={service.title}
          heroImage={heroImage}
          compactMode={true}
          description={service.caseStudyDescription}
        />

        {/* Focus on Your Business Section */}
        <section className={styles.focusSection}>
          <div className="container">
            <div className={styles.focusContainer}>
              <div className={styles.focusText}>
                <h2 className={styles.focusTitle}>
                  Focus on Your Business—We'll Handle Your IT!
                </h2>
                <p className={styles.focusDescription}>
                  At DG FutureTech, we provide comprehensive Managed IT
                  solutions so you can forget about IT headaches and focus on
                  what truly matters—growing your business.
                </p>
                <p className={styles.focusDescription}>
                  As a proactive IT outsourcing partner, we don't just manage
                  your technology—we help optimize it. Our team suggests
                  meaningful process improvements, shares industry best
                  practices, and helps you align IT with your business goals to
                  drive better efficiency, security, and value.
                </p>
              </div>
              <div className={styles.focusImage}>
                <img
                  src={mangaitimg}
                  alt="IT Professional"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "100%",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px var(--box-shadow)",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/400x300?text=IT+Professional";
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Managed Services Model Section */}
        <section className={styles.managedServicesSection}>
          <div className="container">
            <h2 className={`section-title ${styles.sectionTitle}`}>
              <span>
                With our flexible Managed Services model, you get IT support
                tailored to your needs:
              </span>
            </h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3 className={styles.serviceTitle}>
                  Fully Managed IT Services
                </h3>
                <p className={styles.serviceDescription}>
                  Take the pressure off your internal teams with fully managed
                  IT solutions that cover everything—network, security, cloud,
                  support, and compliance. Our experts proactively monitor,
                  maintain, and optimize your IT environment 24/7. With seamless
                  operations and ironclad security, your business stays agile,
                  resilient, and focused on growth—while we handle the
                  technology behind the scenes.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <i className="fas fa-list-alt"></i>
                </div>
                <h3 className={styles.serviceTitle}>À La Carte IT Services</h3>
                <p className={styles.serviceDescription}>
                  Get exactly what’s needed, when it’s needed. Our À La Carte IT
                  Services let you pick from expert-led solutions—like cloud
                  migrations, cybersecurity audits, or project
                  consulting—without the full commitment. Ideal for fast-moving
                  businesses, this flexible model keeps you in control while
                  unlocking top-tier support and innovation to power your next
                  step forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className="container">
            <h2 className={`section-title ${styles.sectionTitle}`}>
              <span>What Are the Benefits of a Managed Service Provider?</span>
            </h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h3>Lower IT Costs</h3>
                  <p>
                    With today's global shortage of skilled IT workers, hiring
                    and retaining in-house talent can be expensive. Switching to
                    managed IT services is often easier and can dramatically
                    reduce IT expenses.
                  </p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h3>Operational Efficiency</h3>
                  <p>
                    As your organization grows, in-house IT teams can quickly
                    become overwhelmed. Outsourcing IT services ensures your
                    business maximizes performance, efficiency, and reliability
                    from your technology infrastructure.
                  </p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-users-cog"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h3>Better Resource Allocation</h3>
                  <p>
                    A managed service provider gives you access to advanced IT
                    expertise, allowing you to optimize your in-house resources
                    and drive greater value across your organization.
                  </p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-sync-alt"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h3>Up to Date Technology</h3>
                  <p>
                    System failures can cost small businesses anywhere from $82K
                    to $256K per incident. A managed IT service provider helps
                    keep your technology secure, reliable, and operating at peak
                    efficiency.
                  </p>
                </div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <i className="fas fa-rocket"></i>
                </div>
                <div className={styles.benefitContent}>
                  <h3>Growth Opportunities</h3>
                  <p>
                    Delegating complex technology decisions to a trusted IT
                    services provider enables you to concentrate on core
                    competencies and seize growth opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <UseCasesSection title="Use Cases" useCases={useCases} />

        <section className={styles.managedServicesSection}>
          <div className="container">
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>
                  What Are Managed IT Services?
                </h3>
                <p className={styles.serviceDescription}>
                  Managed IT services involve outsourcing IT tasks and
                  management to expert third-party providers, helping businesses
                  streamline operations and reduce costs. This model ensures
                  efficient, secure, and proactive IT support without the burden
                  of in-house management. At DG FutureTech, we offer a
                  comprehensive range of managed services, including IT support,
                  cybersecurity, cloud migration, hosting, application
                  development, unified communications, and more tailored to meet
                  your business needs.
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>
                  What Is a Managed IT Service Provider?
                </h3>
                <p className={styles.serviceDescription}>
                  A Managed Service Provider (MSP) is an IT company that
                  oversees and manages an organization's technology, systems,
                  and overall IT needs. Managed IT solutions can be tailored to
                  fit your business—whether it's fully outsourcing your IT,
                  engaging in a one-time consulting project, or opting for a
                  co-managed IT agreement that supports your in-house team. At
                  DG FutureTech, we offer competitive, flat-rate pricing with a
                  monthly subscription model, including unlimited remote support
                  from our U.S.-based help desk.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready for stress-free IT?  Book Consultation"
          description="From proactive monitoring and network support to on-demand IT assistance, DG FutureTech ensures your systems run smoothly—so you can focus on business growth with total peace of mind.  "
          buttonText="Book a Consultation"
          buttonLink="https://calendly.com/rachna-kolhapure-dgfuturetech/30min"
        />

        {/* Strategic Vision Section */}
        <section className={styles.strategicVisionSection}>
          <div className="container">
            <h2 className={`section-title ${styles.sectionTitle}`}>
              <span>Why DG FutureTech?</span>
            </h2>
            <div className={styles.infoContent}>
              <p>
                We believe it comes down to four key principles that fuel the
                growth of our clients and our people:
              </p>
            </div>

            <div className={styles.visionGrid}>
              <div className={styles.visionCard}>
                <div className={styles.visionIcon}>
                  <i className="fas fa-chess-knight"></i>
                </div>
                <h3 className={styles.visionTitle}>Strategic Partnership</h3>
                <p className={styles.visionDescription}>
                  We build long-term strategic partnerships that go beyond
                  transactions—driving mutual growth, innovation, and resilience
                  through aligned goals, shared vision, and a commitment to
                  delivering real, measurable business outcomes.
                </p>
              </div>

              <div className={styles.visionCard}>
                <div className={styles.visionIcon}>
                  <i className="fas fa-users"></i>
                </div>
                <h3 className={styles.visionTitle}>Talented Team</h3>
                <p className={styles.visionDescription}>
                  Our success is driven by a diverse, skilled, and passionate
                  team that brings deep expertise, creativity, and dedication to
                  every challenge—transforming ideas into impactful, scalable
                  technology solutions.
                </p>
              </div>

              <div className={styles.visionCard}>
                <div className={styles.visionIcon}>
                  <i className="fas fa-globe-americas"></i>
                </div>
                <h3 className={styles.visionTitle}>Social Impact</h3>
                <p className={styles.visionDescription}>
                  We believe in technology as a force for good—committed to
                  creating social impact through responsible innovation,
                  community engagement, and initiatives that drive equity,
                  education, and sustainable development.
                </p>
              </div>

              <div className={styles.visionCard}>
                <div className={styles.visionIcon}>
                  <i className="fas fa-handshake"></i>
                </div>
                <h3 className={styles.visionTitle}>People-Centric Approach</h3>
                <p className={styles.visionDescription}>
                  Human connection is at the heart of everything we do. Our
                  people-centric approach prioritizes user experience, team
                  wellbeing, and inclusive design to ensure meaningful, lasting
                  value for everyone we serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
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
    </>
  );
};

export default ManagedITServices;
