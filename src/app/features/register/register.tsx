"use client";

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import acriesgosImage from "@/app/assets/images/aycok.png";

type FormInputs = {
  name: string;
  email: string;
  document: string;
  phone: string;
  birthDate: string;
};

export default function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Datos del formulario:", data);
    // Aquí podrías enviar los datos a tu backend o API
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-color-white p-6">
      <div className="flex flex-col items-center rounded-lg shadow-md max-w-md w-full">
        {/* Contenedor de encabezado con fondo gris oscuro */}
        <div className="w-full bg-color-gray-dark py-1 flex flex-col items-center rounded-t-lg">
          <Image
            src={acriesgosImage}
            alt="Logo"
            width={150}
            height={150}
            className="mb-4 rounded-lg"
          />
        </div>

        {/* Contenido del formulario con fondo blanco */}
        <div className="bg-color-gray-light w-full p-6 rounded-b-lg">            
          <h2 className="text-color-black text-center font-bold text-xl mb-2">
            Registro de usuario
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-color-gray-dark font-medium mb-2">
                Nombre Completo
              </label>
              <input
                id="name"
                type="text"
                placeholder="Ingresa tu nombre completo"
                {...register("name", { required: "El nombre es obligatorio" })}
                className="w-full p-3 rounded-md border border-gray-300 bg-color-white text-color-gray-dark focus:outline-none focus:ring-2 focus:ring-color-orange"
              />
              {errors.name && (
                <p className="text-color-orange text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Correo */}
            <div>
              <label htmlFor="email" className="block text-color-gray-dark font-medium mb-2">
                Correo Electrónico
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
                <p className="text-color-orange text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Documento */}
            <div>
              <label htmlFor="document" className="block text-color-gray-dark font-medium mb-2">
                Documento de Identidad
              </label>
              <input
                id="document"
                type="text"
                placeholder="Ingresa tu número de documento"
                {...register("document", { required: "El documento es obligatorio" })}
                className="w-full p-3 rounded-md border border-gray-300 bg-color-white text-color-gray-dark focus:outline-none focus:ring-2 focus:ring-color-orange"
              />
              {errors.document && (
                <p className="text-color-orange text-sm mt-1">{errors.document.message}</p>
              )}
            </div>

            {/* Número de Celular */}
            <div>
              <label htmlFor="phone" className="block text-color-gray-dark font-medium mb-2">
                Número de Celular
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Ingresa tu número de celular"
                {...register("phone", {
                  required: "El número de celular es obligatorio",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "El número debe tener 10 dígitos",
                  },
                })}
                className="w-full p-3 rounded-md border border-gray-300 bg-color-white text-color-gray-dark focus:outline-none focus:ring-2 focus:ring-color-orange"
              />
              {errors.phone && (
                <p className="text-color-orange text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Fecha de Nacimiento */}
            <div>
              <label htmlFor="birthDate" className="block text-color-gray-dark font-medium mb-2">
                Fecha de Nacimiento
              </label>
              <input
                id="birthDate"
                type="date"
                {...register("birthDate", { required: "La fecha de nacimiento es obligatoria" })}
                className="w-full p-3 rounded-md border border-gray-300 bg-color-white text-color-gray-dark focus:outline-none focus:ring-2 focus:ring-color-orange"
              />
              {errors.birthDate && (
                <p className="text-color-orange text-sm mt-1">{errors.birthDate.message}</p>
              )}
            </div>

            {/* Botón de Registro */}
            <button
              type="submit"
              className="w-full py-3 bg-color-orange text-color-white rounded-md font-bold hover:bg-orange-600 transition"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
