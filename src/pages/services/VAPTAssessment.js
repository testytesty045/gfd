import React from "react";
import ServicesBanner from "../../components/common/ServicesBanner";
import heroImage from "../../assets/images/hero.png";
import styles from "../styles/VAPTAssessment.module.css";
import UseCasesSection from "../../components/UseCasesSection";
import PageTitle from "../../components/PageTitle";
import ServiceSection from "./ServiceSection";
import CTASection from "../../components/common/CTASection";

const VAPTAssessment = () => {
  const title = "VAPT Assessment";

  const services = [
    {
      id: 1,
      icon: "fas fa-network-wired",
      title: " Network Infrastructure ",
      description:
        "Evaluation of routers, firewalls, switches, and other network components for potential security flaws.",
    },
    {
      id: 2,
      icon: "fas fa-shield-alt",
      title: "Web Applications",
      description:
        "Testing websites and web-based systems for vulnerabilities such as SQL injection, XSS, and more.",
    },

    {
      id: 3,
      icon: "fas fa-mobile-alt",
      title: "Mobile Applications",
      description:
        "Assessing the security of mobile apps, including backend APIs and data handling.",
    },
    {
      id: 4,
      icon: "fas fa-cloud",
      title: "Cloud Infrastructure",
      description:
        "Analyzing the security posture of cloud platforms and hosted services.",
    },
  ];

  const benefits = [
    {
      id: 1,
      icon: "fas fa-user-shield",
      title: "Comprehensive Security Insight",
      description:
        "Offers an in-depth view of an organization’s current security posture.",
    },
    {
      id: 2,
      icon: "fas fa-chart-line",
      title: "Enhanced Security Measures",
      description:
        " Helps strengthen defenses by addressing identified weaknesses.",
    },
    {
      id: 3,
      icon: "fas fa-check-circle",
      title: "Lower Risk Exposure",
      description:
        " Reduces the chances of security breaches, data loss, and service disruptions.",
    },
  ];

  const process = [
    {
      id: 1,
      phase: "Planning & Scoping",
      description:
        "Define the objectives, systems, and extent of testing involved in the VAPT exercise.",
    },
    {
      id: 2,
      phase: "Vulnerability Assessment",
      description:
        "Use automated tools and manual techniques to detect security weaknesses.",
    },
    {
      id: 3,
      phase: "Penetration Testing",
      description:
        " Simulate real-world attacks to verify the severity and exploitability of the vulnerabilities.",
    },
    {
      id: 4,
      phase: "Reporting & Remediation",
      description:
        "Deliver a detailed report with findings, risk ratings, and actionable remediation recommendations.",
    },
  ];

  const rawUseCases = [
    {
      challengeTitle: "Challenge",
      challenge:
        "A bank wanted to perform Dynamic Application Security Testing on its campaign management web application using a Structured Vulnerability Management Process.",
      solutionTitle: "DG FutureTech Solution",
      solution:
        "DG FutureTech conducts Vulnerability Assessment and Penetration Testing (VAPT) on the web application, which includes distinct user roles and logins.\nCode Review to detect, validate and remediate vulnerabilities directly with development team. \nDefines risk rating based on organizational Standard Operational Procedures. \nOffers a centralized dashboard to manage vulnerabilities and central task force team for entire activity management. \nTools - Burpsuite, Acunutix, Netsparker.",
    },
    {
      challengeTitle: "Challenge",
      challenge:
        "A leading financial institution faced security risks in its online banking platform, exposing sensitive financial data to potential cyber threats.",
      solutionTitle: "Solution",
      solution: [
        "A comprehensive Vulnerability Assessment and Penetration Testing (VAPT) was conducted.",
        "Scope: Online banking platform, network, and internal systems.",
        "Assessment: Identified vulnerabilities using automated tools and manual testing.",
        "Penetration Testing: Simulated attacks to expose security gaps.",
        "Issues Found: SQL injection flaws, insecure API endpoints.",
        "Fixes Implemented: Strengthened input validation, secured APIs.",
        "Outcome: Enhanced platform security, mitigating cyber risks.",
      ],
    },
  ];
  const useCases = rawUseCases.map((item) => {
    return {
      ...item,
      solution: Array.isArray(item.solution) ? (
        <ul className="list-disc list-inside space-y-2">
          {item.solution.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      ) : (
        <p>{item.solution}</p>
      ),
    };
  });
  return (
    <>
      <PageTitle
        title="VAPT Assessment"
        description="Vulnerability Assessment and Penetration Testing services to identify and address security weaknesses in your systems and applications."
      />
      <div className="bg-gradient-to-b from-white to-light-blue min-h-screen">
        <ServicesBanner
          title={title}
          heroImage={heroImage}
          description="Proactive Security Testing to Safeguard Your Digital Assets."
          compactMode={true}
        />

        {/* Overview Section */}
        <section className={styles.overviewSection}>
          <div>
            <h2 className={styles.overviewTitle}>What is VAPT and Why Is It Important?</h2>
            <p className={styles.overviewDescription}>
               Vulnerability Assessment and Penetration Testing (VAPT) is a comprehensive security evaluation process used to identify and address weaknesses in your IT systems, 
              applications, and networks. While vulnerability assessment highlights potential risks, 
              penetration testing simulates real-world attacks to exploit those vulnerabilities—helping you understand the true impact of a breach.
              VAPT is essential for safeguarding sensitive data, meeting compliance requirements, and strengthening your organization’s 
              cyber defenses before attackers find a way in.
            </p>{" "}
            <br />
            </div>
        </section>

        {/* Services Grid */}
        <section className={styles.servicesSection}>
          <div className="container">
            <h2 className={styles.servicesTitle}>Scope of VAPT</h2>
            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <div key={service.id} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>
                    <i className={service.icon}></i>
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits of VAPT */}
        <section className={styles.benefitsSection}>
          <div className="container">
            <h2 className={styles.benefitsTitle}>Benefits of VAPT</h2>
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit) => (
                <div key={benefit.id} className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <i className={benefit.icon}></i>
                  </div>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VAPT Process */}
        <section className={styles.processSection}>
          <div className="container">
            <h2 className={styles.processTitle}>VAPT Process</h2>
            <div className={styles.timeline}>
              {process.map((phase) => (
                <div key={phase.id} className={styles.timelineItem}>
                  <span className={styles.phaseNumber}>{phase.id}</span>
                  <h3 className={styles.phaseTitle}>{phase.phase}</h3>
                  <p className={styles.phaseDescription}>{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <UseCasesSection useCases={useCases} />
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

export default VAPTAssessment;