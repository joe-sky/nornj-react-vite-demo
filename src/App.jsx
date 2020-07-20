import React, { useState } from 'react';
import { html } from 'nornj';
import logo from './logo.svg';
import './App.css';

const template = html`
  <div class="App">
    <header class="App-header">
      <img src="${logo}" class="App-logo" alt="logo" />
      <p>Hello Vite + React + NornJ!</p>
      <p>
        <button {onClick}>count is: {count}</button>
      </p>
      <p>Edit <code>App.jsx</code> and save to test HMR updates.</p>
      <a class="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  </div>
`;

function App() {
  const [count, setCount] = useState(0);

  const onClick = () => setCount((count) => count + 1);

  return template({
    count,
    onClick
  });
}

export default App;
