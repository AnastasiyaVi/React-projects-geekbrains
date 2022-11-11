import React from "react";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Message } from "../Messages";
import { ChatList } from "../ChatList";
import { Form } from "../Form";
import { AUTHORS } from "../Author";
import "./Chats.css";

const chatLists = [
  {
    id: "chat1",
    name: "First",
    img: "https://mui.com/static/images/avatar/1.jpg",
  },
  {
    id: "chat2",
    name: "Second",
    img: "https://mui.com/static/images/avatar/2.jpg",
  },
  {
    id: "chat3",
    name: "Third",
    img: "https://mui.com/static/images/avatar/3.jpg",
  },
];

const initMessages = {
  chat1: [
    // { id: "mess-1", text: "First chat", author: AUTHORS.HUMAN },
    // { id: "mess-4", text: "Robot", author: AUTHORS.BOT },
  ],
  chat2: [
    // { id: "mess-2", text: "Second chat", author: AUTHORS.HUMAN },
    // { id: 'm-Bot', text: 'Robot', author: AUTHORS.BOT }
  ],
  chat3: [
    // { id: "mess-3", text: "Second chat", author: AUTHORS.HUMAN },
    // { id: 'm-Bot', text: 'Robot', author: AUTHORS.BOT }
  ],
};

export const Chats = () => {
  const { chatId } = useParams();
  const [chats, setChatList] = useState(chatLists);
  const [messageList, setMessages] = useState(initMessages);

  const sendMessage = useCallback(
    (message) => {
      setMessages((prevMess) => ({
        ...prevMess,
        [chatId]: [...prevMess[chatId], message],
      }));
    },
    [chatId]
  );

  useEffect(() => {
    const currentMessage = messageList[chatId];
    if (
      !!chatId &&
      !!messageList[chatId] &&
      currentMessage[currentMessage.length - 1]?.author === AUTHORS.HUMAN
    ) {
      sendMessage({
        id: chatId,
        text: "Я Робот",
        author: AUTHORS.BOT,
      });
    }
  }, [messageList, chatId, sendMessage]);

  const handleAddMessage = useCallback(
    (text) => {
      sendMessage({
        id: chatId,
        text: text,
        author: AUTHORS.HUMAN,
      });
    },
    [chatId, sendMessage]
  );

  const handleAddChat = useCallback(
    (name) => {
      let id = 0;
      if (chats.length !== 0) {
        id = chats.length + 1;
      }
      setChatList((prevChat) => [
        ...prevChat,
        { id: `chat${prevChat.length + 1}`, name, img: "" },
      ]);
      setMessages((prevMess) => ({
        ...prevMess,
        [`chat${id}`]: [],
      }));
    },
    [chats]
  );

  const handleDeleteChat = useCallback(
    (id) => {
      const newChat = chats.filter((chat) => chat.id !== id);
      setChatList(newChat);
      const { [id]: tmp, ...rest } = messageList;
      setMessages(rest);
    },
    [messageList, chats]
  );

  const getCurrentChat = useCallback(() => {
    return chats.find((chat) => chat.id === chatId);
  }, [chatId, chats]);

  const MessageList = () => (
    <>
      <div className="header">
        <img className="ImgCurrentChat" src={getCurrentChat().img} alt="" />
        <p className="NameCurrentChat">{getCurrentChat().name}</p>
      </div>
      <div className="Messages">
        <div className="Scrollable">
          {messageList[chatId].map((message) => (
            <Message
              key={message.id}
              message={message}
              imgSrc={getCurrentChat(chatId).img}
            />
          ))}
        </div>
      </div>
      <div>
        <Form onSubmit={handleAddMessage} />
      </div>
    </>
  );

  // if (!!chatId && !messageList[chatId]) {
  //   return <Navigate to="/chats" />;
  // }
  return (
    <div className="App container">
      <div className="chatBlock">
        {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {chat.map((item) => <ChatComponent key={item.id} chat={item} />)}
                </List> */}
        <ChatList
          chats={chats}
          onAddChat={handleAddChat}
          onDeleteChat={handleDeleteChat}
        />
      </div>

      <div className="messages_block">
        {!!chatId && !messageList[chatId] ? (
          <div>Такого чата не существует</div>
        ) : !!chatId && !!messageList[chatId] ? (
          <MessageList />
        ) : (
          <div>Выберите чат</div>
        )}
      </div>
    </div>
  );
};
