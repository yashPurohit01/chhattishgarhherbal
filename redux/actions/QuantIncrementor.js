import { QUANTITY_INC } from "../constant"

export const QuantIncrementor = ( product_id) => (dispatch ,getstate) => {
         dispatch({
             type:QUANTITY_INC,
             payload:product_id
         })
}
