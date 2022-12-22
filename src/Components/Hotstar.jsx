import style from "./hotstar.module.css"
const Hotstar =()=>{
    return(
        <section id={style.nav}>
            <article>
                <div className={style.Logo}>
                <img class="brand-logo" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="Disney+&nbsp;Hotstar"/>
                </div>
                <div className={style.Menu}>
                   <ul>
                         <li><a href="">Tv</a></li>
                         <li><a href="">Movies</a></li>
                         <li><a href="">Sports</a></li>
                         <li><a href="">Disney</a><sup>+</sup></li>
                         {/* <div class="iconClass kids"></div> */}
                    
                         <li><a href=""><input type="text" placeholder="Search" /></a></li>
                     
                         <li><a href=""><button className={style.btn}>Subscribe</button></a></li>
                         <li><button className={style.btn2}>Log in</button></li>
                    </ul>
                </div>     
                
            </article>
        </section>
        

    )
}
export default Hotstar