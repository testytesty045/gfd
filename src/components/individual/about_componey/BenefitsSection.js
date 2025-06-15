import React, { useState, useEffect } from "react";
import BenefitCard from "./BenefitCard";
import styles from "../../../components/styles/benifits.module.css";

import LowerITCostsIcon from "../../../assets/images/Lower IT Costs.png";
import OperationalEfficiencyIcon from "../../../assets/images/Operational Efficiency.png";
import ResourceAllocationIcon from "../../../assets/images/Better Resource Allocation.png";
import UpToDateTechnologyIcon from "../../../assets/images/Up to date technology photo_enhanced_enhanced.png";
import NightShiftsIcon from "../../../assets/images/Allowance for night shifts.png";

const BenefitsSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  useEffect(() => {
    const imagesList = [
      LowerITCostsIcon,
      OperationalEfficiencyIcon,
      ResourceAllocationIcon,
      UpToDateTechnologyIcon,
      NightShiftsIcon
    ];
    
    const loadedImages = Array(imagesList.length).fill(false);
    let loaded = 0;
    
    imagesList.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages[index] = true;
        loaded++;
        if (loaded === imagesList.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loaded++;
        if (loaded === imagesList.length) {
          setImagesLoaded(true);
        }
      };
    });
    
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const benefitsData = [
    {
      icon: LowerITCostsIcon,
      title: "Lower IT Costs",
      description:
        "With today's global shortage of skilled IT workers, hiring and retaining in-house talent can be expensive. Switching to managed IT services is often easier and can dramatically reduce IT expenses.",
    },
    {
      icon: OperationalEfficiencyIcon,
      title: "Operational Efficiency",
      description:
        "As your organization grows, in-house IT teams can quickly become overwhelmed. Outsourcing IT services ensures your business maximizes performance, efficiency, and reliability from your technology infrastructure.",
    },
    {
      icon: ResourceAllocationIcon,
      title: "Better Resource Allocation",
      description:
        "A managed service provider gives you access to advanced IT expertise, allowing you to optimize your in-house resources and drive greater value across your organization.",
    },
    {
      icon: UpToDateTechnologyIcon,
      title: "Up to Date Technology",
      description:
        "System failures can cost small businesses anywhere from $82K to $256K per incident. A managed IT service provider helps keep your technology secure, reliable, and operating at peak efficiency.",
    },
    {
      icon: NightShiftsIcon,
      title: "Growth Opportunities",
      description:
        "Delegating complex technology decisions to a trusted IT services provider enables you to concentrate on core competencies and seize growth opportunities.",
    },
  ];
  
  return (
    <section className={styles["benefits-section"]}>
      <h2 className={styles["benefits-title"]}>
        <span className={styles["benefits-text"]}>Benefits</span> and{" "}
        <span className={styles["features-text"]}>Features</span>
      </h2>

      <div className={styles["benefits-cards-container"]}>
        <div className={styles["benefits-top-row"]}>
          {benefitsData.slice(0, 3).map((benefit, index) => (
            <div key={index} className={styles["benefit-item"]}>
              <BenefitCard icon={benefit.icon} />
              <h3 className={styles["benefit-title-below"]}>{benefit.title}</h3>
              <p className={styles["benefit-description-below"]}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className={styles["benefits-bottom-row"]}>
          {benefitsData.slice(3, 5).map((benefit, index) => (
            <div key={index} className={styles["benefit-item"]}>
              <BenefitCard icon={benefit.icon} />
              <h3 className={styles["benefit-title-below"]}>{benefit.title}</h3>
              <p className={styles["benefit-description-below"]}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
