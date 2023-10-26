
import { useState } from 'react';
import './App.css';
// import PropTypes from 'prop-types'
// let name = "Vineet"
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
//import React,{useState} from 'react';
function App() {
 const[mode,setMode] = useState('light');
//  const[alert,setAler]=useState(null);

//  const showAlert=(message,type)=>{
    
//  }

 const toggleMode=()=>{
  if(mode==="light"){
    setMode("dark");
    document.body.style.backgroundColor="black";
  }
  else{
    setMode("light");
    document.body.style.backgroundColor="white";
  }
 }
  return (
    <>
      <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode}/>
      <Alert/>
      <div className='container my-3'>
      <Textform mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
