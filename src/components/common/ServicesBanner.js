import React from "react";

const ServicesBanner = ({
  title,
  subtitle,
  description,
  caseStudyLink,
  heroImage,
  compactMode,
}) => {
  return (
    <div className="w-full relative bg-white mt-0">
      {/* Hero Section */}
      <div
        className="relative h-[600px] sm:h-[710px] bg-center bg-cover -mt-[300px] sm:-mt-[420px]"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute top-[300px] sm:top-[420px] w-full h-[200px] sm:h-[290px] bg-gradient-to-b from-[#0E668FCC] to-[#0B2142CC]"></div>

        {/* Main Banner */}
        <div className="absolute top-[350px] sm:top-[465px] left-[20px] sm:left-[68px] right-[20px] sm:right-auto max-w-full sm:max-w-[928px] h-auto bg-gradient-to-b from-[#1694CE] to-[#071326]">
          <div className="p-4 sm:p-[35px]">
            <h2 className="text-white text-[20px] sm:text-[45px] font-bold font-montserrat m-0">
              {title}
            </h2>
          </div>
        </div>
      </div>

      {/* Case Study Section - Only render if description exists */}
      {description && (
        <div className="relative w-[95%] sm:w-[90%] bg-white shadow-md -mt-[100px] sm:-mt-[60px] mx-auto border mb-10">
          <div className="px-0 py-6 sm:py-[24px] w-full">
            <p className="text-[#333333] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] font-normal font-inter mb-4 w-full px-4 sm:px-[45px]">
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesBanner;