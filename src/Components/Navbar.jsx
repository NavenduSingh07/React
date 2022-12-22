import style from "./navbar.module.css"
import picture from "./tcs.jpg"
import picture2 from "./download.png"


const Navbar=()=>{
    return(
        <section id={style.nav}>
            <article>
                <div className={style.Logo}>
                 <img src={picture} height={65} width={155} />
                </div>
                <div className={style.Menu}>
                    <ol>
                        <li><a href=""> what we do</a></li>
                        <li><a href=""> who we are</a></li>
                        <li><a href="">insight</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">investors</a></li>
                    </ol>

                </div>
                <div className={style.Contact}>
                    <div className={style.div1}>
                        <ol>
                          <li><a href=""> CONTACT US</a></li>
                          <li><a href=""> TCS WORLDWiDE</a></li>
                          <li><a href=""><i class="fa-solid fa-magnifying-glass"></i>Search</a></li>
                        </ol> 
                    </div>
                    <div className={style.div2}><img src={picture2} height={65} width={200}/></div>
                </div>   
            </article>

        </section>
    )
}
export default Navbar