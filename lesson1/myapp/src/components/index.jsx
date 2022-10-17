import React from 'react';
import './Message.css';

export const Message = (props) => {
    return (
        <div className="message_main">Message: <p className="message_text">{props.text}</p></div>
    )
}