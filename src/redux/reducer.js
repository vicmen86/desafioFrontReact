import {
  GET_PRODUCTS,
  GET_PRODUCTS_NAME,
  GET_STOCK,
  ORDER_BY_NAME,
  ORDER_BY_PRICE,
} from "./action";

const initialState = {
  product: [],
  stock: [],
  filterProduct: [],
};
function reducerProduct(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        product: action.payload,
        filterProduct: action.payload,
      };

    case GET_PRODUCTS_NAME:
      return {
        ...state,
        product: action.payload,
      };

    case GET_STOCK:
      return {
        ...state,
        stock: action.payload,
      };
    case ORDER_BY_NAME:
      state.filterProduct.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
          return -1;
        }
        return 0;
      });
      return state;

    case ORDER_BY_PRICE:
      state.filterProduct.sort(function (a, b) {
        if (a.precio > b.precio) {
          return 1;
        }
        if (b.precio > a.precio) {
          return -1;
        }
        return 0;
      });
      return state;

    default:
      return state;
  }
}

export default reducerProduct;
