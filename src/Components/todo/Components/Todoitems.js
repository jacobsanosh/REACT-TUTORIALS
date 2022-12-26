import React from 'react'
function Todoitems(props) {
  // const [clicked, setclicked] = useState(false)

  // const strike_text=(event)=>{
  //   setclicked(!clicked)
  //   // console.log(clicked)
  //   console.log("the clicked item id is ",event.target.id)
   
  // }
  // console.log("props",props)
  return (
    <li id={props.data} onClick={()=>{
      props.onchecked(props.data);
    }} >{props.data}</li>
  )
}

export default Todoitems