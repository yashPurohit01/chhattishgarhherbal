
import { ADD_TO_CART } from "../constant"

export const AddtoCartAction = (productId , data)=> (dispatch ,getstate) =>{
  
      dispatch({
           type:ADD_TO_CART,
           payload:{
               product_id:productId,
               product_name:data.product_name,
               product_price:data.price,
               quantity:1,
           }
       })
   if(window !== "undefined") {
    localStorage.setItem('cartItems' , JSON.stringify(getstate().cartitems.cartItems));
   } 
   else{
       return
   }
}
