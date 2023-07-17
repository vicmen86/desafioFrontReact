import {
  GET_PRODUCTS,
  GET_PRODUCTS_ID,
  GET_STOCK,
  ORDER_BY_NAME,
  ORDER_BY_PRICE,
} from "./action.js";

const initialState = {
  product: [],
  stock: [],
  detail: [],
  filterProduct: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        product: action.payload,
        
      };

    case GET_PRODUCTS_ID:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_STOCK:
      return {
        ...state,
        stock: action.payload,
      };
    case ORDER_BY_NAME:
      state.product.sort(function (a, b) {
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
      state.product.sort(function (a, b) {
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

export default rootReducer;
