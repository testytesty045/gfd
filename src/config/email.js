// Email configuration for EmailJS service
export const getEmailConfig = () => {
  return {
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "bHJaAgy4hDQeZgrPp",
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_emskhtq",
    userTemplateId: process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID || "template_vqwi0ri",
    adminTemplateId: process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID || "template_1m3ha7k",
    adminEmail: process.env.REACT_APP_ADMIN_EMAIL || "contact@dgfuturetech.com",
    replyToEmail: process.env.REACT_APP_REPLY_TO_EMAIL || "info@dgfuturetech.com"
  };
}; 