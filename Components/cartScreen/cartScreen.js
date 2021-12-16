import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './cartScreen.module.css'

function cartScreen() {
    return (
        <div className={styles.cartScreen}>
            <div className={styles.cartproductlist}>
                <div className={styles.shoppingheading}>
                    <p>Shopping Cart</p>
                </div>
                <div className={styles.cartsecond}>
                    <hr />
                    <div className={`${styles.cartheader} ${styles.cartsectiongrid}`}>
                        <div>
                            <p>PRODUCT DETAILS</p>
                        </div>
                        <div>
                            <p>QUANTITY</p>
                        </div>
                        <div>
                            <p>PRICE</p>
                        </div>
                        <div>
                            <p>TOTAL</p>
                        </div>
                    </div>

                </div>
                <div className={styles.hr}>

                </div>

                <div className={`${styles.cartthird} ${styles.cartsectiongrid}`}>
                    <div className={styles.cartproductDesc}>
                        <div>
                            <Image src="/images/product1.png" width="150" height="170" />
                        </div>
                        <div className={styles.cartdes}>
                            <div>
                                <strong>Lemongrass Green Tea</strong>
                            </div>

                            <div>
                                <span>Quantity<strong>500gm</strong></span>
                            </div>

                            <div>
                                <span>Product code<strong> 1722272</strong></span>
                            </div>

                        </div>
                    </div>
                    <div className={styles.cartproductquant}>
                        <div className={styles.inc}>
                            <button>+</button>
                            <span>5</span>
                            <button>-</button>
                        </div>
                        <div className={styles.remove}>
                            <Link href="/cart"><a style={{ color: "red", fontWeight: "bold" }}>Remove</a></Link>
                        </div>
                    </div>
                    <div className={styles.cartproductprice}>
                        <span style={{ fontWeight: "bold" }} >₹400.00</span>
                    </div>
                    <div className={styles.cartproducttotal}>
                        <span style={{ fontWeight: "bold" }} >₹400.00</span>
                    </div>
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
                    <strong> ₹800.00</strong>
                </div>
                <div className={styles.checkoutbutt}>
                    <button>Checkout</button>
                </div>


            </div>
        </div>
    )
}

export default cartScreen
