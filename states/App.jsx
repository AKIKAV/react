// import React from "react";
// import Nav from './Components/Nav';
// // import "./global.css"
// import Medi from './navigation/Medi';
// import Foodi from './navigation/Foodi';
// import Resto from './navigation/Resto';
// import Shopi from './navigation/Shopi';
// import Tripsi from './navigation/Tripsi';
// import Net from './Netflix/Net';
// import Place from './tourist places/Place';
// import JSON from "./data.json"




// const App=()=>{
//     return(
//         <>
    //    {/* <Nav/><br /> */}
    //    {/* <Medi/><br />
    //    <Foodi/><br />
    //    <Resto/><br />
    //    <Shopi/><br />
    //     <Tripsi/> */}
    //     {/* <Net/> */}
//         <Place paylode={JSON}/>
//         </>
//     )
// }
// export default App

import React, { Component } from 'react'
import JSON from "./student.json"
import Std from './states/Std';
 
 
 


export default class App extends Component {
constructor(){
    super()
    this.state={json:JSON}
}
  render() {
    return (
      <div>
        <Std data={this.state.json}/>
      </div>
    )
  }
}
