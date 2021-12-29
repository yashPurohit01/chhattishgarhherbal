import { REMOVE_FROM_CART } from "../constant"


export const RemovefromCart = (product_id) => (dispatch) =>{

     dispatch({
        type:REMOVE_FROM_CART,
        payload:product_id
        })
}
