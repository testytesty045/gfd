import React from "react";
import {
  ShieldCheck,
  Cpu,
  Users,
  TrendingUp,
  Clock,
  Repeat,
} from "lucide-react";
import CTASection from "../../common/CTASection";

const benefits = [
  {
    icon: <Users className="h-6 w-6 text-[#0E668F]" />,
    title: "Responsive Support",
    text: "Accessible & Responsive Support enhances productivity",
  },
  {
    icon: <Cpu className="h-6 w-6 text-[#0E668F]" />,
    title: "Diverse Expertise",
    text: "Diverse Expertise ensures all support needs are met",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-[#0E668F]" />,
    title: "Proactive Cost Reduction",
    text: "Reduce costs through a proactive support model",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-[#0E668F]" />,
    title: "Security & Stability",
    text: "Stabilize and secure your environment",
  },
  {
    icon: <Clock className="h-6 w-6 text-[#0E668F]" />,
    title: "Reliable Support",
    text: "Guaranteed Service Levels when you need support",
  },
  {
    icon: <Repeat className="h-6 w-6 text-[#0E668F]" />,
    title: "Continuous Improvement",
    text: "Ongoing business reviews to improve service",
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-blue-50 py-14 px-4 sm:px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0E668F] leading-tight">
              Why Choose Us?
            </h2>
            <p className="text-lg md:text-xl mt-4 text-gray-700 max-w-3xl mx-auto font-medium">
              Accelerate your technology with our managed services for your
              business growth!
            </p>
          </div>
          {/* Security Commitment */}
          <div className="mt-16 bg-white p-6 sm:p-10 rounded-2xl shadow-md">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#0E668F] mb-4">
              Our Security Commitment
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              At <strong>DG FutureTech</strong>, safeguarding your data is our
              highest priority. We implement robust security measures across
              organizational, operational, and policy levels to ensure the
              protection of your data, applications, and infrastructure—keeping
              your business secure and resilient.
            </p>
          </div>

          {/* Business Message */}
          <div className="mt-10 bg-blue-100 p-6 sm:p-10 rounded-2xl shadow-inner">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#0E668F] mb-4">
              DG FutureTech: Strengthening Your IT for Business Success
            </h3>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-3">
              In today’s digital world, your IT infrastructure and applications
              form the foundation of your business. A reliable, scalable, and
              flexible technology environment — from core systems to custom
              applications — directly impacts your ability to achieve business
              goals and exceed customer expectations.
            </p>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-3">
              At <span className="font-semibold">DG FutureTech</span>, we
              specialize in making technology work for you. As a trusted managed
              services and application development partner, we help businesses
              optimize their IT infrastructure and build powerful, scalable
              applications tailored to their unique needs. Our integrated
              approach ensures maximum efficiency, security, and agility —
              empowering you to innovate and grow.
            </p>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              Take control of your success—partner with{" "}
              <span className="font-semibold">DG FutureTech</span> today.{" "}
              <span className="font-semibold">Contact us</span> to discover how
              our expert IT and application development solutions can drive your
              business forward.
            </p>
          </div>
        </div>
      </section>
       {/* CTA Section */}
        <CTASection
          title="Ready for stress-free IT?"
          buttonText="Book a Consultation"
          buttonLink="https://calendly.com/rachna-kolhapure-dgfuturetech/30min"
        />
    </div>
  );
};

export default WhyChooseUs;