import Image from "next/image"
import { Router, useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { AddtoCartAction } from "../../redux/actions/AddtoCartAction";
import styles from './card.module.css'

export const Card = ({ productdata, index }) => {
    const dispatch = useDispatch();
    const Router = useRouter();

    const addToCart = () => {
        console.log(productdata)
      dispatch(AddtoCartAction(productdata[index]._id, productdata[index])); 
        Router.push('/cart')
    }
    return (
        <div className={styles.productcard}>
            <Image style={{ margin: "auto" }} alt="product" src="/images/amla.png" width="170" height="150" />

            <div className={styles.productDesc}>
                <h3>{productdata[index].product_name}</h3>
                <p>Far far away, behind the word mountains, far from the countries Volkalia & consonantia
                    there live the behind text.
                </p>
                <span>Product Details</span>
                <strong>₹{productdata[index].price}</strong>
                <button onClick={addToCart} >ADD TO CART</button>
            </div>
        </div>
    )
}