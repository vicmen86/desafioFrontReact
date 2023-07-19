import React from "react";

export default function Products(props) {
  return (
    <div className="prod">
      <h1 className="info">{props.nombre}</h1>
      <img src="" alt="IMAGEN DEL PRODUCTO NO ENCONTRADO" />
      <h3 className="info">Categoria: {props.tipoProducto}</h3>
      <h3 className="info">Detalle: $ {props.detalle}</h3>
      <h3 className="info">Precio: $ {props.precio}</h3>
    
    </div>
  );
}
