import React from "react";
import { BusquedaVuelos}  from "../components/BusquedaVuelos";
import {Ciudades} from "../components/Ciudades";
import logoPrincipal from "../assets/travel.png" /**al parecer en react, para poder llamar imagenes, si es de la carpeta assets y no es publica deben de importar el archivo si no, no lo encuentra */
import {Carrusel} from "../components/Carrusel";
export function MenuPage() {

  const imagenes = [
    'https://images.unsplash.com/photo-1573068057232-fa17a193d54d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1592985684811-6c0f98adb014?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]


  return (
    <div className="">
      <div className="fixed top-0 right-0 left-0 z-20 bg-white">
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
      <div className="flex flex-row flex-1 w-full gap-2">
          
          <BusquedaVuelos />

          
            <Carrusel imagenes={imagenes} className="" />
       
         

      </div>
     
      
    </div>
  );
}

