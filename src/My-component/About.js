import React from 'react'
import Header from "./Header"  // Use rfs
import {Footer} from "./Footer"   //Use rafc

export const About = (props) => {
  return (
    <>
    <Header title="Life-Matrix"/>
    <div>This is an about component</div>
    <Footer size={props.size}/>
    </>
  )
}
