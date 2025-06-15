import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import MainHeader from "./components/nav/MainHeader";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import SuccessStory1 from "./pages/success-story-1.js";
import SuccessStory2 from "./pages/success-story-2.js";
import SuccessStory3 from "./pages/success-story-3.js";
import Career from "./pages/Career.jsx";
import SecurityAssessment from "./pages/SecurityAssessment.js";
import AllBlogs from "./components/blog/AllBlogs.js";
import CompleteHtmlBlogDetail from "./components/blog/CompleteHtmlBlogDetail.js";
import ManagedServices from "./pages/services/ManagedServices.js";
import CoManagedITServices from "./pages/services/CoManagedITServices.js";
import ServerAdministration from "./pages/services/ServerAdministration.js";
import ApplicationDevelopment from "./pages/services/ApplicationDevelopment.js";
import VAPTAssessment from "./pages/services/VAPTAssessment.js";
// import InfrastructureManagement from "./pages/services/InfrastructureManagement.js";
import NetworkMonitoring from "./pages/services/NetworkMonitoring.js";
import ScrollToTop from "./components/ScrollToTop";

import Media from "./components/individual/Media.js";
import WhyChooseUs from "./pages/services/WhyChooseUs.js";
import FAQ from "./pages/FAQ.jsx";
import JobDetail from "./pages/jobdetail/JobDetail.jsx";
import LifeAtDg from "./pages/LifeAtDg.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import ServicePlans from "./pages/services/ServicePlans.js";
import SuccessStory4 from "./pages/success-story-4.js";
import SuccessStory5 from "./pages/success-story-5.js";
import CookieConsent from "./components/CookieConsent.js";

// Font preloading function
const preloadFonts = () => {
  // List of fonts to preload
  const fontUrls = [
    'https://fonts.gstatic.com/s/montserrat/v30/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2',
    'https://fonts.gstatic.com/s/montserrat/v30/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2'
  ];

  // Create preload links
  fontUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

function App() {
  const [cssLoaded, setCssLoaded] = useState(false);

  useEffect(() => {
    // Preload fonts
    preloadFonts();
    
    // Check if main CSS is loaded
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    let allLoaded = true;
    
    links.forEach(link => {
      if (!link.sheet) {
        allLoaded = false;
      }
    });
    
    if (allLoaded) {
      setCssLoaded(true);
    } else {
      // If not loaded, set a timeout to continue anyway after 1 second
      const timer = setTimeout(() => setCssLoaded(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Show a minimal loading indicator if CSS isn't loaded yet
  if (!cssLoaded) {
    return (
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#ffffff'
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <CookieConsent /> 
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="managed-services" element={<ManagedServices />} />
            <Route
              path="co-managed-it-services"
              element={<CoManagedITServices />}
            />
            <Route
              path="infrastructuremanagement"
              element={<ServerAdministration />}
            />
            <Route
              path="application-development"
              element={<ApplicationDevelopment />}
            />
            <Route path="vapt-assessment" element={<VAPTAssessment />} />
            {/* <Route
              path="infrastructuremanagement"
              element={<InfrastructureManagement />}
            /> */}
            <Route path="networkmonitoring" element={<NetworkMonitoring />} />
            <Route path="serviceplans" element={<ServicePlans />} />
            <Route path="success-story-finTech" element={<SuccessStory1 />} />
            <Route path="success-story-retailBanking" element={<SuccessStory2 />} />
            <Route path="success-story-digitalPayment" element={<SuccessStory3 />} />
            <Route path="success-story-loanEnquiry" element={<SuccessStory4 />}/>
            <Route path="success-story-webapp" element={<SuccessStory5 />}/>  
            <Route path="/career" element={<Career />} />
            <Route path="/career/jobs/:id" element={<JobDetail />} />

            <Route path="SecurityAssessment" element={<SecurityAssessment />} />
            <Route path="why-choose-us" element={<WhyChooseUs />} />
            <Route path="blogs" element={<AllBlogs />} />
            <Route path="/blog/:id" element={<CompleteHtmlBlogDetail />} />
            <Route path="media" element={<Media />} />
            <Route path="life-at-dg" element={<LifeAtDg />} />

            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;