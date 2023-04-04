import React from 'react'
import Header from "./Header"  // Use rfs
import {Footer} from "./Footer"   //Use rafc

export const ContactUs = (props) => {
  return (
    <>
    <Header title="Life-Matrix"/>
    <p>This is for Contact us</p>
    <Footer size={props.size}/>
    </>
  )
}
