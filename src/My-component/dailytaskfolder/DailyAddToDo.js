
import React, {useState} from 'react'
import {Col, Row} from "reactstrap";

export const DailyAddToDo = (props) => {

  const[title,setTitle] = useState("");
  const[time,setTime] =useState("20:00");

  // const[matrix,setMatrix] =useState("");

  const submit=(e)=>{
      e.preventDefault();    //so that page will not reload
      if(!title || !time){
          alert("Title and deadline can not be blank");
      }
      else{
          props.addTodo(title, time);
          setTitle("");
      }
  }

return (
  <div className='container my-3'>
  <form className="row g-3" onSubmit={submit}>
    <Row>
      <Col lg={12}>
<div className="col-md-6">
<label htmlFor="title">Title:</label>
  <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" placeholder="Title"/>
  
</div>
</Col>
<Col lg={12}>

<div className="col-md-6">
<label htmlFor="deadline">Deadline:</label>
  {/* <input type="date" className="form-control" value={date} onChange={(e)=>setDate(e.target.value)}/> */}
  <input type="time" className="form-control" value={time} onChange={(e)=>setTime(e.target.value)}/>
  
</div>
</Col>


<Col lg={12}>
<div className="col-12">
  <button type="submit" className="btn btn-sm btn-success">Submit</button>
</div>
</Col>
</Row>
</form>
</div>
)
}
