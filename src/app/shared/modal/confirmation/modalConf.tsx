import { ModalConf as ModalConfInterface } from "./modalConf.types"

export const ModalConf=(props:ModalConfInterface)=>{
  
  return(
      props.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-color-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
            <h2 className="text-color-black text-xl font-bold mb-4 text-center">
              {props.title}
            </h2>
            <p className="text-color-black mb-6 text-center">
              {props.title2}
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={props.close}
                className="py-2 px-4 bg-color-gray-dark text-color-white rounded font-bold hover:bg-color-yellow transition"
              >
                Cancelar
              </button>
              <button
                onClick={props.delete}
                className="py-2 px-4 bg-color-blue-light text-color-black rounded font-bold hover:bg-color-yellow transition"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      ))
  
}