"use client";

import { useState } from "react";
import Image from "next/image";
import acriesgosImage from "@/app/assets/images/aycok.png";

export const Header = () => {
  // Estado para el nombre del usuario
  const [userName, setUserName] = useState("Juan Pérez");

  return (
    <header className="bg-color-gray-dark text-color-white py-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo y Título */}
        <div className="flex items-center space-x-4">
          {/* Imagen del logo */}
          <Image
            src={acriesgosImage}
            alt="Logo"
            width={80}
            height={40}
            className="rounded"
          />
          <span className="font-bold text-sm">
            GESTIÓN DE SEGURIDAD Y SALUD EN EL TRABAJO
          </span>
        </div>

        {/* Usuario y Menú de Navegación */}
        <div className="flex flex-col items-end">
          {/* Nombre del usuario alineado a la derecha */}
          <p className="text-xs text-color-white mb-1">
            {userName}
          </p>

          {/* Menú de Navegación */}
          <nav className="flex space-x-6">
            <a href="#inicio" className="hover:text-color-orange">
              INICIO
            </a>
            <a href="#servicios" className="hover:text-color-orange">
              SERVICIOS
            </a>
            <a href="#blog" className="hover:text-color-orange">
              BLOG A&C
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};