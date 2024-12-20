"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/app/shared/header/header";

export const ManagementUser = () => {
  const router = useRouter();

  // Datos de ejemplo para los usuarios
  const usuarios = [
    { id: 1, nombre: "Juan Pérez", perfil: "Profesional", correo: "juan@example.com" },
    { id: 2, nombre: "Ana Gómez", perfil: "Funcionario", correo: "ana@example.com" },
    { id: 3, nombre: "Carlos López", perfil: "Profesional", correo: "carlos@example.com" },
  ];

  const [filtroPerfil, setFiltroPerfil] = useState("Todos");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    tipoDocumento: "",
    numeroDocumento: "",
    correo: "",
    rol: "Funcionario",
    celular: "",
  });

  // Filtrar usuarios por perfil seleccionado
  const usuariosFiltrados = filtroPerfil === "Todos"
    ? usuarios
    : usuarios.filter((usuario) => usuario.perfil === filtroPerfil);

  const editarUsuario = (id: number) => {
    console.log(`Editar usuario con ID: ${id}`);
    router.push(`/admin/users/edit/${id}`);
  };

  const eliminarUsuario = (id: number) => {
    console.log(`Eliminar usuario con ID: ${id}`);
    alert(`Usuario con ID ${id} eliminado`);
  };

  const agregarUsuario = () => {
    setIsModalOpen(true);
  };

  const cerrarModal = () => {
    setIsModalOpen(false);
    setNuevoUsuario({
      nombre: "",
      tipoDocumento: "",
      numeroDocumento: "",
      correo: "",
      rol: "",
      celular: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNuevoUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const guardarUsuario = () => {
    console.log("Usuario agregado:", nuevoUsuario);
    cerrarModal();
  };

  return (
    <div className="min-h-screen bg-color-white">
      {/* Encabezado */}
      <Header />

      {/* Contenido principal */}
      <main className="p-6 flex flex-col items-center">
        <h1 className="text-color-black text-2xl font-bold mb-6 text-center">
          GESTIÓN DE USUARIOS PLATAFORMA
        </h1>

        {/* Contenedor para filtro y tabla */}
        <div className="w-full max-w-[90%] lg:max-w-[70%] mb-12">
          {/* Selector de filtro */}
          <div className="flex items-center mb-6">
            <label htmlFor="filtro" className="text-color-black font-bold mr-6">
              Filtrar por perfil:
            </label>
            <select
              id="filtro"
              value={filtroPerfil}
              onChange={(e) => setFiltroPerfil(e.target.value)}
              className="p-2 border border-color-gray-dark rounded text-color-black outline-none"
            >
              <option value="Todos">Todos</option>
              <option value="Profesional">Profesional</option>
              <option value="Funcionario">Funcionario</option>
            </select>
          </div>

          {/* Tabla de usuarios */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-color-white rounded-lg shadow-md border border-color-gray-light">
              <thead className="bg-color-yellow text-color-black">
                <tr>
                  <th className="py-3 px-6 text-left">NOMBRE</th>
                  <th className="py-3 px-6 text-left">CORREO</th>
                  <th className="py-3 px-6 text-center">PERFIL</th>
                  <th className="py-3 px-6 text-center">ACCIÓN</th>
                </tr>
              </thead>
              <tbody>
                {usuariosFiltrados.map((usuario) => (
                  <tr
                    key={usuario.id}
                    className="border-b border-color-gray-light hover:bg-color-gray-light transition"
                  >
                    <td className="py-3 px-6 text-color-black">{usuario.nombre}</td>
                    <td className="py-3 px-6 text-color-black">{usuario.correo}</td>
                    <td className="py-3 px-6 text-center text-color-black">{usuario.perfil}</td>
                    <td className="py-3 px-6 flex justify-center gap-4">
                      <button
                        onClick={() => editarUsuario(usuario.id)}
                        className="bg-color-blue-light text-color-black py-2 px-4 rounded font-bold hover:bg-cl-status-blue transition"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => eliminarUsuario(usuario.id)}
                        className="bg-color-red text-color-white py-2 px-4 rounded font-bold hover:bg-cl-status-red transition"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
                {/* Fila para el botón de agregar */}
                <tr>
                  <td colSpan={4} className="py-3 px-6 text-center">
                    <button
                      onClick={agregarUsuario}
                      className="bg-color-gray-dark text-color-white py-2 px-4 rounded font-bold hover:bg-color-yellow transition"
                    >
                      Agregar usuario
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal para agregar usuario */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-[500px]">
              <h2 className="text-color-black text-xl font-bold mb-4">Agregar Usuario</h2>
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
                    value={nuevoUsuario.nombre}
                    onChange={handleInputChange}
                    onInput={(e:any) => {
                      e.target.value = e.target.value.replace(/[0-9]/g, ""); // Elimina números del input
                    }}
                    placeholder="Nombre completo"
                    className="w-full p-2 border border-gray-300 rounded "
                    style={{color:"black"}}                    
                  />
                </div>
                {/* Tipo de Documento */}
                <div className="flex items-center gap-4">
                  <label className="text-color-black font-bold w-40" htmlFor="tipoDocumento">
                    Tipo de documento:
                  </label>
                  <select
                    id="tipoDocumento"
                    name="tipoDocumento"
                    value={nuevoUsuario.tipoDocumento}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded text-color-black"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="CC">Cédula de Ciudadanía (CC)</option>
                    <option value="CE">Cédula de Extranjería (CE)</option>
                    <option value="TI">Tarjeta de Identidad (TI)</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="NIT">NIT</option>
                  </select>
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
                    value={nuevoUsuario.numeroDocumento}
                    onChange={handleInputChange}
                    placeholder="Número de documento"
                    className="w-full p-2 border border-gray-300 rounded"
                    style={{color:"black"}}                    
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
                    value={nuevoUsuario.correo}
                    onChange={handleInputChange}
                    onBlur={(e) => {
                    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
                      if (!correoValido && e.target.value !== "") {
                        alert("Por favor, ingresa un correo válido.");
                      }
                    }}
                    placeholder="Correo"
                    className="w-full p-2 border border-gray-300 rounded"
                    style={{color:"black"}}                    
                  />
                </div>
                {/* Rol */}
                <div className="flex items-center gap-4">
                  <label className="text-color-black font-bold w-40" htmlFor="rol">
                    Rol:
                  </label>
                  <select
                    id="rol"
                    name="rol"
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded text-color-black"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="Funcionario">Funcionario</option>
                    <option value="Profesional">Profesional</option>
                  </select>
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
                    value={nuevoUsuario.celular}
                    onChange={handleInputChange}
                    onInput={(e:any) => {
                      e.target.value = e.target.value.replace(/\D/g, ""); // Elimina caracteres no numéricos
                    }}
                    placeholder="Celular"
                    className="w-full p-2 border border-gray-300 rounded"
                    style={{color:"black"}}                    
                  />
                </div>
              </div>

              {/* Botones de acción */}
              <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={cerrarModal}
                className="bg-gray-300 text-black py-2 px-4 rounded font-bold"
              >
                Cancelar
              </button>
              <button
                onClick={guardarUsuario}
                className="bg-color-orange text-white py-2 px-4 rounded font-bold hover:bg-color-yellow"
              >
                Guardar
              </button>
            </div>

            </div>
          </div>
        )}


        {/* Botón de volver */}
        <button
          onClick={() => router.back()}
          className="mt-9 bg-color-orange text-color-white py-2 px-6 rounded font-bold hover:bg-color-yellow transition"
        >
          Volver
        </button>
      </main>
    </div>
  );
};
