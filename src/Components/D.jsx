import { useContext } from "react"
import {User} from '../App'
 const D =()=>{
    let Content=useContext(User)
    return(
        <div>
            {Content}
         
        </div>
    )
}
export default D
