import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/cartScreen.module.css';
import { useDispatch } from 'react-redux';
import { RemovefromCart } from '../../redux/actions/RemovefromCart';

function cartProduct({product}) {
    const [Quanty, setQuant] = useState(1);
    const dispatch = useDispatch();
  const [qunatPrice , setQuantPrice] = useState(product.product_price);
    const stock = 13 ;
    const incre = () =>{
        if(Quanty < stock){
            setQuant(pre => pre + 1)       
        }
        
    }
    useEffect(() => {
        setQuantPrice(Quanty*product.product_price);
    }, [Quanty])

    const decre =() =>{
        if(Quanty>1){
            setQuant(pre => pre - 1);
        }
        
    } 
    const removeHandler = () =>{
        dispatch(RemovefromCart(product.product_id))
    }
    return (


        <div className={`${styles.cartthird} ${styles.cartsectiongrid}`}>
            <div className={styles.cartproductDesc}>
                <div>
                    <Image src="/images/product1.png" width="150" height="170" />
                </div>
                <div className={styles.cartdes}>
                    <div>
                        <strong>{product.product_name}</strong>
                    </div>

                    <div>
                        <span>Quantity<strong>500gm</strong></span>
                    </div>

                    <div>
                        <span>Product code<strong>{product.product_id}</strong></span>
                    </div>

                </div>
            </div>
            <div className={styles.cartproductquant}>
                <div className={styles.inc}>
                    <button onClick={incre} >+</button>
                    <span>{Quanty}</span>
                    <button  onClick={decre} >-</button>
                </div>
                <div  onClick ={removeHandler} className={styles.remove}>
                    <Link href="/cart"><a style={{ color: "red", fontWeight: "bold" }}>Remove</a></Link>
                </div>
            </div>
            <div className={styles.cartproductprice}>
                <span style={{ fontWeight: "bold", fontSize: "1rem" }} >₹{product.product_price}</span>
            </div>
            <div className={styles.cartproducttotal}>
                <span style={{ fontWeight: "bold" }} >₹{qunatPrice}</span>
            </div>
        </div>



    )
}

export default cartProduct
