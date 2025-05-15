import React from "react";

interface CategoryLinkProps {
  url: string;
  text: string;
}

const CategoryLink: React.FC<CategoryLinkProps> = ({ url, text }) => {
  return (
    <li>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block p-3 mb-2 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-all"
      >
        {text}
      </a>
    </li>
  );
};

export default CategoryLink;
