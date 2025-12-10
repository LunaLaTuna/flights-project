import React from "react";
import { BusquedaVuelos}  from "../components/BusquedaVuelos";
import {Ciudades} from "../components/Ciudades";
import logoPrincipal from "../assets/travel.png" /**al parecer en react, para poder llamar imagenes, si es de la carpeta assets y no es publica deben de importar el archivo si no, no lo encuentra */
import {Carrusel} from "../components/Carrusel";
import { MenuOfertas } from "../components/MenuOfertas";


export function MenuPage() {

  const imagenes = [
    'https://images.unsplash.com/photo-1573068057232-fa17a193d54d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1592985684811-6c0f98adb014?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]


  return (
    <div className="flex">
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

