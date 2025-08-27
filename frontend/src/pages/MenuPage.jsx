import React from "react";
import { BusquedaVuelos}  from "../components/BusquedaVuelos";

export function MenuPage() {
  return (
    <div>
      <div className="fixed top-0 right-0 left-0 border-2 border-stone-300 ">
        <nav className="mx-10 mt-10 ">
          <ul className="flex gap-10 justify-evenly text-lime-500 font-normal">
            <li className="hover:text-lime-800">Reservar</li>
            <li className="hover:text-lime-800">Informacion de Reserva</li>
            <li className="hover:text-lime-800">Estatus de Vuelos</li>
            <li className="hover:text-lime-800">Idioma</li>
          </ul>
        </nav>
      </div>
      <BusquedaVuelos />
    </div>
  );
}

