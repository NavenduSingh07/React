import { useState } from "react"

const List=()=>{
    let [data,setData] = useState(["hi", "hello" , "had-lunch"])
    return(
        <div>
            {
                data.map((x)=>{
                    return(
                        <h1>{x}</h1>
                    )
                })    
            }
        </div>
    )
} 
export default List