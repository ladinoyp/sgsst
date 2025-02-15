"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Header } from "@/app/shared/header/header";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/app/constants/routes";
import trayect from "@/app/assets/images/trayect.png";
import goals from "@/app/assets/images/goals.png";


export const MainPlan = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-color-white mb-10" >

      {/* Encabezado */}
      <Header />

      {/* Contenido principal */}
      <main>
        <div className="flex flex-col items-center justify-center w-full">
          {/* Texto descriptivo del sistema */}
          <div className="w-[70%] mx-auto mt-9">
            <h2 className="text-color-orange text-lg font-bold text-center mb-2">
              ADMINISTRACIÓN Y CONTROL SISTEMA DE GESTION SEGURIDAD Y SALUD EN EL TRABAJO
            </h2>
          </div>

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

          {/* Grid de componentes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-6">
        
            {/* ACTIVIDADES  */}
            <section
              className="bg-color-gray-light p-6 rounded shadow hover:shadow-lg transition-shadow cursor-pointer text-center"
              onClick={() =>
                        router.push(`${PRIVATE_ROUTES.PM_ACTIVITY}/${1}`)
                      }
            >
              <h2 className="text-lg font-bold text-color-gray-dark mb-4">
                ACTIVIDADES
              </h2>
              <div className="flex justify-center mb-4">
                <Image
                  src={trayect}
                  alt="trayect"
                  width={30}
                  height={30}
                  className="rounded"
                />
              </div>
              <p className="text-color-gray-dark">
                Estado y gestion de actividades programadas.
              </p>
            </section>

            {/* SEGUIMIENTO */}
            <section className="bg-color-gray-light p-6 rounded shadow hover:shadow-lg transition-shadow text-center"
              onClick={() => router.push(PRIVATE_ROUTES.PM_GENERAL_PLAN)}
            >            
              <h2 className="text-lg font-bold text-color-gray-dark mb-4">
                SEGUIMIENTO GENERAL PLAN TRABAJO
              </h2>
              <div className="flex justify-center mb-4">
                <Image
                  src={goals}
                  alt="goals"
                  width={30}
                  height={30}
                  className="rounded"
                />
              </div>
              <p className="text-color-gray-dark">
                Seguimiento al plan anual de trabajo
              </p>
            </section>    
          </div>

          <button
            onClick={() => router.push(PRIVATE_ROUTES.HOME)}
            className="mt-9 bg-color-orange text-color-white py-2 px-6 rounded font-bold hover:bg-color-yellow transition"
          >
            Volver
          </button>

        </div>
      </main>
    </div>
  );
};
