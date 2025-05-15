import React, { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { sidebarCategories } from "@/lib/sidebar-data";
import Header from "@/components/Header";
import { ChevronLeft } from "lucide-react";

const CategoryPage: React.FC = () => {
  const [, params] = useRoute("/category/:slug");
  const slug = params?.slug || "";
  const [category, setCategory] = useState(sidebarCategories.find(c => c.slug === slug));

  // Actualizează categoria când se schimbă slug-ul
  useEffect(() => {
    const foundCategory = sidebarCategories.find(c => c.slug === slug);
    if (foundCategory) {
      setCategory(foundCategory);
      // Setăm titlul paginii
      document.title = `${foundCategory.name} - Examen de Stat 2025`;
    }
  }, [slug]);

  if (!category) {
    return (
      <div className="flex-grow p-4 lg:p-8 bg-light">
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold mb-4">Categoria nu a fost găsită</h2>
          <Link to="/" className="text-primary hover:underline">
            Înapoi la pagina principală
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-grow p-4 lg:p-8 bg-light">
      <div className="mb-4">
        <Link to="/" className="inline-flex items-center text-primary hover:underline">
          <ChevronLeft className="h-5 w-5 mr-1" />
          Înapoi la pagina principală
        </Link>
      </div>
      
      <Header 
        title={category.name} 
        subtitle="Examen de Stat 2025"
      />

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.links.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-5 rounded-lg text-primary text-center font-medium hover:opacity-90 transition-all transform hover:scale-105 border-2 bg-white"
              style={{ borderColor: category.color }}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;