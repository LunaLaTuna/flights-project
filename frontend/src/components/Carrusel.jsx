import { useState } from "react";

export function Carrusel({ imagenes }) {
    const [imagenActual, setImagenActual] = useState(0);
    
    const cantidad = imagenes?.length;

    const adelante = () => {
        setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1)
        
    }

    const atras = () => {
        setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1 )
    }


  return (
    <div className="flex mt-20">
        <div className="flex absolute z-20 bottom-70 left-110">
            <button onClick={atras} >🠄</button>
        </div>
      {imagenes.map((imagen, index) => {
        return (  
            <div className=""> 
                {imagenActual === index && (
                <img key={index} src={imagen} alt="imagen" className=" w-screen h-180 relative"/>
            )}

            </div>
            
        )
      })};

        <div className="flex absolute bottom-70 left-360">
            <button onClick={adelante}>🠆</button>
        </div>
    </div>
  );
}
