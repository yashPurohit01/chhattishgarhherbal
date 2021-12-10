import Link from "next/link"

const footopt = [{
    heading: "SHOP",
    ele1: "Sweets",
    ele2: "Cookies",
    ele3: "Honey",
    elec4: "Ayurvedic",
},
{
    heading: "SUPPORT",
    ele1: "Contact Us",
    ele2: "FAQ",
    ele3: "Privacy",
    elec4: "Term & Condition",
}, {
    heading: "MY ACCOUNT",
    ele1: "Signin",
    ele2: "My Cart",
    ele3: "Check out",
    elec4: ""

}]

export const footerOptions = footopt.map(data => {
    return (

        <div style={{margin:"1rem" }} key={data.heading}>
            <h2 style={{fontWeight:"400"}}>
                <Link href="#"><a>{data.heading}</a></Link>
            </h2>
            <li style={{fontSize:"1rem" , margin:"1rem .5rem 1rem .5rem"}}>
                <Link href="#"><a>{data.ele1}</a></Link>
            </li>
            <li  style={{fontSize:"1rem" , margin:"1rem .5rem 1rem .5rem"}}>
                <Link href="#"><a>{data.ele2}</a></Link>
            </li>
            <li  style={{fontSize:"1rem", margin:"1rem .5rem 1rem .5rem"}}>
                <Link href="#"><a>{data.ele3}</a></Link>
            </li>
            <li  style={{fontSize:"1rem" , margin:"1rem .5rem 1rem .5rem"}}>
                <Link href="#"><a>{data.elec4}</a></Link>
            </li>

        </div>

    )
})


