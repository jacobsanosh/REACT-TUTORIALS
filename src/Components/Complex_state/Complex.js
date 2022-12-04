import React, { useState } from 'react'
import './Complex.css'
//adding hooks

// function Complex() {
//     const [fname,setFname]=useState("")
//     const [lname,setLname]=useState("")
//     const fnameText=(event)=>{
//         setFname(event.target.value)
//         // console.log(fname)
//     }
//     const lnameText=(event)=>{
//         setLname(event.target.value);
//     }
//   return (
//     <div className="container">
//       <h1>{"Hello "+fname+" "+lname}</h1>
//       <form>
//         <input name="fName" placeholder="First Name" onChange={fnameText} value={fname}/>
//         <input name="lName" placeholder="Last Name" onChange={lnameText} value={lname}/>
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

//using object
function Complex() {
    const [full_name,setFull_name]=useState({
        fName:"",
        lName:""
    })
    const full_name_Text=(event)=>{
        // const newvalue=event.target.value; 
        // const inputName=event.target.name;
        const {name,value}=event.target ;
        setFull_name((prevValue)=>{
            console.log(prevValue)
            if(name=="fName")
            {
                return{
                    fName:value,
                    lName:prevValue.lName
                }
            }
            else{
                return{
                    fName:prevValue.fName,
                    lName:value
                }
            }
        })
        // console.log(full_name)
    }
   
  return (
    <div className="container">
      <h1>Hello {full_name.fName} {full_name.lName}</h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={full_name_Text} value={full_name.fName}/>
        <input name="lName" placeholder="Last Name" onChange={full_name_Text} value={full_name.lName}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Complex
