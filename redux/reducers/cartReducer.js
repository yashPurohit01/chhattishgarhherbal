import { ADD_TO_CART, REMOVE_FROM_CART, REQUEST_FAIL } from "../constant";

const cartInitialState = {
    cartItems: [],
    loading:true,

}

export const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
           const items = action.payload;
             const existItems = state.cartItems.find((id) => id.product_id === items.product_id? id.quantity + 1:"");
            if (existItems) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((id) => id.product_id === existItems.product_id ? items : id),
                    loading:false,
                }
            } 
            else{ 
                return {
                    ...state,
                    cartItems:  [...state.cartItems, items] ,
                    loading:false,
                
                }
            }
        case REMOVE_FROM_CART:
            
            const productId = action.payload ;
            const cartVal = state.cartItems.filter((item) => item.product_id != productId);
            localStorage.setItem('cartItems' , JSON.stringify(cartVal));
            return{
                ...state,
                cartItems: cartVal,
                loading:false ,
            }

         
        case REQUEST_FAIL:
            return {
                ...state ,
                cartItems:action.payload,
                loading :false ,
            }    
        default:
            return state;
    }
}