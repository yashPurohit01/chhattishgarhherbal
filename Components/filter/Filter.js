import { useEffect, useState } from 'react'
import style from './filter.module.css'


const categroyList = [
    {
        display_name: "Grocery & Gourmet",
        id: "grocerygourmet"
    },
    {
        display_name: "Beauty Products",
        id: "beautyproducts"
    },
    {
        display_name: "Alternative Medicine",
        id: "medicine"
    },
    {
        display_name: "Health & Personal Care",
        id: "healthpersonalcare"
    }
]

export const Filter = ({ filtervalue, setfilterValue }) => {
    
    const onChangeHandler = (e) => {
        const { id, checked } = e.target
        setfilterValue(pre => {
            if (checked) {
                return (
                    {
                        ...pre,
                        [id]: true,
                    }
                )

            }
            else {
                return ({
                    ...pre,
                    [id]: false,
                })
            }
        })


    }

    return (
        <div className={style.filterContainer}>
            <div className={style.filterHeader}>
                <span>FILTER BY</span>
                <hr></hr>
                <span>CATEGORY</span>
            </div>

            <div className={style.filterOptions}>
                {
                    categroyList.map(val => {
                        return (
                            <div key={val.id}>
                                <label className={style.container}>{val.display_name}
                                    <input id={val.id}
                                        type="checkbox"
                                        value={val.display_name}
                                        data-category={val.id}
                                        onChange={onChangeHandler} />
                                    <span className={style.checkmark}></span>
                                </label>
                            </div>
                        )
                    })
                }
              


            </div>
            <div style={{ display: "flex", flexDirection: "column", fontSize: "11px" }}>
                <label>PRICE</label>
                <div style={{ width: '100%' }}>
                    <input style={{ width: "100%" }} type="range" min="0" max="9,999" steps="1" />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <label>₹0</label>
                        <label>₹9,999</label>
                    </div>
                </div>

            </div>
        </div>
    )
}