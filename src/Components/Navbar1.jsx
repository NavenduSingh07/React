import React from "react";
import style from "./navbar1.module.css"

const Navbar1 =()=>{
    return(
        <section id={style.nav}>
            <article>
                <div className={style.Logo}>Logo</div>
                <div className={style.Menu}>Menu</div>
                <div className={style.btn}>button</div>
            </article>
        </section>
    )
}
export default Navbar1