import React from "react";
import './Message.css';

class Message extends React.Component{
    render():React.ReactNode{
       return(
           <div>
               <h2 className='colors'>Message Component</h2>
           </div>
       );
    }
}

export default Message;