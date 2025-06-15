import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/itservice.module.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { itServices } from "../../data/services";

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [expandedCard, setExpandedCard] = useState(null);
  const carouselRef = useRef(null);
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
    // This effect might cause re-renders. Only update if the value has actually changed
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

  const nextSlide = () => {
    setExpandedCard(null);
    const maxIndex = Math.max(0, itServices.length - cardsPerView);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setExpandedCard(null);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setExpandedCard(null);
    setCurrentIndex(index);
  };

  const totalDots = Math.max(1, itServices.length - cardsPerView + 1);

  const handleLearnMoreClick = (service) => {
    navigate(service.path);
  };

  return (
    <section className={styles.clientSection}>
      <h2>
        Latest <span>Blogs</span>
      </h2>
      <div className={styles.servicesCarousel1}>
        <div className={styles.carouselViewport}>
          <div
            className={styles.clientCardsContainer}
            ref={carouselRef}
            style={{ width: `${(itServices.length / cardsPerView) * 100}%` }}
          >
            {itServices.map((service) => (
              <div
                className={styles.clientCardWrapper}
                style={{ width: `${100 / itServices.length}%` }}
                data-aos="fade-up"
              >
                <div
                  className={`${styles.clientCard} ${styles[`card${service.id}`]}`}
                >
                  <div className={styles.clientContent}>
                    <h3>test title</h3>
                    <p>test description</p>

                    <div>
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
              aria-label="Previous slide"
              disabled={currentIndex === 0}
            >
              <GrFormPrevious />
            </button>
            <button
              className={`${styles.navButton1} ${styles.next}`}
              onClick={nextSlide}
              aria-label="Next slide"
              disabled={currentIndex >= itServices.length - cardsPerView}
            >
              <GrFormNext />
            </button>
          </>
        )}
      </div>
      <div className={styles.carouselDots1}>
        {[...Array(totalDots)].map((_, index) => (
          <button
            key={index}
            className={`${styles.dot1} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor:
                index === currentIndex ? "var(--highlight-title)" : "#ccc",
              border: "none",
              padding: "0",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
