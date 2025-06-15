import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/itservice.module.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { itServices } from "../../data/services";

const ITServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);
  const autoScrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 992) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, itServices.length - cardsPerView);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsPerView, currentIndex]);

  useEffect(() => {
    if (carouselRef.current) {
      const singleCardWidth = 100 / itServices.length;
      const translateX = currentIndex * singleCardWidth;
      carouselRef.current.style.transform = `translateX(-${translateX}%)`;
    }
  }, [currentIndex]);

  // 🔄 Auto-scroll logic with hover check
  useEffect(() => {
    const maxIndex = Math.max(0, itServices.length - cardsPerView);

    if (!isHovered) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex < maxIndex ? prevIndex + 1 : 0
        );
      }, 3000);
    }

    return () => clearInterval(autoScrollRef.current);
  }, [cardsPerView, isHovered]);

  const nextSlide = () => {
    const maxIndex = Math.max(0, itServices.length - cardsPerView);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleLearnMoreClick = (service) => {
    navigate(service.path);
  };

  const totalDots = Math.max(1, itServices.length - cardsPerView + 1);

  return (
    <section className={styles.clientSection}>
      <h2 className={styles.sectionTitle}>
        <span style={{ color: "var(--highlight-title)" }}>Powering Growth</span> Through Technology Solutions
      </h2>
      <h3 className={styles.sectionSubtitle}>
        Proactive IT & Application Development for Secure Systems and Empowered Teams.
      </h3>

      <div
        className={styles.servicesCarousel1}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.carouselViewport}>
          <div
            className={styles.clientCardsContainer}
            ref={carouselRef}
            style={{ width: `${(itServices.length / cardsPerView) * 100}%` }}
          >
            {itServices.map((service) => (
              <div
                key={service.id}
                className={styles.clientCardWrapper}
                style={{ width: `${100 / itServices.length}%` }}
              >
                <div
                  className={`${styles.clientCard} ${styles[`card${service.id}`]}`}
                >
                  <div className={styles.clientContent}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div style={{ marginTop: "auto", textAlign: "center" }}>
                      <button
                        className={styles.learnMore1}
                        onClick={() => handleLearnMoreClick(service)}
                      >
                        Learn More!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {itServices.length > cardsPerView && (
          <>
            <button
              className={`${styles.navButton1} ${styles.prev}`}
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              <GrFormPrevious />
            </button>
            <button
              className={`${styles.navButton1} ${styles.next}`}
              onClick={nextSlide}
              disabled={currentIndex >= itServices.length - cardsPerView}
            >
              <GrFormNext />
            </button>
          </>
        )}
      </div>

      {itServices.length > cardsPerView && (
        <div className={styles.carouselDots1}>
          {[...Array(totalDots)].map((_, index) => (
            <button
              key={index}
              className={`${styles.dot1} ${index === currentIndex ? styles.active : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ITServices;