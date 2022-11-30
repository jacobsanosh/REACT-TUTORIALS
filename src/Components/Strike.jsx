import React from "react";
// import "../App.scss"
let strikes = false;
let text_dec = { textDecoration: "line-through" };
let strike_through=()=>{
  console.log(document.getElementById('para'))
  document.getElementById("para").style.textDecoration = "line-through";
}
let  unstrike=()=>{
  document.getElementById("para").style.textDecoration='none'
}

function Strike() {
  return (
    <div className="Strike">
      {/* <p style={strikes ? text_dec : null}>demo text</p> */}
      <p id='para'>demo text</p>

      <button onClick={strike_through}>strike text</button>
      <button onClick={unstrike}>unstrike text</button>
    </div>
  );
}

export default Strike;
