import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    //console.log("Uppercase was clicked" +text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("converted to upper case","sucess")
  }

  const handleLoClick = () => {
    //console.log("Uppercase was clicked" +text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lower case","sucess")
  }


  const handleClear = () => {
    //console.log("Uppercase was clicked" +text);
    let newText=" ";
    setText(newText)
    props.showAlert("text was cleared","sucess")
  }

  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  }

  let wordLength=text.split(" ").length;

  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"#042743"}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"#042743"}}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClear}>
        Clear Text
      </button>
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"#042743"}}> 

      <h5>Your text summary</h5>
      <p>{wordLength} words and {text.length} characters</p>
      <p>{0.008*wordLength} minutes to read</p>
      <h5>Preview</h5>
      <p>{text.length>0?text:"Enter something in above text box for preview"}</p>
    </div>

    </>
  );
}
