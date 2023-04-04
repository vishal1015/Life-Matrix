// import React from 'react'
import horizontalline from './horizontal line.png'
import verticalline from './vertical line.png'
import "./image design.css"
import {IU} from './matrix/IU'
import React from 'react'
import Header from "./Header"  // Use rfs
import {Footer} from "./Footer"   //Use rafc






export const Matrix = (props) => {


  return (
    <>

    <img src={verticalline}  alt='x axis' className='linevertical'/>
    <img src={horizontalline}  alt='y axis' className='linehorizontal'/>


    <div className='iu graphbox'>
      <h1>Important & Urgent</h1>
      <IU check={"Important & Urgent"}/>
    
    </div>

    
    <div className='inu graphbox'>
    <h1>Important & Not Urgent</h1>
    <IU check={"Important & Not Urgent"}/>
      </div>


    <div className='niu graphbox'>
    <h1>Not Important & Urgent</h1>
    <IU check={"Not Important & Urgent"}/>
      </div>


    <div className='ninu graphbox'>
    <h1>Not Important & Not Urgent</h1>
    <IU check={"Not Important & Not Urgent"}/>
    </div>
    <Header title="Life-Matrix"/>
    <Footer size={props.size}/>
    </>
  )
}
