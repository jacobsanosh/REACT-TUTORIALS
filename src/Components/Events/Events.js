import React, { useState } from "react";
import './Events.css'

function Events() {
  const[text,setText]=useState("")
  const[isover,setIsover]=useState(false)
  const[text_value,setTextvalue]=useState("")
  const login=(data)=>{
    setText(data)
    console.log("clicked",data)
  }
  const onOver=()=>{
      // document.getElementById('id').
      setIsover(!isover)
  }
  const show_onchange=(event)=>{
    console.log("display",event.target.value)//to see the values
    // console.log("display",event.target.type)//to see the type
    // console.log("display",event.target.type)//to see the type
    setText(event.target.value)
  }
  const display=(event)=>{
    // alert("hi")
    console.log('You clicked submit.');
    setTextvalue(text)
    event.preventDefault();
  }
  
  return (
    <div>
      <div className="login-page">
        <h1>{"hello "+text_value}</h1>
        <h1>{text}</h1>
        <div className="form">
          <form className="login-form" onSubmit={display}>
            <input type="text" placeholder="username" onChange={show_onchange} value={text}/>
            <input type="password" placeholder="password" />
            {/* <button id="login" onClick={()=>{login("sanosh")}} onMouseOver={()=>{onOver()}} style={{backgroundColor:isover?"red":"blue"}} onMouseLeave={()=>{onOver()}}>login</button>  */}
             <button id="login" type="submit">login</button>
            {/* <button >login</button> */}
            <p className="message">
              Not registered? <a href="/">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Events;
