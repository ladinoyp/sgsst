"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/app/assets/images/lgMpSF.png";

export const Header = () => {
  // Estado para el nombre del usuario
  const [userName, setUserName] = useState("Juan Pérez");

  return (
    <header className="bg-color-gray-dark text-color-white py-2 shadow-md">
      <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 24px",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap", // Permite que los elementos se ajusten
  }}
>
  {/* Logo y Título */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "16px",
      flex: "1",
      minWidth: "250px", // Asegura que el logo y título se mantengan juntos
      marginBottom: "16px", // Espaciado en diseño en columna
    }}
  >
    <Image
      src={logo}
      alt="Logo"
      width={80}
      height={40}
      style={{ borderRadius: "8px" }}
    />
    <span style={{ fontWeight: "bold", fontSize: "14px", color: "white" }}>
      ROLL OUT MB
    </span>
  </div>

  {/* Usuario y Menú de Navegación */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: "8px",
      flex: "1",
      minWidth: "250px",
    }}
  >
    {/* Nombre del usuario alineado a la derecha */}
    <p style={{ fontSize: "12px", color: "#FFFFFF", marginBottom: "4px" }}>
      {userName}
    </p>

    {/* Menú de Navegación */}
    <nav
      style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "16px",
        flexWrap: "wrap", // Permite que se ajuste en pantalla pequeña
      }}
    >
      <a href="#inicio" style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "14px" }}>
        INICIO
      </a>
      <a href="#contacto" style={{ color: "#FFFFFF", textDecoration: "none", fontSize: "14px" }}>
        CONTACTO
      </a>
    </nav>
  </div>
</div>

    </header>
  );
};