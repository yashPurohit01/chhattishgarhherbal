import { QUANTITY_DEC } from "../constant"

export const QuantDecrementor = (product_id) =>(dispatch)=>{
         dispatch({
             type:QUANTITY_DEC,
             payload:product_id,
         })
}