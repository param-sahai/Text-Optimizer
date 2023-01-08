import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpperCase = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Uppercase", "success");
  }
  const handleLowerCase = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lowercase", "success");
  }
  const handleWhiteSpaces = ()=>{
    let newText = text.replace(/\s+/g,' ').trim();
    setText(newText);
    props.showAlert("Removed Extra Spaces", "success");
  }
  
  const handleMailId = ()=>{
    const emailIDs= new Set();
    var re = /[^< ]+(?=>)/g;
    try{

      text.match(re).forEach(function(email) {
        emailIDs.add(email);
      });
      let newText = Array.from(emailIDs).join('\n');
      setText(newText);
      props.showAlert("Email ID's found!", "success");
    }
    catch{
      props.showAlert("No email id's were found!","danger");
      setText(text);
    }
  }

  const handleOnChange = (event) =>{
    setText(event.target.value);
  }

  const[text, setText] = useState('');

  return (
    <>
    <div className="container mb-2"  style={{color: props.mode==='dark' ? 'white': 'black'}}>

    <h1 className='mb-3'>{props.displayText}</h1>
    <h5 className='mb-3'>{props.subHeading}</h5>
    <form>
  <div className="form-group mb-3">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" value={text} placeholder='Enter something here!' style={{backgroundColor: props.mode==='dark' ? '#082b5e': 'rgb(238 242 249)', color: props.mode==='dark' ? 'white': 'black'}} onChange={handleOnChange}></textarea>
  </div>
</form>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpperCase}>Convert to UPPERCASE</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerCase}>Convert to lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleMailId}>Extract mail id's</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleWhiteSpaces}>Remove Extra Whitespaces</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark' ? 'white': 'black'}}>
        <h2>Text summary:</h2>
        <p>{(text.trim())===''? 0 : text.trim().split(/\s+/).length} words 
        <br/> {text.length} characters (with spaces) 
        <br/> {(text.length)>0 ? text.length+1 - (text.split(/\s+/).length): 0} characters (without spaces) 
        <br/> {text.trim().length===0? 0 : 0.005 * text.split(/\s+/).length} minute read
        </p>
        <h2>Preview</h2>
        <p>{(text.length===0)?'Write something first': text}</p>
    </div>
    </>
  )
}
