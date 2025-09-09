import React from "react";
import { useLocation } from "react-router-dom";

export function ListaVuelos() {
  const location = useLocation();
  const {vuelos, pasajeros } = location.state;


  const horasDia= 24
  const horasVuelos = Math.floor(Math.random() * horasDia)

  const getPrecioRandom = (vueloId ,min = 0, max = 100000) => {
    //* definicion de valores por defecto si es que no se proporcionara uno//*}
    const today = new Date().toDateString(); /**obtiene la fecha y la convierte a String */
    const semilla = vueloId + today.split("").reduce((acumulador, char) => acumulador + char.charCodeAt(0),0); /** reduce: se usa para realizar operacion a cada uno de los elementos del arreglo */
    return (min + (semilla % (max - min))) * pasajeros  ;
  };
  return (
    <div>
       <ul>
          {vuelos.map((vuelo, index) => (
            <li key={index}>
              De {vuelo.departure_city} a {vuelo.arrival_city} Precio:{" "}
              <p>{vuelo.id}</p>
              {getPrecioRandom(vuelo.id, 500, 7000)}
              <p>Duración del vuelo {horasVuelos} horas</p>
            </li>
          ))}
        </ul>
    </div>
  );
}

