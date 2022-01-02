import axios from "axios"
import { PRODUCTS_REQUEST_FAIL, PRODUCTS_REQUEST_SUCCESS } from "../constant"



/* 
      grocerygourmet: false,
    beautyproducts: false,
    medicine: false,
    healthpersonalcare:false,


*/

export const ProductsAction = (filtervalue) => (dispatch) =>{
     const ProductUrl = "http://cgherbalbackend.herokuapp.com/products"
     axios.get(ProductUrl)
     .then(res =>{
         console.log(res)
         const products = res.data.result
         
 /*      let filtered = products.filter(items => {
            return filtervalue.grocerygourmet && 
         }  )
         console.log(filtered) */
          
         dispatch({
             type:PRODUCTS_REQUEST_SUCCESS,
             payload:res.data.result,
         })
     })
     .catch(err=>{
         dispatch(
             {
                 type:PRODUCTS_REQUEST_FAIL,
                 payload:err.message,
             }
         )
     })
}