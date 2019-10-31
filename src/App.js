import React from 'react';
import logo from './logo.svg';
import illustrationworking from './illustration-working.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className='flex-container'>
        <div className='item'>
          <h1>Shortly</h1>
        </div>
      </div>
      <div className="flex-container">
        <div className='item'>
          <img src={illustrationworking} alt='ilustration' />
        </div>
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
      <div>
        <div>
          <a href="#" />
          <a href="#" />
          <button>Copy</button>
        </div>
        <a href="#" />
      </div>
    </div>
  );
}

export default App;
