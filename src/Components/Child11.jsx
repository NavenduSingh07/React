const Child11 =(props)=>{
    console.log(props);
    return(
        <div>
           <h1>{props.content[0].name}</h1>
           
           <h5>{props.content[1].name}</h5>
           <h6>{props.content[2].name}</h6>
        </div>
    )
}
export default Child11