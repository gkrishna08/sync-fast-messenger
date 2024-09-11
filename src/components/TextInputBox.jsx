import React, { useState } from "react";
import '../Style.css';

function TextInputBox({ onSend }){
    const [message, setMessage] = useState('');
    
    const onClickSubmit = (msg) => {
        msg.preventDefault();
        if(message.trim()){
            onSend(message);
            setMessage('');
        }
    };
    return (
        <form className="text-input" onSubmit={onClickSubmit}>
            <input type="text" value={message} 
            onChange={(msg) => setMessage(msg.target.value)}
            placeholder="Message"/>
            <button type="submit">Send</button>
        </form>  
    );
}

export default TextInputBox;