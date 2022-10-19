import logo from './logo.svg';
import './App.css';
import { Message } from './components/Messages';
import { useEffect, useState } from 'react';


function App() {

  const [messageList, setMessages] = useState([]);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (messageList[messageList.length - 1]?.author === 'Пользователь') {
      setMessages(messages => [...messages, { id: count, text: 'Автоматический ответ робота', author: "Bot" }],);
      setCount(count + 1);
    }
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='messages_block'>

        <form onSubmit={handleSubmit}>
          <div className="messages_form">
            <textarea className="message_text" value={value} onChange={handleChange} placeholder="Сообщение" rows="3"></textarea>
            <input className="message_btn" type="submit" value="Отправить" />
          </div>
        </form>

        <div className='message_list'>
          {messageList.map((message) => <Message key={message.id} message={message} />)}
        </div>




      </div>
    </div>
  );
}

export default App;
