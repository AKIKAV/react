 import React, { Component } from 'react'
 import STYLE from "./counter.module.css"
 
 export default class Counter extends Component {
    constructor(){
        super()
        this.state={count:0}
    }
    increment =()=>{
        this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})
    }
    reset=()=>{
        this.setState({count:0})
    }
   render() {
     return ( 
       <div className={STYLE.main}>
          <h1> {this.state.count}</h1>
          <div className={STYLE.block}>
            <button onClick={this.increment}>+ increment</button>    
            <button onClick={this.decrement}>- decrement</button>
            <button onClick={this.reset}>RESET</button>
          </div>
       </div> 
     )
   }
 }
 
