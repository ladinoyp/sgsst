"use client";

import { Header } from "@/app/shared/header/header";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export const ManagementList = () => {
  const [activeTab, setActiveTab] = useState("componentes");

  const renderContent = () => {
    switch (activeTab) {
      case "componentes":
        return <Componentes />;
      case "estrategias":
        return <Estrategias />;
      case "entregables":
        return <Entregables />;
      case "clientes":
        return <Clientes />;
      default:
        return <Componentes />;
    }
  };

  return (
    <div className="min-h-screen bg-color-gray-light p-5">
      {/* Encabezado */}
      <Header />

      <h1 className="text-center text-color-black text-2xl font-bold mb-4">
        Gestión de Tablas
      </h1>

      <div className="flex justify-center flex-wrap gap-4 mb-6">
        {[
          { label: "COMPONENTES", key: "componentes" },
          { label: "ESTRATEGIAS", key: "estrategias" },
          { label: "ENTREGABLES", key: "entregables" },
          { label: "CLIENTES", key: "clientes" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`py-2 px-4 rounded font-bold border-none cursor-pointer ${
              activeTab === tab.key ? "bg-color-yellow text-color-black" : "bg-color-gray-dark text-color-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">{renderContent()}</div>
    </div>
  );
};

const Componentes = () => {
  const [componentes, setComponentes] = useState([
    { id: 1, componente: "APLICABILIDAD DEL SG DE SST" },
    { id: 2, componente: "COMPROMISO GERENCIA Y RENDICIÓN DE CUENTAS" },
  ]);

  const agregarComponente = () => {
    const nuevoId = componentes.length + 1;
    setComponentes([...componentes, { id: nuevoId, componente: `Componente ${nuevoId}` }]);
  };

  const eliminarComponente = (id: any) => {
    setComponentes(componentes.filter((comp) => comp.id !== id));
  };

  return (
    <div className="overflow-x-auto w-4/5 mx-auto">
      {/* Encabezado */}
      <h2 className="text-color-black text-xl font-bold mb-4 text-left">Componentes</h2>

      {/* Tabla */}
      <table className="w-full border-collapse mb-5">
        <thead>
          <tr className="bg-color-yellow text-color-black">
            <th className="py-2 border border-gray-300">ID</th>
            <th className="py-2 border border-gray-300">COMPONENTE</th>
            <th className="py-2 border border-gray-300">Acción</th>
          </tr>
        </thead>
        <tbody>
          {componentes.map((comp) => (
            <tr key={comp.id} className="border-b border-gray-300">
              <td className="py-2 text-center text-color-black">{comp.id}</td>
              <td className="py-2 text-color-black">{comp.componente}</td>
              <td className="py-2 text-center">
                <button
                  onClick={() => eliminarComponente(comp.id)}
                  className="py-1 px-2 bg-color-red text-color-white rounded flex items-center justify-center"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
          {/* Botón Agregar Componente al final de la tabla */}
          <tr>
            <td colSpan="3" className="py-4 text-center">
              <button
                onClick={agregarComponente}
                className="py-2 px-4 bg-color-gray-dark text-color-white rounded font-bold"
              >
                Agregar Componente
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


/* const Estrategias = () => (
  <div className="overflow-x-auto">
    <h2 className="text-color-black text-xl font-bold">Estrategias</h2>
    <p className="text-color-black">Aquí puedes gestionar estrategias.</p>
  </div>
); */

const Estrategias = () => {
  const [estrategias, setEstrategias] = useState([
    { id: 1, estrategia: "Actividades de Medicina Preventiva y del Trabajo de acuerdo a las recomendaciones y resultados del DX de Condiciones de Salud" },
    { id: 2, estrategia: "Actualización sociodemográfico de la población trabajadora" },
  ]);

  const agregarEstrategias = () => {
    const nuevoId = estrategias.length + 1;
    setEstrategias([...estrategias, { id: nuevoId, estrategia: `Estrategia ${nuevoId}` }]);
  };

  const eliminarEstrategias = (id: any) => {
    setEstrategias(estrategias.filter((comp) => comp.id !== id));
  };

  return (
    <div className="overflow-x-auto w-4/5 mx-auto">
      {/* Encabezado */}
      <h2 className="text-color-black text-xl font-bold mb-4 text-left">Estrategias</h2>

      {/* Tabla */}
      <table className="w-full border-collapse mb-5">
        <thead>
          <tr className="bg-color-yellow text-color-black">
            <th className="py-2 border border-gray-300">ID</th>
            <th className="py-2 border border-gray-300">ESTRATEGIA DE INTERVENCIÓN</th>
            <th className="py-2 border border-gray-300">Acción</th>
          </tr>
        </thead>
        <tbody>
          {estrategias.map((comp) => (
            <tr key={comp.id} className="border-b border-gray-300">
              <td className="py-2 text-center text-color-black">{comp.id}</td>
              <td className="py-2 text-color-black">{comp.estrategia}</td>
              <td className="py-2 text-center">
                <button
                  onClick={() => eliminarEstrategias(comp.id)}
                  className="py-1 px-2 bg-color-red text-color-white rounded flex items-center justify-center"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
          {/* Botón Agregar Estrategias al final de la tabla */}
          <tr>
            <td colSpan="3" className="py-4 text-center">
              <button
                onClick={agregarEstrategias}
                className="py-2 px-4 bg-color-gray-dark text-color-white rounded font-bold"
              >
                Agregar estrategia
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

/* const Entregables = () => (
  <div className="overflow-x-auto">
    <h2 className="text-color-black text-xl font-bold">Entregables</h2>
    <p className="text-color-black">Aquí puedes gestionar entregables.</p>
  </div>
); */
const Entregables = () => {
  const [entregables, setEntregables] = useState([
    { id: 1, componente: "Acta de Conformación de Brigada de Emergencias Hojas de Vida de Brigadistas, asignación distintivo" },
    { id: 2, componente: "Acta de reunión, presentación, correo" },
  ]);

  const agregarComponente = () => {
    const nuevoId = entregables.length + 1;
    setEntregables([...entregables, { id: nuevoId, componente: `Entregable ${nuevoId}` }]);
  };

  const eliminarEntregable = (id: any) => {
    setEntregables(entregables.filter((comp) => comp.id !== id));
  };

  return (
    <div className="overflow-x-auto w-4/5 mx-auto">
      {/* Encabezado */}
      <h2 className="text-color-black text-xl font-bold mb-4 text-left">Entregables</h2>

      {/* Tabla */}
      <table className="w-full border-collapse mb-5">
        <thead>
          <tr className="bg-color-yellow text-color-black">
            <th className="py-2 border border-gray-300">ID</th>
            <th className="py-2 border border-gray-300">SALIDA - ENTREGABLE</th>
            <th className="py-2 border border-gray-300">Acción</th>
          </tr>
        </thead>
        <tbody>
          {entregables.map((comp) => (
            <tr key={comp.id} className="border-b border-gray-300">
              <td className="py-2 text-center text-color-black">{comp.id}</td>
              <td className="py-2 text-color-black">{comp.componente}</td>
              <td className="py-2 text-center">
                <button
                  onClick={() => eliminarEntregable(comp.id)}
                  className="py-1 px-2 bg-color-red text-color-white rounded flex items-center justify-center"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
          {/* Botón Agregar Entregables al final de la tabla */}
          <tr>
            <td colSpan="3" className="py-4 text-center">
              <button
                onClick={agregarComponente}
                className="py-2 px-4 bg-color-gray-dark text-color-white rounded font-bold"
              >
                Agregar entregable
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

/* const Clientes = () => (
  <div className="overflow-x-auto">
    <h2 className="text-color-black text-xl font-bold">Clientes</h2>
    <p className="text-color-black">Aquí puedes gestionar clientes.</p>
  </div>
); */
const Clientes = () => {
  const [clientes, setClientes] = useState([
    { id: 1, nit: "800123456", componente: "INDUCCIONES ORDUZ SAS", contacto: "Carlos Orduz" },
    { id: 2, nit: "900654321", componente: "J&P VILLAMIZAR", contacto: "Juan Villamizar" },
  ]);

  const agregarComponente = () => {
    const nuevoId = clientes.length + 1;
    setClientes([
      ...clientes,
      { id: nuevoId, nit: `NIT${nuevoId}`, componente: `Cliente ${nuevoId}`, contacto: `Persona ${nuevoId}` },
    ]);
  };

  const eliminarCliente = (id: any) => {
    setClientes(clientes.filter((comp) => comp.id !== id));
  };

  return (
    <div className="overflow-x-auto w-4/5 mx-auto">
      {/* Encabezado */}
      <h2 className="text-color-black text-xl font-bold mb-4 text-left">Clientes</h2>

      {/* Tabla */}
      <table className="w-full border-collapse mb-5">
        <thead>
          <tr className="bg-color-yellow text-color-black">
            <th className="py-2 border border-gray-300">ID</th>
            <th className="py-2 border border-gray-300">NIT</th>
            <th className="py-2 border border-gray-300">NOMBRE CLIENTE</th>
            <th className="py-2 border border-gray-300">PERSONA CONTACTO</th>
            <th className="py-2 border border-gray-300">ACCIÓN</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((comp) => (
            <tr key={comp.id} className="border-b border-gray-300">
              <td className="py-2 text-center text-color-black">{comp.id}</td>
              <td className="py-2 text-color-black">{comp.nit}</td>
              <td className="py-2 text-color-black">{comp.componente}</td>
              <td className="py-2 text-color-black">{comp.contacto}</td>
              <td className="py-2 text-center">
                <button
                  onClick={() => eliminarCliente(comp.id)}
                  className="py-1 px-2 bg-color-red text-color-white rounded flex items-center justify-center"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
          {/* Botón Agregar Cliente al final de la tabla */}
          <tr>
            <td colSpan="5" className="py-4 text-center">
              <button
                onClick={agregarComponente}
                className="py-2 px-4 bg-color-gray-dark text-color-white rounded font-bold"
              >
                Agregar cliente
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
