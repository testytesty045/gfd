import { storyPageContent } from "../data/services";
import { motion } from "framer-motion";
import ServicesBanner from "../components/common/ServicesBanner";
import userImg from "../assets/icons/CLIENTImg.png";
import OpportunitiesImg from "../assets/icons/OPPORTUNITIESImg.png";
import ChallengesImg from "../assets/icons/CHALLENEGS.jpg";
import SuccessImg from "../assets/icons/SUCCESS.jpg";
const SuccessStory2 = () => {

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
        "Our client is a leading Banking as a Service (BaaS) provider, offering SaaS-based financial infrastructure to businesses. Focused on innovation, they enable seamless integration of banking services, including international remittances, branded card issuance, and BNPL (Buy Now, Pay Later).",
    },
    {
      title: "Opportunities",
      img: OpportunitiesImg,
      description:
        "Our client was looking for a partner who could completely own the application monitoring process- 24 x 7. Our team supports this customer for over 2 years now.The state of the art, PCI-DSS compliant CoE was ready to start with.",
    },
    {
      title: "Challenges",
      img: ChallengesImg,
      description:
        "Resources overutilization. More time being spent on troubleshooting instead of service improvement. Increased workload on Individual resources. Decreased efficiency due to lack of a service level management structure.",
    },
    {
      title: "Solution and Success",
      img: SuccessImg,
      description:
        "Started with 3 shifts from day 1 based on our infrastructure readiness. We are now helping development team for the code troubleshooting, mobile app testing, REST API testing, data-level corrections using MySQL database, and a few crucial AWS infrastructure activities in development and the production environment.",
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
              <span> Retail Banking</span>
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
                <img src={card.img} alt={card.title} className="w-16 h-16 rounded-full border border-gray-200" />
                <h3 className="text-2xl font-semibold text-blue-700">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-800 leading-relaxed text-lg">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStory2;
