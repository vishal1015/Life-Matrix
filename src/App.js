import React from 'react'
import './App.css';
import Header from "./My-component/Header"  // Use rfs
import {Footer} from "./My-component/Footer"   //Use rafc
import { ScheduleTask } from './My-component/ScheduleTask';
import { Home } from './My-component/Home';
import { DailyTask } from './My-component/DailyTask';
import { Graph } from './My-component/Graph';
import { Matrix } from './My-component/Matrix';
import { ContactUs } from './My-component/ContactUs';
import {IU} from './My-component/matrix/IU';


import {About} from "./My-component/About"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";





function App() {
  // it is jss and we use JavaScript React in place of Javascript(see down-right)


  
  return (
  <>   {/* Need to include in return */}
  <Router>
 
  
   
{/* Here is the frontend according to the address */}
 <Routes>

        <Route path="/" element={<Home size="5vh"/>}/>
        <Route path="/schedule-task" element={<ScheduleTask size="8vh"/>}/>
        <Route path="/daily-task" element={<DailyTask size="8vh"/>}/>
        <Route path="/graph" element={<Graph size="76vh"/>}/>
        <Route path="/matrix" element={<Matrix size="83vh"/>}/>
        <Route path="/contact-us" element={<ContactUs size="76vh"/>}/>
        <Route path="/about" element={<About size="79vh"/>}/>
        
 </Routes>
   
   </Router>
    </>
  );
  
}

export default App;


