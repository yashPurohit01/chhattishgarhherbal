import React from 'react'
import styles from '../styles/Product.module.css'
import { Filter } from '../Components/filter/Filter'
import { Card } from '../Components/Card/Card'



const array = [1, 2, 7, 9, 9]

function product() {
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
          <hr/>
          <div className={styles.products}>
            {
              array.map(data => {
                return (
                  <div className={styles.product}>
                    <Card />
                  </div>
                )
              })
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

export default product
