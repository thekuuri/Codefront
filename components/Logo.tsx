
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "text-cyan-500", size = 40 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer 'C' Arc */}
      <path 
        d="M68 32C74.3 36.5 78 43.1 78 50C78 65.5 65.5 78 50 78C34.5 78 22 65.5 22 50C22 34.5 34.5 22 50 22C56.9 22 63.5 25.7 68 32" 
        stroke="currentColor" 
        strokeWidth="10" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Inner Power Symbol Circle Arc */}
      <path 
        d="M44.5 36.5C41.7 38.3 40 41.5 40 45C40 50.5 44.5 55 50 55C55.5 55 60 50.5 60 45C60 41.5 58.3 38.3 55.5 36.5" 
        stroke="currentColor" 
        strokeWidth="7" 
        strokeLinecap="round"
      />
      
      {/* Power Symbol Vertical Pin */}
      <path 
        d="M50 32V45" 
        stroke="currentColor" 
        strokeWidth="7" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
