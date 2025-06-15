import React, { useState, useEffect } from 'react';
import styles from '../styles/media.module.css';
import pressOne from "../../assets/images/press-release.webp";
import pressTwo from "../../assets/images/press-release2.webp";
import heroImage from "../../assets/images/hero.png";
import ServicesBanner from '../common/ServicesBanner';
import { fetchMediaContent } from '../../data/services';

const Media = () => {
  const [mediaData, setMediaData] = useState(null);

  useEffect(() => {
    const data = fetchMediaContent();
    setMediaData(data);
  }, []);

  return (
    <>
    <ServicesBanner
      title="Media Center"
      heroImage={heroImage}
      compactMode={true}
      caseStudyDescription="DG FutureTech media center provides the latest news and press releases about our company and services."
    />
  
    <div className={styles["media-manage"]}>
      <div className={styles["media-text-section"]}>
        {/* <h1>Media Center</h1> */}
        {/* <p>DG FutureTech media center provides the latest news and press releases about our company and services.</p>
         */}
        <div className={styles["media-right-data"]} data-aos="fade-up">
          <h4>Press Releases</h4>
        </div>
      </div>

      <div className={styles["media-content"]}>
        <img src={pressTwo} alt="Press Release 2" className={styles.mediaOne} />
        <img src={pressOne} alt="Press Release 1" className={styles.mediaOne} />
      </div>
    </div>
    </>
  );
};

export default Media;