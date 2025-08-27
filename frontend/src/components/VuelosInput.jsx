import React, { useState } from "react";
import { AutoComplete } from "antd";
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
    <div>
      <AutoComplete
        className="w-100"
        placeholder={placeholder}
        options={vuelos}
        onSearch={buscar}
        onSelect={onSelect}
      />
    </div>
  );
}
