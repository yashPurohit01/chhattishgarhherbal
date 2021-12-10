import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import style from './header.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

function Header() {
    return (
        <div className={style.headerContainer}>
            <div className={style.headersection}>
                <div>
                    <Image src="/images/logo.png" alt="logo" width="200" height="80" quality="100" />
                </div>
                <div className={style.options}>
                    <div className={style.link} >
                        <Link href="/"><a>HOME</a></Link>
                    </div>
                    <div className={style.link}>
                        <Link href="/products"><a>PRODUCTS</a></Link>
                    </div>
                    <div className={style.link}>
                        <Link href="/about"><a>ABOUT</a></Link>
                    </div>
                    <div className={style.link}>
                        <Link href="/contact"><a>CONTACT</a></Link>
                    </div>
                    <div className={style.link}>
                        <Link href="/contact"><a>NEWS</a></Link>
                    </div>
                </div>
                <div>
                    <div >
                        <AiOutlineSearch />
                    </div>
                    <div>
                        <FaShoppingCart />
                    </div>
                
                </div>
            </div>
            <div className={style.headersectionsecond}>

                <div className={style.secheadnavs}>

                    <div className={style.link}>
                        <Link href="/allproducts"><a>Shop ALL</a></Link>
                    </div>
                    <div className={style.link}>
                        <Link href="/beautyproducts"><a>Beauty Product</a></Link>
                    </div>
                    <div className={style.link}>
                        <Link href="/medproducts"><a>Alternative Medicine</a></Link>
                    </div>
                    <div className={style.link}>
                        <Link href="/heathproducts"><a>Health&Personalcare</a></Link>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Header
