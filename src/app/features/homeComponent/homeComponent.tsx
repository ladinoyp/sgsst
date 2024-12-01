"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Slider from "react-slick";
import { Header } from "@/app/shared/header/header";
import { PRIVATE_ROUTES } from "@/app/constants/routes";
import acriesgosImage from "@/app/assets/images/aycok.png";
import documentIcon from "@/app/assets/images/document.png";
import calendarIcon from "@/app/assets/images/calendar.png";

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
    <div className="min-h-screen bg-color-white mb-10" >

      {/* Encabezado */}
      <Header />

      {/* Contenido principal */}
      <main>
        {/* Slider */}
        <div className="mt-6 mx-auto w-full max-w-2xl">
          <Slider {...sliderSettings}>
            {/* Imagen 1 */}
            <div className="flex flex-col items-center bg-color-gray-light rounded p-4">
              <Image
                src={acriesgosImage}
                alt="Slide 1"
                width={300}
                height={200}
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
                width={300}
                height={200}
                className="rounded-lg"
              />
              <p className="text-color-gray-dark mt-4 text-center">
                Administra y mejora tus planes anuales y actividades con eficiencia.
              </p>
            </div>
          </Slider>
        </div>

   
        {/* Texto descriptivo del sistema */}
        <p className="text-color-gray-dark mt-2 text-justify text-sm w-[70%] mx-auto mt-9 break-words">
          Este sistema ayuda a optimizar tareas y garantizar el cumplimiento legal hjedvucgeswudjgehfgeysdfyagfhsjadgfhdsgfhdsjgfhdsjgfdshjgfdjhsgfhdgfhdgydruvgdhxjbvgfdhjgdhjghdjghfvfgvjfkjfdjkfjkdfkjfdkjfdjkfdjkdfjkfdjjkfdjkfdjkfdjkdfjkfdjkfdjkdfjkuhnifsdujhfguisdhv sdkjngnhfdruki nbjfnvkjki hu gbvhbguy gty bjhvb uyhgb bhbvyuguygbuiyghuybiyguybvdab swecvbh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

        </p>

        {/* Grid de componentes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-6">
       
          {/* Resumen del Plan Anual */}
          <section
            className="bg-color-gray-light p-6 rounded shadow hover:shadow-lg transition-shadow cursor-pointer text-center"
            onClick={() => router.push(PRIVATE_ROUTES.PLAN_MANAGEMENT)}
          >
            <h2 className="text-lg font-bold text-color-gray-dark mb-4">
              Plan anual de trabajo
            </h2>
            <div className="flex justify-center mb-4">
              <Image
                src={documentIcon}
                alt="Documento"
                width={30}
                height={30}
                className="rounded"
              />
            </div>
            <p className="text-color-gray-dark">
              Revisa el progreso y las tareas pendientes.
            </p>
          </section>


          {/* Gestión de Planes */}
          {/* <section className="bg-color-gray-light p-6 rounded shadow">
            <h2 className="text-lg font-bold text-color-gray-dark mb-2">
              Gestión de tareas
            </h2>
            <button
              className="mt-4 bg-color-orange text-color-white py-2 px-4 rounded hover:bg-orange-500"
              onClick={() => router.push("/gestion-planes")}
            >
              Agregar/Modificar Plan
            </button>
          </section> */}

          {/* Agenda Lean */}
          <section className="bg-color-gray-light p-6 rounded shadow hover:shadow-lg transition-shadow text-center">
            
            <h2 className="text-lg font-bold text-color-gray-dark mb-4">
              Agenda
            </h2>
            <div className="flex justify-center mb-4">
              <Image
                src={calendarIcon}
                alt="Calendario"
                width={30}
                height={30}
                className="rounded"
              />
            </div>
            {/* Texto descriptivo */}
            <p className="text-color-gray-dark">
              Gestiona acuerdos y notificaciones de reuniones.
            </p>
          </section>


          {/* Lista de Actividades */}
          <section className="bg-color-gray-light p-6 rounded shadow">
            <h2 className="text-lg font-bold text-color-gray-dark mb-2">
              Gestionar actividades
            </h2>
            <p className="text-color-gray-dark">
              Visualiza, registra o modifica actividades.
            </p>
          </section>
          
          {/* Lista de clientes */}
          <section className="bg-color-gray-light p-6 rounded shadow">
            <h2 className="text-lg font-bold text-color-gray-dark mb-2">
              Gestionar usuarios
            </h2>
            <p className="text-color-gray-dark">
            Visualiza, registra o modifica usuarios.
            </p>
          </section>

          
          {/* Cargar Evidencias */}
          {/* <section className="bg-color-gray-light p-6 rounded shadow">
            <h2 className="text-lg font-bold text-color-gray-dark mb-2">
              Cargar Evidencias
            </h2>
            <button
              className="mt-4 bg-color-orange text-color-white py-2 px-4 rounded hover:bg-orange-500"
              onClick={() => router.push("/cargar-evidencias")}
            >
              Subir Documentos
            </button>
          </section> */}
        </div>
      </main>
    </div>
  );
};
