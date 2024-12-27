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
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [usuarioToEdit, setUsuarioToEdit] = useState<{ 
    id: number;
    correo: string;
    nombre: string;
    tipoDocumento: string;
    numeroDocumento: string;
    rol: string;
    celular: number;
    empresa: string,
  } | null>(null);


  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    tipoDocumento: "",
    numeroDocumento: "",
    correo: "",
    rol: "Funcionario",
    celular: "",
    empresa: "",
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
      tipoDocumento: "Cédula de Ciudadanía",
      numeroDocumento: "",
      correo: "",
      rol: "Funcionario",
      celular: "",
      empresa: "",
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

  // Función para abrir el modal de edición
  const abrirModalEditar = (usuario: { id: number; correo: string }) => {
    setUsuarioToEdit(usuario);
    setIsModalEditOpen(true);
  };

  // Función para cerrar el modal de edición
  const cerrarModalEditar = () => {
    setIsModalEditOpen(false);
    setUsuarioToEdit(null);
  };

  // Función para guardar el cambio del correo
  const guardarEdicion = () => {
    if (usuarioToEdit) {
      setUsuarios((prev) =>
        prev.map((usuario) =>
          usuario.id === usuarioToEdit.id
            ? { ...usuario, correo: usuarioToEdit.correo }
            : usuario
        )
      );
    }
    cerrarModalEditar();
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
                        onClick={() => abrirModalEditar({ id: usuario.id, correo: usuario.correo })}
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
          title="AGREGAR USUARIO"
          title2="Usuario para administración de la plataforma"
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
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(value)) {
                    handleInputChange(e); // Aquí llamas tu método de manejo para actualizar el estado.
                  }
                }}
                placeholder="Nombre completo"
                className="w-full p-2 border border-gray-300 rounded"
                style={{color:"black"}}                    
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="text-color-black font-bold w-40" htmlFor="tipoDocumento">
                Tipo de Documento:
              </label>
              <select
                id="tipoDocumento"
                name="tipoDocumento"
                value={nuevoUsuario.tipoDocumento}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded bg-color-white text-color-black"
                style={{color:"black"}}                    
              >
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="CE">Cédula de Extranjería</option>
                <option value="NIT">NIT</option>
                <option value="Pasaporte">Pasaporte</option>
                <option value="PEP">Permiso Especial de Permanencia</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <label className="text-color-black font-bold w-40" htmlFor="numeroDocumento">
                Número de Documento:
              </label>
              <input
                type="text"
                id="numeroDocumento"
                name="numeroDocumento"
                value={nuevoUsuario.numeroDocumento}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^[\d-]*$/.test(value)) { // Solo permite números y guiones
                    handleInputChange(e); // Aquí llamas tu método de manejo para actualizar el estado.
                  }
                }}
                placeholder="Número de documento"
                className="w-full p-2 border border-gray-300 rounded"                
                style={{color:"black"}}                     
              />
            </div>
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
                placeholder="Correo electrónico"
                className="w-full p-2 border border-gray-300 rounded"
                style={{color:"black"}}                    
              />
            </div>


            <div className="flex items-center gap-4">
              <label className="text-color-black font-bold w-40" htmlFor="rol">
                Perfil:
              </label>
              <select
                id="rol"
                name="rol"
                value={nuevoUsuario.rol}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded bg-color-white text-color-black"
              >
                <option value="Funcionario">Funcionario</option>
                <option value="Profesional">Profesional</option>
              </select>
            </div>

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
                placeholder="Número de celular"
                className="w-full p-2 border border-gray-300 rounded"
                style={{color:"black"}}                                  
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="text-color-black font-bold w-40" htmlFor="empresa">
                Empresa:
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={nuevoUsuario.empresa}
                onChange={handleInputChange}
                placeholder="Empresa"
                className="w-full p-2 border border-gray-300 rounded"
                style={{color:"black"}}
              />
            </div>

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

        <ModalChildren
          open={isModalEditOpen}
          title="Editar Usuario"
          title2="Edita únicamente el correo del usuario"
          close={cerrarModalEditar}
          save={guardarEdicion}
        >
          {/* Nombre */}
          <div className="flex items-center gap-4">
            <label className="text-color-black font-bold w-40" htmlFor="nombre">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={usuarioToEdit?.nombre || ""}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              style={{ color: "black" }}
            />
          </div>

          {/* Tipo de Documento */}
          <div className="flex items-center gap-4 mt-4">
            <label className="text-color-black font-bold w-40" htmlFor="tipoDocumento">
              Tipo de Documento:
            </label>
            <input
              type="text"
              id="tipoDocumento"
              name="tipoDocumento"
              value={usuarioToEdit?.tipoDocumento || ""}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              style={{ color: "black" }}
            />
          </div>

          {/* Número de Documento */}
          <div className="flex items-center gap-4 mt-4">
            <label className="text-color-black font-bold w-40" htmlFor="numeroDocumento">
              Número de Documento:
            </label>
            <input
              type="text"
              id="numeroDocumento"
              name="numeroDocumento"
              value={usuarioToEdit?.numeroDocumento || ""}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              style={{ color: "black" }}
            />
          </div>

          {/* Correo */}
          <div className="flex items-center gap-4 mt-4">
            <label className="text-color-black font-bold w-40" htmlFor="correo">
              Correo:
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={usuarioToEdit?.correo || ""}
              onChange={(e) => {
                const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
                if (correoValido || e.target.value === "") {
                  setUsuarioToEdit((prev) => (prev ? { ...prev, correo: e.target.value } : prev));
                }
              }}
              placeholder="Correo electrónico"
              className="w-full p-2 border border-gray-300 rounded"
              style={{ color: "black" }}
            />
          </div>

          {/* Perfil */}
          <div className="flex items-center gap-4 mt-4">
            <label className="text-color-black font-bold w-40" htmlFor="perfil">
              Perfil:
            </label>
            <input
              type="text"
              id="perfil"
              name="perfil"
              value={usuarioToEdit?.rol || ""}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              style={{ color: "black" }}
            />
          </div>
        </ModalChildren>


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
