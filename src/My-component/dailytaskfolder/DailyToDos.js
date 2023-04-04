import React from 'react'
import {DailyToDo} from './DailyToDo'
import '../image design.css'

export const DailyToDos = (props) => {
  const current = new Date();
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  const date = `${current.getDate()-31} ${MONTHS[current.getMonth()]}`;

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
    <span>D</span>
    <span>a</span>
    <span>i</span>
    <span>l</span>
    <span>y</span>
    <span> </span>
    <span>T</span>
    <span>o</span>
    <span>D</span>
    <span>o</span>
    <span>s</span>
    </h3>
    
    {/* <ToDo dailytodo={props.dailytodos[0]}/> */}
    <table className='TODOTABLE'>
      <tr>
      <th className='firstrow'>Task</th>
            
      
      <th className='firstrow'>{current.getDate()-14} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-14} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-14} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-14} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-14} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-14} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-14} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-14} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-14} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-14} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-14} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-14} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-14} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-14} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-14} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-14} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-13} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-12} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-11} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-10} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-9} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-8} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-7} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-6} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-5} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-4} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-3} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-2} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()-1} {MONTHS[current.getMonth()]}</th>
      <th className='firstrow'>{current.getDate()} {MONTHS[current.getMonth()]}</th>
      </tr>
    
    {
    props.dailytodos.map((dailytodos)=>{
      return ( 
      <>
      <tr>
        <th >
      <DailyToDo dailytodo={dailytodos} key = {dailytodos.sno} onDelete={props.onDelete} onEdit={props.onEdit}/>
      </th>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      <td><input type="checkbox" /></td>
      </tr>
      </>
      );
      // eslint-disable-next-line
      {/*key sno. is unique so it is use for key */}
    })}
    
    </table>
    </div>
  )
}
