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
                <input type='text' name='shorten' value='Shorten a link here' />
              </div>
              <div className='form2'>
                <button className='button'>Shorten It</button>
              </div>
            </div>
          </form>
        </div>
        <div className='item'>
          <div className='item-link'>
            <div className='item-box'>
              <div className='link-top'>
              <a href="http://www.twitter.com">http://www.twitter.com</a>
              </div>
              <div className='link-bottom'>
                <a href="https://rel.ink/k4IKyk">https://rel.ink/k4IKyk</a>
              </div>
              <div className='link'>
                <button>Copy</button>
              </div>
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='item-link'>
            <div className='item-box'>
              <div className='link-top'>
                <a href="http://www.linkedin.com">http://www.linkeding.com/compan...</a>
              </div>
              <div className='link-bottom'>
                <a href="https://rel.ink/k4IKyk">https://rel.ink/k4IKyk</a>
              </div>
              <div className='link'>
                <button>Copy</button>
              </div>
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='item-link'>
            <div className='item-box'>
              <div className='link-top'>
                <a href="http://www.frontendmentor.io">http://www.frontendmentor.io</a>
              </div>
              <div className='link-bottom'>
                <a href="https://rel.ink/k4IKyk">https://rel.ink/k4IKyk</a>
              </div>
              <div className='link'>
                <button>Copy</button>
              </div>
            </div>
          </div>
        </div>
        <div className='item'>
          <h1>Advanced Statistic</h1>
          <p>Track how your links are preforming across the web with our advanced statistics.</p>
        </div>
        <div className='item'>
          <div className='item-category'>
            <div className='item-recognition'>

            </div>
            <h1>Brand Recognition</h1>
            <p>Boost your brand recognition with each click. Generic links help instil confidence in your content.</p>
          </div>
        </div>
        <div className='item'>
          <div className='item-category'>
            <div className='item-customizable'>

            </div>
            <h1>Detaild Records</h1>
            <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </div>
        </div>
        <div className='item'>
          <div className='item-category'>
            <div className='item-circus'>

            </div>
            <h1>Fully Customizable</h1>
            <p>Imporve brand awarness and content discoverability through customizable links, supercharging audience engagement.</p>
          </div>
        </div>
        <div className='item'>
          <div className='get-started'>
            <h1>Boost your links today</h1>
            <button>Get Started</button>
          </div>
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
