import React from 'react';
import illustrationworking from './illustration-working.svg';
import topbutton from './toprightbutton.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='flex-container'>
        <div className='item'>
          <h1>Shortly</h1>
        </div>
        <div className='item'>
          <img src={topbutton} alt='top right button' />
        </div>
      </div>
      <div className="flex-container">
        <div className='item'>
          <img src={illustrationworking} alt='ilustration' />
        </div>
      </div>
      <div>
        <div className='item'>
          <h1>More than just shorter link</h1>
        </div>
      </div>
      <div>
        <div className='item'>
          <p>Build your brand's recognition and get detaild insights on how yout links are preforming</p>
        </div>
      </div>
      <div>
        <div className='item'>
          <button className='button-started'>Get Started</button>
        </div>
      </div>
      <div>
        <div className='item'>
          <form>
            <div className='form-bg'>
              <div className='form1'>
                <input type='text' name='shorten' value='Shorten a link here'/>
              </div>
              <div className='form2'>
                <button className='button'>Shorten It</button>
              </div>
            </div>
          </form>
        </div>
        <div className='test'>

        </div>
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
