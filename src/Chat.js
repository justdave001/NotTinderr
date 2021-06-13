import React from 'react';
import './Chat.css'
import Avatar from '@material-ui/core/Avatar';

function Chat({name, message, profilePic, timestamp}) {
    return(
        <div className="chat">
            <Avatar className="chat__image" alt={name} src={profilePic}/>
        <div className="chat__details">
            <h3> {name} </h3>
            <p> {message} </p>
            
        </div>
        <p className="timestamp">{timestamp}</p>   
        </div>
    );
    
}
export default Chat;