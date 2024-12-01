"use client";

import { useRouter } from "next/navigation";
import { Header } from "@/app/shared/header/header";
import { FaEdit } from "react-icons/fa"; 

export const Activity = () => {
  const router = useRouter();

  // Datos de ejemplo para las actividades
  const actividades = [
    {
      id: 1,
      actividad: "Inspección de seguridad",
      fechaProceso: "2024-12-01",
      estado: "Programado", 
      asesor: "Juan Pérez",
    },
    {
      id: 2,
      actividad: "Capacitación SST",
      fechaProceso: "2024-11-28",
      estado: "En proceso", 
      asesor: "María Gómez",
    },
    {
      id: 3,
      actividad: "Revisión de documentos",
      fechaProceso: "2024-11-30",
      estado: "A tiempo", 
      asesor: "Carlos Ramírez",
    },
    {
      id: 4,
      actividad: "Auditoría interna",
      fechaProceso: "2024-11-25",
      estado: "Fuera de tiempo",
      asesor: "Laura Sánchez",
    },
    {
      id: 5,
      actividad: "Reunión de seguimiento",
      fechaProceso: "2024-11-22",
      estado: "Retrasada",
      asesor: "Pedro Alarcón",
    },
  ];
  

  return (
    <div className="min-h-screen bg-color-white">
      {/* Encabezado */}
      <Header />

      {/* Contenido principal */}
      <main className="p-6 flex flex-col items-center">
        {/* Encabezado de la página */}
        <h1 className="text-color-black text-2xl font-bold mb-6 text-center">
          ACTIVIDADES DEL PLAN ANUAL DE TRABAJO
        </h1>

        {/* Información básica de la empresa */}
        <div className="w-full max-w-[70%] bg-color-gray-light rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-color-gray-dark text-lg font-bold mb-4">INFORMACIÓN DE LA EMPRESA</h2>
            <table className="min-w-full">
            <tbody>
                <tr>
                <td className="py-2 px-4 text-color-gray-dark font-medium">Empresa:</td>
                <td className="py-2 px-4 text-color-black">Empresa XYZ S.A.</td>
                </tr>
                <tr>
                <td className="py-2 px-4 text-color-gray-dark font-medium">NIT:</td>
                <td className="py-2 px-4 text-color-black">900123456-7</td>
                </tr>
                <tr>
                <td className="py-2 px-4 text-color-gray-dark font-medium">Ubicación:</td>
                <td className="py-2 px-4 text-color-black">Carrera 10 #23-45, Bogotá, Colombia</td>
                </tr>
            </tbody>
            </table>
        </div>

{/* Contenedor de la tabla */}
<div className="overflow-x-auto w-full max-w-[70%]">
  <table className="min-w-full bg-color-white rounded-lg shadow-md border border-color-gray-light">
    {/* Cabecera de la tabla */}
    <thead className="bg-color-yellow text-color-black">
      <tr>
        <th className="py-3 px-6 text-left rounded-tl-lg">Actividad</th>
        <th className="py-3 px-6 text-center">Fecha de Proceso</th>
        <th className="py-3 px-6 text-center">Estado</th>
        <th className="py-3 px-6 text-right">Asesor</th>
        <th className="py-3 px-6 text-center rounded-tr-lg">Editar</th>
      </tr>
    </thead>

    {/* Cuerpo de la tabla */}
    <tbody>
      {actividades.map((actividad) => (
        <tr
          key={actividad.id}
          className="border-b border-color-gray-light hover:bg-color-gray-light transition"
        >
          <td className="py-3 px-6 text-color-black">{actividad.actividad}</td>
          <td className="py-3 px-6 text-center text-color-black">{actividad.fechaProceso}</td>
          <td
            className={`py-3 px-6 text-center font-bold ${
              actividad.estado === "Programado"
                ? "text-cl-status-blue"
                : actividad.estado === "En proceso"
                ? "text-cl-status-yellow"
                : actividad.estado === "A tiempo"
                ? "text-cl-status-green"
                : actividad.estado === "Fuera de tiempo"
                ? "text-cl-status-orange"
                : actividad.estado === "Retrasada"
                ? "text-cl-status-red"
                : "text-color-black"
            }`}
          >
            {actividad.estado}
          </td>
          <td className="py-3 px-6 text-right text-color-black">{actividad.asesor}</td>
          <td className="py-3 px-6 text-center">
            <button
              onClick={() => console.log(`Editar actividad: ${actividad.id}`)} // Acción de editar
              className="text-color-gray-dark hover:text-color-yellow transition"
            >
              <FaEdit size={20} />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
        {/* Botón de "Volver" */}
        <button
          onClick={() => router.back()} // Utiliza router.back para volver a la página anterior
          className="mt-8 bg-color-orange text-color-white py-2 px-6 rounded font-bold hover:bg-color-yellow transition"
        >
          Volver
        </button>
      </main>
    </div>
  );
};
