import React from 'react';
import "./Chats.css";
import Chat from './Chat';

function Chats() {
    return (
    <div className="chats">
        <Chat 
          name="Dave"
          message="Cool story bro " 
          timestamp="40 secs ago"
          profilePic="https://thehornettribuneonline.com/wp-content/uploads/2020/10/David-Oeyekeye-461x475.jpg"
       />
       <Chat 
          name="Sam"
          message="Yo you aii?" 
          timestamp="50 secs ago"
          profilePic="https://avatars.githubusercontent.com/u/36380375?v=4"
       />
       <Chat 
          name="Elena"
          message="Sup g" 
          timestamp="40 secs ago"
          profilePic="https://media.allure.com/photos/59a4737d115f05639116e652/1:1/w_2197,h_2197,c_limit/nina.jpg"
       />
      </div>
      );
    
}

export default Chats;