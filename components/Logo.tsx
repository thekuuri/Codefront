
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40 }) => {
  return (
    <img 
      src="/logo.jpg" 
      alt="Codefront Logo" 
      width={size} 
      height={size} 
      className={`rounded-lg ${className}`}
    />
  );
};

export default Logo;
