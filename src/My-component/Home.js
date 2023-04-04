import React, { useState } from 'react'
import about from './home/about.png'
import abouthover from './home/abouthover.gif'
import contactus from './home/contact us.png'
import contactushover from './home/contactushover.gif'
import dailytask from './home/daily task.png'
import dailytaskhover from './home/daily task hover.gif'
import graph from './home/graph.png'
import graphhover from './home/graphhover.gif'
import matrix from './home/matrix.png'
import profile1 from './home/profile1.png'
import profilehover from './home/profilehover.gif'
import scheduletask from './home/scheduletask.png'
import scheduletaskhover from './home/scheduletaskhover.gif'
import "./image design.css"
import { NavLink } from 'react-router-dom'
import Header from "./Header"  // Use rfs
import {Footer} from "./Footer"   //Use rafc


export const Home = (props) => {
  const [showgraph, setGraph] = useState(graph);
  const [showschedule, setschedule] = useState(scheduletask);
  const [showprofile, setprofile] = useState(profile1);
  const [showcontact, setcontact] = useState(contactus);
  const [showabout, setabout] = useState(about);
  const [showdailytask, setdailytask] = useState(dailytask);
  return (
    <>
    <Header title="Life-Matrix"/>
<NavLink to='profile' ><img src={showprofile}  alt='notepage' className='homeoption'  onMouseEnter={() => setprofile(profilehover)} onMouseLeave={() => setprofile(profile1)}/></NavLink>
<NavLink to='schedule-task'><img src={showschedule}  alt='notepage' className='homeoption'  onMouseEnter={() => setschedule(scheduletaskhover)} onMouseLeave={() => setschedule(scheduletask)}/></NavLink>
<NavLink to='daily-task'><img src={showdailytask}  alt='notepage' className='homeoption'  onMouseEnter={() => setdailytask(dailytaskhover)} onMouseLeave={() => setdailytask(dailytask)}/></NavLink>
<NavLink to='graph'><img src={showgraph}  alt='notepage' className='homeoption' onMouseEnter={() => setGraph(graphhover)} onMouseLeave={() => setGraph(graph)}/></NavLink>
<NavLink to='matrix'><img src={matrix}  alt='notepage' className='homeoption'/></NavLink>
<NavLink to='contact-us'><img src={showcontact}  alt='notepage' className='homeoption'  onMouseEnter={() => setcontact(contactushover)} onMouseLeave={() => setcontact(contactus)}/></NavLink>
<NavLink to='about'><img src={showabout}  alt='notepage' className='homeoption'  onMouseEnter={() => setabout(abouthover)} onMouseLeave={() => setabout(about)}/></NavLink>
<Footer size={props.size}/>
    </>
  )
}
