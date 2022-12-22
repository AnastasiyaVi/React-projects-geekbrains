import React, { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Message } from "../Message";
import { Card } from "react-bootstrap";
import { selectMessages } from "../../store/messages/selectors";
import {
  addMessage,
  getMessagesFromFirebase,
} from "../../store/messages/actions";
import { Form } from "../Form";
import { AUTHORS } from "../Author";

export const MessageList = ({ chatId, chatExists }) => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => selectMessages(state, chatId));

  const handleAddMessage = useCallback(
    (text) => {
      dispatch(addMessage(chatId, text, AUTHORS.HUMAN));
    },
    [dispatch, chatId]
  );

  useEffect(() => {
    if (!chatId) return;
    dispatch(getMessagesFromFirebase(chatId));
  }, [chatId]);

  return (
    <Card className="m-0 p-0">
      {!!chatId && chatExists && (
        <>
          <Card.Header className="ContentProfile d-flex flex-row justify-content-start align-items-center">
            <p className="ContactProfileTxt m-0 p-0">{chatExists.name}</p>
          </Card.Header>
          <Card.Body className="Messages">
            <div className="Scrollable">
              {messages.map((message) => (
                <Message key={message.id} message={message} />
              ))}
            </div>
          </Card.Body>
          <Card.Footer>
            <Form onSubmit={handleAddMessage} />
          </Card.Footer>
        </>
      )}
    </Card>
  );
};
