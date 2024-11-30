"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

import acriesgosImage from "@/app/assets/images/aycok.png";
import { PUBLIC_ROUTES } from "@/app/constants/routes";

// Definimos los tipos de los datos del formulario
type LoginFormInputs = {
  username: string;
  password: string;
};

export const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log("Datos del formulario:", data);
    router.push("/pages/home"); // Redirige a la página home
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-color-white p-6">
      <div className="flex flex-col items-center rounded-lg shadow-md max-w-md w-full">
        {/* Contenedor completo con fondo gris oscuro */}
        <div className="w-full bg-color-gray-dark py-1 flex flex-col items-center rounded-t-lg">
          <Image
            src={acriesgosImage}
            alt="Login"
            width={150}
            height={150}
            className="mb-4 rounded-lg"
          />
        </div>

        {/* Contenido del formulario con fondo blanco */}
        <div className="bg-color-gray-light w-full p-8 rounded-b-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-color-gray-dark font-medium mb-2"
              >
                Usuario
              </label>
              <input
                id="username"
                type="text"
                placeholder="Ingresa tu usuario"
                {...register("username", {
                  required: "El usuario es obligatorio",
                  minLength: {
                    value: 3,
                    message: "Debe tener al menos 3 caracteres",
                  },
                })}
                className="w-full p-3 rounded-md border border-gray-300 bg-color-white text-color-gray-dark focus:outline-none focus:ring-2 focus:ring-color-orange"
              />
              {errors.username && (
                <p className="text-color-orange text-sm mt-2">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-color-gray-dark font-medium mb-2"
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 6,
                    message: "Debe tener al menos 6 caracteres",
                  },
                })}
                className="w-full p-3 rounded-md border border-gray-300 bg-color-white text-color-gray-dark focus:outline-none focus:ring-2 focus:ring-color-orange"
              />
              {errors.password && (
                <p className="text-color-orange text-sm mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-color-orange text-color-white rounded-md font-bold hover:bg-orange-600 transition"
            >
              Iniciar Sesión
            </button>
          </form>

          {/* Link para registrarse */}
          <div className="mt-8 text-center">
            <p className="text-color-gray-dark">
              ¿No tienes una cuenta?{" "}
              <button
                onClick={() => router.push(PUBLIC_ROUTES.REGISTER)}
                className="text-color-orange font-bold hover:underline"
              >
                Regístrate
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
