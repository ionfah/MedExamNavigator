import React from "react";

const WarningBanner: React.FC = () => {
  return (
    <div className="bg-secondary text-white px-4 py-2 text-center font-bold sticky top-0 z-50">
      Atenție! Acest site este destinat exclusiv studenților. Vă rugăm să nu distribuiți nimănui acest site.
    </div>
  );
};

export default WarningBanner;
