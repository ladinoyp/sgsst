"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

import acriesgosImage from "@/app/assets/images/aycok.png";
import { PUBLIC_ROUTES } from "@/app/constants/routes";

// Tipos para el formulario de restauración
type ResetPasswordFormInputs = {
  email: string;
};

export const ResetPassword = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormInputs>();

  const onSubmit: SubmitHandler<ResetPasswordFormInputs> = (data) => {
    console.log("Email para restaurar contraseña:", data);
    // Aquí podrías enviar el email al backend para procesar la restauración
    alert("Se ha enviado un enlace para restaurar tu contraseña a tu correo.");
    router.push("/login"); // Redirige a la página de inicio de sesión
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-color-white p-6">
      <div className="flex flex-col items-center rounded-lg shadow-md max-w-md w-full">
        {/* Contenedor de encabezado con fondo gris oscuro */}
        <div className="w-full bg-color-gray-dark py-4 flex flex-col items-center rounded-t-lg">
          <Image
            src={acriesgosImage}
            alt="Logo"
            width={150}
            height={150}
            className="mb-4 rounded-lg"
          />
        </div>

        {/* Contenido del formulario */}
        <div className="bg-color-gray-light w-full p-8 rounded-b-lg">
          
          <h1 className="text-color-black text-xl font-bold text-center">
            RECUPERAR CONTRASEÑA
          </h1>


          <p className="text-color-gray-dark text-center mb-6">
            Ingresa tu correo electrónico para enviar un enlace de
            recuperación.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
            {/* Campo de Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-color-gray-dark font-medium mb-2"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="Ingresa tu correo electrónico"
                {...register("email", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Formato de correo no válido",
                  },
                })}
                className="w-full p-3 rounded-md border border-gray-300 bg-color-white text-color-gray-dark focus:outline-none focus:ring-2 focus:ring-color-orange"
              />
              {errors.email && (
                <p className="text-color-orange text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Botón de Restaurar */}
            <button
              type="submit"
              className="w-full py-3 bg-color-orange text-color-white rounded-md font-bold hover:bg-color-yellow transition"
            >
              Enviar Enlace
            </button>
          </form>

          {/* Línea divisora */}
          <hr className="my-8 border-t border-color-yellow w-full" />

          {/* Link para volver a inicio de sesión */}
          <div className="text-center">
            <p className="text-color-gray-dark">
              ¿Ya recuerdas tu contraseña?{" "}
              <button
                onClick={() => router.push(PUBLIC_ROUTES.LOGIN)}
                className="text-color-orange font-bold hover:underline"
              >
                Inicia Sesión
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
