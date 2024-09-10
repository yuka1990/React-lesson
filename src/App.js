import logo from './logo.svg';
import './App.css';
import Todo from './todo'
import MyButton from "./mybutton";
import Profile from "./user";
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    alert('You cliched me!');
    setCount(count + 1);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Todo List
        </p>
        <div className="App">
          <Todo />
          <MyButton count={count} onClick={handleClick} />
          <MyButton count={count} onClick={handleClick} />
          <Profile />
        </div>
      </header>
    </div>
  );
}

export default App;
