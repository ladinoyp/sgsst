"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/app/shared/header/header";
import { FaEdit, FaFileAlt } from "react-icons/fa";
<FaFileAlt className="text-color-black" size={20} />


export const Activity = () => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actividadSeleccionada, setActividadSeleccionada] = useState(null);

  // Datos de ejemplo para las actividades
  const actividades = [
    {
      id: 1,
      actividad: "Inspección de seguridad",
      fechaProceso: "2024-12-01",
      estado: "Programado",
      asesor: "María Gómez",
      modalidad: "Presencial",
      porcentajeAvance: "10%",
    },
    {
      id: 2,
      actividad: "Capacitación SST",
      fechaProceso: "2024-11-28",
      estado: "En proceso",
      asesor: "María Gómez",
      modalidad: "Virtual",
      porcentajeAvance: "50%",
    },
    {
      id: 3,
      actividad: "Revisión de documentos",
      fechaProceso: "2024-11-30",
      estado: "A tiempo",
      asesor: "María Gómez",
      modalidad: "Presencial",
      porcentajeAvance: "100%",
    },
    {
      id: 4,
      actividad: "Auditoría interna",
      fechaProceso: "2024-11-25",
      estado: "Fuera de tiempo",
      asesor: "María Gómez",
      modalidad: "Virtual",
      porcentajeAvance: "75%",
    },
    {
      id: 5,
      actividad: "Reunión de seguimiento",
      fechaProceso: "2024-11-22",
      estado: "Retrasada",
      asesor: "María Gómez",
      modalidad: "Presencial",
      porcentajeAvance: "20%",
    },
  ];

  const abrirModal = (actividad) => {
    setActividadSeleccionada(actividad);
    setIsModalOpen(true);
  };

  const cerrarModal = () => {
    setIsModalOpen(false);
    setActividadSeleccionada(null);
  };

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

        {/* Contenedor de la tabla */}
        <div className="overflow-x-auto w-full max-w-[70%]">
          <table className="min-w-full bg-color-white rounded-lg shadow-md border border-color-gray-light">
            {/* Cabecera de la tabla */}
            <thead className="bg-color-yellow text-color-black">
              <tr>
                <th className="py-3 px-6 text-left rounded-tl-lg">Actividad</th>
                <th className="py-3 px-6 text-center">Fecha de Proceso</th>
                <th className="py-3 px-6 text-center">Estado</th>
                <th className="py-3 px-6 text-center">Porcentaje Avance</th>
                <th className="py-3 px-6 text-right">Asesor</th>
                <th className="py-3 px-6 text-right">Modalidad</th>
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
                  <td className="py-3 px-6 text-color-black">
                    {actividad.actividad}
                  </td>
                  <td className="py-3 px-6 text-center text-color-black">
                    {actividad.fechaProceso}
                  </td>
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
                  <td className="py-3 px-6 text-center text-color-black">
                    {actividad.porcentajeAvance}
                  </td>
                  <td className="py-3 px-6 text-right text-color-black">
                    {actividad.asesor}
                  </td>
                  <td className="py-3 px-6 text-right text-color-black">
                    {actividad.modalidad}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <button
                      onClick={() => abrirModal(actividad)} // Acción de abrir el modal
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

      {/* Modal */}
{isModalOpen && actividadSeleccionada && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-color-white rounded-lg shadow-lg p-6 w-[90%] max-w-[500px]">
      <h2 className="text-color-black text-xl font-bold mb-4 text-center">
        Detalle de la Actividad
      </h2>
      <div className="space-y-4 text-color-black"> {/* Clase para texto negro */}
        <p>
          <strong>Actividad:</strong> {actividadSeleccionada.actividad}
        </p>
        <p>
          <strong>Fecha de Proceso:</strong> {actividadSeleccionada.fechaProceso}
        </p>
        <p>
          <strong>Estado:</strong> {actividadSeleccionada.estado}
        </p>
        <p>
          <strong>Asesor profesional:</strong> {actividadSeleccionada.asesor}
        </p>
        <p>
          <strong>Modalidad:</strong> {actividadSeleccionada.modalidad}
        </p>
        <p>
          <strong>Porcentaje de Avance:</strong> {actividadSeleccionada.porcentajeAvance}
        </p>
        <p>
          <strong>Observacion:</strong> {actividadSeleccionada.observacion}
        </p>
        <p className="flex items-center gap-2">
          <strong>Evidencia:</strong>
          <a
            href="/ruta/del/documento.pdf"
            download
            className="text-color-blue hover:underline flex items-center"
          >
            <FaFileAlt className="text-color-black" size={20} /> Descargar documento
          </a>
        </p>
      </div>
      <div className="mt-6 flex justify-center">
        <button
          onClick={cerrarModal}
          className="bg-color-orange text-color-white py-2 px-6 rounded font-bold hover:bg-color-yellow transition"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
)}


    </div>
  );
};
