"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/app/shared/header/header";
import { FaEdit, FaFileAlt } from "react-icons/fa";
<FaFileAlt className="text-color-black" size={20} />

export const Activity = () => {
  const router = useRouter();

  const [textoFiltro, setTextoFiltro] = useState("");

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

  // Aplicar el filtro a las actividades
  const actividadesFiltradas = actividades.filter((actividad) =>
    actividad.actividad.toLowerCase().includes(textoFiltro.toLowerCase())
  );

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
        {/* Información básica de la empresa */}
        <div className="w-full max-w-[70%] bg-color-gray-light rounded-lg shadow-md p-2 mb-2">
          <table className="min-w-full">
            <tbody>
              <tr>
                <td className="py-2 px-4 text-color-gray-dark font-medium">
                  Empresa:
                </td>
                <td className="py-2 px-4 text-color-black">
                  Empresa XYZ S.A.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-color-gray-dark font-medium">
                  NIT:
                </td>
                <td className="py-2 px-4 text-color-black">900123456-7</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-color-gray-dark font-medium">
                  Ubicación:
                </td>
                <td className="py-2 px-4 text-color-black">
                  Carrera 10 #23-45, Bogotá, Colombia
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Encabezado de la página */}
        <h1 className="text-color-black text-2xl font-bold mb-4 mt-6 text-center">
          ACTIVIDADES DEL PLAN ANUAL DE TRABAJO
        </h1>

        {/* Contenedor del filtro */}
        <div className="w-full max-w-[70%] mb-4 flex items-center space-x-4">
          <label
            htmlFor="filtroTexto"
            className="text-color-black font-bold"
          >
            Filtrar por actividad:
          </label>
          <input
            id="filtroTexto"
            type="text"
            value={textoFiltro}
            onChange={(e) => setTextoFiltro(e.target.value)}
            className="flex-1 p-2 border border-color-gray-dark rounded outline-none text-color-black"
          />
        </div>


        {/* Contenedor de la tabla */}
        <div className="overflow-x-auto w-full max-w-[80%]">
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
                <th className="py-3 px-6 text-center rounded-tr-lg">Acción</th>
              </tr>
            </thead>

            {/* Cuerpo de la tabla */}
            <tbody>
              {actividadesFiltradas.map((actividad) => (
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
                      onClick={() => abrirModal(actividad)}
                      className="text-color-gray-dark hover:text-color-yellow transition"
                    >
                      <FaEdit size={20} />
                    </button>
                  </td>
                </tr>
              ))}

              <tr>
                <td colSpan={4} className="py-3 px-6 text-center">
                  <button
                    onClick={() => abrirModal(actividades)}
                    className="bg-color-gray-dark text-color-white py-2 px-4 rounded font-bold hover:bg-color-yellow transition"
                  >
                    Agregar actividad
                  </button>
                </td>                
              </tr>

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
          <div className="bg-color-white rounded-lg shadow-lg p-6 w-[90%] max-w-[500px] max-h-[90%] overflow-y-auto">
            <table className="min-w-full">
              <tbody>
                <tr>
                  <td className="py-2 px-4 text-color-gray-dark font-medium">
                    Empresa:
                  </td>
                  <td className="py-2 px-4 text-color-black">
                    Empresa XYZ S.A.
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-color-black text-xl font-bold mb-4 mt-4 text-center">
              Detalle de la Actividad
            </h2>

            <div className="space-y4 text-color-black">
              <div>
                <strong>Actividad:</strong>
                <select
                  defaultValue={actividadSeleccionada.actividad}
                  className="w-full mt-1 p-2 border border-color-gray-dark rounded outline-none text-color-black"
                  disabled={!isModalOpen}
                >
                  <option value="Actividad 1">APLICABILIDAD DEL SG DE SST - Evaluación del SG de SST</option>
                  <option value="Actividad 2">APLICABILIDAD DEL SG DE SST - Reporte estándares mínimos y plan de mejoramiento ante ARL</option>
                  <option value="Actividad 3">APLICABILIDAD DEL SG DE SST - Reporte de estándares mínimos al Ministerio del trabajo</option>
                  <option value="Actividad 4">APLICABILIDAD DEL SG DE SST - Política de Seguridad y Salud en el Trabajo.</option>
                  <option value="Actividad 5">APLICABILIDAD DEL SG DE SST - Política de Prevención al  Consumo de alcohol y drogas </option>
                </select>
              </div>
              <div>
                <strong>Fecha de Proceso:</strong>
                <input
                  type="date"
                  defaultValue={actividadSeleccionada.fechaProceso}
                  className="w-full mt-1 p-2 border border-color-gray-dark rounded outline-none text-color-black"
                  disabled={!isModalOpen}
                />
              </div>
              <div>
                <strong>Estado:</strong>
                <select
                  defaultValue={actividadSeleccionada.estado}
                  className="w-full mt-1 p-2 border border-color-gray-dark rounded outline-none text-color-black"
                  disabled={!isModalOpen}
                >
                  <option value="Programado">Programado</option>
                  <option value="En proceso">En proceso</option>
                  <option value="A tiempo">A tiempo</option>
                  <option value="Fuera de tiempo">Fuera de tiempo</option>
                  <option value="Retrasada">Retrasada</option>
                </select>
              </div>
              <div>
                <strong>Asesor profesional:</strong>
                <select
                  defaultValue={actividadSeleccionada.asesor}
                  className="w-full mt-1 p-2 border border-color-gray-dark rounded outline-none text-color-black"
                  disabled={!isModalOpen}
                >
                  <option value="Asesor 1">Asesor 1</option>
                  <option value="Asesor 2">Asesor 2</option>
                  <option value="Asesor 3">Asesor 3</option>
                </select>
              </div>
              <div>
                <strong>Modalidad:</strong>
                <select
                  defaultValue={actividadSeleccionada.modalidad}
                  className="w-full mt-1 p-2 border border-color-gray-dark rounded outline-none text-color-black"
                  disabled={!isModalOpen}
                >
                  <option value="Presencial">Presencial</option>
                  <option value="Virtual">Virtual</option>
                </select>
              </div>
              <div>
                <strong>Porcentaje de Avance:</strong>
                <input
                  type="text"
                  defaultValue={actividadSeleccionada.porcentajeAvance}
                  className="w-full mt-1 p-2 border border-color-gray-dark rounded outline-none text-color-black"
                  disabled={!isModalOpen}
                />
              </div>
              <div>
                <strong>HHT (Horas trabajadas):</strong>
                <input
                  type="number"
                  defaultValue={actividadSeleccionada.horasTrabajadas}
                  max={8}
                  className="w-full mt-1 p-2 border border-color-gray-dark rounded outline-none text-color-black"
                  disabled={!isModalOpen}
                />
              </div>
              <div>
                <strong>Evidencia:</strong>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,image/*"
                  className="w-full mt-1 p-2 border border-color-gray-dark rounded outline-none text-color-black"
                  disabled={!isModalOpen}
                />
              </div>
              <div>
                <strong>Observación:</strong>
                <textarea
                  defaultValue={actividadSeleccionada.observacion}
                  className="w-full mt-1 p-2 border border-color-gray-dark rounded outline-none text-color-black"
                  disabled={!isModalOpen}
                />
              </div>
            </div>

            <div className="mt-2 flex justify-center gap-4">
              <button
                onClick={() => alert('Actividad adicional')}
                className="bg-color-orange text-color-black py-2 px-6 rounded font-bold hover:bg-color-yellow transition"
              >
                ACTIVIDAD ADICIONAL
              </button>
            </div>

            <div className="mt-10 flex justify-center gap-4">
              <button
                onClick={cerrarModal}
                className="bg-color-gray-dark text-color-white py-2 px-6 rounded font-bold hover:bg-color-yellow transition"
              >
                Cerrar
              </button>
              <button
                onClick={() => alert('Guardar cambios')}
                className="bg-color-blue-light text-color-black py-2 px-6 rounded font-bold hover:bg-color-yellow transition"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}




    </div>
  );
};