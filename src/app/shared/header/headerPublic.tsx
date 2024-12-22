"use client";

import Image from "next/image";
import logo from "@/app/assets/images/lgMpSF.png";

export const HeaderPublic = () => {
  return (
    <header className="bg-color-gray-dark text-color-white py-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo y Título */}
        <div className="flex items-center space-x-4">
          {/* Imagen del logo */}
          <Image
            src={logo}
            alt="Logo"
            width={80}
            height={40}
            className="rounded"
          />
          <span className="font-bold text-sm">
            ROLL OUT MB
          </span>
        </div>

        {/* Menú de Navegación */}
        <nav className="flex space-x-6">
          <a href="#inicio" className="hover:text-color-blue">
            INICIO
          </a>
          <a href="#contacto" className="hover:text-color-blue">
            CONTACTO
          </a>
        </nav>
      </div>
    </header>
  );
};
