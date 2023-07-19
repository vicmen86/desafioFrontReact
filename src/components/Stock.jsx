import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStock } from "../redux/action";
import { useEffect } from "react";

export default function Stock() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStock());
  }, [dispatch]);
  const stock = useSelector((state) => state.stock);
  console.log(stock);
  return (
    <div className="stock">
      <h1 className="title">STOCK DE PRODUCTOS ACTUALIZADO AL 15/7/23:</h1>
      <ul>
        {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas 
         Search es un arreglo por lo cual lo puedo recorrer y mostrar por pantalla*/}
        {stock.length > 0 ? (
          stock.map((s) => {
            return (
              <li key={s.id}>
                <span>N°: {s.idStock} |</span>
                <span>Producto: {s.producto.nombre} |</span>
                <span>Cantidad: {s.cantidad} </span>

                <button>Actualizar</button>
              </li>
            ); //en esta liena agregamos a favoritos.
          })
        ) : (
          <h4>No hay stock disponible ahora!</h4>
        )}
      </ul>
    </div>
  );
}
