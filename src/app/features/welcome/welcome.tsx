"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Slider from "react-slick";
import logo from "@/app/assets/images/aycok.png";
import { HeaderPublic } from "@/app/shared/header/headerPublic";
import { PUBLIC_ROUTES } from "@/app/constants/routes";

// Configuración del slider
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export const Welcome = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-color-white">
      {/* Encabezado */}
      <HeaderPublic />

      {/* Contenido principal */}
      <main className="flex flex-col md:flex-row justify-center md:justify-between items-center min-h-[80vh] px-6">
        {/* Slider */}
        <div className="w-full max-w-lg md:mr-8 ml-10"
         style={
            {marginLeft:'15%'}
         }>
          <Slider {...sliderSettings} >
            {/* Imagen 1 */}
            <div className="flex flex-col items-center bg-color-gray-light rounded p-4">
              <Image
                src={logo}
                alt="Slide 1"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <p className="text-color-gray-dark mt-4 text-center">
                Sistema de Gestión de Seguridad y Salud en el Trabajo de A&C RIESGOS.
              </p>
            </div>
            {/* Imagen 2 */}
            <div className="flex flex-col items-center bg-color-gray-light rounded p-4">
              <Image
                src={logo}
                alt="Slide 2"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <p className="text-color-gray-dark mt-4 text-center">
                Administra tus tareas y planes con facilidad y eficiencia.
              </p>
            </div>
          </Slider>
        </div>

        {/* Botones */}
        <div style={{display:"flex", marginRight:'10%', flexDirection:"column"}}>
          <button
            className="bg-color-orange text-color-white mb-4 py-2 px-6 rounded font-bold hover:bg-color-yellow"
            
            onClick={() => router.push(PUBLIC_ROUTES.LOGIN)}
          >
            Iniciar Sesión
          </button>
          
          <button
            className="bg-color-gray-dark text-color-white py-2 px-6 rounded font-bold hover:bg-color-yellow"
            onClick={() => router.push(PUBLIC_ROUTES.REGISTER)}
          >
            Registrarse
          </button>
        </div>
      </main>
    </div>
  );
};
