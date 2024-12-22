"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Slider from "react-slick";
import { Header } from "@/app/shared/header/header";
import { PRIVATE_ROUTES } from "@/app/constants/routes";
import logo from "@/app/assets/images/logoMp.jpg";
import documentIcon from "@/app/assets/images/document.png";
import following from "@/app/assets/images/following.png";
import offline from "@/app/assets/images/offline.png";
import userIcon from "@/app/assets/images/user.png";
import process from "@/app/assets/images/process.png";



// Configuración del slider
const sliderSettings = {
  dots: true, // Mostrar puntos de navegación
  infinite: true, // Repetir el slider
  speed: 500, // Velocidad de transición
  slidesToShow: 1, // Mostrar una imagen por vez
  slidesToScroll: 1, // Desplazar una imagen por vez
  autoplay: true, // Desplazamiento automático
  autoplaySpeed: 5000, // Velocidad del autoplay
};

export const HomeComponent = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-color-white mb-10" >

      {/* Encabezado */}
      <Header />

      {/* Contenido principal */}
      <main>
           
        {/* Texto descriptivo del sistema */}
        <div className="w-[70%] mx-auto mt-9">
          <h2 className="text-color-blue text-lg font-bold text-center mb-2">
            ADMINISTRACIÓN ROLL OUT MB
          </h2>
          <p className="text-color-black text-justify text-sm break-words">
            Administramos y coordinamos las estrategias que permitan llevar a cabo la gestión y el desarrollo del sistema al interior de tu compañía.
          </p>
        </div>


        {/* Grid de componentes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-6">
       
          {/* Master */}
          <section
            className="bg-color-gray-light p-6 rounded shadow hover:shadow-lg transition-shadow cursor-pointer text-center"
            onClick={() => router.push(PRIVATE_ROUTES.PLAN_MANAGEMENT)}
          >
            <h2 className="text-lg font-bold text-color-gray-dark mb-4">
              MASTER
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

          {/* Seguimiento */}
          <section className="bg-color-gray-light p-6 rounded shadow hover:shadow-lg transition-shadow text-center"
            onClick={() => router.push(PRIVATE_ROUTES.AGENDA)}
          >            
            <h2 className="text-lg font-bold text-color-gray-dark mb-4">
              SEGUIMIENTO
            </h2>
            <div className="flex justify-center mb-4">
              <Image
                src={following}
                alt="Seguimiento"
                width={30}
                height={30}
                className="rounded"
              />
            </div>
            {/* Texto descriptivo */}
            <p className="text-color-gray-dark">
              Seguimiento de los procesos.
            </p>
          </section>

          {/* Desmonte */}
          <section className="bg-color-gray-light p-6 rounded shadow hover:shadow-lg transition-shadow text-center"
            onClick={() => router.push(PRIVATE_ROUTES.AGENDA)}
          >            
            <h2 className="text-lg font-bold text-color-gray-dark mb-4">
              DESMONTE
            </h2>
            <div className="flex justify-center mb-4">
              <Image
                src={offline}
                alt="Desmonte"
                width={30}
                height={30}
                className="rounded"
              />
            </div>
            {/* Texto descriptivo */}
            <p className="text-color-gray-dark">
              Gestiona los desmontes de red.
            </p>
          </section>
          
          {/* Lista de personal */}
          <section className="bg-color-gray-light p-6 rounded shadow hover:shadow-lg transition-shadow text-center"
            onClick={() => router.push(PRIVATE_ROUTES.MNG_USER)}
          >            
            <h2 className="text-lg font-bold text-color-gray-dark mb-4">
              PERSONAL
            </h2>
            <div className="flex justify-center mb-4">
              <Image
                src={userIcon}
                alt="User"
                width={30}
                height={30}
                className="rounded"
              />
            </div>
            {/* Texto descriptivo */}
            <p className="text-color-gray-dark">
              Visualiza, registra o modifica personal.
            </p>
          </section>


          {/* Lista de Actividades */} 
          <section className="bg-color-gray-light p-6 rounded shadow hover:shadow-lg transition-shadow text-center"
            onClick={() => router.push(PRIVATE_ROUTES.MNG_LIST)}
          >            
            <h2 className="text-lg font-bold text-color-gray-dark mb-4">
              GESTIONAR LISTAS/ESTADOS
            </h2>
            <div className="flex justify-center mb-4">
              <Image
                src={process}
                alt="User"
                width={30}
                height={30}
                className="rounded"
              />
            </div>
            {/* Texto descriptivo */}
            <p className="text-color-gray-dark">
              Visualiza, registra o modifica listas.
            </p>
          </section>    

        </div>
      </main>
    </div>
  );
};
