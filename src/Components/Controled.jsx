import { useState } from "react"

const Controled=()=>{
    let [name, setName] =useState("")
    let nameData=(e)=>{
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
        setName(e.target.value)
    }
    let abc=(e)=>{
        e.preventDefault()
        console.log(name)
    }
    return(
        <form>
            <label>Name:</label>
            <input type="text" value={name} onChange={nameData}/>
            {/* <input type="email" /> */}
            <button onClick={abc}>Submit</button>

        </form>
    )
}
export default Controled