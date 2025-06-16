import React, { useEffect, useState } from "react";
import "../../styles/ITServicesComponent.css";
import { itServicesData } from "../../../data/services";

const ITServices = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Rotate image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) =>
        prevIndex === itServicesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="layout">
        <div className="content">
          <h1>
            Looking For a <span>Better IT</span>
            <br />
            <span>Services Experience?</span>
          </h1>
          <p>
            We deploy tailored tech solutions seamlessly aligning with your
            business goals.
          </p>

          <div className="accordion">
            {itServicesData.map((item) => (
              <div key={item.id} className="accordion-item">
                <div className="header">
                  <h2 style={{ color: "black", fontWeight: "bold", fontSize: "1.17em" }}>
                    {item.title}
                  </h2>
                </div>
                <p className="expanded-content">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="image-container">
          <img
            src={itServicesData[activeImageIndex]?.img || "/placeholder.svg"}
            alt="IT Services"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder.svg";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ITServices;