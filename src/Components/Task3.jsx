import { useState } from "react";

const Task3 =()=>{

let [Count,setCount] = useState(0)    //sub ,sup squre or
let incr=()=>{
    setCount(Count+1)
} 
    return(
        <div>
            {/* <button onClick={incr}>Like</button> */}
            <i class="fa-solid fa-heart" onClick={incr}></i> <sup>{Count}</sup>
            
        </div>
    )
}
export default Task3