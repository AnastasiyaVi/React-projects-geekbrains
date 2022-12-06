import React, { useEffect } from "react";
import "./ChatComponent.css";
import { useState, useCallback } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectChats } from "../../store/chats/selectors";
import {
  addChat,
  deleteChat,
  getChatsFromFirebase,
} from "../../store/chats/actions";
import { ChatListView } from "./ChatListView";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const ChatList = () => {
  const [value, setValue] = useState("");
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getChatsFromFirebase());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      handleAddChat(value);
    }
    setValue("");
  };

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const handleAddChat = useCallback(
    (name) => {
      dispatch(addChat(name));
    },
    [dispatch]
  );

  const handleDeleteChat = useCallback(
    async (id) => {
      dispatch(deleteChat(id, () => navigate("/chats")));
    },
    [dispatch]
  );

  return (
    <div className="chatBlock">
      <ChatListView chats={chats} onDelete={handleDeleteChat} />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="FormChat">
          <Form.Control type="text" value={value} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" className="FormChatBtn" type="submit">
          Добавить чат
        </Button>
      </Form>
    </div>
  );
};
