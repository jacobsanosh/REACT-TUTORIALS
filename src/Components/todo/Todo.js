import React, { useState } from 'react'
import './Todo.css'
import Todoitems from './Components/Todoitems'
function Todo() {
   const [text, setText] = useState("")
   const [array, setArray] = useState([])
    const addItem=()=>{
      console.log("adding items")
      setArray((prev)=>{
        return [...prev,text]
      })
      console.log(array)
      setText("")
    }
    
    const callOnchange=(event)=>{
      setText(event.target.value)
      // console.log(text)
    }

    const deleteItem=(itemId)=>{
      console.log("on clicked delete item",itemId)
      const demo=array.filter((items,index)=>{
          return items!==itemId
      })
      console.log("datas are",demo)
      setArray(demo)
      // setArray((prev)=>{
      //   return prev.filter((item,index)=>{
      //     console.log(item)
      //     return index !==itemId
      //   })
      // })
    }
   
  return (
    <div className="container">
    <div className="heading">
      <h1>To-Do List</h1>
    </div>
    <div className="form">
      <input type="text" onChange={callOnchange} value={text}/>
      <button onClick={addItem}>
        <span>Add</span>
      </button>
    </div>
    <div>
      <ul>
        {array.map((items,index)=>{
          return<Todoitems key={index} data={items} onchecked={deleteItem}/>
        })}
      </ul>
    </div>
  </div>
  )
}

export default Todo