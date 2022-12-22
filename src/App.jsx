import Child from "./Components/Child"
import Child1 from "./Components/Child1"
import Clscomp from "./Components/Clscomp"
import Clscomp1 from "./Components/Clscomp1"
import Arr from "./Components/Arr"
import Child11 from "./Components/Child11"
import Props1 from "./Components/Props1"
import Propcls from "./Components/Propcls"
import State from "./Components/State"
import Q2 from "./Components/Q2"
import Task3 from "./Components/Task3"
import Array from "./Components/Array"
import List from "./Components/List"
import List1 from "./Components/List1"
import Navbar from "./Components/Navbar"
// import "./global.css"
import Spotify from "./Components/Spotify"
import Ref from "./Components/Ref"
import Theme from "./Components/Theme"
import Uncontrolled from "./Components/Uncontrolled"
import Hotstar from "./Components/Hotstar"
import Spacex from "./Components/Spacex"
import ZeeN from "./Components/ZeeN"
import GoDaddy from "./Components/GoDaddy"
import Controled from "./Components/Controled"
import A from "./Components/A"
import B from "./Components/B"
import A1 from "./Components/A1"
import Useeffect from "./Hooks/Useeffect"
import FetchData from "./Components/FetchData"
import { createContext } from "react"
import D from "./Components/D"
import Main from "./Components/Main"
import Navbar1 from "./Components/Navbar1"


export let User =createContext()
const App =()=>{
    // let abc =[
    //     {name:"HTML"},
    //     {name:"CSS"},
    //     {name:"JS"}
    // ]
    return(
        <div>
            {/* <Main/> */}
            <Navbar1/>


            {/* <User.Provider value="hi">
           
             <D/>
            </User.Provider> */}
         {/* Hello world! */}
         {/* <Child></Child>   
         <Clscomp/>
         <Clscomp1/> */}

         {/* <Props1> <h1> world</h1></Props1>
         <Props1> <h1> galexy</h1></Props1>
         <Props1> <p>universe</p> </Props1> */}
         {/* <Q2/> */}

         {/* <Task3/>  */}

         {/* <Array/> */}

         {/* <List/> */}

         {/* <List1/> */}

         {/* <Controled/> */}

         {/* <Navbar/>  */}

         {/* <Spotify/> */}
         {/* <Hotstar/> */}
         {/* <Spacex/> */}

         {/* <ZeeN/>*/} 

         {/* <GoDaddy/> */}

         {/* <Ref/> */}

         {/* <Theme/> */}
         {/* <B/>
         <A/>
         <A1/> */}

         {/* <Uncontrolled/> */}

         {/* <State/> */}

         {/* <Useeffect/> */}

         {/* <FetchData/> */}

         {/* <Propcls data="React-js"/> */}
         {/* 
         <div>
         <Child11 content={abc}/>
         </div> */}
          {/* <div>
           <Child1  abc="world 2"/>
           <Child1  abc="galaxy"/>
           <Child1  abc="universe"/>

           <Arr abc={["hy", "hello", "bye"]}/>
          </div> */}
        </div>
    )
}
export default App