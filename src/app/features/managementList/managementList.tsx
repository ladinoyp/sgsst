"use client";

import { Header } from "@/app/shared/header/header";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ModalConf } from "@/app/shared/modal/confirmation/modalConf";
import { ModalChildren } from "@/app/shared/modal/modalChildren/modalChildren";

export const ManagementList = () => {
  const [activeTab, setActiveTab] = useState("componentes");
  const router = useRouter();

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

      <div className="overflow-x-auto mb-6">{renderContent()}</div>

      {/* Botón de volver */}
      <div className="flex justify-center">
        <button
          onClick={() => router.back()}
          className="mt-6 bg-color-orange text-color-white py-2 px-6 rounded font-bold hover:bg-color-yellow transition"
        >
          Volver
        </button>
      </div>
    </div>
  );
};

const Componentes = () => {
  
  const [idDeleteComp, setidDeleteComp] = useState<number|null>(null)
  const [nameComponente, setnameComponente] = useState("")

  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [openModalAdd, setOpenModalAdd] = useState(false)

  const [componentes, setComponentes] = useState([
    { id: 1, componente: "APLICABILIDAD DEL SG DE SST" },
    { id: 2, componente: "COMPROMISO GERENCIA Y RENDICIÓN DE CUENTAS" },
  ]);

  const agregarComponente = () => {
    const nuevoId = componentes.length + 1;
    setComponentes([...componentes, { id: nuevoId, componente: nameComponente }]);
    setOpenModalAdd(false)
    setnameComponente('')
  };

  const eliminarComponente = (id: any) => {
    setComponentes(componentes.filter((comp) => comp.id !== id));
    setOpenModalDelete(false)
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
            <th className="py-2 border border-gray-300">ACCIÓN</th>
          </tr>
        </thead>
        <tbody>
          {componentes.map((comp) => (
            <tr key={comp.id} className="border-b border-gray-300">
              <td className="py-2 text-center text-color-black">{comp.id}</td>
              <td className="py-2 text-color-black">{comp.componente}</td>
              <td className="py-2 text-center">
                <button
                  onClick={() => {
                    setOpenModalDelete(true)
                    setidDeleteComp(comp.id)
                  }}
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
                onClick={() => 
                  setOpenModalAdd(true)
                }
                className="py-2 px-4 bg-color-gray-dark text-color-white rounded font-bold hover:bg-color-yellow transition"
              >
                Agregar componente
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      
      <ModalConf open={openModalDelete} title="Confirmación" title2="¿Está seguro de que desea eliminar este componente?" 
                 close={()=>setOpenModalDelete(false)} delete={()=>eliminarComponente(idDeleteComp)}/>

      <ModalChildren open={openModalAdd} title="Agregar componente" title2="" 
                 close={()=>setOpenModalAdd(false)} save={agregarComponente} >
          <div className="flex items-center gap-4">
            <label className="text-color-black font-bold w-40" htmlFor="nombre">
              Componente:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nameComponente}
              onChange={(e)=>setnameComponente(e.target.value)}
              placeholder="Nombre completo"
              className="w-full p-2 border border-gray-300 rounded "
              style={{color:"black"}}                    
            />
          </div>
      </ModalChildren>
    </div>
  );
};

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
    if (confirm("¿Está seguro de que desea eliminar esta estrategia?")) {
      setEstrategias(estrategias.filter((comp) => comp.id !== id));
    }
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
            <th className="py-2 border border-gray-300">ACCIÓN</th>
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
                className="py-2 px-4 bg-color-gray-dark text-color-white rounded font-bold hover:bg-color-yellow transition"
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

const Entregables = () => {
  const [entregables, setEntregables] = useState([
    { id: 1, entregable: "Acta de Conformación de Brigada de Emergencias Hojas de Vida de Brigadistas, asignación distintivo" },
    { id: 2, entregable: "Acta de reunión, presentación, correo" },
  ]);

  const agregarEntregable = () => {
    const nuevoId = entregables.length + 1;
    setEntregables([...entregables, { id: nuevoId, entregable: `Entregable ${nuevoId}` }]);
  };

  const eliminarEntregable = (id: any) => {
    if (confirm("¿Está seguro de que desea eliminar este entregable?")) {
      setEntregables(entregables.filter((comp) => comp.id !== id));
    }
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
            <th className="py-2 border border-gray-300">ACCIÓN</th>
          </tr>
        </thead>
        <tbody>
          {entregables.map((comp) => (
            <tr key={comp.id} className="border-b border-gray-300">
              <td className="py-2 text-center text-color-black">{comp.id}</td>
              <td className="py-2 text-color-black">{comp.entregable}</td>
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
                onClick={agregarEntregable}
                className="py-2 px-4 bg-color-gray-dark text-color-white rounded font-bold hover:bg-color-yellow transition"
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

const Clientes = () => {
  
  const [idDeleteCli, setidDeleteCli] = useState<number|null>(null)
  const [nitClient, setNitClient] = useState("")
  const [nameClient, setnameClient] = useState("")
  const [statusClient, setStatusClient] = useState("Nuevo")
  const [personContact, setPersonContact] = useState("")
  const [cellClient, setCellClient] = useState("")

  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [openModalAdd, setOpenModalAdd] = useState(false)

  const [clientes, setClientes] = useState([
    { id: 1, nit: "800123456-1", cliente: "INDUCCIONES ORDUZ SAS", estado:"Antiguo", contacto: "Carlos Orduz", celular:"3214556566" },
    { id: 2, nit: "900654321-1", cliente: "J&P VILLAMIZAR", estado:"Antiguo", contacto: "Juan Villamizar", celular:"3214321466" },
    { id: 3, nit: "45322333-1", cliente: "HASH INGENIERIA", estado:"Nuevo", contacto: "Luis Rojas", celular:"3214563322" },
    { id: 4, nit: "77233477-1", cliente: "MORALES ASOCIADOS", estado:"Antiguo", contacto: "Carlos Orduz", celular:"3214556566" },
    { id: 5, nit: "123103800-1", cliente: "SYSTEM S.A.S", estado:"Nuevo", contacto: "Felipe Gomez", celular:"3143221354" },
    { id: 6, nit: "10282822-1", cliente: "SIGUIFREDO LTDA", estado:"Antiguo", contacto: "Andrea Perez", celular:"3112900072" },
  ]);

  const agregarCliente = () => {
    const nuevoId = clientes.length + 1;
    setClientes([
      ...clientes,
      { id: nuevoId, nit: nitClient, cliente: nameClient, estado: statusClient, contacto: personContact,
         celular:cellClient },
    ]);
    setOpenModalAdd(false)
    setNitClient('')
    setnameClient('')
    setStatusClient('Nuevo')
    setPersonContact('')
    setCellClient('')
  };

  const eliminarCliente = (id: any) => {
    setClientes(clientes.filter((comp) => comp.id !== id));
    setOpenModalDelete(false)
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
            <th className="py-2 border border-gray-300">ESTADO</th>
            <th className="py-2 border border-gray-300">PERSONA CONTACTO</th>
            <th className="py-2 border border-gray-300">CELULAR</th>
            <th className="py-2 border border-gray-300">ACCIÓN</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map((comp) => (            
            <tr
              key={comp.id}
              className={`border-b border-gray-300 ${comp.estado === "Nuevo" ? "bg-color-red text-color-white" : ""}`}
            >
              <td className="py-2 text-center text-color-black">{comp.id}</td>
              <td className="py-2 text-color-black">{comp.nit}</td>
              <td className="py-2 text-color-black">{comp.cliente}</td>
              <td className="py-2 text-color-black">{comp.estado}</td>
              <td className="py-2 text-color-black">{comp.contacto}</td>
              <td className="py-2 text-color-black">{comp.celular}</td>
              <td className="py-2 text-center">
                <button
                  onClick={() => {
                    setOpenModalDelete(true)
                    setidDeleteCli(comp.id)
                  }}
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
                onClick={() => 
                  setOpenModalAdd(true)
                }
                className="py-2 px-4 bg-color-gray-dark text-color-white rounded font-bold hover:bg-color-yellow transition"
              >
                Agregar cliente
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      
      <ModalConf open={openModalDelete} title="Confirmación" title2="¿Está seguro de que desea eliminar este cliente?" 
                 close={()=>setOpenModalDelete(false)} delete={()=>eliminarCliente(idDeleteCli)}/>
      
      <ModalChildren open={openModalAdd} title="AREGAR CLIENTE" title2="" 
                 close={()=>setOpenModalAdd(false)} save={agregarCliente} >
          <div className="flex items-center gap-4">
            <label className="text-color-black font-bold w-40" htmlFor="NIT">
              NIT :
            </label>
            <input
              type="text"
              id="NIT"
              name="NIT"
              value={nitClient}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*-?\d*$/.test(value)) setNitClient(value); // Permite solo números y guion.
              }}
              placeholder="NIT"
              className="w-full p-2 border border-gray-300 rounded "
              style={{color:"black"}}                    
            />
          </div>

          <div className="flex items-center gap-4 mt-4">
            <label className="text-color-black font-bold w-40" htmlFor="cliente">
              Empresa:
            </label>
            <input
              type="text"
              id="cliente"
              name="cliente"
              value={nameClient}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[a-zA-Z\s]*$/.test(value)) setnameClient(value); // Solo letras y espacios.
              }}
              placeholder="Nombre cliente"
              className="w-full p-2 border border-gray-300 rounded "
              style={{color:"black"}}                    
            />
          </div>

          <div className="flex items-center gap-4 mt-4">
            <label className="text-color-black font-bold w-40" htmlFor="estado">
              Estado:
            </label>
            <select
              id="estado"
              name="estado"
              value={statusClient}
              onChange={(e) => setStatusClient(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded bg-color-white text-color-black"
              style={{color:"black"}}                    
            >
              <option value="Nuevo">Nuevo</option>
              <option value="Antiguo">Antiguo</option>
            </select>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <label className="text-color-black font-bold w-40" htmlFor="contacto">
              Contacto:
            </label>
            <input
              type="text"
              id="contacto"
              name="contacto"
              value={personContact}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[a-zA-Z\s]*$/.test(value)) setPersonContact(value); // Solo letras y espacios.
              }}
              placeholder="Nombre completo contacto"
              className="w-full p-2 border border-gray-300 rounded "
              style={{color:"black"}}                    
            />
          </div>

          <div className="flex items-center gap-4 mt-4">
            <label className="text-color-black font-bold w-40" htmlFor="cell">
              Celular:
            </label>
            <input
              type="text"
              id="cell"
              name="cell"
              value={cellClient}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value) && value.length <= 10) setCellClient(value); // Solo números y máximo 10 caracteres.
              }}
              placeholder="Número celular contacto"
              className="w-full p-2 border border-gray-300 rounded "
              style={{color:"black"}}                    
            />
          </div>
      </ModalChildren>
    </div>
  );
};
