import React, { useEffect, useState } from 'react'
import styles from '../styles/Product.module.css'
import { Filter } from '../Components/filter/Filter'
import { Card } from '../Components/Card/Card'
import axios from 'axios'
import { useSelector , useDispatch} from 'react-redux'
import { ProductsAction } from '../redux/actions/ProductsActions'




function Product() {
  const {products} = useSelector(state => state.productslist);
  const dispatch = useDispatch()
 /*  const [productdata, setproductdata] = useState([]); */

  useEffect(() => {
   /*  */
   dispatch(ProductsAction())
      console.log(products);
      console.log("hello")
  }, [])



  const productLists = products && products.map((data, index) => {
    return (
      <div className={styles.product} key={index}>
        <Card data ={data}  index={index}/>
      </div>
    )
  })
  
  return (
    <div className={styles.productsections}>

      <div className={styles.firstSection}>
        <Filter />
        <div className={styles.secondSection}>
          <div className={styles.productsheader}>
            <span><strong style={{fontSize:"1.5rem"}}>{products.length}</strong> Products</span>

            <div className={styles.sortfilter}>
              <span>
                sort by <strong>Popularity</strong>
              </span>
            </div>
          </div>
          <hr />
          <div className={styles.products}>
           {
                 products ? 
                         productLists  :"" 
            }
          </div>
          <div className={styles.loadmore}>
            <button>Load More Products</button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Product
