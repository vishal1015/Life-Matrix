import plussign from './plussign.png'
import "./image design.css"
import { Modal, ModalBody, ModalHeader,} from "reactstrap";
import {DailyAddToDo} from "./dailytaskfolder/DailyAddToDo";
import {DailyToDos} from "./dailytaskfolder/DailyToDos"
import React, { useState, useEffect } from 'react'
import Header from "./Header"  // Use rfs
import {Footer} from "./Footer"   //Use rafc

export const DailyTask = (props) => {
   // This is for the popup window
  const [modal, setmodal] = useState(false)
  const [editmodal, seteditmodal] = useState(false)

    let initTodo;
    if(localStorage.getItem("dailytodos")===null){
      initTodo=[];
    }
    else {
      initTodo=JSON.parse(localStorage.getItem("dailytodos"));
    }
  
  const onDelete = (dailytodo)=>{
    console.log("The dailytodo is deleted dailytodo", dailytodo);
    setTodos(dailytodos.filter((e)=>{
      return e!==dailytodo;
    }));
  
    localStorage.setItem("dailytodos",JSON.stringify(dailytodos));
  
  }

  const editTodo = (dailytodo)=>{
    seteditmodal(true)
    let sno;
    if(dailytodos.length===0){
      sno=0
    }
    else{
      sno = dailytodos[dailytodos.length-1].sno+1
  
    }
   
  //  const myTodo={
  //   sno:sno,
  //   title: title,
  //   date: date,
  //   time: time,
  //   matrix: matrix
  //  }
  //  setTodos([...dailytodos,myTodo]);
  //  console.log("Added: ", myTodo)
    
  }
  
  const addTodo = (title,time) =>{
    let sno;
    if(dailytodos.length===0){
      sno=0
    }
    else{
      sno = dailytodos[dailytodos.length-1].sno+1
  
    }
   
   const myTodo={
    sno:sno,
    title: title,
    time: time,
   }
   setTodos([...dailytodos,myTodo]);
   console.log("Added: ", myTodo)
    
   
  }
  
    const [dailytodos,setTodos] = useState(initTodo);
  
    //setTodos take time to change. Therefore it may be possible before changing we move forward. So we need useEffect.
    useEffect(() => {
      localStorage.setItem("dailytodos",JSON.stringify(dailytodos));
     
     }, [dailytodos])
     
  


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
       
      </ModalHeader>
      <ModalBody>
      {/* <Editdailytodo editTodo={editTodo}/>   */}
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
        Add the daily task
      </ModalHeader>
      <ModalBody>
      <DailyAddToDo addTodo={addTodo}/>  
      </ModalBody>

    </Modal>
    <Header title="Life-Matrix"/>
    <DailyToDos dailytodos={dailytodos} onDelete={onDelete} onEdit={editTodo}/>
    <Footer size={props.size}/>
    <a ><img src={plussign} alt ="button" className ='roundimage' onClick={()=>setmodal(true)} /></a>
    </>
  )
}
