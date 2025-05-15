import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="mb-8 text-center">
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
        {title}
      </h1>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </header>
  );
};

export default Header;
