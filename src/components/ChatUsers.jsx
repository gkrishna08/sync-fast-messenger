import React from "react";
import '../Style.css';

function ChatUsers({users, onSelect, selectedUserId}){
    return (
        <div className="chat-users">
            { users.map((user) =>(
                <div key={user.id} className={`user-item ${selectedUserId === user.id ? 'selected' : ''}`} onClick={ () => onSelect(user)}>
                    <img src={user.pic} alt={user.name} className="profile"/>
                    <span className="user-name">{user.name}</span>
                </div>
            ))}
        </div>
    );
}

export default ChatUsers