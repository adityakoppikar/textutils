import React, { useState } from 'react'

function TextForm(props) {
  const [text, setText] = useState("");

  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const clearText = () => {
    setText("");
  }

  const handleOnChange = (event) => {
    //let newText = text.toUpperCase();
    setText(event.target.value);
  }
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control my-4" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
      <button className="btn btn-primary mx-2" onClick={upperCase} >convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={lowerCase} >convert to lowercase</button>
      <button className="btn btn-danger" onClick={clearText}>clear text</button>
    </div>
    </div>
    <div className="container my-3">
      <h2>your text summary</h2>
      <p>your text contains {text.length} characters, {text.split(" ").length} words</p>
      <p>Minutes read is {0.008 * text.split(" ").length }</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

export default TextForm