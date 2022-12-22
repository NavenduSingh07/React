import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const FetchData =()=>{
    let [content, setContent] = useState([])
    let [id,setId]=useState("")
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            setContent(response.data)
            // console.log(response.data);
            //setContent(response.data)
        })
        .catch(()=>{
            console.log("please give me data ");
        })
    },[id])
    let idData=(e)=>{
        setId(e.target.value)
    }
    console.log(id)
    return(
        <div>
            {content.map((x)=>{
                return(
                    <div>
                      <h1>{x.id}</h1>
                      <h1>{x.title}</h1>
                      <h1>{x.body}</h1>
                      <input type="text"  value={id} onChange={idData}/>
                       {content.title}
                    </div>
                )
            })}
        </div>
    )
}
export default FetchData