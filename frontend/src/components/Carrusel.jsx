import React from "react";
import { useState } from "react";
import { ContenidoExtra } from "./ContenidoExtra"; 

export function Carrusel({ imagenes }) {
  const [imagenActual, setImagenActual] = useState(0);
const cantidad = imagenes.length;

  const adelante = () => {
    setImagenActual(imagenActual == cantidad - 1 ? 0 : imagenActual + 1 )
  }

  const atras = () => {
    setImagenActual(imagenActual == 0 ? cantidad - 1 : imagenActual - 1)
  }
  return (
    <div className="flex flex-col h-screen overflow-y-auto ">

       <div className="flex flex-row mt-20 w-full ">
        <div className="flex absolute z-20 bottom-100 left-110">
          <button className="text-white text-3xl" onClick={adelante}>←</button>
        </div>
      
      <div className=" flex-1 relative ">
        {imagenes.map((imagen, index) => {
        return (
          <div >
            {imagenActual == index && (
              <img key={index} src={imagen} alt="imagen" className="h-150 w-screen" />
            )}
          </div>
        );
      })}
      </div>
      
      <div className="flex absolute right-5 bottom-100">
        <button className="text-white text-3xl" onClick={atras}>→</button>
      </div>
        
     
      </div>
        <ContenidoExtra />
     </div>
  );
}
