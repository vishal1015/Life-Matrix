import React from 'react'
import {ToDo} from './ToDo'
import './image design.css'

export const ToDos = (props) => {

  let myStyle={
    minHeight:"70vh",
    margin: "40px auto"
  }

  let h3style={
    padding: "5px 11px" 
  }

  return (
    <div className="container my-3" style={myStyle}>
    <h3 className='headback bounce wrapper ten' style={h3style}> 
    <span>T</span>
    <span>o</span>
    <span>D</span>
    <span>o</span>
    <span>s</span>
    </h3>
    
    {/* <ToDo todo={props.todos[0]}/> */}

    {props.todos.length===0?"Hurray! No task left to do":
    props.todos.map((todos)=>{
      return ( 
      <>
      <ToDo todo={todos} key = {todos.sno} onDelete={props.onDelete} onEdit={props.onEdit}/><hr/> 
      </>
      );
      // eslint-disable-next-line
      {/*key sno. is unique so it is use for key */}
    })}
    </div>
  )
}
