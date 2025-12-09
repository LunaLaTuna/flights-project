import React, { useState } from "react";
import { AutoComplete } from "antd";
import { ObtenerCiudades } from "../api";

const DEFAULT_OPTIONS = [
  {
    label: "Valladolid",
    value: "5",
  },
  {
    label: "Aguascalientes",
    value: "4",
  },
];

export function VuelosInput({ placeholder, onSelect }) {
  const [ciudades, setCiudades] = useState(DEFAULT_OPTIONS);
  //** los mismo del rest operator, al parecer sirve mucho al trabajar con los arreglos, y expandirlos */
  const buscarCiudades = async (textoBusqueda) => {
    const res = await ObtenerCiudades(textoBusqueda)
    setCiudades([
      ...DEFAULT_OPTIONS,
      ...res.data.map((vuelo) => ({
        label: vuelo.city_name, //** label es el valor que se muestra */
        value: vuelo.city_name, //** value es el valor que se guardara  */
      })),
    ]);
  };

  return (
    <div className="">
      <AutoComplete
        className="w-45 "
        placeholder={placeholder}
        options={ciudades}
        onSearch={buscarCiudades}
        onSelect={onSelect}
        
      >
         {/*para poder colocar esta propiedad de h, solo se puede colocar en el elemento hijo que es el input, ya que d eotra manera no lo soporta */}
        <Input className="h-10"></Input> 
      </AutoComplete>
    </div>
  );
}
