
import {ToDos} from "./ToDos"
import {Addtodo} from "./Addtodo"
import {Edittodo} from "./Edittodo"
import React, {useState,useEffect} from 'react'
import plussign from './plussign.png'
import "./image design.css"
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import Header from "./Header"  // Use rfs
import {Footer} from "./Footer"   //Use rafc


export const ScheduleTask = (props) => {
  // This is for the popup window
  const [modal, setmodal] = useState(false)
  const [editmodal, seteditmodal] = useState(false)

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

  const editTodo = (todo)=>{
    console.log("The todo is updated todo", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

    let usno=todo.sno;
    
    let utitle=todo.title; 
    let udate=todo.date; 
    let utime=todo.time; 
    let umatrix=todo.matrix;    
    
   
   const myTodo={
    sno:usno,
    title: utitle,
    date: udate,
    time: utime,
    matrix: umatrix
   }
   setTodos([...todos,myTodo]);
   console.log("Added: ", myTodo)
    
   
  
    localStorage.setItem("todos",JSON.stringify(todos));
  
    
  }
  
  const addTodo = (title, date, time, matrix) =>{
    let sno;
    if(todos.length===0){
      sno=0
    }
    else{
      sno = todos[todos.length-1].sno+1
  
    }
   
   const myTodo={
    sno:sno,
    title: title,
    date: date,
    time: time,
    matrix: matrix
   }
   setTodos([...todos,myTodo]);
   console.log("Added: ", myTodo)
    
   
  }
  
    const [todos,setTodos] = useState(initTodo);
  
    //setTodos take time to change. Therefore it may be possible before changing we move forward. So we need useEffect.
    useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos));
     
     }, [todos])
     
  


  return (
    <>
    <Modal
      size='lg'
      isOpen={editmodal}
      toggle={()=>seteditmodal(!editmodal)}
    >
      <ModalHeader
        toggle={()=>seteditmodal(!editmodal)}
      >
        Edit the todo
      </ModalHeader>
      <ModalBody>
      <Edittodo editTodo={editTodo}/>  
      </ModalBody>

    </Modal>
    <Modal
      size='lg'
      isOpen={modal}
      toggle={()=>setmodal(!modal)}
    >
      <ModalHeader
        toggle={()=>setmodal(!modal)}
      >
        Add a ToDo
      </ModalHeader>
      <ModalBody>
      <Addtodo addTodo={addTodo}/>  
      </ModalBody>

    </Modal>
    <Header title="Life-Matrix"/>
    <ToDos todos={todos} onDelete={onDelete} onEdit={editTodo}/>
    <Footer size={props.size}/>
    <a ><img src={plussign} alt ="button" className ='roundimage' onClick={()=>setmodal(true)} /></a>
    </>
  )
}
