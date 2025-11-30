import React from "react";
import { BusquedaVuelos}  from "../components/BusquedaVuelos";
import {Ciudades} from "../components/Ciudades";
import logoPrincipal from "../assets/travel.png" /**al parecer en react, para poder llamar imagenes, si es de la carpeta assets y no es publica deben de importar el archivo si no, no lo encuentra */

export function MenuPage() {
  return (
    <div>
      <div className="fixed top-0 right-0 left-0">
        <nav className="flex items-center mt-5 mx-10">
          <div className="">
            <img src={logoPrincipal} width="40" height="40"/>
          </div>
          <ul className="flex gap-5 w-full  text-violet-950 font-normal">
            <li className="hover:text-violet-700 ml-20">Reservar</li>
            <li className="hover:text-violet-700">Informacion de Reserva</li>
            <li className="hover:text-violet-700">Estatus de Vuelos</li>

            <li className="mr-auto hover:text-violet-700 ">Idioma</li>
            <li className="hover:text-violet-700 ">Estatus de Vuelo</li>
            <li className="hover:text-violet-700">Busqueda</li>
            <li className="hover:text-violet-700">Perfil</li>
          </ul>
        </nav>
      </div>
      <BusquedaVuelos />
      
    </div>
  );
}

