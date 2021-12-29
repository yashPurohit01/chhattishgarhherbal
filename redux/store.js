import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from "next-redux-wrapper";
import { cartReducer } from './reducers/cartReducer';


const composeEnhancer =  compose;

const initialState = {
  cartitems: {cartItems: (typeof window !== "undefined" && localStorage.getItem('cartItems'))? JSON.parse(localStorage.getItem('cartItems')): [],}

}

const rootReducer = combineReducers({
  cartitems: cartReducer ,

})
const store =() => createStore(rootReducer,initialState, composeEnhancer(applyMiddleware(thunk)));

export const wrapper = createWrapper(store);
