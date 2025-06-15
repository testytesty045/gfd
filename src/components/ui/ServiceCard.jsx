
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ 
  title,
  description,
  icon,
  path,
  imageUrl,
  className = '',
}) => {
  return (
    <Link 
      to={path} 
      className={`group flex flex-col h-full overflow-hidden rounded-xl bg-white shadow-subtle hover:shadow-medium transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      <div className="relative h-48 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary-50 text-primary-600">
            {icon && React.cloneElement(icon, { className: 'w-16 h-16' })}
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-xl font-semibold mb-2 text-secondary-900">{title}</h3>
        <p className="text-neutral-600 mb-4 flex-grow">{description}</p>
        
        <div className="mt-auto inline-flex items-center text-primary font-medium">
          Learn more
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
