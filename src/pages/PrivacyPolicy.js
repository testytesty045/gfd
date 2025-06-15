import React, { useState, useEffect } from "react";
import { fetchPrivacyPolicy } from "../data/services";

const PrivacyPolicy = () => {
  const [policyData, setPolicyData] = useState({ title: "", content: [] });
  
  useEffect(() => {
    const data = fetchPrivacyPolicy();
    setPolicyData(data);
  }, []);

  const renderContent = (item, index) => {
    switch(item.type) {
      case 'heading':
        return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{item.text}</h2>;
      case 'subheading':
        return <h3 key={index} className="text-xl font-semibold mb-2">{item.text}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-6">{item.text}</p>;
      case 'list':
        return (
          <ul key={index} className="list-disc pl-6 mb-6">
            {item.items.map((listItem, i) => (
              <li key={i}>{listItem}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">{policyData.title}</h1>
      
      <div className="prose prose-lg">
        {policyData.content.map((item, index) => renderContent(item, index))}
      </div>
    </div>
  );
};

export default PrivacyPolicy; 