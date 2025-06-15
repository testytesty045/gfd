
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
}) => {
  let buttonClass = 'btn';
  
  
  if (variant === 'primary') buttonClass += ' btn-primary';
  if (variant === 'secondary') buttonClass += ' btn-secondary';
  if (variant === 'outline') buttonClass += ' btn-outline';
  
  
  if (size === 'sm') buttonClass += ' btn-sm';
  if (size === 'lg') buttonClass += ' btn-lg';
  
  
  if (disabled) buttonClass += ' btn-disabled';
  
  
  if (fullWidth) buttonClass += ' btn-full-width';
  
  
  if (className) buttonClass += ` ${className}`;
  
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
