"use client";

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import logo from "@/app/assets/images/aycok.png";
import Link from "next/link";
import { PUBLIC_ROUTES } from "@/app/constants/routes";

type FormInputs = {
  name: string;
  documentType: string;
  document: string;
  phone: string;
  role: string;
  company: string;
  email: string;
  password: string;
  confirmPassword: string;
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
        <div className="w-full bg-color-gray-dark py-1 flex flex-col items-center rounded-t-lg">
          <Image
            src={logo}
            alt="Logo"
            width={150}
            height={150}
            className="mb-4 rounded-lg"
          />
        </div>

        <div className="bg-color-gray-light w-full p-6 rounded-b-lg">            
          <h2 className="text-color-black text-center font-bold text-xl mb-2">
            Registro de usuario
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
            {/* Nombre completo */}
            <div>
              <label htmlFor="name" className="block text-color-gray-dark font-medium mb-2">
                Nombre completo
              </label>
              <input
                id="name"
                type="text"
                placeholder="Ingresa tu nombre completo"
                {...register("name", {
                  required: "El nombre es obligatorio",
                  pattern: {
                    value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                    message: "El nombre solo puede contener letras y espacios",
                  },
                })}
                className="w-full p-3 rounded-md border border-gray-300 bg-color-white text-color-gray-dark focus:outline-none focus:ring-2 focus:ring-color-orange"
              />
              {errors.name && (
                <p className="text-color-orange text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Tipo de documento */}
            <div>
              <label htmlFor="documentType" className="block text-color-gray-dark font-medium mb-2">
                Tipo de documento
              </label>
              <select
                id="documentType"
                {...register("documentType", { required: "El tipo de documento es obligatorio" })}
                className="w-full p-3 rounded-md border border-gray-300 bg-color-white text-color-gray-dark focus:outline-none focus:ring-2 focus:ring-color-orange"
              >
                <option value="">Selecciona una opción</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PAS">Pasaporte</option>
                <option value="NIT">NIT</option>
                <option value="PEP">PEP</option>
              </select>
              {errors.documentType && (
                <p className="text-color-orange text-sm mt-1">{errors.documentType.message}</p>
              )}
            </div>

            {/* Número de documento */}
            <div>
              <label htmlFor="document" className="block text-color-gray-dark font-medium mb-2">
                Número de documento
              </label>
              <input
                id="document"
                type="text"
                placeholder="Ingresa tu número de documento"
                {...register("document", {
                  required: "El número de documento es obligatorio",
                  pattern: {
                    value: /^[0-9-]+$/,
                    message: "El documento solo puede contener números y guiones",
                  },
                })}
                className="w-full p-3 rounded-md border border-gray-300 bg-color-white text-color-gray-dark focus:outline-none focus:ring-2 focus:ring-color-orange"
              />
              {errors.document && (
                <p className="text-color-orange text-sm mt-1">{errors.document.message}</p>
              )}
            </div>

            {/* Número de celular */}
            <div>
              <label htmlFor="phone" className="block text-color-gray-dark font-medium mb-2">
                Número de celular
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+57 3001234567"
                defaultValue="+57"
                {...register("phone", {
                  required: "El número de celular es obligatorio",
                  pattern: {
                    value: /^\+57[0-9]{10}$/,
                    message: "El número debe comenzar con +57 y tener 10 dígitos",
                  },
                })}
                className="w-full p-3 rounded-md border border-gray-300 bg-color-white text-color-gray-dark focus:outline-none focus:ring-2 focus:ring-color-orange"
              />
              {errors.phone && (
                <p className="text-color-orange text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Rol */}
            <div>
              <label htmlFor="role" className="block text-color-gray-dark font-medium mb-2">
                Rol
              </label>
              <select
                id="role"
                {...register("role", { required: "El rol es obligatorio" })}
                className="w-full p-3 rounded-md border border-gray-300 bg-color-white text-color-gray-dark focus:outline-none focus:ring-2 focus:ring-color-orange"
              >
                <option value="">Selecciona una opción</option>
                <option value="admin">Administrador</option>
                <option value="user">Usuario</option>
                <option value="guest">Invitado</option>
              </select>
              {errors.role && (
                <p className="text-color-orange text-sm mt-1">{errors.role.message}</p>
              )}
            </div>

            {/* Empresa */}
            <div>
              <label htmlFor="company" className="block text-color-gray-dark font-medium mb-2">
                Empresa
              </label>
              <select
                id="company"
                {...register("company", { required: "La empresa es obligatoria" })}
                className="w-full p-3 rounded-md border border-gray-300 bg-color-white text-color-gray-dark focus:outline-none focus:ring-2 focus:ring-color-orange"
              >
                <option value="">Selecciona una empresa</option>
                <option value="Empresa1">Empresa 1</option>
                <option value="Empresa2">Empresa 2</option>
                <option value="Empresa3">Empresa 3</option>
              </select>
              {errors.company && (
                <p className="text-color-orange text-sm mt-1">{errors.company.message}</p>
              )}
            </div>

            {/* Correo */}
            <div>
              <label htmlFor="email" className="block text-color-gray-dark font-medium mb-2">
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
                <p className="text-color-orange text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Contraseña */}
            <div>
              <label htmlFor="password" className="block text-color-gray-dark font-medium mb-2">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message: "La contraseña debe tener al menos 8 caracteres, incluyendo letras y números",
                  },
                })}
                className="w-full p-3 rounded-md border border-gray-300 bg-color-white text-color-gray-dark focus:outline-none focus:ring-2 focus:ring-color-orange"
              />
              {errors.password && (
                <p className="text-color-orange text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Confirmar contraseña */}
            <div>
              <label htmlFor="confirmPassword" className="block text-color-gray-dark font-medium mb-2">
                Confirmar contraseña
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirma tu contraseña"
                {...register("confirmPassword", {
                  required: "La confirmación de contraseña es obligatoria",
                  validate: (value) => value === watch("password") || "Las contraseñas no coinciden",
                })}
                className="w-full p-3 rounded-md border border-gray-300 bg-color-white text-color-gray-dark focus:outline-none focus:ring-2 focus:ring-color-orange"
              />
              {errors.confirmPassword && (
                <p className="text-color-orange text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Botón de Registro */}
            <button
              type="submit"
              className="w-full py-3 bg-color-orange text-color-white rounded-md font-bold hover:bg-color-yellow transition"
            >
              Registrarse
            </button>

            {/* Enlace para iniciar sesión */}
            <p className="mt-4 text-center text-color-gray-dark text-sm">
              ¿Ya tienes una cuenta?{" "}
              <Link href={PUBLIC_ROUTES.LOGIN} className="text-color-orange font-bold hover:underline">
                Inicia sesión
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
