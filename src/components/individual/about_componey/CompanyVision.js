import React from "react";
import BenefitsCard from "./BenefitsCard";
import styles from "../../styles/companyvision.module.css";
import righImage from "../../../assets/images/about_blue_section.webp";

const CompanyVision = () => {
  return (
    <div className={styles["vision-container"]}>
      <div className={styles["vision-content"]}>
        <div className={styles["title-container"]}>
          <h1 className={styles["vision-title"]}>
            <span className={styles["company-text"]}>Company</span>
            <span className={styles["vision-text-blue"]}>Vision</span>
            <span className={styles["mission-text"]}>& Mission</span>
          </h1>
        </div>

        {/* <h2 className={styles["title"]}><strong>Here's Why you are going to love working with DG FutureTech</strong></h2> */}

        <div className={styles["yellow-line"]}></div>

        <p margin-right="40px" className={styles.description} align="justify" >
          Our philosophy has always been very simple – to combine the highest
          level of technical expertise with superior customer service so that we
          become your long-term trusted partner. As a company, we are keen to
          co-create and co-innovate to optimize operations that will result in
          value-centred business.
        </p>
        <br />
        <h2 className={styles.title}>
          <strong>Our Vision</strong>
        </h2>
        <br />
        <p className={styles.description}>
          Our vision is to become a high-end provider of digital transformation services by
          focusing on solutions that give you a competitive edge, increase in
          productivity and lower operational costs.
        </p>
      </div>

      <div className={styles["desktop-section"]}>
        <div
          className={styles["desktop-image"]}
          style={{ backgroundImage: `url(${righImage})` }}
          loading="lazy"
        />
        <BenefitsCard />
      </div>

      <div className={styles["mobile-section"]}>
        <div className={styles["mobile-benefits-card"]}>
          <BenefitsCard />
        </div>
        <img
          src={righImage}
          alt="Company Vision"
          className={styles["mobile-image"]}
          loading="lazy"
          width="100%"
          height="auto"
        />
      </div>
    </div>
  );
};

export default CompanyVision;
