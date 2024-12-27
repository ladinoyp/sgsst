import { ModalChildrenTypes } from "./modalChildren.types";

export const ModalChildren = (props: ModalChildrenTypes) => {
  return (
    props.open && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-color-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
          <h2 className="text-color-black text-xl font-bold mb-4 text-center">
            {props.title}
          </h2>
          <p className="text-color-black mb-6 text-center">{props.title2}</p>
          <div className="mb-8">{/* Espacio extra antes de los botones */}
            {props.children}
          </div>
          <div className="flex justify-center gap-4 mt-4">{/* Añade un margen superior */}
            <button
              onClick={props.close}
              className="py-2 px-4 bg-color-gray-dark text-color-white rounded font-bold hover:bg-color-yellow transition"
            >
              Cancelar
            </button>
            <button
              onClick={props.save}
              className="py-2 px-4 bg-color-blue-light text-color-black rounded font-bold hover:bg-color-yellow transition"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    )
  );
};
