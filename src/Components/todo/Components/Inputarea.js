import React,{useState} from "react";

function Inputarea(props) {
    const [text, setText] = useState("")
    const callOnchange=(event)=>{
        setText(event.target.value)
        // console.log(event.target.value)
    }
  return (
    <div>
     
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={callOnchange} value={text}/>
        <button onClick={()=>{
            props.adddata(text)
            setText("")
        }}>
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}

export default Inputarea;
