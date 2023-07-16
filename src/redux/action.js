import axios from "axios";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_ID = "GET_PRODUCTS_ID";
export const GET_STOCK = "GET_STOCK";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";

export function getProducts(product) {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/productos?name=" + product)
    return dispatch({ type: GET_PRODUCTS, payload: json.data });
  };
}
//no requiere un dispatch
export function addProduct(payload) {
  return async function () {
    let response = await axios.post("http://localhost:3001/productos", payload);
    return response;
  };
}

export function removeProduct(id) {
  return async function () {
    let response = await axios.delete("http://localhost:3001/productos" + id);
    return response;
  };
}

export function getProductId(id) {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/productos/" + id);
    return dispatch({ type: GET_PRODUCTS_ID, payload: json.data });
  };
}

export function getStock() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/stock");
    return dispatch({ type: GET_STOCK, payload: json.data });
  };
}
export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}
export function orderByPrice(payload) {
  return {
    type: ORDER_BY_PRICE,
    payload,
  };
}
