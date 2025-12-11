//components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Landing... Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;