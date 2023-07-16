import React from "react";

export default function Products(props) {
  return (
    <div className="prod">
      <h1 className="info">{props.nombre}</h1>
      <img src="" alt="IMAGEN DEL PRODUCTO" />
      <h3 className="info">Precio: $ {props.precio}</h3>
      <h3 className="info">Tipo: {props.tipoProducto}</h3>
    
    </div>
  );
}
