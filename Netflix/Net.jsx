 import React from "react";
 import STYLE from "./net.module.css"

 const Net=()=>{
    return(
        <nav className={STYLE.main}>
            <ul className={STYLE.imtag}>
                <img src="https://logosmarcas.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="" />
            </ul>
            <ul className={STYLE.block}>
                <li><a href="">Home</a></li>
                <li><a href="">TV Shows</a></li>
                <li><a href="">Movies</a></li>
                <li><a href="">Originals</a></li>
                <li><a href="">Recently added</a></li>
                <li><a href="">My list</a></li>
            </ul>
            <ul className={STYLE.search}><input type="text"  placeholder="search here"/> 
            <button>search</button></ul>
            <ul className={STYLE.login}> <li><a href="">Login</a></li>
             <li><a href="">Sign in</a></li>
            </ul>

        </nav>
    )
 }
 export default Net