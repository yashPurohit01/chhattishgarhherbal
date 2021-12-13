import Image from "next/image"
import styles from './card.module.css'

export const Card = ()=>{
    return(
        <div className={styles.productcard}>
             <div className={styles.productimg}>
                 <Image alt="product" src="/images/amla.jpg" width="150" height="150"/>
             </div>     
             <div className={styles.productDesc}>
                 <h3>Amla Murabba</h3>
                 <p>Far far away, behind the word mountains, far from the countries Volkalia & consonantia
                     there live the behind text.
                 </p>
                 <span>Product Details</span>
                 <strong>₹250</strong>
                 <button>ADD TO CARD</button>
             </div> 
        </div>
    )
}