import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductId } from "../redux/action";

export default function DetailProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductId(id));
  }, [dispatch, id]);
  const detailProduct = useSelector((state) => state.detail);

  return (
    <div className="detail">
      {detailProduct.length == 0 ? (
        <p>LOADING...</p>
      ) : (
        detailProduct.length > 0 && (
          <div>
            <div>
              <h1 className="name"> {detailProduct[0].nombre}</h1>
            </div>
            <img src="" alt="IMAGEN NO ENCONTRADA" />

            <h2>Detalle: </h2>
            <p className="asd">{detailProduct[0].detalle}</p>
            <h2>Precio: </h2>
            <p className="asd">{detailProduct[0].precio}</p>
            <h2>Tipo de Producto: </h2>
            <p className="asd"> {detailProduct[0].tipoProductoID} </p>
            <a href="/">
              <button className="buttonHome1">RETURN HOME</button>
            </a>
          </div>
        )
      )}
    </div>
  );
}
