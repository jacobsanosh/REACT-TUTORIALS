import './Complex.css'
import React, { useState } from 'react'

function Complex_parctice() {
    const [data, setdata] = useState({
        fName:"",
        lName:"",
        email:""
    })
    //for setting data from input field
    const setting_data=(event)=>{
        // console.log("setting_data")
        const {name,value}=event.target;
        // console.log(name,value)
        setdata((prev)=>{
            console.log(prev)
            // if(name==='fName')
            // {
            //     return{
            //         fname:value,
            //         lname:prev.lname,
            //         email:prev.email
            //     }
            // }
            // else if(name==='lName')
            // {
            //     return{
            //         fname:prev.fname,
            //         lname:value,
            //         email:prev.email
            //     }
            // }
            // else
            // {
            //     return{
            //         fname:prev.fname,
            //         lname:prev.lname,
            //         email:value
            //     }
            // }

            //using spread operator
            return{
                ...prev,
                [name]:value
            }
        })
    }
  return (
    <div>
      <div className="container">
        <h1>
          Hello {data.fName} {data.lName}
        </h1>
        <p>{data.email}</p>
        <form>
          <input
            name="fName"
            placeholder="First Name"
            onChange={setting_data}
          />
          <input
            name="lName"
            placeholder="Last Name"
            onChange={setting_data}
          />
            <input
            name="email"
            placeholder="enter email"
            onChange={setting_data}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Complex_parctice;
