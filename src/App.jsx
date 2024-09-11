import './Style.css';
import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow.jsx';
import TextInputBox from './components/TextInputBox.jsx';
import ChatUsers from './components/ChatUsers.jsx';
import avatar1 from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.jpg';
import avatar4 from './avatar4.png';
import Header from './components/Header.jsx';
import UserHeader from './components/UserHeader.jsx';

const basicUsers =[
  {id: 1, name: 'Ram', pic: avatar1, messages: []},
  {id: 2, name: 'Raj', pic: avatar2, messages: []},
  {id: 3, name: 'Pup', pic: avatar3, messages: []},
  {id: 4, name: 'JQF', pic: avatar4, messages: []},
]
function App() {
  console.log("App renders");
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [users, setUsers] = useState(basicUsers);
  const [loggedUserId] = useState(1);

  const loggedInUser = users.find(user => user.id === loggedUserId);
  const selectedUser = users.find(user => user.id === selectedUserId);
  
  const userSelect = (user) => {
    setSelectedUserId(user.id);
  };

  const sendMessage =(message) => {
    if(selectedUserId === null) return;
    
    const newMessage = {
      text: message,
      time: new Date(),
      senderId: loggedUserId,
      receiverId: selectedUserId,
    };
    
    setUsers((lastUser) => { 
      return lastUser.map(user => {
        if(user.id === selectedUserId){
          return {
            ...user,
            messages: [...(user.messages || []), newMessage],
          };
        }
        console.log(user);
        return user;
      });
    });
  }

  const logoClick = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <Header onLogoClick={logoClick} loggedUser={loggedInUser?.name}/>
      <div className="main-container">
        <ChatUsers users={users} onSelect={userSelect} selectedUserId={selectedUserId} />
        <div className="chat-container">
          { selectedUser ? (
            <>
            <UserHeader user={selectedUser}/>
            <ChatWindow messages={selectedUser.messages || []} loggedUserId={loggedUserId}/>
            <TextInputBox onSend={sendMessage} />
            </>
          ) : (
            <div className="welcome-message">
              <p>Select user and start chatting</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
