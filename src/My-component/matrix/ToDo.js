import React from 'react'
import '../image design.css';

export const ToDo = ({todo, onDelete, check}) => {  //in place of props we are directly importing todo  called as Destructured.
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    if(todo.matrix===check){
    return (
    <div style={mystyle} >
      <table cellPadding={"20px"}>
        <tr>
        <th><h4>{todo.title}</h4></th>
        <th rowSpan={"2"}>
        <button className='btn btn-sm btn-danger rounded-circle' onClick={()=>{onDelete(todo)}}>❌</button>  {/* //we are using ()=> because we want to call the function not to pass the function */}
        </th>
        </tr>
        <tr>
        {todo.date + " " +todo.time}
        </tr>
        
      </table>
      <hr/>
    </div>
    
  )
    }
}
