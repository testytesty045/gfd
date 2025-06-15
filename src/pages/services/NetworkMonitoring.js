import React, { useEffect } from "react";
import { getServiceById } from "../../data/services";
import ServicesBanner from "../../components/common/ServicesBanner";
import heroImage from "../../assets/images/hero.png";
import styles from "../styles/NetworkMonitoring.module.css";
import UseCasesSection from "../../components/UseCasesSection";
import PageTitle from "../../components/PageTitle";
import CTASection from "../../components/common/CTASection";
import ServiceSection from "./ServiceSection";

const NetworkMonitoring = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const painPoints = [
    {
      id: 1,
      icon: "fas fa-tachometer-alt",
      title: "Monitoring network traffic origin, destination & bandwidth.",
      // description: "Businesses struggle to effectively track where network traffic is coming from, where it's going, and how much bandwidth is being consumed."
    },
    {
      id: 2,
      icon: "fas fa-search",
      title: "Lack of in-depth analysis across networks.",
      description:
        "Without proper monitoring tools, organizations miss critical insights into network performance and potential issues.",
    },
    {
      id: 3,
      icon: "fas fa-shield-alt",
      title: "Quickly detecting intrusions & compromises.",
      description:
        "Security breaches often go undetected for extended periods, leading to significant data and financial losses.",
    },
    {
      id: 4,
      icon: "fas fa-exclamation-triangle",
      title: "Maintaining high levels of network availability.",
      description:
        "Keeping networks operational 24x7 without proper monitoring tools and expertise is nearly impossible.",
    },
  ];

  const solutions = [
    {
      id: 1,
      icon: "fas fa-chart-line",
      title: "Network Traffic Analysis",
      description:
        "Gain actionable insights into your network traffic to optimize bandwidth and performance.",
    },
    {
      id: 2,
      icon: "fas fa-shield-alt",
      title: "Network Security Monitoring",
      description:
        "Protect your business with proactive threat detection and prevention.",
    },
    {
      id: 3,
      icon: "fas fa-wrench",
      title: "Server Monitoring",
      description:
        "Ensure continuous server uptime and efficiency for uninterrupted business operations.",
    },
    {
      id: 4,
      icon: "fas fa-server",
      title: "Application Performance Monitoring.",
      description:
        "Identify and resolve application bottlenecks to maximize user experience.",
    },
    {
      id: 5,
      icon: "fas fa-sync",
      title: "Cloud Infrastructure Monitoring",
      description:
        "Maintain optimal performance and prevent downtime in your cloud environment.",
    },
    {
      id: 6,
      icon: "fas fa-headset",
      title: "Network Device Monitoring",
      description:
        "Track and manage all network devices for consistent and reliable operation.",
    },
  ];

  const useCases = [
    {
      challenge:
        "A fintech firm client must protect sensitive legal data from cyber threats. One incident revealed that they lack internal expertise to monitor network intrusions or unusual traffic patterns.",
      solution:
        "DG FutureTech sets up intrusion detection systems (IDS), firewall monitoring, and continuous traffic analysis using relevant tools. \nAny unusual activity—such as repeated failed login attempts or abnormal data transfers triggers alerts. In such case, we also propose to investigate incidents and implemente network segmentation and access controls as needed.",
      benefits:
        "Early detection of potential security breaches· \nStrengthened client trust and compliance with data protection laws Minimized impact of threats through fast response.",
    },
    {
      challenge:
        "Enterprise networks are vulnerable to ransomware attacks that spread quickly, encrypt data, and cause major disruptions before detection.",
      solution:
        "Deploy a Network Security Threat Detection and Response system that Detects abnormal network behavior (e.g., unusual traffic, file encryption). \nAutomates response by isolating infected systems and triggering alerts.\nCorrelates endpoint and network data for rapid forensics and recovery.",
      benefits:  
        " Leverages threat intelligence to identify known malicious activity. \nAutomates response by isolating infected systems and triggering alerts. \nCorrelates endpoint and network data for rapid forensics and recovery.",
    },
  ];

  return (
    <>
      <PageTitle
        title="Network Monitoring"
        description="24x7 network monitoring and management services to ensure your IT infrastructure runs smoothly and securely."
      />
      <div>
        <ServicesBanner
          title="Network Management"
          description={
            getServiceById("network-monitoring").caseStudyDescription
          }
          heroImage={heroImage}
          compactMode={true}
        />

        <section className={styles.painPointsSection}>
           <div className="container">
          <h2 className={styles.painPointsTitle}>
            Do These Network Challenges Sound Familiar?
          </h2>
          <p style={{ textAlign: "center", marginBottom: "var(--spacing-xl)" }}>
            Many businesses struggle with these common network monitoring and
            management issues.
          </p>
          <div className={styles.painPointsGrid}>
            {painPoints.map((point) => (
              <div key={point.id} className={styles.painPointItem}>
                <div className={styles.painPointIcon}>
                  <i className={point.icon}></i>
                </div>
                <div className={styles.painPointContent}>
                  <h3>{point.title}</h3>
                  {/* <p>{point.description}</p> */}
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>

        {/* Prevent Disruptions Section */}
        <section className={styles.preventSection}>
          <div className="container">
            <div className={styles.preventContainer}>
              <h2 className={styles.preventTitle}>
                Prevent Disruptions Before They Happen
              </h2>
              <p className={styles.preventDescription}>
                Digital transformation has increased network complexity and
                management costs.
              </p>
              <p className={styles.preventDescription}>
                Expanding technologies and devices across multiple locations add
                to the challenge.
              </p>
              <p className={styles.preventDescription}>
                DG FutureTech's 24x7 NOC offers:
              </p>
              <ul className={styles.preventList}>
                <li className={styles.preventItem}>
                  <i className={`fas fa-check ${styles.preventCheckmark}`}></i>
                  <span>
                    Comprehensive monitoring for IT networks of any size and
                    complexity.
                  </span>
                </li>
                <li className={styles.preventItem}>
                  <i className={`fas fa-check ${styles.preventCheckmark}`}></i>
                  <span>
                    Cutting-edge tools to ensure maximum uptime and minimize
                    downtime risks.
                  </span>
                </li>
                <li className={styles.preventItem}>
                  <i className={`fas fa-check ${styles.preventCheckmark}`}></i>
                  <span>
                    Proactive monitoring and real-time alert response.
                  </span>
                </li>
                <li className={styles.preventItem}>
                  <i className={`fas fa-check ${styles.preventCheckmark}`}></i>
                  <span>
                    Rapid identification of issues for efficient resolution.
                  </span>
                </li>
                <li className={styles.preventItem}>
                  <i className={`fas fa-check ${styles.preventCheckmark}`}></i>
                  <span>
                    Enhanced control over network infrastructure to maintain
                    business continuity.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.strategicVisionSection}>
          <div className="container">
            <h6 className={styles.sectionTitle}>
              DG FutureTech: Complete Suite of Services for Optimal Network
              Performance
            </h6>
            <div className={styles.infoContent}>
              <p>
                DG FutureTech provides comprehensive 24x7 network monitoring to
                ensure your business runs seamlessly. Our expert team delivers
                reliable solutions, proactively addressing potential issues and
                optimizing your network for peak performance.
              </p>
            </div>
          </div>
        </section>

        {/* Our Solutions Section */}
        <section className={styles.solutionsSection}>
          <div className="container">
            <h2 className={styles.solutionsTitle}>Our Services Include</h2>
            <div className={styles.solutionsGrid}>
              {solutions.map((solution) => (
                <div key={solution.id} className={styles.solutionCard}>
                  <div className={styles.solutionIcon}>
                    <i className={solution.icon}></i>
                  </div>
                  <h3 className={styles.solutionTitle}>{solution.title}</h3>
                  <p className={styles.solutionDescription}>
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.whatIsSection}>
          <h6 className={styles.sectionTitle}>
            Optimize Your Network with DG FutureTech
          </h6>
          <div className={styles.whatIsContent}>
            <h2 className={styles.whatIsTitle}>
              Is your network keeping up with your business?
            </h2>
            <p className={styles.whatIsDescription}>
              In today's fast-moving digital world, a solid network strategy
              isn't just important—it's critical. At DG FutureTech, we design
              and optimize secure, high-performance networks that scale with
              your needs—from the data center to the edge.
            </p>
          </div>
        </section>

        {/* Our Offerings Section */}
        <section className={styles.solutionsSection}>
           <div className="container">
          <h2 className={styles.solutionsTitle}>We Offer</h2>
          <div className={styles.solutionsGrid}>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                <i className="fas fa-network-wired"></i>
              </div>
              <h3 className={styles.solutionTitle}>Custom Network Solutions</h3>
              <p className={styles.solutionDescription}>
                Tailored strategies using a wide range of networking and
                security products.
              </p>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                <i className="fas fa-users-cog"></i>
              </div>
              <h3 className={styles.solutionTitle}>
                Expert Consulting & Support
              </h3>
              <p className={styles.solutionDescription}>
                Navigating the complexities of multi-cloud and evolving network
                edges.
              </p>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className={styles.solutionTitle}>
                Enhanced Performance & Security
              </h3>
              <p className={styles.solutionDescription}>
                Boosting efficiency and safeguarding your critical data.
              </p>
            </div>
          </div>
          </div>
        </section>

        <UseCasesSection title="Use Cases" useCases={useCases} />

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

export default NetworkMonitoring;
