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
        "Our client is a Japanese conglomerate with Farm Machinery being one of their businesses. Fertilizer Spraying Helicopters are one of their products. They have also built an eco-system with dealers to sell their fertilizer spraying helicopters.",
    },
    {
      title: "Opportunities",
      img: OpportunitiesImg,
      description:
        "The client wanted to migrate the current Fertilizer Spraying Helicopters Sales-Management-Maintenance System, including Dealer Management from an old framework to Laravel Framework with Bootstrapping. They wanted a partner who can work on this project by understanding the code of the current system and then migrate it by giving the system a fair face-lift.",
    },
    {
      title: "Challenges",
      img: ChallengesImg,
      description:
        "Without much KT regarding the business logic and with the current system having validation and formatting issues, it was a challenging task to redesign the system in limited time. No access to the data, and meagre documentation, that too in Japanese, added to the difficulty level from the developers’ perspective.",
    },
    {
      title: "Solution and Success",
      img: SuccessImg,
      description:
        "The system that we migrated was a total face-lift from the UX perspective compared to the current system. We also refactored and rationalized the code to tackle some existing performance issues, wherever feasible. Building common components, using smarter commands also contributed to a better structure compared to the existing system. We could deliver on time, without the client having to invest much time in discussions and knowledge transfer.",
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
            <span>Web Application Framework Migration</span>
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
