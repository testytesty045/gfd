import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import corporateProfileImg from "../../../assets/images/corporat_profile.png";

const CorporateProfile = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto overflow-x-hidden px-4 sm:px-6 md:px-8">
        <div className="pt-16 sm:pt-20 md:pt-24">
          <div className="block md:flex md:flex-row md:justify-center md:items-start md:gap-8">
            <div className="w-full md:w-[400px] lg:w-[450px] mb-6 md:mb-0 flex-shrink-0">
              <div className="relative bg-[rgba(14,102,143,0.42)] h-auto md:h-[850px] p-3 md:p-4 flex flex-col w-11/12 mx-auto rounded-lg">
                {/* Title */}
                <p className="mt-2 font-['Inter'] font-bold text-[18px] sm:text-[20px] md:text-[25px] lg:text-[30px] text-center">
                  Corporate Profile
                </p>

                {/* Image Container */}
                <div className="relative flex-grow flex items-center justify-center mt-4">
                  <img
                    src={corporateProfileImg}
                    alt="Corporate Profile"
                    className="max-h-[300px] sm:max-h-[450px] md:max-h-[600px] lg:max-h-[700px] object-contain w-full transition-all duration-300 transform translate-x-0 sm:translate-x-10"
                  />

                  {/* Address Box - Responsive */}
                  <div className="absolute bottom-4 left-2 right-2 sm:left-4 sm:right-auto sm:w-[80%] md:w-[70%] bg-[rgba(14,102,143,0.75)] text-white p-3 sm:p-4 rounded-md shadow-md">
                    <h2 className="text-xs sm:text-sm font-bold">
                      Contact Us:
                    </h2>
                    <p className="text-xs sm:text-sm break-words">
                      https://dgfuturetech.com/
                    </p>
                    <p className="mt-2 text-xs sm:text-sm font-semibold">
                      Address :
                    </p>
                    <p className="text-xs sm:text-sm break-words">
                     Office No.5, Gokhale Sanchit, 
                      <br />
                      846 Shivajinagar,
                      <br />
                      Pune 411004,
                      <br/>
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[400px] lg:w-[450px] h-[auto] md:h-[900px] sm:h-[500px] overflow-y-auto pb-6 flex-shrink-0">
              <div className="flex flex-col space-y-3 md:space-y-10">
                <div className="relative h-[55px] md:h-[70px] mt-3">
                  <h3 className="absolute left-[0px] md:left-[0px] top-[1px] font-['Inter'] font-bold text-[12px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-[1.2] text-[#0E668F]">
                    COMPANY NAME:
                  </h3>

                  <p className="absolute left-[0px] md:left-[0px] top-[28px] md:top-[35px] font-['Inter'] font-light text-[10px] sm:text-[12px] md:text-[14px] leading-[1.4] text-black">
                    DG FutureTech India Private Limited
                    <br />
                    (Formerly: Vizitech Solutions Private Limited)
                  </p>
                </div>

                <div className="relative h-[55px] md:h-[60px]">
                  <h3 className="absolute left-[0px] md:left-[0px] top-[1px] font-['Inter'] font-bold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-[1.2] text-[#0E668F]">
                    ESTABLISHMENT:
                  </h3>

                  <p className="absolute left-[0px] md:left-[0px] top-[28px] md:top-[35px] font-['Inter'] text-[11px] sm:text-[12px] md:text-[14px] leading-[1.4] text-black">
                    Year 2012
                  </p>
                </div>

                <div className="relative h-[55px] md:h-[60px]">
                  {/* Number */}

                  <h3 className="absolute left-[0px] md:left-[0px] top-[1px] font-['Inter'] font-bold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-[1.2] text-[#0E668F]">
                    CAPITAL:
                  </h3>

                  <p className="absolute left-[0px] md:left-[0px] top-[28px] md:top-[35px] font-['Inter'] text-[11px] sm:text-[12px] md:text-[14px] leading-[1.4] text-black">
                    ₹20 lakh (INR 2 million)
                  </p>
                </div>

                <div className="relative h-[65px] md:h-[80px]">
                  <h3 className="absolute left-[0px] md:left-[0px] top-[1px] font-['Inter'] font-bold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-[1.2] text-[#0E668F]">
                    SHAREHOLDER:
                  </h3>

                  <p className="absolute left-[0px] md:left-[0px] top-[28px] md:top-[35px] font-['Inter'] font-light text-[11px] sm:text-[12px] md:text-[14px] leading-[1.4] text-black">
                    DG Financial Technology, Inc.
                    <br />
                    (60%*) *Voting rights ratio
                  </p>
                </div>

                <div className="relative h-[85px] md:h-[100px]">
                  <h3 className="absolute left-[0px] md:left-[0px] top-[1px] font-['Inter'] font-bold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-[1.2] text-[#0E668F]">
                    BUSINESS DETAILS:
                  </h3>

                  <div className="absolute left-[0px] md:left-[0px] top-[28px] md:top-[35px] font-['Inter'] font-light text-[11px] sm:text-[12px] md:text-[14px] lg:text-[15px] leading-[1.3] text-black">
                    <ul className="list-disc pl-4">
                      <li>
                        Managed services (system operation support, system
                        maintenance)
                      </li>
                      <li className="mt-1">
                        Providing system solution services
                      </li>
                      <li className="mt-1">Agile Application Development</li>
                    </ul>
                  </div>
                </div>

                <div className="relative h-[55px] md:h-[50px]">
                  <h3 className="absolute left-[0px] md:left-[0px] top-[1px] font-['Inter'] font-bold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-[1.2] text-[#0E668F]">
                    EMPLOYEES:
                  </h3>

                  <p className="absolute left-[0px] md:left-[0px] top-[28px] md:top-[35px] font-['Inter'] text-[11px] sm:text-[12px] md:text-[14px] leading-[1.4] text-black">
                    51-200 Employees
                  </p>
                </div>

                <div className="relative h-[65px] md:h-[80px] mb-4">
                  <h3 className="absolute left-[0px] md:left-[0px] top-[1px] font-['Inter'] font-bold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-[1.2] text-[#0E668F]">
                    BASE:
                  </h3>

                  <p className="absolute left-[0px] md:left-[0px] top-[28px] md:top-[35px] font-['Inter'] font-light text-[11px] sm:text-[12px] md:text-[14px] lg:text-[15px] leading-[1.3] text-black">
                    Inside DG Financial Technology,
                    <br />
                    Digital Gate Building, 3-5-7,
                    <br />
                    Ebisu Minami, 
                    <br />
                    Shibuya-ku, Tokyo 150-0022, Japan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateProfile;
