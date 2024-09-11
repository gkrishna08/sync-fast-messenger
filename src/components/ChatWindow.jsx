import React from "react";
import '../Style.css';

function formatTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
function ChatWindow({messages, loggedUserId}){
    return (
        <div className="chat-window">
            {messages.map((chatMessage, index) => (
                <div key={index} className={`chat-messages ${chatMessage.senderId === loggedUserId ? 'sent' : 'received'}`}>
                    <div className="message-content">{chatMessage.text}</div>
                    <div className="message-time">{formatTime(chatMessage.time)}</div>
                </div>
            ))}
        </div>
    );
}

export default ChatWindow;