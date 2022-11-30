import React, { useState } from 'react'

function Timer() {
    
    const [c_time,u_time]=useState(new Date().toLocaleTimeString())
    console.log(c_time)
    let chage_time=()=>{
        u_time(new Date().toLocaleTimeString())
    }
    setInterval(chage_time,1000)
  return (
    <div>
        <h1>{c_time}</h1>
        <button onClick={chage_time}>show_time</button>
    </div>

  )
}

export default Timer