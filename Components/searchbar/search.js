import styles from "./search.module.css";
import Searchicon from "../icon/searchicon";
/* import JsonData from "../../MOCK_DATA.json"; */
/* import Card from "../cards/card"; */
import { useState } from "react";
/* import style2 from "../cards/card.module.css"; */

export default function Searchbar() {
  const [searchquery, setsearchquery] = useState("");

  return (
    <div>
      <div className={styles.searchBox}>
        <input
          className={styles.searchText}
          type="text"
          name=""
          placeholder="product to search..."
          onChange={(e) => {
            setsearchquery(e.target.value);
          }}
        />
        <a className={styles.searchbtn}>
          <Searchicon />
        </a>
      </div>

     {/*  <div className={style2.wrapperch1}>
        {JsonData.filter((val) => {
          if (searchquery == "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(searchquery.toLowerCase())
          ) {
            return val;
          }
        }).map((item, key) => (
            
          <Card
            key={key}
            first_name={item.first_name}
            last_name={item.last_name}
            email={item.email}
            gender={item.gender}
          />
        ))}
      </div> */}
    </div>
  );
}
