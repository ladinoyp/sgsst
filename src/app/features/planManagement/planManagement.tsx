"use client";

import { useRouter } from "next/navigation";
import { Header } from "@/app/shared/header/header";
import { PRIVATE_ROUTES } from "@/app/constants/routes";

export const PlanManagement = () => {
  const router = useRouter();

  // Datos de ejemplo para las empresas
  const empresas = [
    { id: 1, nombre: "Empresa 1" },
    { id: 2, nombre: "Empresa 2" },
    { id: 3, nombre: "Empresa 3" },
    { id: 4, nombre: "Empresa 4" },
  ];

  const verActividades = (id: number) => {
    console.log(`Ver actividades para la empresa con ID: ${id}`);
    // Aquí puedes redirigir o realizar una acción para mostrar actividades
    router.push(`${PRIVATE_ROUTES.PM_ACTIVITY}/${id}`);
  };

  return (
    <div className="min-h-screen bg-color-white">
      {/* Encabezado */}
      <Header />

      {/* Contenido principal */}
      <main className="p-6 flex flex-col items-center">
        {/* Encabezado de la página */}
        <h1 className="text-color-black text-2xl font-bold mb-6 text-center">
          GESTIÓN PLAN ANUAL DE TRABAJO
        </h1>

        {/* Contenedor de la tabla */}
        <div className="overflow-x-auto w-full max-w-[70%]">
          <table className="min-w-full bg-color-white rounded-lg shadow-md border border-color-gray-light">
            {/* Cabecera de la tabla */}
            <thead className="bg-color-yellow text-color-black">
              <tr>
                <th className="py-3 px-6 text-left rounded-tl-lg">EMPRESA</th>
                <th className="py-3 px-6 text-center rounded-tr-lg">ACCIÓN</th>
              </tr>
            </thead>

            {/* Cuerpo de la tabla */}
            <tbody>
              {empresas.map((empresa) => (
                <tr
                  key={empresa.id}
                  className="border-b border-color-gray-light hover:bg-color-gray-light transition"
                >
                  <td className="py-3 px-6 text-color-black">
                    {empresa.nombre}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <button
                      onClick={() => verActividades(empresa.id)}
                      className="bg-color-gray-dark text-color-white py-2 px-4 rounded font-bold hover:bg-color-yellow transition"
                    >
                      Actividades
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
