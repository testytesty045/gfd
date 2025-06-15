// components/CookieConsent.js
import React, { useEffect, useState } from "react";
import { setCookie, getCookie } from "../utils/cookie";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    setCookie("cookie_consent", "true", 365);
    setVisible(false);
  };
  const declineCookies = () => {
    setCookie("cookie_consent", "false", 365);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        We use cookies to enhance your experience. By continuing to visit this
        site you agree to our use of cookies.
      </p>
      <div className="cookie-buttons">
        <button onClick={declineCookies} className="decline-btn">Decline</button>
        <button onClick={acceptCookies} className="accept-btn">Accept</button>
      </div>
    </div>
  );
};

export default CookieConsent;
