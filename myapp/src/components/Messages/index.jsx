import React from 'react';
import './Message.css';
import { AUTHORS } from '../Author'

export const Message = ({ message }) => {
    // return (
    //     <div className="message_main">Message: <p className="message_text">{props.text}</p></div>
    // )

    return (
        <div className='message_li'>
            <div className="MessageData">
                {message.author === AUTHORS.HUMAN}

            </div>
            <div className="MessageText">
                {message.text}
            </div>
            {message.author !== AUTHORS.HUMAN}
        </div>
    )
}