import React from 'react';
import { cn } from '../../lib/utils';

const SectionHeader = ({ 
  title, 
  subtitle, 
  className,
  align = 'center'
}) => {
  return (
    <div className={cn(
      'mb-8',
      align === 'center' && 'text-center',
      align === 'left' && 'text-left',
      align === 'right' && 'text-right',
      className
    )}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 font-montserrat">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;