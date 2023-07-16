import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addProduct } from "../redux/action";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Your breed must have a name";
  }
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
      input.name &&
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
      <h1 className="title">FORMULARIO PARA CREAR NUEVO PRODUCTO</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            <strong>Nombre: </strong>
          </label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          {errors.name && (
            <p className="error">
              <strong>{errors.name}</strong>
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
