import React, { useState } from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: 'Nina',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Nina_Dobrev_during_an_interview_in_August_2018_02.png/1200px-Nina_Dobrev_during_an_interview_in_August_2018_02.png',
            message: 'whatsup'
        },
        {
            message: 'Yeah Im good'
        },
    ])
    return (
        <div className="chatScreen">
           <p>YOU MATCHED WITH NINA ON 6/12/2021</p>
           {messages.map(message => (
               <div className="chatScreen__message">
                  <Avatar 
                  className="chatScreen"
                  alt={message.name}
                  src={message.image}
                  />
                  <p>{message.message}</p>
               </div>

           ))}

        </div>
    );
}

export default ChatScreen;