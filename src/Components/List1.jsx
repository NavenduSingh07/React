import { useState } from "react"
import dummy from "./userData.json"
const List1 =()=>{
    let[abc,setAbc] = useState(dummy)
    return(
        <div>
            {abc.map((x)=>{
                return(
                    <div>
                     <h1>{x.login}</h1>
                     <h2>{x.id}</h2>
                     <img src={x.avatar_url}  />
                    </div>
                )}
                
            )}

        </div>
    )
}
export default List1