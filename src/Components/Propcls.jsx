import { Component } from "react"; 
class Propcls extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                Props Class 
                {this.props.data}
            </div>
        )
    }
}
export default Propcls