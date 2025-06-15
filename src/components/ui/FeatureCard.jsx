import React from 'react';

const FeatureCard = ({ 
  title, 
  description, 
  icon,
  className = '', 
  iconColor = 'text-primary',
  hoverEffect = true,
  bgColor = 'bg-white'
}) => {
  return (
    <div 
      className={`p-6 rounded-xl ${bgColor} shadow-sm ${
        hoverEffect ? 'transition-all duration-300 hover:shadow-medium hover:-translate-y-1' : ''
      } ${className}`}
    >
      {icon && React.isValidElement(icon) && (
        <div className={`mb-4 ${iconColor}`}>
          {React.cloneElement(icon, { className: 'w-10 h-10' })}
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2 text-secondary-900">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
