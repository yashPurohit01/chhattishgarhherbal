import { PRODUCTS_REQUEST_FAIL, PRODUCTS_REQUEST_SUCCESS } from "../constant"

const initialstate ={
    products:[],
    loading:true,
}
export const productsReducer = (state = initialstate ,action) =>{
        switch(action.type){
            case PRODUCTS_REQUEST_SUCCESS:
                const results = action.payload;
                  /*  results.filter(items => items.category===) */
                console.log(results)
                return{
                    ...state,
                    loading:false,
                    products: results,
                }
            case PRODUCTS_REQUEST_FAIL:
                const err =action.payload;
                 return{
                     ...state,
                     loading:false,
                     products: err,
                 }   
            default:
                return state      
        }
}