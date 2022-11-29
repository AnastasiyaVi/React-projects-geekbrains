import React from "react";
import "./Message.css";
import { AUTHORS } from "../Author";
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteMessage } from '../../store/messages/actions';

export const Message = ({ message }) => {
  // return (
  //     <div className="message_main">Message: <p className="message_text">{props.text}</p></div>
  // )

  const { chatId } = useParams();
  const dispatch = useDispatch();

  const handleDeleteMessage = useCallback((id) => {
    dispatch(deleteMessage(chatId, id));
  }, [dispatch, chatId]);


  return (
    <div className="message_li">
      <div className="MessageData">
        {message.author === AUTHORS.HUMAN ? AUTHORS.HUMAN : AUTHORS.BOT}
      </div>
      <div className="MessageText">{message.text}</div>
      {message.author !== AUTHORS.HUMAN}
      <button className={`DeleteBtn ${message.author === AUTHORS.HUMAN ? 'SendTxt' : 'RepliesTxt'}`} onClick={() => handleDeleteMessage(message.id)}>удалить</button>
    </div>
  );
};
