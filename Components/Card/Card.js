import Image from "next/image"
import { useDispatch } from "react-redux";

import { AddtoCartAction } from "../../redux/actions/AddtoCartAction";
import styles from './card.module.css'

export const Card = ({ data}) => {
    const dispatch = useDispatch();


    const addToCart = () => {
        console.log(data)
      dispatch(AddtoCartAction(data._id, data)); 
       
    }
    return (
        <div className={styles.productcard}>
            <Image alt="product" src="/images/amla.png" width="170" height="150" />

            <div className={styles.productDesc}>
                <h3>{data.product_name}</h3>
                <p>
                    {data.description}
                </p>
                <span>Product Details</span>
                <strong>₹{data.price}</strong>
                <button onClick={addToCart} >ADD TO CART</button>
            </div>
        </div>
    )
}