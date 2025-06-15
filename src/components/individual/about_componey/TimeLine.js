import React from "react";
import { timelineData } from "../../../data/services.js";
import styles from '../../styles/timeline.module.css';
import timelineImage from "../../../assets/images/timeline.webp";


const Timeline = () => {
  return (
    <section 
      className={styles.timeline_container}
      style={{
        backgroundImage: `url(${timelineImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden"
      }}
    >
      {timelineData.map((item, index) => (
        <div
          className={styles.timeline_item}
          data-position={item.position}
          key={index}
        >
          <div className={styles.year_wrapper}>
            <h3 style={{ backgroundColor: item.yearBgColor }}>
              {item.year}
            </h3>
            <p>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Timeline;

