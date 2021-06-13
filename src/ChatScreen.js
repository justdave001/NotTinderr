import React, { useState } from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Nina',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Nina_Dobrev_during_an_interview_in_August_2018_02.png/1200px-Nina_Dobrev_during_an_interview_in_August_2018_02.png',
            message: 'whatsup'
        },
        {
            message: 'Yeah Im good'
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message: input }]);
        setInput("");
    }

    return (
        <div className="chatScreen">
           <p className="chatScreen__timestamp">
               YOU MATCHED WITH NINA ON 6/12/2021
           </p>
            {messages.map((message) => 
              message.name ? (
               <div className="chatScreen__message">
                  <Avatar 
                  className="chatScreen__image"
                  alt={message.name}
                  src={message.image}
                  />
                  <p className="chatScreen__text">{message.message}</p>
               </div>
            ) : (
                <div className="chatScreen__message">
                 <p className="chatScreen__textUser">{message.message}</p>
             </div>
              
            ))}
        <div>
           <form className="chatScreen__input">
               <input 
               value={input}
               onChange={(e) => setInput(e.target.value)}
               className="chatScreen__inputField"
               type="text" 
               placeholder="Say something..." />
               <button onClick={handleSend} type="submit" className="chatScreen__inputButton">Send</button>
            </form>    
        </div>   
          
        </div>
    );
}

export default ChatScreen;