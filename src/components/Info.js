import React from 'react'
import waveLight from '../images/wave-blue-light.png';

function Info() {
  return (
    <div className='info-wrapper'>
        <div className='newsletter-signup'>
            <form action="submit">
                <div className="form-container">
                    <label>Stay in the know. Sign up for our newsletter.</label>
                    <div className='input-container'>
                        <input type="text" placeholder='Enter your email'/>
                        <button>Submit</button>
                    </div>
                </div>            
            </form>
        </div>
        <div className="find-install">
            <h2>Installed in <br /> a city near you</h2>
            <a href="/">Find a vulcan install</a>
        </div>
        <div className="contact">
            <h2>Ready to spec vulcan <br /> for your project?</h2>
            <a href="/">Contact us</a>
        </div>
        <div className="wave-dark-container">
                <img src={waveLight} alt="Light blue wave" />
            </div>
    </div>
  )
}

export default Info