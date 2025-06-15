import heroImage from "../assets/images/hero.png";
import infraOne from "../assets/images/img_infra_structure.png";

export const getInfrastructureManagementData = () => {
  return {
    title: "Infrastructure Management",
    heroImage: heroImage,
    description: "Create an infrastructure that is always ready! Traditional infrastructures, however, are incapable of keeping up with faster change and compressed transformation. IT infrastructure must be updated. We can assist you in transitioning from a capital-intensive, hardware-oriented infrastructure to a software-defined and intelligent infrastructure that is always ready for any opportunity.",
    subDescription: "In today's digital and cloud-based world, your company is only as good as its IT infrastructure. It grants power to operate the applications that keep the business running. It also creates a strong foundation for creating excellent customer and staff experiences. We offer cloud infrastructure management using Microsoft Azure as well as AWS.",
    infraImage: infraOne,
    servicesHeading: "Cloud services we offer are –",
    servicesList: [
      "Application Release – Organizations are increasingly relying on the public cloud to address business and IT concerns, resulting in increased operational flexibility, agility, and cost-efficiency. We help you accelerate your cloud adoption journey on Microsoft Azure or AWS.",
      "Maintenance – Data deployment in the cloud is unquestionably cost effective! However, it is always essential to have a dedicated team of professionals for sites that receive a high volume of traffic and to regularly maintain the cloud storage.",
      "Monitoring – Our specialized Cloud professionals monitor your business framework 24 hours a day, 365 days throughout the year to ensure that the Cloud technology is working properly and that your business works smoothly!"
    ]
  };
}; 