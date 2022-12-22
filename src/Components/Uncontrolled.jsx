import { useRef } from "react"

const Uncontrolled =()=>{
    let name= useRef()
    let email= useRef()
    console.log(name)
    console.log(email)
    let Fatch=(e)=>{e.preventDefault()
        let  Data1 =name.current.value
        let  Data2 =email.current.value
        console.log(Data1)
        console.log(Data2)
    }

    return(
        <form action="" /*onSubmit={fetch}*/>
            <label>Frist Name</label>
            <input type="text"  ref={name} />

            <label>Email</label>
            <input type="email"  ref={email} />
            <br />
             <button onClick={Fatch}>Submit</button> 
        </form>
    )
}
export default Uncontrolled