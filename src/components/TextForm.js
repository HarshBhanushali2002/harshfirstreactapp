import { useState } from "react"
// import React {useState} from 'react'



 function TextForm (props) {
    const[text, setText]= useState('');
    const uppclickedhandler = ()=> {
        // console.log("UpperCase btn was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into UpperCase!!","success");
    }

    const lowclickedhandler = ()=> {
        // console.log("UpperCase btn was Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into Lowercase!!","success");
    }

    const clrclickedhandler = ()=> {
        // console.log("UpperCase btn was Clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!!","success");
    }

    const copyText = ()=> {
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied!!","success");
    }

    const handleOnChange = (event)=> {
        // console.log("UpperCase btn was Clicked");
        setText(event.target.value);
    }
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white': 'black'}} >
            <h1>{props.heading}</h1>
            <div className="my-3">
                {/* <label for="myBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'dark': 'light', color: props.mode==='dark'?'black': 'black'}} placeholder="Enter your text" onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={uppclickedhandler}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={lowclickedhandler}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clrclickedhandler}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy Text</button>
        </div>

        <div className="container" style={{color: props.mode==='dark'?'white': 'black'}}>
        <h1>
            Your Text Summary: 
        </h1>
        <p>Your Text has {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} {text.endsWith('').length}words and {text.length}  Characters </p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read your text. </p>
        </div>

        <div className="container" style={{color: props.mode==='dark'?'white': 'black'}}>
            <h2>Your Converted Text </h2>
            <p>{text}</p> 
        </div>
        </>
    )
}

export default TextForm;