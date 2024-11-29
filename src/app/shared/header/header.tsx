"use client";

import Image from "next/image";
import acriesgosImage from "@/app/assets/images/aycok.png";

export const Header = () => {
  return (
    <header className="bg-color-gray-dark py-2">
      <div className="container mx-auto flex items-center space-x-4">
        {/* Imagen del logo */}
        <Image
          src={acriesgosImage}
          alt="Logo"
          width={50}
          height={50}
          className="rounded"
        />

        {/* Título */}
        <h1 className="text-color-yellow font-bold text-lg">
          GESTIÓN SEGURIDAD Y SALUD EN EL TRABAJO
        </h1>
      </div>
    </header>
  );
};
