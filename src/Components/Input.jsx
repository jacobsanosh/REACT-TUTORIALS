import React from "react";


function Input(props) {
  return (
    <div>
      <li>
        <label htmlFor={props.lname}></label>
        <props.tag  type="text" className={props.className} id={props.id} name={props.name} placeholder={props.placeholder} required/>
      </li>
    </div>
  )
}

export default Input
