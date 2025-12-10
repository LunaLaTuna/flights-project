import { useEffect } from "react";
import React, { useState } from "react";
import { ObtenerCiudades } from "../api";

export function Ciudades() {
  const [ciudades, setCiudad] = useState([]);

  const Obtenerciudad = async () => {
    const res = await ObtenerCiudades();

    setCiudad(res.data.data);
  };
  useEffect(() => {
    Obtenerciudad();
  }, []);

  return (
    <div>
      <ul>
        {ciudades.map((ciudad, index) => (
          <li>{ciudad.city_name}</li>
        ))}
      </ul>
    </div>
  );
}
