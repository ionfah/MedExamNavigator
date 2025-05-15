import React from "react";
import { Link } from "wouter";

export interface LinkItem {
  url: string;
  text: string;
}

interface SidebarCategoryProps {
  name: string;
  links: LinkItem[];
  color: string;
  slug: string;
}

const SidebarCategory: React.FC<SidebarCategoryProps> = ({ name, color, slug }) => {
  return (
    <li className="sidebar-category border-b border-gray-200">
      <Link 
        to={`/category/${slug}`}
        className="flex items-center p-4 hover:bg-light focus:outline-none transition-colors"
      >
        <span className="font-bold text-primary">{name}</span>
      </Link>
    </li>
  );
};

export default SidebarCategory;
