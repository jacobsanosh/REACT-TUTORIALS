import React, { useState } from "react";

function Count() {
    const [count,setcount]=useState(0)
    let counter=()=>{
        console.log(count)
        setcount(count+1);
    }
    let reduce=()=>{
    
        setcount(count-1)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={counter}>Count</button>
      <button onClick={reduce}>decrease</button>
    </div>
  );
}

export default Count;
