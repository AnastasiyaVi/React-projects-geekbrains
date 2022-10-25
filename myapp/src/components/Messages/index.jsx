import React from 'react';
import './Message.css';

export const Message = (props) => {
    // return (
    //     <div className="message_main">Message: <p className="message_text">{props.text}</p></div>
    // )

    return (
        <div className='message_li'>
            <div className="MessageData">
                {props.message.author}

            </div>
            <div className="MessageText">
                {props.message.text}
            </div>
        </div>
    )
}