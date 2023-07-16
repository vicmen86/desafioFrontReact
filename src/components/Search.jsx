import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/action";

export default function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let found = getProducts(name);
    dispatch(found);
    setName("");
  }
  return (
    <>
      <input
        type="text"
        placeholder="Producto..."
        onChange={(e) => handleInputChange(e)}
        value={name}
        className="input"
        onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)} className="fetch">
        <strong>Buscar!</strong>
      </button>
    </>
  );
}
