import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Shortly</h1>
      </div>
      <div>
      </div>
      <div>
        <h1>More than just shorter link</h1>
      </div>
      <div>
        <p>Build your brand's recognition and get detaild insights on how yout links are preforming</p>
      </div>
      <div>
        <button>Get Started</button>
      </div>
      <div>
        <form>
          <label>
            Name:
          </label>
          <input type='text' name='shorten' />
          <input type='submit' value='submit' />
        </form>
      </div>
    </div>
  );
}

export default App;
