import React from "react";
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ChatList } from '../ChatList';
import "./Chats.css";
import { selectIfChatExists } from '../../store/chats/selectors';
import { MessageList } from '../MessageList';

// const chatLists = [
//   {
//     id: "chat1",
//     name: "First",
//     img: "https://mui.com/static/images/avatar/1.jpg",
//   },
//   {
//     id: "chat2",
//     name: "Second",
//     img: "https://mui.com/static/images/avatar/2.jpg",
//   },
//   {
//     id: "chat3",
//     name: "Third",
//     img: "https://mui.com/static/images/avatar/3.jpg",
//   },
// ];

// const initMessages = {
//   chat1: [
//     // { id: "mess-1", text: "First chat", author: AUTHORS.HUMAN },
//     // { id: "mess-4", text: "Robot", author: AUTHORS.BOT },
//   ],
//   chat2: [
//     // { id: "mess-2", text: "Second chat", author: AUTHORS.HUMAN },
//     // { id: 'm-Bot', text: 'Robot', author: AUTHORS.BOT }
//   ],
//   chat3: [
//     // { id: "mess-3", text: "Second chat", author: AUTHORS.HUMAN },
//     // { id: 'm-Bot', text: 'Robot', author: AUTHORS.BOT }
//   ],
// };

export const Chats = () => {
  const { chatId } = useParams();
  const selectChatExists = useMemo(() => selectIfChatExists(chatId), [chatId]); //оптимизируем usememo
  const chatExists = useSelector(selectChatExists);



  return (
    <div className="App m-0 d-flex justify-content-center align-items-center">
      <Container fluid="md" className="Container p-0 m-0">
        <Row className="h-100 m-0 p-0">
          <Col md={4} className="SidePanel m-0 p-0">
            <ChatList />
          </Col>
          <Col md={8} className="Content m-0 p-0">
            <MessageList chatId={chatId} chatExists={chatExists} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
