// components/CookieConsent.js
import React, { useEffect, useState } from "react";
import { setCookie, getCookie } from "../utils/cookie";
import styles from "./styles/common.module.css";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [bannerLoaded, setBannerLoaded] = useState(false);

  useEffect(() => {
    // Set bannerLoaded to true after initial render to ensure space is reserved
    setBannerLoaded(true);
    
    // Check if user has already provided consent
    const consent = getCookie("cookie_consent");
    if (!consent) {
      // Small delay to ensure the banner space is reserved before showing
      const timer = setTimeout(() => {
        setShowBanner(true);
        
        // Add a class to the document body when cookie banner is shown
        document.body.classList.add('cookie-banner-visible');
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  const handleConsent = (accepted) => {
    setCookie("cookie_consent", accepted ? "true" : "false", 365);
    setShowBanner(false);
    
    // Remove the class from body when cookie banner is hidden
    document.body.classList.remove('cookie-banner-visible');
  };
  
  const acceptCookies = () => handleConsent(true);
  const declineCookies = () => handleConsent(false);

  // Always render the banner container, but control visibility with CSS
  return (
    <div 
      className={styles.cookieBanner} 
      style={{ 
        visibility: bannerLoaded ? (showBanner ? 'visible' : 'hidden') : 'hidden',
        opacity: showBanner ? 1 : 0,
        transition: 'opacity 0.3s ease, visibility 0.3s ease',
        pointerEvents: showBanner ? 'auto' : 'none',
        height: showBanner ? 'auto' : '0',
        padding: showBanner ? undefined : '0'
      }}
      aria-hidden={!showBanner}
    >
      <p>
        We use cookies to enhance your experience. By continuing to visit this
        site you agree to our use of cookies.
      </p>
      <div>
        <button onClick={declineCookies} className={styles.decline}>Decline</button>
        <button onClick={acceptCookies} className={styles.accept}>Accept</button>
      </div>
    </div>
  );
};

export default CookieConsent;
