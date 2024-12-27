"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/app/shared/header/header";
import { ModalChildren } from "@/app/shared/modal/modalChildren/modalChildren";
import { ModalConf } from "@/app/shared/modal/confirmation/modalConf";

export const ManagementUser = () => {
  const router = useRouter();

  // Datos iniciales de usuarios
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Juan Pérez", perfil: "Profesional", correo: "juan@example.com" },
    { id: 2, nombre: "Ana Gómez", perfil: "Funcionario", correo: "ana@example.com" },
    { id: 3, nombre: "Carlos López", perfil: "Profesional", correo: "carlos@example.com" },
  ]);

  const [filtroPerfil, setFiltroPerfil] = useState("Todos");
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [usuarioToDelete, setUsuarioToDelete] = useState<number | null>(null);

  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    tipoDocumento: "",
    numeroDocumento: "",
    correo: "",
    rol: "Funcionario",
    celular: "",
  });

  // Filtrar usuarios por perfil
  const usuariosFiltrados =
    filtroPerfil === "Todos"
      ? usuarios
      : usuarios.filter((usuario) => usuario.perfil === filtroPerfil);

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNuevoUsuario((prev) => ({ ...prev, [name]: value }));
  };

  // Abrir modal para agregar usuario
  const abrirModalAgregar = () => {
    setIsModalAddOpen(true);
  };

  // Cerrar modal y reiniciar campos
  const cerrarModalAgregar = () => {
    setIsModalAddOpen(false);
    setNuevoUsuario({
      nombre: "",
      tipoDocumento: "",
      numeroDocumento: "",
      correo: "",
      rol: "Funcionario",
      celular: "",
    });
  };

  // Guardar nuevo usuario
  const guardarUsuario = () => {
    const nuevoId = usuarios.length + 1;
    setUsuarios([...usuarios, { id: nuevoId, ...nuevoUsuario }]);
    cerrarModalAgregar();
  };

  // Abrir modal de confirmación para eliminar
  const abrirModalEliminar = (id: number) => {
    setUsuarioToDelete(id);
    setIsModalDeleteOpen(true);
  };

  // Eliminar usuario
  const eliminarUsuario = () => {
    setUsuarios(usuarios.filter((usuario) => usuario.id !== usuarioToDelete));
    setIsModalDeleteOpen(false);
    setUsuarioToDelete(null);
  };

  // Editar usuario
  const editarUsuario = (id: number) => {
    console.log(`Editar usuario con ID: ${id}`);
    router.push(`/admin/users/edit/${id}`);
  };

  return (
    <div className="min-h-screen bg-color-white">
      <Header />

      <main className="p-6 flex flex-col items-center">
        <h1 className="text-color-black text-2xl font-bold mb-6 text-center">
          GESTIÓN DE USUARIOS PLATAFORMA
        </h1>

        <div className="w-full max-w-[90%] lg:max-w-[70%] mb-12">
          {/* Filtro por perfil */}
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
                        onClick={() => abrirModalEliminar(usuario.id)}
                        className="bg-color-red text-color-white py-2 px-4 rounded font-bold hover:bg-cl-status-red transition"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={4} className="py-3 px-6 text-center">
                    <button
                      onClick={abrirModalAgregar}
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
        <ModalChildren
          open={isModalAddOpen}
          title="Agregar Usuario"
          close={cerrarModalAgregar}
          save={guardarUsuario}
        >
          <div className="space-y-4">
            {/* Campos del formulario */}
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
                placeholder="Nombre completo"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            {/* Otros campos */}
            {/* Repite esta estructura para cada campo del formulario */}
          </div>
        </ModalChildren>

        {/* Modal de confirmación para eliminar */}
        <ModalConf
          open={isModalDeleteOpen}
          title="Confirmación"
          title2="¿Está seguro de que desea eliminar este usuario?"
          close={() => setIsModalDeleteOpen(false)}
          delete={eliminarUsuario}
        />

        {/* Botón de volver */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => router.back()}
            className="bg-color-orange text-color-white py-2 px-6 rounded font-bold hover:bg-color-yellow transition"
          >
            Volver
          </button>
        </div>
      </main>
    </div>
  );
};
