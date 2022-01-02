import React, { useEffect, useState } from 'react'
import styles from '../styles/Product.module.css'
import { Filter } from '../Components/filter/Filter'
import { Card } from '../Components/Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import { ProductsAction } from '../redux/actions/ProductsActions'




function Product() {
  const { products } = useSelector(state => state.productslist);

  const dispatch = useDispatch()

  const [filtervalue, setfilterValue] = useState({
    grocerygourmet: false,
    beautyproducts: false,
    medicine: false,
    healthpersonalcare: false,

  });


  useEffect(() => {

    dispatch(ProductsAction(filtervalue));


  }, [])


  const productLists = products && products.filter(product => {
    let selected_filters = Object.keys(filtervalue).filter(x => filtervalue[x]);
    console.log(selected_filters);
    if (selected_filters.length === 0) return true;
    return selected_filters.indexOf(product.category) !== -1;

  }).map((data, index) => {
    return (
      <div className={styles.product} key={index}>
        <Card data={data} index={index} />
      </div>
    )
  })


  return (
    <div className={styles.productsections}>

      <div className={styles.firstSection}>
        <Filter filtervalue={filtervalue} setfilterValue={setfilterValue} />
        <div className={styles.secondSection}>
          <div className={styles.productsheader}>
       
            <div>
              <span><strong style={{ fontSize: "1.5rem" }}>{productLists.length}</strong> Products</span>
            </div>
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
                productLists : ""
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
