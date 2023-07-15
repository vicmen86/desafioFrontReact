import axios from "axios";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_NAME = "GET_PRODUCTS_NAME";
export const GET_STOCK = "GET_STOCK";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";

export function getProducts() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/productos");
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
    let response = await axios.delete("http://localhost:3001/dogs/" + id);
    return response;
  };
}

export function getProductsName(product) {
  return async function (dispatch) {
    let json = await axios.get(
      "http://localhost:3001/productos?name=" + product
    );
    return dispatch({ type: GET_PRODUCTS_NAME, payload: json.data });
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
