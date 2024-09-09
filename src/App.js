import logo from './logo.svg';
import './App.css';
import Todo from './todo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Todo List
        </p>
        <div className="App">
          <Todo />
        </div>
      </header>
    </div>
  );
}

export default App;
