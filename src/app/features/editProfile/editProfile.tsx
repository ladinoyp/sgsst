"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/app/shared/header/header";

export const EditProfile = () => {
  const router = useRouter();

  // Datos iniciales del usuario
  const [usuario, setUsuario] = useState({
    nombre: "Juan Pérez",
    tipoDocumento: "Cédula de Ciudadanía",
    numeroDocumento: "123456789",
    correo: "juan.perez@example.com",
    perfil: "Funcionario",
    celular: "3214567890",
    empresa: "Example Corp",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Manejar cambios en los campos editables
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({ ...prev, [name]: value }));
  };

  // Activar/desactivar modo de edición
  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  // Guardar cambios del perfil
  const saveChanges = () => {
    console.log("Perfil actualizado:", usuario);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-color-white">
      <Header />

      <main className="p-6 flex flex-col items-center">
        <h1 className="text-color-black text-2xl font-bold mb-6 text-center">
          EDITAR PERFIL DE USUARIO
        </h1>

        <div className="w-full max-w-[90%] lg:max-w-[70%] mb-12">
          <div className="space-y-4">
            {/* Nombre */}
            <div className="flex items-center gap-4">
              <label className="text-color-black font-bold w-40" htmlFor="nombre">
                Nombre:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={usuario.nombre}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className={`w-full p-2 border border-gray-300 rounded ${
                  !isEditing ? "bg-gray-100" : "bg-white"
                }`}
                style={{ color: "black" }}
              />
            </div>

            {/* Tipo de Documento */}
            <div className="flex items-center gap-4">
              <label className="text-color-black font-bold w-40" htmlFor="tipoDocumento">
                Tipo de Documento:
              </label>
              <input
                type="text"
                id="tipoDocumento"
                name="tipoDocumento"
                value={usuario.tipoDocumento}
                readOnly
                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                style={{ color: "black" }}
              />
            </div>

            {/* Número de Documento */}
            <div className="flex items-center gap-4">
              <label className="text-color-black font-bold w-40" htmlFor="numeroDocumento">
                Número de Documento:
              </label>
              <input
                type="text"
                id="numeroDocumento"
                name="numeroDocumento"
                value={usuario.numeroDocumento}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className={`w-full p-2 border border-gray-300 rounded ${
                  !isEditing ? "bg-gray-100" : "bg-white"
                }`}
                style={{ color: "black" }}
              />
            </div>

            {/* Correo */}
            <div className="flex items-center gap-4">
              <label className="text-color-black font-bold w-40" htmlFor="correo">
                Correo:
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={usuario.correo}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className={`w-full p-2 border border-gray-300 rounded ${
                  !isEditing ? "bg-gray-100" : "bg-white"
                }`}
                style={{ color: "black" }}
              />
            </div>

            {/* Perfil */}
            <div className="flex items-center gap-4">
              <label className="text-color-black font-bold w-40" htmlFor="perfil">
                Perfil:
              </label>
              <input
                type="text"
                id="perfil"
                name="perfil"
                value={usuario.perfil}
                readOnly
                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                style={{ color: "black" }}
              />
            </div>

            {/* Celular */}
            <div className="flex items-center gap-4">
              <label className="text-color-black font-bold w-40" htmlFor="celular">
                Celular:
              </label>
              <input
                type="text"
                id="celular"
                name="celular"
                value={usuario.celular}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className={`w-full p-2 border border-gray-300 rounded ${
                  !isEditing ? "bg-gray-100" : "bg-white"
                }`}
                style={{ color: "black" }}
              />
            </div>

            {/* Empresa */}
            <div className="flex items-center gap-4">
              <label className="text-color-black font-bold w-40" htmlFor="empresa">
                Empresa:
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={usuario.empresa}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className={`w-full p-2 border border-gray-300 rounded ${
                  !isEditing ? "bg-gray-100" : "bg-white"
                }`}
                style={{ color: "black" }}
              />
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={() => router.back()}
              className="bg-color-gray-dark text-color-white py-2 px-4 rounded font-bold hover:bg-color-yellow transition"
            >
              Volver
            </button>

            {isEditing ? (
              <button
                onClick={saveChanges}
                className="bg-color-blue text-color-white py-2 px-4 rounded font-bold hover:bg-cl-status-blue transition"
              >
                Guardar
              </button>
            ) : (
              <button
                onClick={toggleEdit}
                className="bg-color-orange text-color-white py-2 px-4 rounded font-bold hover:bg-color-yellow transition"
              >
                Editar
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
