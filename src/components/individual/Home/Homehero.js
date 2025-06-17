import { motion } from "framer-motion";
import Button from "../../ui/Button";
import "./Homehero.css";

// Hero content lines

export default function HomeHero() {
  return (
    <div className="homeHero">
      <video autoPlay loop muted playsInline className="video-background">
        <source
          src="https://res.cloudinary.com/dcedehnw3/video/upload/v1746707998/Video_for_hero_section_aocobh.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video-overlay"></div>

      <motion.div
        className="homeHero__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Empowering Growth-Minded Businesses Through Digital Transformations!</h1>

        <motion.p
          className="text-gray-300 text-[18px] font-light leading-[1.8] mt-4 max-w-3xl tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Accelerate growth through digital transformation, expert
          maintenance and real-time monitoring.
        </motion.p>

        <motion.p
          className="text-gray-300 text-[18px] font-light leading-[1.8] mt-4 max-w-3xl tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          DG FutureTech ensures seamless operations 24x7 with reliable support,
          innovative solutions and industry-focused consulting that simplifies
          technology and drives business performance.
        </motion.p>

        <motion.div
          className="homeHero__button-container mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}
        >
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
        </motion.div>
      </motion.div>
    </div>
  );
}
