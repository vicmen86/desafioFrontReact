import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addProduct } from "../redux/action";

function validate(input) {
  let errors = {};
  if (!input.nombre) {
    errors.nombre = "Este espacio no puede estar en blanco";
  }
  else if (!input.tipoProductId) {//este servivio aun no esta completo, lo mas recomendable es que sea un select de todas las categorias disponibles de base de datos 
    errors.tipoProductId = "Elige una categoria para tu producto";
  }
  else if (!input.detalle) { 
    errors.detalle = "Da una breve descripcion del producto";
  }
  else if (!input.precio) { 
    errors.precio = "Da una breve descripcion del producto";
  }
  return errors;
}

export default function CreateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    nombre: "",
    tipoProductoId: 0,
    detalle: "",
    precio: 0,
  });
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
  //funcion validadora antes de enviar
  function handleSubmit(e) {
    e.preventDefault();
    console.log(errors);
    if (
      !Object.getOwnPropertyNames(errors).length &&
      input.nombre &&
      input.tipoProductId &&
      input.detalle &&
      input.precio
    ) {
      dispatch(addProduct(input));
      alert("Producto creado con exito!");
      setInput({
        nombre: "",
        tipoProductoId: 0,
        detalle: "",
        precio: 0,
      });
      navigate("/");
    } else {
      alert("Tu Producto no pudo ser creado...");
    }
  }
  return (
    <div>
      <Link to="/">
        <button className="buttonHome">HOME</button>
      </Link>
      <h2 className="title">FORMULARIO PARA CREAR NUEVO PRODUCTO</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            <strong>Nombre: </strong>
          </label>
          <input
            type="text"
            value={input.nombre}
            name="nombre"
            onChange={(e) => handleChange(e)}
          />
          {errors.nombre && (
            <p className="error">
              <strong>{errors.nombre}</strong>
            </p>
          )}
        </div>

        <div>
          <label>
            <strong>Tipo de Producto: </strong>
          </label>
          <input
            type="number"
            value={input.tipoProductId}
            name="tipoProductId"
            onChange={(e) => handleChange(e)}
          />

          {errors.tipoProductId && (
            <p className="error">
              <strong>{errors.tipoProductId}</strong>
            </p>
          )}
        </div>
        <div>
          <label>
            <strong>Detalle: </strong>
          </label>
          <input
            type="text"
            value={input.detalle}
            name="detalle"
            onChange={(e) => handleChange(e)}
          />

          {errors.detalle && (
            <p className="error">
              <strong>{errors.detalle}</strong>
            </p>
          )}
        </div>
        <div>
          <label>
            <strong>Precio: </strong>
          </label>
          <input
            type="number"
            value={input.precio}
            name="precio"
            onChange={(e) => handleChange(e)}
          />

          {errors.precio && (
            <p className="error">
              <strong>{errors.precio}</strong>
            </p>
          )}
        </div>
        <button type="submit" className="boop">
          <strong>CREAR PRODUCTO</strong>
        </button>
      </form>
    </div>
  );
}
