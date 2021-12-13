import style from './filter.module.css'

export const Filter = () => {
    return (
        <div className={style.filterContainer}>
            <div className={style.filterHeader}>
                <span>FILTER BY</span>
                <hr></hr>
                <span>CATEGORY</span>
            </div>

            <div className={style.filterOptions}>
                <div className={style.option} >
                    <input type="checkbox" value="Grocery & Gourmet Food" /> <label>Grocery & Gourmet</label>
                </div>
                <div className={style.option}>
                    <input type="checkbox" value="Beauty Products" /> <label>Beauty Products</label>
                </div>
                <div className={style.option}>
                    <input type="checkbox" value="Alternative Medicine" /><label>Alternative Medicine </label>
                </div>
                <div className={style.option}>
                    <input type="checkbox" value="Health & Personal Care" /> <label>Health & Personal Care</label>
                </div>

            </div>
            <div style={{ display: "flex", flexDirection: "column", fontSize: "11px" }}>
                <label>PRICE</label>
                <div style={{width:'100%'}}>
                    <input style={{width:"100%"}} type="range" min="0" max="9,999" steps="1" />
                    <div style={{display:"flex" , justifyContent:"space-between"}}>
                    <label>₹0</label>
                    <label>₹9,999</label>
                    </div>
                </div>

            </div>
        </div>
    )
}