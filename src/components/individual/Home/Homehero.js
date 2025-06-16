import React, { useRef, useEffect, useState, lazy, Suspense } from "react";
import Button from "../../ui/Button";
import "./Homehero.css";
// Import local hero image as fallback
import heroImage from "../../../assets/images/hero.webp";

// Import framer-motion directly
import { motion, useInView, LazyMotion, domAnimation } from 'framer-motion';

export default function HomeHero() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const contentInView = useInView(contentRef);

  useEffect(() => {
    // Defer video loading until component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && videoRef.current) {
          videoRef.current.load();
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Content to display in either motion or static version
  const heroContent = (
    <>
      <h1>Empowering Growth-Minded Businesses Through Digital Transformations!</h1>
      
      <p className="text-gray-300 text-[18px] font-light leading-[1.8] mt-4 max-w-3xl tracking-wide">
        Accelerate growth through digital transformation, expert
        maintenance and real-time monitoring.
      </p>

      <p className="text-gray-300 text-[18px] font-light leading-[1.8] mt-4 max-w-3xl tracking-wide">
        DG FutureTech ensures seamless operations 24x7 with reliable support,
        innovative solutions and industry-focused consulting that simplifies
        technology and drives business performance.
      </p>

      <div className="homeHero__button-container mt-6">
        <Button
          onClick={() =>
            window.open(
              "https://calendly.com/rachna-kolhapure-dgfuturetech/30min?month=2025-04",
              "_blank"
            )
          }
        >
          Book a Consultation
        </Button>
      </div>
    </>
  );

  return (
    <div className="homeHero" ref={containerRef}>
      {/* Video with optimizations */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline 
        className={`video-background ${isVideoLoaded ? 'loaded' : ''}`}
        preload="none"
        poster={heroImage} 
        onLoadedData={() => setIsVideoLoaded(true)}
        loading="lazy"
        fetchPriority="low"
      >
        <source
          src="https://res.cloudinary.com/dcedehnw3/video/upload/c_scale,w_1280,q_auto:low,f_auto/v1746707998/Video_for_hero_section_aocobh.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video-overlay"></div>

      <LazyMotion features={domAnimation}>
        <motion.div
          ref={contentRef}
          className="homeHero__content"
          initial={{ opacity: 0, y: 20 }}
          animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {heroContent}
        </motion.div>
      </LazyMotion>
    </div>
  );
}
