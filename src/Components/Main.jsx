import { useCallback } from "react"
import { useState } from "react"
import Button from "./Button"
import Count from "./Count"


const Main =()=>{
    let [age,setAge]=useState(25)
    let [salary,setSalary]=useState(25000)
    let increAge =useCallback(()=>{
        setAge(age+1)
    },[age])
    let increSalary =useCallback(()=>{
        setSalary(salary+5000)
    },[salary])
    return(
            <div>
             <Count data={age}> Age </Count>
             <Button Func={increAge}>Age increment</Button>
             <Count data={salary}>salary </Count>
             <Button Func={increSalary}>salary increment </Button>
            </div>
    )
}
export default Main