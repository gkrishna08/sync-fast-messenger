import React, { useState } from "react";
import '../Style.css';

function TextInputBox({ onSend }){
    const [message, setMessage] = useState('');
    
    // Function for submit the form
    const onClickSubmit = (msg) => {
        msg.preventDefault();  // To Prevent the default form submission
        if(message.trim()){    // To Check if the message is not just whitespace
            onSend(message);
            setMessage('');    // To clear the input field after sending the message
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