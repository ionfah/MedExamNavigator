import React, { useState } from "react";
import { Link } from "wouter";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import Header from "@/components/Header";
import { Logo } from "@/components/ui/logo";
import { sidebarCategories } from "@/lib/sidebar-data";

const Home: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Componenta pentru ecrane mari (desktop) afișează sidebar-ul și conținutul principal
  const DesktopView = () => (
    <>
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <MainContent />
    </>
  );

  // Componenta pentru mobile afișează categoriile în centru
  const MobileView = () => (
    <main className="flex-grow p-4 lg:p-8 bg-light">
      <div className="flex justify-center mb-6">
        <Logo className="h-24" />
      </div>
      
      <Header 
        title="Examen de Stat 2025" 
        subtitle={"Universitatea de Stat de Medicină și Farmacie \"Nicolae Testemițanu\""}
      />
      
      <div className="my-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-4">
          {sidebarCategories.map((category) => (
            <Link 
              key={category.slug}
              to={`/category/${category.slug}`}
              className="block p-5 rounded-lg text-primary text-center font-medium hover:opacity-90 transition-all transform hover:scale-105 border-2 bg-white"
              style={{ borderColor: category.color }}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );

  return (
    <>
      {/* Desktop View (vizibil doar pe desktop) */}
      <div className="hidden lg:flex lg:flex-row flex-grow relative w-full">
        <DesktopView />
      </div>
      
      {/* Mobile View (vizibil doar pe mobile) */}
      <div className="lg:hidden flex flex-col flex-grow relative w-full">
        <MobileView />
      </div>
      
      {/* Butonul de mobile menu a fost eliminat conform cerințelor */}
    </>
  );
};

export default Home;
