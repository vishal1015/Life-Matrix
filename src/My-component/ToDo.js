import React, { useState } from 'react';
import closebin from './close bin.png'
import openbin from './open bin.png'
import editpen from './editpen.png'


export const ToDo = ({todo, onDelete, onEdit}) => {  //in place of props we are directly importing todo  called as Destructured.
  const [count, setCount] = useState(closebin);


  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.date + " " +todo.time}</p>

      <p>{todo.matrix}</p>
      
      <button className='btn btn-sm ' onClick={()=>{onEdit(todo)}}><img src={editpen} height="40px" title="Edit"/></button>  
      <button className='btn btn-sm ' onMouseEnter={() => setCount(openbin)} onMouseLeave={() => setCount(closebin)} onClick={()=>{onDelete(todo)}}><img src={count} height="50px" title="Delete"/></button>  {/* //we are using ()=> because we want to call the function not to pass the function */}
    </div>
  )
}
