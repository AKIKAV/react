import React from "react";
import Nav from './Components/Nav';
// import "./global.css"
import Medi from './navigation/Medi';
import Foodi from './navigation/Foodi';
import Resto from './navigation/Resto';
import Shopi from './navigation/Shopi';
import Tripsi from './navigation/Tripsi';
import Net from './Netflix/Net';




const App=()=>{
    return(
        <>
       {/* <Nav/><br /> */}
       {/* <Medi/><br />
       <Foodi/><br />
       <Resto/><br />
       <Shopi/><br />
        <Tripsi/> */}
        <Net/>
        </>
    )
}
export default App