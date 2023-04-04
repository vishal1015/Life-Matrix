import React, {useState} from 'react'
import {Col, Row} from "reactstrap";

export const Edittodo = (props) => {
  const[title,setTitle] = useState("");
  const[date,setDate] =useState("");
  const[time,setTime] =useState("");
  const[matrix,setMatrix]=useState("Important & Urgent")
  // const[matrix,setMatrix] =useState("");

  const submit=(e)=>{
      e.preventDefault();    //so that page will not reload
      if(!title || ! date || !time){
          alert("Title and deadline can not be blank");
      }
      else{
          props.addTodo(title, date, time, matrix);
          setTitle("");
          
          setMatrix("Important & Urgent");
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
  <input type="date" className="form-control" value={date} onChange={(e)=>setDate(e.target.value)}/>
  <input type="time" className="form-control" value={time} onChange={(e)=>setTime(e.target.value)}/>
  
</div>
</Col>

<Col lg={12}>
<div className="col-md-6">
<label htmlFor="matrix" >Matrix:</label>
  
  <Col lg={12}>
  <select value={matrix} onChange={(e)=>setMatrix(e.target.value)}>
    <option value="Important & Urgent" >Important & Urgent</option>
    <option value="Important & Not Urgent" >Important & Not Urgent</option>
    <option value="Not Important & Urgent" >Not Important & Urgent</option>
    <option value="Not Important & Not Urgent" >Not Important & Not Urgent</option>
  </select>
  </Col>
  
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
