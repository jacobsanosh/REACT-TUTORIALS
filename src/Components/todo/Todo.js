import React, { useState } from 'react'
import './Todo.css'
import Todoitems from './Components/Todoitems'
import Inputarea from './Components/Inputarea'
function Todo() {

   const [array, setArray] = useState([])
    const addItem=(nextitem)=>{
      console.log("adding items")
      setArray((prev)=>{
        return [...prev,nextitem]
      })
      // setText("")
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
    <Inputarea adddata={addItem}/>
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