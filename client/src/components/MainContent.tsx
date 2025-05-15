import React from "react";
import Header from "@/components/Header";
import UniversityInfo from "@/components/UniversityInfo";

const MainContent: React.FC = () => {
  return (
    <main className="flex-grow p-4 lg:p-8 bg-light">
      <Header 
        title="Examen de Stat 2025" 
        subtitle={"Universitatea de Stat de Medicină și Farmacie \"Nicolae Testemițanu\""}
      />

      {/* Welcome Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-serif font-bold text-primary mb-4">Bine ați venit!</h2>
        <p className="text-gray-700 mb-4">
          Acest site conține materiale pentru pregătirea Examenului de Stat 2025. 
          Selectați o specialitate din meniul din stânga pentru a accesa materialele corespunzătoare.
        </p>
        
        <div className="py-4">
          <h3 className="text-xl font-bold text-primary mb-3">Instrucțiuni de utilizare:</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Navigați prin categoriile din meniul lateral pentru a găsi materialele dorite</li>
            <li>Faceți clic pe un element pentru a deschide materialul într-o fereastră nouă</li>
            <li>Pentru dispozitive mobile, folosiți butonul din colțul din dreapta jos pentru a deschide meniul</li>
          </ul>
        </div>
      </section>

      <UniversityInfo />
    </main>
  );
};

export default MainContent;
