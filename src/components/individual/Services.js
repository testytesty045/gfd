import React from "react";
import styles from "../styles/common.module.css";

const Services = () => {
  return (
    <div className={styles.servicesMainContainer}>
      <div className={styles.servicesImageContainer}>
        <div className={styles.servicesOverlay}>
          <h2> Bridging Connections & Crafting Co-Value!</h2>
          <div
            className={`${styles.serviceCards} ${styles.mobileServiceCards}`}
          >
            <div className={styles.serviceCard}>
              <h3>Proactive Maintenance</h3>
              <p className={styles.subheading}>Proactively avoiding disruptions</p>
              <hr />
              <p>
                DG FutureTech utilizes advanced 24x365 monitoring to ensure continuous
                system oversight, while proactive maintenance helps prevent costly
                disruptions and extends the lifespan of your IT assets.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Regular Security Audits</h3>
              <p className={styles.subheading}>Ensuring continuous protection</p>
              <hr />
              <p>
                Our Regular Security Audits are designed to identify vulnerabilities
                and strengthen your systems, ensuring maximum protection against
                threats. We use industry best practices to safeguard your business.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Expertise & Scalability</h3>
              <p>End-to-End expertise and scalability</p>
              <hr />
              <p>
                With our expertise, we ensure that your IT infrastructure is scalable
                and ready for future growth. From small startups to large enterprises,
                we provide solutions tailored to your needs.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Quality with Cost Benefits</h3>
              <p>Reducing operational costs</p>
              <hr />
              <p>
                Our solutions are designed to minimize IT-related costs while
                maintaining high-quality services. We help you optimize your budget by
                implementing cost-effective strategies and leveraging cutting-edge
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;