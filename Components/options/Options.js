import styles from './options.module.css' ;


export default function Options(props) {
    const optArray = props.curr;
    console.log(props.curr);
    return (
        <div>
            <select id={styles.currencyOption}>
               <option value="INR" >INR</option>
                <option value="USD" >USD</option>
                <option value="EUR" >EUR</option>
                 
                {/*  {  
                   optArray.map(data =>{
                       return(
                           <div key={data}>
                               
                               <option value={data} >data</option>
                           </div>
                       )
                   })

                 } */}
            </select>
        </div>
    )
}
