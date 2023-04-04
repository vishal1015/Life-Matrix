import React, { useState }  from 'react'
import closebin from '../close bin.png'
import openbin from '../open bin.png'
// import editpen from '../editpen.png'

export const DailyToDo = ({dailytodo, onDelete}) => {  //in place of props we are directly importing dailytodo  called as Destructured.
  const [count, setCount] = useState(closebin);
  return (
    <>
      <h4>{dailytodo.title}</h4>
      <p>{dailytodo.time}</p>

      
      {/* <button className='btn btn-sm ' onClick={()=>{onEdit(dailytodo)}}><img src={editpen} height="40px" title="Edit"/></button>   */}
      <button className='btn btn-sm ' onMouseEnter={() => setCount(openbin)} onMouseLeave={() => setCount(closebin)} onClick={()=>{onDelete(dailytodo)}}><img src={count} height="50px" title="Delete" alt='delete'/></button>  {/* //we are using ()=> because we want to call the function not to pass the function */}
      </>
  )
}
