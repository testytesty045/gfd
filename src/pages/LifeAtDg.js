import React, { useEffect, useState } from "react";
import SectionHeader from "../components/ui/SectionHeader";
import AnimatedSection from "../components/ui/AnimatedSection";
import LocationCard from "../components/ui/LocationCard";
import { CalendarHeart, Briefcase, Heart, Sprout, Smile } from "lucide-react";
import {
  fetchBenefits,
  fetchTestimonials,
  fetchLocations,
  fetchGalleryImages,
  fetchAboutContent,
  fetchFacilityContent,
} from "../data/services";

const LifeAtDg = () => {
  const [benefits, setBenefits] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [locations, setLocations] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [aboutContent, setAboutContent] = useState(null);
  const [facilityContent, setFacilityContent] = useState(null);

  useEffect(() => {
    setBenefits(fetchBenefits());
    setTestimonials(fetchTestimonials());
    setLocations(fetchLocations());
    setGalleryImages(fetchGalleryImages());
    setAboutContent(fetchAboutContent());
    setFacilityContent(fetchFacilityContent());

    document.body.classList.add("font-montserrat");

    return () => {
      document.body.classList.remove("font-montserrat");
    };
  }, []);

  if (!aboutContent || !facilityContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden font-sans">
      <section
        id="about"
        className="px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white"
      >
        <AnimatedSection delay={200}>
          <div className="glass-card p-10 shadow-2xl rounded-2xl bg-white/70 backdrop-blur text-left border-l-4 border-primary/60 hover:shadow-3xl transition-shadow duration-300">
            <h2 className="text-3xl md:text-2xl font-bold text-primary mb-4 animate-fade-in">
              {aboutContent.subtitle}
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in delay-100">
              {aboutContent.description}
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-10 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <AnimatedSection delay={200}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div className="transition-transform transform hover:scale-105 hover:shadow-lg rounded-xl bg-white p-6 border border-gray-100 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-primary text-3xl">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <AnimatedSection>
            <SectionHeader
              title="Moments at DG FutureTech"
              subtitle="Glimpses of our daily life, celebrations, and team building events."
            />
            <div className="section-divider my-6 mx-auto w-24 border-b-4 border-primary"></div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section>
        <div className="perks-container">
          <h1 className="perks-title">Perks & benefits</h1>
          <div className="perks-content">
            <div className="perks-grid">
              <div className="perks-note">
                <p>
                  OUR PERKS PRIORITIZE GROWTH,
                  <br />
                  WELL-BEING, COMMUNITY, AND
                  <br />
                  WORK-LIFE BALANCE FOR
                  <br />
                  EMPLOYEES
                </p>
              </div>
              <div className="perks-category">
                <div className="category-header">
                  <CalendarHeart className="category-icon" />
                  <h2 className="category-title">Holidays and Leaves</h2>
                </div>
                <ul className="category-list">
                  <li>Paid leaves</li>
                  <li>Maternity leave</li>
                </ul>
              </div>

              <div className="perks-category">
                <div className="category-header">
                  <Briefcase className="category-icon" />
                  <h2 className="category-title">Work environment</h2>
                </div>
                <ul className="category-list">
                  <li>collaborative Culture</li>
                  <li>Continuous Learning and Growth</li>
                </ul>
              </div>

              <div className="perks-category">
                <div className="category-header">
                  <Sprout className="category-icon" />
                  <h2 className="category-title">Growth</h2>
                </div>
                <ul className="category-list">
                  <li>Professional development programs</li>
                  <li>Educational reimbursements</li>
                </ul>
              </div>
              <div className="perks-category">
                <div className="category-header">
                  <Heart className="category-icon" />
                  <h2 className="category-title">Health and well-being</h2>
                </div>
                <ul className="category-list">
                  <li>Health Insurance</li>
                  <li>Friendly Workstations</li>
                </ul>
              </div>

              <div className="perks-category happiness-category">
                <div className="category-header">
                  <Smile className="category-icon" />
                  <h2 className="category-title">Happiness</h2>
                </div>
                <ul className="category-list">
                  <li>Rewards & Recognitions</li>
                  <li>Get-togethers & Dinners</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 bg-gradient-to-t from-white to-gray-50">
        <div className="container">
          <AnimatedSection>
            <SectionHeader
              title="Where We Work"
              subtitle="With offices in Japan and India, we're building the future from some amazing locations."
            />
            <div className="section-divider my-6 mx-auto w-24 border-b-4 border-primary"></div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid sm:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="transition-transform transform hover:scale-105 hover:shadow-xl rounded-xl bg-white p-6 border border-gray-100"
                >
                  <LocationCard location={location} />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default LifeAtDg;
