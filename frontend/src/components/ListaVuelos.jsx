import React from "react";
import { useLocation } from "react-router-dom";

export function ListaVuelos() {
  const location = useLocation();
  const {vuelos} = location.state;

  const getPrecioRandom = (vueloId ,min = 0, max = 100000) => {
    //* definicion de valores por defecto si es que no se proporcionara uno//*}
    const today =
      new Date().toDateString(); /**obtiene la fecha y la convierte a String */
    const semilla = vueloId + today
      .split("")
      .reduce(
        (acumulador, char) => acumulador + char.charCodeAt(0),
        0
      ); /** reduce se usa para realizar operacion a cada uno de los elementos del arreglo */
    return min + (semilla % (max - min));
  };
  return (
    <div>
      <h1>Hola</h1>
       <ul>
          {vuelos.map((vuelo, index) => (
            <li key={index}>
              De {vuelo.departure_city} a {vuelo.arrival_city} Precio:{" "}
              {getPrecioRandom(vuelo.id, 500, 7000)}
            </li>
          ))}
        </ul>
    </div>
  );
}

