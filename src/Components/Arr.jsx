const Arr =(props)=>{
    console.log(props)
    return(
        <div>

         <h1>Hello {props.abc[1] } </h1>
         <h1>Hello {props.abc[0] } </h1>
         <h1>Hello {props.abc[2] } </h1>
        </div>
    )
} 
export default Arr