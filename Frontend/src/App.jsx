import React from 'react';
import Home from '../src/home/Home.jsx';
import Courses from './courses/Courses.jsx';
import Signup from './components/Signup.jsx';
import {} from "react-router-dom";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
  
  {/* first of all  intstall react-router-dom on terminal and also import above */}
     <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    
    <Route path="/" element={<Home/>}/> 
    <Route path="/course" element={<Courses/>}/>
    <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App;