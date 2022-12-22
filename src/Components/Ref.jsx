import { useRef } from "react"

const Ref =()=>{
    let demoRef=useRef()
    console.log(demoRef);
    let color=()=>{
         demoRef.current.style.background="red"
    }
    return(
        <div>
            <h1 ref={demoRef}>headning tag</h1>
            <button onClick={color()}>Click</button>
        </div>
    )
}
export default Ref