import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import { reservationsArrivalCity, reservationsDepartureCity } from "../api";

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

export function VuelosInput({ placeholder, campoBusqueda, onSelect }) {
  const [vuelos, setVuelos] = useState(DEFAULT_OPTIONS);
  //** los mismo del rest operator, al parecer sirve mucho al trabajar con los arreglos, y expandirlos */
  const buscar = async (textoBusqueda) => {
    const res = await (campoBusqueda === "departure_city"
      ? reservationsDepartureCity(textoBusqueda)
      : reservationsArrivalCity(textoBusqueda));
    setVuelos([
      ...DEFAULT_OPTIONS,
      ...res.data.map((vuelo) => ({
        label: vuelo[campoBusqueda],
        value: vuelo[campoBusqueda],
      })),
    ]);
  };

  return (
    <div className="">
      <AutoComplete
        className="w-100 "
        placeholder={placeholder}
        options={vuelos}
        onSearch={buscar}
        onSelect={onSelect}
        
      >
         {/*para poder colocar esta propiedad de h, solo se puede colocar en el elemento hijo que es el input, ya que d eotra manera no lo soporta */}
        <Input className="h-10"></Input> 
      </AutoComplete>
    </div>
  );
}
