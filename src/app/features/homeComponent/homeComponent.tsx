"use client";

import { useRouter } from "next/navigation";

export const  HomeComponent=()=> {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-color-gray-light p-6">
      <header className="bg-color-orange text-color-white p-4 rounded-md">
        <h1 className="text-2xl font-bold text-center">Dashboard Principal</h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Componente: Resumen del Plan Anual */}
        <section className="bg-color-white p-4 rounded-md shadow-md">
          <h2 className="font-bold text-lg text-color-gray-dark mb-2">
            Resumen del Plan Anual
          </h2>
          <p className="text-color-gray-dark">
            Revisa el progreso y las tareas pendientes.
          </p>
        </section>

        {/* Componente: Gestión de Planes */}
        <section className="bg-color-white p-4 rounded-md shadow-md">
          <h2 className="font-bold text-lg text-color-gray-dark mb-2">
            Gestión de Planes
          </h2>
          <button
            className="bg-color-orange text-color-white py-2 px-4 rounded-md font-bold hover:bg-orange-600"
            onClick={() => router.push("/gestion-planes")}
          >
            Agregar/Modificar Plan
          </button>
        </section>

        {/* Componente: Lista de Actividades */}
        <section className="bg-color-white p-4 rounded-md shadow-md">
          <h2 className="font-bold text-lg text-color-gray-dark mb-2">
            Lista de Actividades
          </h2>
          <p className="text-color-gray-dark">
            Visualiza y registra el estado de actividades.
          </p>
        </section>

        {/* Componente: Agenda Lean */}
        <section className="bg-color-white p-4 rounded-md shadow-md">
          <h2 className="font-bold text-lg text-color-gray-dark mb-2">
            Agenda Lean
          </h2>
          <p className="text-color-gray-dark">
            Gestiona acuerdos y notificaciones de reuniones.
          </p>
        </section>

        {/* Componente: Cargar Evidencias */}
        <section className="bg-color-white p-4 rounded-md shadow-md">
          <h2 className="font-bold text-lg text-color-gray-dark mb-2">
            Cargar Evidencias
          </h2>
          <button
            className="bg-color-orange text-color-white py-2 px-4 rounded-md font-bold hover:bg-orange-600"
            onClick={() => router.push("/cargar-evidencias")}
          >
            Subir Documentos
          </button>
        </section>
      </main>
    </div>
  );
}
