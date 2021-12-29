import { useSelector } from 'react-redux';
import styles from '../styles/cartScreen.module.css'
import CartProduct from '../Components/cartProduct/cartProduct'
import { EmptyCart } from '../Components/empty Cart/EmptyCart';


function Cart() {
    const { cartItems } = useSelector(state => state.cartitems);
    const cartProducts = cartItems.map(product => {
        return (
            <div key={product.product_id}>
                <CartProduct product={product} />
            </div>
        )
    })
    return (
        <div>
            {cartItems?.length > 0 ?
                <div className={styles.cartScreen}>
                    <div className={styles.cartproductlist}>
                        <div className={styles.shoppingheading}>
                            <p>Shopping Cart</p>
                        </div>
                        <div className={styles.cartsecond}>
                            <hr />
                            <div className={`${styles.cartheader} ${styles.cartsectiongrid}`}>
                                <div className={styles.tableheading}>
                                    <p>PRODUCT DETAILS</p>
                                </div>
                                <div className={styles.tableheading}>
                                    <p>QUANTITY</p>
                                </div>
                                <div className={styles.tableheading}>
                                    <p>PRICE</p>
                                </div>
                                <div className={styles.tableheading}>
                                    <p>TOTAL</p>
                                </div>
                            </div>

                        </div>
                        <div className={styles.hr}>

                        </div>
                        <div>
                            {cartProducts ? cartProducts:""}
                        </div>


                    </div>

                    <div className={styles.checkout}>
                        <div className={styles.ordersummary}>
                            <strong>
                                ORDER SUMMARY
                            </strong>
                        </div>
                        <div>
                            <div className={styles.hr}></div>

                        </div>

                        <div className={styles.t1}>
                            <span>Items-2</span>
                            <strong>₹800.00</strong>
                        </div>
                        <div>
                            <strong>shipping charges</strong>
                        </div>
                        <div>
                            <span>free delivery</span>
                            <strong></strong>
                        </div>
                        <div>
                            <div className={styles.hr}></div>
                        </div>

                        <div className={styles.t1}>
                            <span>Total cost</span>
                            <strong>₹800.00</strong>
                        </div>
                        <div className={styles.checkoutbutt}>
                            <button>Checkout</button>
                        </div>


                    </div>
                </div >
                : <EmptyCart />}
        </div>

    )
}

export default Cart
