import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/ManagedIT.module.css";

const ServiceSection = () => {
  return (
    <>
      {/* Additional Services Section */}
      <section className={styles.additionalServices}>
        <div className="container">
          <h2 className={`section-title ${styles.sectionTitle}`}>
            <span>IT Services offered by DG FutureTech</span>
          </h2>
          <div className={styles.servicesWrapper}>
            <Link to="/managed-services" className={styles.serviceLink}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceItemTitle}>Managed IT Solutions</h3>
                <p className={styles.serviceItemDescription}>
                  Experience seamless performance with expertly managed IT
                  services. Through proactive monitoring and scalable solutions,
                  operations stay secure and efficient—allowing your business to
                  grow without disruption and focus fully on strategic goals.
                </p>
              </div>
            </Link>

            <Link to="/co-managed-it-services" className={styles.serviceLink}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceItemTitle}>Co-Managed IT Services</h3>
                <p className={styles.serviceItemDescription}>
                  With 12+ years of experience IT service management, DG FutureTech
                  works together with your businesses' in-house IT teams to
                  enhance infrastructure performance, handle the extra workload to
                  improve user satisfaction.
                </p>
              </div>
            </Link>

            <Link to="/infrastructuremanagement" className={styles.serviceLink}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceItemTitle}>Infrastructure Management</h3>
                <p className={styles.serviceItemDescription}>
                  DG FutureTech's server management services ensure your servers
                  are always online, secure, and up-to-date. We provide 24x7
                  monitoring and expert support, minimizing downtime and
                  protecting your business.
                </p>
              </div>
            </Link>

            <Link to="/networkmonitoring" className={styles.serviceLink}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceItemTitle}>Network Management</h3>
                <p className={styles.serviceItemDescription}>
                  DG FutureTech provides comprehensive 24x7 network monitoring to
                  ensure your business runs seamlessly. Our expert team delivers
                  reliable solutions, proactively addressing issues and
                  optimizing your network for peak performance.
                </p>
              </div>
            </Link>

            <Link to="/vapt-assessment" className={styles.serviceLink}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceItemTitle}>VAPT Assessment</h3>
                <p className={styles.serviceItemDescription}>
                  We offer end-to-end Vulnerability Assessment & Penetration
                  Testing (VAPT) for web, mobile, and cloud systems to identify
                  and fix security risks. Our process ensures improved security
                  posture, reduced cyber threats, and actionable remediation.
                </p>
              </div>
            </Link>

            <Link to="/application-development" className={styles.serviceLink}>
              <div className={styles.serviceItem}>
                <h3 className={styles.serviceItemTitle}>Application Development</h3>
                <p className={styles.serviceItemDescription}>
                  Custom application development tailored to business
                  needs—delivering scalable, secure, and user-friendly solutions
                  that drive innovation, streamline operations, and accelerate
                  digital transformation across platforms.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
