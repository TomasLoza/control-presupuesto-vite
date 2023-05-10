import React from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="Listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>{gastosFiltrados.length ? "Gastos" : "No hay gastos aun"}</h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              eliminarGasto={eliminarGasto}
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos" : "No hay gastos aun"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
