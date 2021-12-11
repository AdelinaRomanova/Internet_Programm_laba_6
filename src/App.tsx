import Counter from './Counter';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Прокрастинация ваше второе имя?
        </p>
        <a>
         Тогда вы попали по адресу!
        </a>
        <a>
         Ваша задача накликать - 10000!
        </a>
        <Counter start={10} step={5} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
