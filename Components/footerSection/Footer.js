import React from 'react';
import style from './footer.module.css';
import Image from 'next/image';

import { footerOptions } from './FooterElement';

function Footer() {
    
    return (
        <div className={style.footerContainer}>

           <div className={style.firstfootercontainer}>
                <h2>Buy all your favourite products from world's largest online store</h2>
                 <Image src="/images/amazonlogo.png" width="150" height="75" />
           </div>
            <div className={style.secondfootercontainer}>
                <div className={style.secondfooterSec}>
                    <div className={style.footercomlogo}>
                       <Image src="/images/logo1.jpeg" width="300" height="150" alt="logo"/>
                    </div>
                    <div className={style.list}>
                        {footerOptions}
                    </div>
                </div>
            </div>
            <div className={style.thirdfooterSec}>
                <span>Copyright Chhattishgarh Herbals 2021 .Designed by Shivila technology </span>
            </div>
        </div>
    )
}

export default Footer
