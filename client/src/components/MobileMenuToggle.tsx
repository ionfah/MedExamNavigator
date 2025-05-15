import React from "react";
import { Menu } from "lucide-react";

interface MobileMenuToggleProps {
  onClick: () => void;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ onClick }) => {
  return (
    <button 
      className="lg:hidden fixed bottom-4 right-4 z-40 bg-primary text-white p-3 rounded-full shadow-lg"
      onClick={onClick}
      aria-label="Toggle mobile menu"
    >
      <Menu className="h-6 w-6" />
    </button>
  );
};

export default MobileMenuToggle;
