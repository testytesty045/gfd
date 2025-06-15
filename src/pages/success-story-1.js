import {  storyPageContent } from "../data/services";
import { motion } from "framer-motion";
import ServicesBanner from "../components/common/ServicesBanner";
import userImg from "../assets/icons/CLIENTImg.png";
import OpportunitiesImg from "../assets/icons/OPPORTUNITIESImg.png";
import ChallengesImg from "../assets/icons/CHALLENEGS.jpg";
import SuccessImg from "../assets/icons/SUCCESS.jpg";
const SuccessStory1 = () => {

  const { bannerTitle, bannerImage } = storyPageContent;
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
        "Our client is part of Japan's leading publicly listed company, pioneering in digital payment solutions. The company develops and provides user-friendly system tools and services for both online merchants and end customers, allowing e-commerce businesses to focus on their core operations.",
    },
    {
      title: "Opportunities",
      img: OpportunitiesImg,
      description:
        "Our customer expected services beyond simple monitoring. They were looking for a partner (and not vendor) who can run a dedicated offshore center with a dedicated team. One of their earlier vendor provided them a shared monitoring support, with shared resources. They wanted a partner who can support them in application release activities too.",
    },
    {
      title: "Challenges",
      img: ChallengesImg,
      description:
        "Keeping the infra up and running 24x7 was crucial being one of the leading payment gateway solutions providers in Japan. Senior Management was on constant standby during critical times.",
    },
    {
      title: "Solution and Success",
      img: SuccessImg,
      description:
        "Started with a phased approach. Within 4 months, we scaled up to 24 x 7 monitoring support. Within 6 months we could handle in application release activities also. Resources planning and capacity expansion rollouts. Customer could focus more on infrastructure and/or application improvements. They could onboard several new merchants that resulted in the increase of revenue by 21%.",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 mb-5 mx-auto">
      {/* Banner Section */}
      <ServicesBanner title={bannerTitle} heroImage={bannerImage} />
      <div className="max-w-5xl mx-auto md:px-10 lg:px-10 lg:max-w-fit mb-5">
        <div className="flex justify-center items-center">
          {/* Header Section */}
          <div className="m-5">
            <h1 className="text-3xl font-bold mt-2">
              <span>Fintech Solutions for Digital Finance</span>
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
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
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

export default SuccessStory1;
