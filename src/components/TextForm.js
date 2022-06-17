import React, {useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick = () => {
        // console.log('uppercase' + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE", "success")
    }
    const handlesClick = () => {
        // console.log('uppercase' + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")
    }
    const handleWideClick = () => {
        // console.log('uppercase' + text)
        document.getElementById("myBox").style.letterSpacing = "12px";
        // let newText = text.split('').join(' ');
        // setText(newText);
        props.showAlert("Converted to Wide spacing", "success")
    }
    const handleCopyClick = () => {
        // console.log('uppercase' + text)
        // document.getElementsByClassName("form-control").style.letterSpacing = "12px";
       var text = document.getElementById("myBox")
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copy Text", "success")
    }
    const handleClearClick = () => {
        // console.log('uppercase' + text)
        let newText = " ";
        setText(newText);
        props.showAlert("Clear Text", "success")
    }
    const handleOnchange = (event) => {
        console.log('onchange')
        setText(event.target.value);
    }
    const [text, setText] = useState(' ');
    // setText("madhab");
    return (
<> 
        <div className="container" style = {{color: props.mode === 'dark' ? 'white' : 'black'}} >
            <h1 className="my-2">{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label" ></label>
                <textarea className="form-control" value = {text} onChange={handleOnchange} style = {{backgroundColor: props.mode === 'dark' ? 'black' : 'white',color: props.mode === 'dark' ? 'white' : 'black' }}  id="myBox" rows="8"></textarea>
            </div>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlesClick}>Convert to lowercase</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleWideClick}>Convert to W i d e Text</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
        </div>
        <div>
            <div className="container my-3" style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something above to preview here"}</p>
            </div>
        </div>
</>
    )
}

