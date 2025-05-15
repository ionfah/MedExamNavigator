import React from "react";
import { Logo } from "@/components/ui/logo";

const UniversityInfo: React.FC = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-4 md:mb-0 flex justify-center">
          <Logo className="h-32" />
        </div>
        <div className="md:w-2/3 text-center md:text-left md:pl-6">
          <h2 className="text-2xl font-serif font-bold text-primary mb-3">80 de ani de excelență medicală</h2>
          <p className="text-gray-700 mb-4">
            Universitatea de Stat de Medicină și Farmacie "Nicolae Testemițanu" din Republica Moldova 
            este o instituție de învățământ superior cu tradiții bogate și realizări remarcabile 
            în domeniul educației medicale.
          </p>
          <p className="text-gray-700">
            Misiunea universității este de a forma specialiști de înaltă calificare 
            în domeniul medicinei și farmaciei, capabili să răspundă provocărilor contemporane 
            ale sistemului de sănătate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UniversityInfo;
