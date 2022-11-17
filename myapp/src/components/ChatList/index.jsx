import React from "react";
import "./ChatComponent.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from "@mui/material/Avatar";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { selectChats } from '../../store/chats/selectors';
import { addChat, deleteChat } from '../../store/chats/actions'

export const ChatList = () => {
  const [value, setValue] = useState("");
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();

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

  const handleAddChat = useCallback((name) => {
    dispatch(addChat(name));
  }, [dispatch]);

  const handleDeleteChat = useCallback((id) => {
    dispatch(deleteChat(id));
  }, [dispatch]);

  return (
    <div className="chatBlock">
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {chats.map((item) => (
          <ListItem action="true" alignItems="flex-start" justify-content="space-between" key={item.id}>
            <Link to={`/chats/${item.id}`} className="ChatLink">
              <Avatar className="ContactImg" src={item.img} alt="" />
              <p className="ContactName"> {item.name} </p>
            </Link>
            <Button className="DeleteBtn" onClick={() => handleDeleteChat(item.id)}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>

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
