import { storyPageContent } from "../data/services";
import { motion } from "framer-motion";
import ServicesBanner from "../components/common/ServicesBanner";
import userImg from "../assets/icons/CLIENTImg.png";
import OpportunitiesImg from "../assets/icons/OPPORTUNITIESImg.png";
import ChallengesImg from "../assets/icons/CHALLENEGS.jpg";
import SuccessImg from "../assets/icons/SUCCESS.jpg";
const SuccessStory4 = () => {
  // const story = getSuccessStoryById(2);

  const {bannerTitle, bannerImage } =
    storyPageContent;
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };
  const cards = [
    {
      title: "Client Background",
      img: userImg,
      description:
        "Our client operates in the automotive financing sector, providing customers with seamless access to car loans. The company offers a web-based platform that allows users to browse cars, calculate loan payments, and submit loan enquiries. Additionally, the platform integrates with third-party applications to capture leads and manage customer interactions efficiently.",
    },
    {
      title: "Opportunities",
      img: OpportunitiesImg,
      description:
        "The client sought to enhance its digital presence by improving customer engagement and streamlining loan enquiry management. The key areas identified for improvement included: Developing a customer-facing web application for a more interactive experience. Building a robust admin panel to manage customer enquiries from multiple sources. Integrating with external APIs to provide comprehensive car listings and instant quotations.Implementing a user-friendly loan calculation tool to help customers make informed financial decisions.",
    },
    {
      title: "Challenges",
      img: ChallengesImg,
      description:
        "Disorganized Lead Management: Inefficient tracking and follow-ups due to a lack of centralization. UI/UX Enhancements: Needed intuitive navigation and seamless interactions.Third-Party Integration: Required smooth API integration with CarAPI and MyNewCar for accurate data. Automated Quotes: Manual loan quotes needed automation for instant PDF generation. Simplified Loan Calculation: Users required an easy way to estimate monthly payments.",
    },
    {
      title: "Solution and Success",
      img: SuccessImg,
      description:
        "Customer-Facing Web App: Built a responsive platform with location auto-detection. Admin Panel: Developed a system to track and manage enquiries. API Integrations: Connected with CarAPI for listings and MyNewCar for specifications. Automated Quotes: Enabled instant PDF generation from customer details.",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 mb-5 mx-auto">
      {/* Banner Section */}
      <ServicesBanner title={bannerTitle} heroImage={bannerImage} />
      <div className="max-w-5xl mx-auto md:px-10 lg:px-10 lg:max-w-fit">
        <div className="flex justify-center items-center">
          {/* Header Section */}
          <div className="m-5">
            <h1 className="text-3xl font-bold mt-2">
            <span>Smart Car Loan Platform</span>
            </h1>
          </div>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-10 gap-y-10 w-full max-w-6xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:shadow-blue-100 p-10 transition duration-300 ease-in-out"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-16 h-16 rounded-full border border-gray-200"
                />
                <h3 className="text-2xl font-semibold text-blue-700">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-800 leading-relaxed text-lg">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStory4;
