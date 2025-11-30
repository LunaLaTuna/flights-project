import React, { useState } from "react";
import { VuelosInput } from "./VuelosInput";
import { DatePicker, Radio, Button, Input } from "antd";
import { busquedaCompleta } from "../api";
import { busquedaCompleta2 } from "../api";
import { Navigate, useNavigate } from "react-router-dom";

export function BusquedaVuelos() {
  const navigate = useNavigate();
  const [destino, setDestino] = useState(null);
  const [origen, setOrigen] = useState(null);
  const [tipoVuelo, setTipoVuelos] = useState(1);
  const [fecha, setFecha] = useState(null);
  const [vuelos, setVuelos] = useState([]);
  const [pasajeros, setPasajeros] = useState(null);

  const onChangeTipoVuelos = (e) => {
    setTipoVuelos(e.target.value);
    {
      /**console.log(tipoVuelo) muestra el valor anterior y no el nuevo */
    }
    console.log(e.target.value);
  };

  const onChangeTimePicker = (date, dateString) => {
    //* dos formas de hacer la función //}
    setFecha(date);
  };

  const buscarVuelos = async (origen, destino, fecha) => {
    //** la principal causa de este error fue el formato de las fechas, ya que esperaba un formato con guiones y no / */
    if (Array.isArray(fecha)) {
      const [fechaDeparture, fechaComeback] = fecha;

      const res = await busquedaCompleta2(
        origen,
        destino,
        fechaDeparture.format("YYYY-MM-DD"),
        fechaComeback.format("YYYY-MM-DD")
      );
      setVuelos(res.data);
      console.log(res.data);
      return res.data;

    } else {
      const res = await busquedaCompleta(
        origen,
        destino,
        fecha.format("YYYY-MM-DD")
      );
      setVuelos(res.data);
      console.log(res.data);
      console.log(fecha);

      return res.data;
    }/*por que aquí es necesario el return?? */
  };

  const handlerBuscarVuelos = async () => {
    const resultadoVuelos = await buscarVuelos(origen, destino, fecha);
    const pasajero = pasajeros
    console.log(pasajero)
    navigate("/ListaVuelos", {
      state: {
        vuelos: resultadoVuelos,
        pasajeros : pasajero
      },
    });
  };

  const handleInputPasajeros = (e) => {
      console.log(Number(e.target.value))
      setPasajeros(Number(e.target.value))
  };

  return (
    <div className="flex flex-col mt-20 ml-5 h-100 w-100 justify-center">

      <div className="mb-3"> 
        <p>BUSCA TU VUELO</p>
      </div>
      <div className="mb-5">
        <Radio.Group
          onChange={onChangeTipoVuelos}
          value={tipoVuelo}
          options={[
            {
              value: 1,
              label: "Sencillo",
            },
            {
              value: 2,
              label: "Redondo",
            },
            {
              value: 3,
              label: "Multidestino",
            },
          ]}
        />
      </div>

        <div className="flex flex-col gap-y-2 ">

          <VuelosInput
            placeholder="Origen"
            campoBusqueda="departure_city"
            onSelect={(value) => setOrigen(value)}
            
          />

          <VuelosInput
            placeholder="Destino"
            campoBusqueda="arrival_city"
            onSelect={(value) => setDestino(value)}
          />

      
        </div>
          <div className=" flex flex-row mt-5 gap-2 w-full">
            <div className="w-full">
            <Input className="h-10 flex-1" placeholder="Número de pasajeros" value={pasajeros} onChange={handleInputPasajeros}/> {/*los input reciben un evento y es necesario usarlo para acceder a su valor */}
            </div>
          {origen && destino && tipoVuelo === 1 && (
        <div className="w-full">
          <DatePicker
            onChange={onChangeTimePicker}
            format="YYYY/MM/DD"
            value={fecha}
            className="h-10 flex-1 w-full"
            placeholder="Seleccione una fecha"
            
          />
        </div>
      )}
      {origen && destino && tipoVuelo === 2 && (
        <div >
          <DatePicker.RangePicker
            onChange={(date, dateString) => setFecha(date)}
            format="YYYY/MM/DD"
            value={fecha}
            className="h-10"
          />
        </div>
      )}
        
        
        </div>
     

      {origen && destino && fecha && (
        <div className="mt-2">
          <Button type="primary" onClick={handlerBuscarVuelos}>
            Buscar Vuelo
          </Button>
        </div>
      )}
    </div>
  );
}
