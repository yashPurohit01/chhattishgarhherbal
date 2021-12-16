import React, { useEffect, useState } from 'react'
import styles from '../styles/Product.module.css'
import { Filter } from '../Components/filter/Filter'
import { Card } from '../Components/Card/Card'
import axios from 'axios'




function Product() {
  const [productdata, setproductdata] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:7000/products'
    axios.get(url)
      .then(res => {
        console.log(res.data)
        const Products = res.data.result;
        console.log(Products);
        setproductdata(Products)
      })
      .catch(err => {
        console.log(err);
      })
  }, [productdata])
  const products = productdata.map((data, index) => {
    return (
      <div className={styles.product} key={index}>
        <Card productdata = {productdata} index={index}/>
      </div>
    )
  })
  return (
    <div className={styles.productsections}>

      <div className={styles.firstSection}>
        <Filter />
        <div className={styles.secondSection}>
          <div className={styles.productsheader}>
            <span>5 Products</span>

            <div className={styles.sortfilter}>
              <span>
                sort by <strong>Popularity</strong>
              </span>
            </div>
          </div>
          <hr />
          <div className={styles.products}>
         {/*    {
              productdata.map((data, index) => {
                return (
                 
                )
              })
            }
 */}       {
                 productdata ? 
                         products :""
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
