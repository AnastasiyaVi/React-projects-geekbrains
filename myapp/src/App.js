
import './App.css';
import { Message } from './components/Messages';
import { useEffect, useState, useRef } from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import List from '@mui/material/List';
import { ChatComponent } from './components/ChatComponent';


function App() {

  const chatList = [
    { id: "1", name: "First", img: "https://mui.com/static/images/avatar/1.jpg" },
    { id: "2", name: "Second", img: "https://mui.com/static/images/avatar/2.jpg" },
    { id: "3", name: "Third", img: "https://mui.com/static/images/avatar/3.jpg" },

  ];
  const [chat] = useState(chatList);

  const [messageList, setMessages] = useState([]);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const inputRef = useRef();


  useEffect(() => {
    if (messageList[messageList.length - 1]?.author === 'Пользователь') {
      setMessages(messages => [...messages, { id: count, text: 'Автоматический ответ робота', author: "Bot" }],);
      setCount(count + 1);
    }
    inputRef.current.focus();
  }, [messageList, count])
  const handleAddMessage = () => {
    setMessages(messages => [...messages, { id: count, text: value, author: "Пользователь" }]);
    setCount(count + 1);
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddMessage();
    setValue("");
  }
  return (
    <div className="App container">

      <div className='chatBlock'>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {chat.map((item) => <ChatComponent key={item.id} chat={item} />)}
        </List>
      </div>

      <div className='messages_block'>

        <div className='message_list'>
          {messageList.map((message) => <Message key={message.id} message={message} />)}
        </div>
        <form onSubmit={handleSubmit}>
          {/* обновили форму с помощью mui, так же добавили автофокус в  TextareaAutosize*/}
          <div className="messages_form">
            <TextareaAutosize
              className="message_text"
              ref={inputRef}
              maxRows={4}
              aria-label="maximum height"
              placeholder="Сообщение"
              value={value}
              onChange={handleChange}

              style={{ width: 200 }}
            />


            {/* <textarea className="message_text" value={value} onChange={handleChange} placeholder="Сообщение" rows="3"></textarea> */}
            {/* <input className="message_btn" type="submit" value="Отправить" /> */}
            <Button className="message_btn" variant="contained" type="submit" value="">Отправить</Button>
          </div>
        </form>






      </div>

    </div>
  );
}

export default App;
