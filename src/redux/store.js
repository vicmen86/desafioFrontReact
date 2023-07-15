import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import reducerProduct from './reducer';

const store = createStore(reducerProduct, composeWithDevTools(applyMiddleware(thunk)))//

 export default store;