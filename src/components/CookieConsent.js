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
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    setCookie("cookie_consent", "true", 365);
    setShowBanner(false);
  };
  
  const declineCookies = () => {
    setCookie("cookie_consent", "false", 365);
    setShowBanner(false);
  };

  // Always render the banner container, but control visibility with CSS
  return (
    <div 
      className={styles.cookieBanner} 
      style={{ 
        visibility: bannerLoaded ? (showBanner ? 'visible' : 'hidden') : 'hidden',
        opacity: showBanner ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: showBanner ? 'auto' : 'none',
        height: showBanner ? 'auto' : '0',
        padding: showBanner ? '10px 20px' : '0'
      }}
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
