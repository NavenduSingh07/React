const Theme =()=>{
    let dark=()=>{
        document.body.style.background="black"
        document.body.style.color="white"
    }
    let light=()=>{
        document.body.style.background="pink"
        document.body.style.color="white"
    }
    return(
        <div>
            <h1>DARK AND LiGHT THEME</h1>
            dark
            <input type="radio" name="abc" onClick={dark}/>

            light
            <input type="radio" name="abc" onClick={light}/>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugit hic exercitationem ipsam dicta porro illo pariatur neque eaque repudiandae quod quos nesciunt voluptatibus temporibus iusto odit numquam, aliquid voluptates?</h6>
        </div>
    )
}
export default Theme