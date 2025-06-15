import { storyPageContent } from "../data/services";
import { motion } from "framer-motion";
import ServicesBanner from "../components/common/ServicesBanner";
import userImg from "../assets/icons/CLIENTImg.png";
import OpportunitiesImg from "../assets/icons/OPPORTUNITIESImg.png";
import ChallengesImg from "../assets/icons/CHALLENEGS.jpg";
import SuccessImg from "../assets/icons/SUCCESS.jpg";
const SuccessStory3 = () => {

  const { bannerTitle, bannerImage } =
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
        "A publicly listed Payment Service Provider in Japan, ensures secure and efficient financial transactions for businesses, including 24x7 convenience stores nationwide. Operating two critical verticals—System Operations(SysOpe) and Monitoring—the client supports uninterrupted payment processing while meeting industry standards and compliance requirements.",
    },
    {
      title: "Opportunities",
      img: OpportunitiesImg,
      description:
        "The client sought to: Enhance operational efficiency in handling scheduled tasks (e.g., IFRS financial reporting) and request-based tasks. Ensure 24x7 monitoring of alerts to maintain high availability of applications and infrastructure, critical for uninterrupted payment services. Streamline infrastructure management, including adapting workflows for a smooth transition from on-premises to the cloud.",
    },
    {
      title: "Challenges",
      img: ChallengesImg,
      description:
        "Task Overload: Managing a high volume of scheduled and request-based tasks, often leading to a backlog. Uptime Pressure: Ensuring uninterrupted services for 24x7 convenience stores where even minor downtime could impact operations. Alert Management: Handling over 900+ types of alerts across applications and infrastructure, leading to prioritization challenges.",
    },
    {
      title: "Solution and Success",
      img: SuccessImg,
      description:
        "SysOpe Optimization: Implemented a task management system to streamline scheduled tasks and prioritize backlog tasks effectively. Automated repetitive processes for tasks like IFRS reporting, improving efficiency and accuracy. Monitoring Enhancements: Introduced a priority-based framework to respond to critical alerts to ensure faster resolution. Established centralized workflows via Slack and real- time dashboards to monitor alerts seamlessly.",
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
            <span>Digital Payment Service Provider</span>
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

export default SuccessStory3;