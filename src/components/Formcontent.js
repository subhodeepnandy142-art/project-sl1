import React, { useState } from 'react'

export default function Formcontent() {
    const [text, setText] = useState('Enter text here');
    const typeToChange = (event)=> {
        setText(event.target.value);
    };
    const clickUpToggle = ()=> {
        setText(text.toUpperCase());
    }
    const clickLowToggle = ()=> {
        setText(text.toLowerCase());
    }
    const clearText = ()=> {
        setText('');
    }
    const copyText = ()=> {
        let newText = document.getElementById('myform');
        newText.ariaSelected()
    }
    return (
        <section className="formcontent py-5">
            <div className="container">
                <div className="formcontentinner">
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={typeToChange} id="myform" rows="10"></textarea>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-success me-2 mb-2" onClick={clickUpToggle}>Convert to Uppercase</button>
                        <button className="btn btn-success me-2 mb-2" onClick={clickLowToggle}>Convert to Lowercase</button>
                        <button className="btn btn-success me-2 mb-2" onClick={clearText}>Clear Text</button>
                        <button className="btn btn-success me-2 mb-2" onClick={copyText}>Copy Text</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
