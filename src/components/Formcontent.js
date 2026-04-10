import React, { useState } from 'react'

export default function Formcontent(props) {
    const [text, setText] = useState('Enter text here');
    const typeToChange = (event)=> {
        setText(event.target.value);
    };
    const clickUpToggle = ()=> {
        setText(text.toUpperCase());
        props.showToggleAlert('Convert to Uppercase','success');
    }
    const clickLowToggle = ()=> {
        setText(text.toLowerCase());
        props.showToggleAlert('Convert to Lowercase','success');
    }
    const clearText = ()=> {
        setText('');
        props.showToggleAlert('Text Cleared','warning');
    }
    const copyText = ()=> {
        let newText = document.getElementById('myform');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showToggleAlert('Text Copied','success');
    }
    const removeSpaces = ()=> {
        let removeSpaces = text.split(/\s+/).join(' ');
        setText(removeSpaces);
        props.showToggleAlert('Remove Extra Spaces','success');
    }

    return (
        <section className="formcontent py-5">
            <div className="container">
                <div className="formcontentinner">
                    <div className="mb-3">
                        <h1 className={`mb-3 text-${props.setMode === 'light'?'black':'white'}`}>Case Converter System</h1>
                        <textarea className="form-control" value={text} onChange={typeToChange} id="myform" rows="10" style={{backgroundColor: props.setMode === 'light'?'#fff':'#000', color: props.setMode === 'light'?'#000':'#fff'}}></textarea>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-success me-2 mb-2" onClick={clickUpToggle}>Convert to Uppercase</button>
                        <button className="btn btn-success me-2 mb-2" onClick={clickLowToggle}>Convert to Lowercase</button>
                        <button className="btn btn-success me-2 mb-2" onClick={clearText}>Clear Text</button>
                        <button className="btn btn-success me-2 mb-2" onClick={copyText}>Copy Text</button>
                        <button className="btn btn-success me-2 mb-2" onClick={removeSpaces}>Remove Extra Spaces</button>
                    </div>
                    <div className="mb-3" style={{backgroundColor: props.setMode === 'light'?'#fff':'#000', color: props.setMode === 'light'?'#000':'#fff'}}>
                        <h2>Text Summery</h2>
                        <p>{text.split(' ').length} words and {text.length} characters in this word.</p>
                        <p>{0.008*text.split(' ').length} time to read this text.</p>
                    </div>
                    <div className="mb-3" style={{backgroundColor: props.setMode === 'light'?'#fff':'#000', color: props.setMode === 'light'?'#000':'#fff'}}>
                        <h3>Preview Text</h3>
                        <p>{text.length>0?text:"Write some text in the above box to see preview here."}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
