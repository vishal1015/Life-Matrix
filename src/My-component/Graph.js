import React from 'react'
import Header from "./Header"  // Use rfs
import {Footer} from "./Footer"   //Use rafc


export const Graph = (props) => {
  return (
    <>
    <Header title="Life-Matrix"/>
    <p>This is the graph page.</p>
    <Footer size={props.size}/>

    </>
  )
}
