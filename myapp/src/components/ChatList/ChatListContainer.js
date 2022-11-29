import React from "react";
import "./ChatComponent.css";
import { useState, useCallback } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { selectChats } from '../../store/chats/selectors';
import { addChat, deleteChat } from '../../store/chats/actions'
import { ChatListView } from './ChatListView';
import Button from "@mui/material/Button";



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
    )
}