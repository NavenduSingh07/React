import { useState } from "react"  //hooks prefx of hooks set

const Q2 = ()=>{
 let[data,setData]  = useState(0)
 let incre=()=>{
     setData(data+1)   //setData is method
 }
 let decre =()=>{
    setData(data-1)   //setData is method
 }
    let  reset =()=>{
        setData(0)   //setData is method
      }
    return(
        <div>
            {data}
            <br />
            <br />
            <button onClick={incre}  >increment</button>
            <button onClick={decre}  >decrement</button>
            <button onClick={reset}  >resate</button>
        </div>
    )

}
export default Q2