"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/app/shared/header/header";
import { FaEdit } from "react-icons/fa";

export const GeneralPlan = () => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actividadSeleccionada, setActividadSeleccionada] = useState(null);
  const [filtros, setFiltros] = useState({
    componente: "Todos",
    estrategia: "Todos",
  });
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  // Datos de ejemplo para las actividades
  const actividades = [
    {
      id: 1,
      componente: "Gestión de Seguridad",
      estrategia: "Capacitación",
      entregable: "Manual de SST",
      fecha: "2024-12-01",
      estado: "Ejecutado",
      observaciones: "Cumplido sin novedades.",
    },
    {
      id: 2,
      componente: "Inspecciones",
      estrategia: "Visita presencial",
      entregable: "Informe de inspección",
      fecha: "2024-11-28",
      estado: "En Proceso",
      observaciones: "Pendiente de revisión.",
    },
    {
      id: 3,
      componente: "Revisión Documental",
      estrategia: "Auditoría",
      entregable: "Reporte final",
      fecha: "2024-11-30",
      estado: "Ejecutado",
      observaciones: "Documentos validados.",
    },
  ];

  const componentesUnicos = ["Todos", ...new Set(actividades.map((a) => a.componente))];
  const estrategiasUnicas = ["Todos", ...new Set(actividades.map((a) => a.estrategia))];

  const abrirModal = (actividad) => {
    setActividadSeleccionada(actividad);
    setIsModalOpen(true);
  };

  const cerrarModal = () => {
    setIsModalOpen(false);
    setActividadSeleccionada(null);
  };

  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros((prev) => ({ ...prev, [name]: value }));
  };

  // Ordenar actividades por estado
  const actividadesOrdenadas = [...actividades].sort((a, b) => {
    if (ordenAscendente) {
      return a.estado.localeCompare(b.estado);
    } else {
      return b.estado.localeCompare(a.estado);
    }
  });

  const actividadesFiltradas = actividadesOrdenadas.filter(
    (actividad) =>
      (filtros.componente === "Todos" || actividad.componente === filtros.componente) &&
      (filtros.estrategia === "Todos" || actividad.estrategia === filtros.estrategia)
  );

  const cambiarOrden = () => {
    setOrdenAscendente(!ordenAscendente);
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

        {/* Filtros */}
        <div className="w-full max-w-[90%] bg-color-gray-light rounded-lg shadow-md p-4 mb-6">
          <h3 className="text-color-black font-bold mb-4">Filtrar Actividades</h3>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div>
              <label
                htmlFor="componente"
                className="block text-color-black font-medium mb-2 md:mb-0"
              >
                Componente
              </label>
              <select
                id="componente"
                name="componente"
                value={filtros.componente}
                onChange={handleFiltroChange}
                className="w-full md:w-auto p-2 rounded border border-gray-300 bg-white text-color-black"
              >
                {componentesUnicos.map((componente, idx) => (
                  <option key={idx} value={componente}>
                    {componente}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="estrategia"
                className="block text-color-black font-medium mb-2 md:mb-0"
              >
                Estrategia
              </label>
              <select
                id="estrategia"
                name="estrategia"
                value={filtros.estrategia}
                onChange={handleFiltroChange}
                className="w-full md:w-auto p-2 rounded border border-gray-300 bg-white text-color-black"
              >
                {estrategiasUnicas.map((estrategia, idx) => (
                  <option key={idx} value={estrategia}>
                    {estrategia}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Contenedor de la tabla */}
        <div className="overflow-x-auto w-full max-w-[90%]">
          <table className="min-w-full bg-color-white rounded-lg shadow-md border border-color-gray-light">
            {/* Cabecera de la tabla */}
            <thead className="bg-color-yellow text-color-black">
              <tr>
                <th className="py-3 px-6 text-left rounded-tl-lg">COMPONENTE</th>
                <th className="py-3 px-6 text-left">ESTRATEGIA DE INTERVENCIÓN</th>
                <th className="py-3 px-6 text-left">SALIDA - ENTREGABLE</th>
                <th className="py-3 px-6 text-left">FECHA</th>
                <th
                  className="py-3 px-6 text-center cursor-pointer"
                  onClick={cambiarOrden}
                >
                  ESTADO EJECUTADO{" "}
                  {ordenAscendente ? (
                    <span>&uarr;</span>
                  ) : (
                    <span>&darr;</span>
                  )}
                </th>
                <th className="py-3 px-6 text-left">OBSERVACIONES</th>
                <th className="py-3 px-6 text-center rounded-tr-lg">ACCIÓN</th>
              </tr>
            </thead>

            {/* Cuerpo de la tabla */}
            <tbody>
              {actividadesFiltradas.map((actividad) => (
                <tr
                  key={actividad.id}
                  className="border-b border-color-gray-light hover:bg-color-gray-light transition"
                >
                  <td className="py-3 px-6 text-color-black">{actividad.componente}</td>
                  <td className="py-3 px-6 text-color-black">{actividad.estrategia}</td>
                  <td className="py-3 px-6 text-color-black">{actividad.entregable}</td>
                  <td className="py-3 px-6 text-color-black">{actividad.fecha}</td>
                  <td
                    className={`py-3 px-6 text-center font-bold ${
                      actividad.estado === "Ejecutado"
                        ? "text-cl-status-green"
                        : actividad.estado === "En Proceso"
                        ? "text-cl-status-yellow"
                        : "text-color-black"
                    }`}
                  >
                    {actividad.estado}
                  </td>
                  <td className="py-3 px-6 text-color-black">
                    {actividad.observaciones}
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
            </tbody>
          </table>
        </div>

        {/* Botón de "Volver" */}
        <button
          onClick={() => router.back()}
          className="mt-8 bg-color-orange text-color-white py-2 px-6 rounded font-bold hover:bg-color-yellow transition"
        >
          Volver
        </button>
      </main>
    </div>
  );
};
