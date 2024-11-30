"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Slider from "react-slick";
import acriesgosImage from "@/app/assets/images/aycok.png";
import { Header } from "@/app/shared/header/header";

// Configuración del slider
const sliderSettings = {
  dots: true, // Mostrar puntos de navegación
  infinite: true, // Repetir el slider
  speed: 500, // Velocidad de transición
  slidesToShow: 1, // Mostrar una imagen por vez
  slidesToScroll: 1, // Desplazar una imagen por vez
  autoplay: true, // Desplazamiento automático
  autoplaySpeed: 3000, // Velocidad del autoplay
};

export const HomeComponent = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-color-white">

      {/* Encabezado */}
      <Header />

      {/* Contenido principal */}
      <main>
        {/* Slider */}
        <div className="mt-6 px-6">
          <Slider {...sliderSettings}>
            {/* Imagen 1 */}
            <div className="flex flex-col items-center bg-color-gray-light rounded p-4">
              <Image
                src={acriesgosImage}
                alt="Slide 1"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <p className="text-color-gray-dark mt-4 text-center">
                Bienvenido al Sistema de Gestión de Seguridad y Salud en el Trabajo.
              </p>
            </div>
            {/* Imagen 2 */}
            <div className="flex flex-col items-center bg-color-gray-light rounded p-4">
              <Image
                src={acriesgosImage} // Cambia la imagen si tienes otra
                alt="Slide 2"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <p className="text-color-gray-dark mt-4 text-center">
                Administra y mejora tus planes anuales y actividades con eficiencia.
              </p>
            </div>
          </Slider>
        </div>

        {/* Grid de componentes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-6">
          {/* Resumen del Plan Anual */}
          <section className="bg-color-gray-light p-6 rounded shadow">
            <h2 className="text-lg font-bold text-color-gray-dark mb-2">
              Plan Anual de Trabajo
            </h2>
            <p className="text-color-gray-dark">
              Revisa el progreso y las tareas pendientes.
            </p>
          </section>

          {/* Gestión de Planes */}
          <section className="bg-color-gray-light p-6 rounded shadow">
            <h2 className="text-lg font-bold text-color-gray-dark mb-2">
              Gestión de tareas
            </h2>
            <button
              className="mt-4 bg-color-orange text-color-white py-2 px-4 rounded hover:bg-orange-500"
              onClick={() => router.push("/gestion-planes")}
            >
              Agregar/Modificar Plan
            </button>
          </section>

          {/* Agenda Lean */}
          <section className="bg-color-gray-light p-6 rounded shadow">
            <h2 className="text-lg font-bold text-color-gray-dark mb-2">
              Agenda
            </h2>
            <p className="text-color-gray-dark">
              Gestiona acuerdos y notificaciones de reuniones.
            </p>
          </section>

          {/* Lista de Actividades */}
          <section className="bg-color-gray-light p-6 rounded shadow">
            <h2 className="text-lg font-bold text-color-gray-dark mb-2">
              Lista de Actividades
            </h2>
            <p className="text-color-gray-dark">
              Visualiza y registra el estado de actividades.
            </p>
          </section>

          {/* Cargar Evidencias */}
          <section className="bg-color-gray-light p-6 rounded shadow">
            <h2 className="text-lg font-bold text-color-gray-dark mb-2">
              Cargar Evidencias
            </h2>
            <button
              className="mt-4 bg-color-orange text-color-white py-2 px-4 rounded hover:bg-orange-500"
              onClick={() => router.push("/cargar-evidencias")}
            >
              Subir Documentos
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};
