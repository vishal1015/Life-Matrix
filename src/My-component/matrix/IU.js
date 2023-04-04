
import React, {useState,useEffect} from 'react'
import "../image design.css"
import {ToDos} from "./ToDos"



export const IU = (props) => {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else {
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

const onDelete = (todo)=>{
  console.log("The todo is deleted todo", todo);
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }));

  localStorage.setItem("todos",JSON.stringify(todos));

}





  const [todos,setTodos] = useState(initTodo);

  //setTodos take time to change. Therefore it may be possible before changing we move forward. So we need useEffect.
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
   
   }, [todos])


  return (
    <>
    <ToDos todos={todos} onDelete={onDelete} check={props.check} />
    </>
  )
}
