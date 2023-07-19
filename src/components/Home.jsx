import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Search from "./Search";
import Products from "./Products";
import {
  getProducts,
  orderByName,
  orderByPrice,
} from "../redux/action";

export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts()); //mapdistpachtoprops
  },[dispatch]);

  /*   useEffect(()=> {
    dispatch(getStock());
},[dispatch])
 */
  function handleSortName(e) {
    e.preventDefault();
    dispatch(orderByName());
  }
  function handleSortPrice(e) {
    e.preventDefault();
    dispatch(orderByPrice());
  }
  return (
    <>
      <div className="navbar">
        <div>
          <ul>
            <li>
              <button onClick={(e) => handleSortName(e)} className="newdog">
                ORDENAR POR NOMBRE
              </button>
              <button onClick={(e) => handleSortPrice(e)} className="newdog">
                ORDENAR POR PRECIO
              </button>
              <Link to="/create">
                <button className="newdog">CREAR PRODUCTO</button>
              </Link>
              <Link to="/stock">
                <button className="newdog">STOCK</button>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Search />
        </div>
        <h1 className="title">PRODUCTOS ACTUALIZADOS 15/07/2023</h1>
        <div>
          {allProducts?.map((p) => {
            return (
              <div key={p.id} className="productHome">
                <Link to={"/" + p.id}>
                <Products
                  key={p.id}
                  nombre={p.nombre}
                  tipoProducto={p.tipoProducto.descripcion}
                  detalle={p.detalle}
                  precio={p.precio}
                />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
