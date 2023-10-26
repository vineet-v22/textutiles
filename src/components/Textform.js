import React, { useState } from 'react'

export default function Textform(props) {
  const [text, setText] = useState('');
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleCopy= () =>{
    console.log("Text copy");
    var text=document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
  }
  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const handlespaces = () => {
    console.log("Extra spaces will be removed");
    let newtext = text.replace(/\s+/g, " ");
    setText(newtext);
}
  const handleOnchange = (event) => {
    console.log("On change");
    setText(event.target.value);
  }
  const handleClear=()=>{
    setText(" ");
  }
  return (
    <>
    <div className='container' style={{color: props.mode==='dark' ?'white':'black'}}>
      <div className="mb-3">
        <h2>Enter Text To Analyse</h2>
        <textarea className="form-control" value={text}  onChange={handleOnchange} style={{backgroundColor: props.mode==='light' ?'white':'black',color: props.mode==='dark' ?'white':'black'}}  id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleUpClick}> Convert to UPPER CASE</button>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleLoClick}> Convert to lower case</button>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handlespaces}>Remove extra spaces</button>
      <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark' ?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((elements)=>{return elements.length!==0}).length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((elements)=>{return elements.length!==0}).length} minutes to read the texts</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
