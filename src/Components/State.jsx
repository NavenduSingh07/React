import { useState } from "react"

const State = ()=>{
 let[data,setData]  = useState("Hugry")
 let shawrama=()=>{
     setData("i am food")   //setData is method
 }
    return(
        <div>
            {data}
            <br />
            <br />
            <button onClick={shawrama}  >Food</button>
            

        </div>
    )

}
export default State

// to make daynamic we use State