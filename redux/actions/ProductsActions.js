import axios from "axios"
import { PRODUCTS_REQUEST_FAIL, PRODUCTS_REQUEST_SUCCESS } from "../constant"



export const ProductsAction = () => (dispatch) =>{
     const ProductUrl = "https://cgherbalbackend.herokuapp.com/products"
     axios.get(ProductUrl)
     .then(res =>{
         console.log(res)
          
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