import React from 'react'
import {ToDo} from './ToDo'

export const ToDos = (props) => {

  let myStyle={
    minHeight:"70vh",
    margin: "40px auto"
  }

  return (
    <div className="container my-3" style={myStyle}>
    
    
    {/* <ToDo todo={props.todos[0]}/> */}

    {props.todos.length===0?"Hurray! No task left to do":
    props.todos.map((todos)=>{
      return ( 
      <>
      <ToDo todo={todos} key = {todos.sno} onDelete={props.onDelete} check={props.check}/>
      </>
      );
      // eslint-disable-next-line
      })
    }
    </div>
  )
}
