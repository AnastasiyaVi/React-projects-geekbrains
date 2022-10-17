import logo from './logo.svg';
import './App.css';
import { Message } from './components';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Message text="Hello, teacher! This is my hometask." />
    </div>
  );
}

export default App;
