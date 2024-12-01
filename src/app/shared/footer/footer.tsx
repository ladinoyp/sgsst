"use client";

import Image from "next/image";
import acriesgosImage from "@/app/assets/images/aycok.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-color-black text-color-white p-10 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Columna 1: Información */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-color-yellow">SG-SST</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              Gestión de Seguridad y Salud en el Trabajo
            </li>
          </ul>
        </div>

        {/* Columna 2: Detalles */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-color-yellow">
            INFORMACIÓN:
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2 text-color-yellow">📍</span>
              Transv. 42a # 4d-12 Piso 4
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-color-yellow">📞</span>
              (601) - 9278091
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-color-yellow">📧</span>
              gestioncomercial@aycriesgos.com
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-color-yellow">📱</span>
              302 8271823
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-color-yellow">📲</span>
              316 5420862 - 320 3012453
            </li>
          </ul>
        </div>

        {/* Columna 3: Logo y Redes Sociales */}
        <div className="text-center md:text-right">
          <div className="flex justify-center mb-4">
            <Image
              src={acriesgosImage}
              alt="A&C Riesgos"
              width={75}
              height={25}
            />
          </div>

          <p className="mb-4">Síguenos como A&C Riesgos:</p>
          <div className="flex justify-center md:justify-end space-x-4">
            <FaFacebookF className="text-2xl hover:text-color-yellow cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-color-yellow cursor-pointer" />
            <FaLinkedinIn className="text-2xl hover:text-color-yellow cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-color-yellow cursor-pointer" />
            <FaYoutube className="text-2xl hover:text-color-yellow cursor-pointer" />
            <FaTiktok className="text-2xl hover:text-color-yellow cursor-pointer" />
          </div>
          <p className="mt-4 text-sm">
            Somos expertos. ¡Nosotros nos hacemos cargo!
          </p>
        </div>
      </div>
    </footer>
  );
};
