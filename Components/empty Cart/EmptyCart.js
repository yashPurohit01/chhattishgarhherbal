import styles from './emptyCart.module.css'


export const EmptyCart = () => {
    return (
        <div id={styles.emptyCart}>
            <h1>Oops!</h1>
            <h2>Your Cart is Empty...</h2>
            <h3>You don't have items into your cart.Maybe they are moved or removed from the Cart section.Start searching product from product section or Search using search bar.</h3>
        </div>

    )
}

