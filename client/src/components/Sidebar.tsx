import React, { useEffect } from "react";
import { Logo } from "@/components/ui/logo";
import SidebarCategory from "@/components/SidebarCategory";
import { sidebarCategories } from "@/lib/sidebar-data";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isOpen) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, onClose]);

  return (
    <aside 
      className={`sidebar bg-white w-full lg:w-96 shadow-lg lg:min-h-screen overflow-y-auto fixed lg:sticky top-0 lg:top-0 left-0 z-30 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } transition-transform duration-300 ease-in-out`}
    >
      {/* Logo Container */}
      <div className="p-4 flex justify-center border-b border-gray-200">
        <Logo className="h-20" />
      </div>

      {/* Category Navigation */}
      <nav className="bg-white">
        <ul className="sidebar-nav text-gray-800">
          {sidebarCategories.map((category) => (
            <SidebarCategory 
              key={category.name}
              name={category.name}
              links={category.links}
              color={category.color}
              slug={category.slug}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
