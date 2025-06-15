import { useEffect } from "react";
import styles from "../styles/ServerManagement.module.css";
import ServicesBanner from "../../components/common/ServicesBanner";
import heroImage from "../../assets/images/hero.png";
import { getServiceById } from "../../data/services";
import UseCasesSection from "../../components/UseCasesSection";
import PageTitle from "../../components/PageTitle";
import CTASection from "../../components/common/CTASection";
import ServiceSection from "./ServiceSection";

const service = getServiceById("server-administration");

function ServerManagement() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scenarios = [
    {
      id: 1,
      icon: "fas fa-clock",
      title: "24x7 Server Monitoring",
      description:
        "Continuous oversight ensures your systems never face undetected issues, with immediate alerts and rapid response.",
    },
    {
      id: 2,
      icon: "fas fa-user-cog",
      title: "Expert Administration",
      description:
        "Gain access to certified professionals with deep technical expertise for all server management challenges.",
    },
    {
      id: 3,
      icon: "fas fa-business-time",
      title: "Business Continuity",
      description:
        "Minimize costly downtime with proactive maintenance and rapid issue resolution for uninterrupted operations.",
    },
    {
      id: 4,
      icon: "fas fa-shield-alt",
      title: "Security & Compliance",
      description:
        "Protect your data and maintain regulatory compliance with ongoing security assessments and updates.",
    },
    {
      id: 5,
      icon: "fas fa-server",
      title: "Performance Optimization",
      description:
        "Maximize efficiency and speed of your critical business applications through expert server tuning.",
    },
  ];

  const useCases = [
    {
      challenge:
        "A financial services firm must adhere to strict cybersecurity protocols and regulatory requirements (e.g., PCI DSS). Outdated software and unpatched servers are major risks.",
      solution:
        "DG FutureTech automates patch management across all Windows and Linux servers using tools like WSUS, Ansible, or SCCM.\nScheduled patching minimize operational disruption. \nPerforms regular vulnerability scans and hardens server configurations.",
      benefits:
        "Reduces risk of breaches and malware infections.\n Ensures compliance with industry regulations. \nSaves time through automation and reduces manual errors.",
    },
    {
      challenge:
        "A healthcare client relies on multiple critical applications hosted on on-prem and cloud servers. Downtime could disrupt patient care.",
      solution:
        " DG FutureTech implements 24x7 server monitoring tools (e.g., Nagios, Zabbix, Datadog) to track CPU usage, memory, disk space, and network activity. When thresholds are breached, automated alerts are triggered for immediate remediation. Additionally, monthly performance reports and audits are generated to identify bottlenecks and optimize resource allocation.",
      benefits:
        "Reduces unplanned downtime Improves application performance. \nEnhances patient data security and compliance.",
    },
  ];
  const benefits = [
    {
      id: 1,
      name: "Proactive Troubleshooting",
      description:
        "We identify and resolve server issues quickly, minimizing costly downtime. Our 24x7 monitoring ensures rapid response.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      icon: "fas fa-shield-alt",
    },
    {
      id: 2,
      name: "Seamless Maintenance",
      description:
        "We handle all server updates and maintenance, ensuring optimal performance and security, so you don't have to.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      icon: "fas fa-tools",
    },
    {
      id: 3,
      name: "Efficient Software Installations",
      description:
        "Our experts manage software installations, preventing errors and ensuring smooth operation.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      icon: "fas fa-download",
    },
    {
      id: 4,
      name: "Performance Optimization",
      description:
        "We optimize your server for peak efficiency, eliminating bottlenecks and improving overall performance.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      icon: "fas fa-tachometer-alt",
    },
    {
      id: 5,
      name: "Zero-Downtime OS Updates",
      description:
        "We deliver critical OS updates without disrupting your business operations, ensuring security and stability.",
      image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a",
      icon: "fas fa-sync-alt",
    },
  ];

  return (
    <>
      <PageTitle
        title="Server Administration"
        description="Professional server administration services to keep your infrastructure running efficiently, securely, and reliably."
      />
      <div className="bg-gradient-to-b from-white to-light-blue min-h-screen">
        <div>
          <ServicesBanner
            title={service.title}
            description={service.caseStudyDescription}
            heroImage={heroImage}
            compactMode={true}
          />
        </div>

        {/* What is Server Management Section */}
        {/* What is Server Management Section */}
        <section className={styles.whatIsSection}>
          <div className={styles.whatIsCard}>
            <h2 className={`${styles.whatIsTitle} ${styles.sectionTitle}`}>
              <span>What are Server Management Services?</span>
            </h2>
            <p className={styles.whatIsDescription}>
              <strong>Optimize. Secure. Scale.</strong>
              <br />
              Your IT infrastructure is the backbone of your business
              operations. At DG FutureTech, we provide comprehensive{" "}
              <span className={styles.highlight}>
                Infrastructure Management Services (IMS)
              </span>{" "}
              designed to ensure your systems are reliable, scalable, and secure
              — empowering you to focus on strategic growth instead of technical
              headaches.
              <br />
              <br />
              Our approach combines proactive monitoring, automated tools, and
              expert support to minimize downtime and maximize performance.
              Whether you're managing on-premises hardware, cloud environments,
              or hybrid setups, we deliver customized solutions that align with
              your operational needs and future goals.
              <br />
              With <span className={styles.highlight}> DG FutureTech</span> as your infrastructure partner, you gain the
              agility to adapt quickly, the resilience to stay secure, and the
              efficiency to reduce costs — all while maintaining seamless
              business continuity.
            </p>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className={styles.solutionsSection}>
          <div className="container">
            <h2 className={styles.solutionsTitle}>
              <span>
                KEY Benefits
              </span>
            </h2>
            <div className={styles.solutionsGrid}>
             
                {benefits.map((benefit, index) => (
                  <div key={benefit.id} className={styles.solutionCard}>
                    <div className={styles.solutionIcon}>
                      <i className={benefit.icon}></i>
                    </div>
                    <h3 className={styles.solutionTitle}>{benefit.name}</h3>
                    <p className={styles.solutionDescription}>
                      {benefit.description}
                    </p>
                    {/* {index < benefits.length - 1 && (
                      <div className={styles.benefitDivider}></div>
                    )} */}
                  </div>
                ))}
      
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
}

export default ServerManagement;
