import React from "react";
import logoPath from "@assets/Logo_USMF_80 cerc 2025 color.png";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <img 
      src={logoPath} 
      alt="Logo USMF 80 ani" 
      className={className} 
    />
  );
};
