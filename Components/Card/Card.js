import Image from "next/image"
/* import {  useRouter } from "next/router"; */
import { useDispatch } from "react-redux";

import { AddtoCartAction } from "../../redux/actions/AddtoCartAction";
import styles from './card.module.css'

export const Card = ({ data}) => {
    const dispatch = useDispatch();
/*     const Router = useRouter(); */

    const addToCart = () => {
        console.log(data)
      dispatch(AddtoCartAction(data._id, data)); 
       /*  Router.push('/cart') */
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