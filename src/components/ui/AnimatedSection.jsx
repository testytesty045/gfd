import React, { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../lib/utils';

const AnimatedSection = ({ 
  children, 
  className,
  delay = 0
}) => {
  const { ref, isIntersecting } = useIntersectionObserver();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (isIntersecting && sectionRef.current) {
      const timer = setTimeout(() => {
        sectionRef.current?.classList.add('visible');
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isIntersecting, delay]);

  return (
    <div 
      className={cn('fade-in', className)} 
      ref={(el) => {
        ref.current = el;
        sectionRef.current = el;
      }}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection