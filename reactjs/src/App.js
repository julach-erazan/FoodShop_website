//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Componant/Navbar';
import ContactForm from './Componant/ContactForm';

function App() {
  return (

    <div className="container">

      <React.Fragment>
        <Navbar/>
      </React.Fragment>

      <div className='daily_adz'></div>
      <div className='promo_adz'>
        <h2>Tastiest KOTTU in Sri Lanka</h2>
        <div className='promo1'></div>
        <div className='promo2'></div>
        <div className='promo3'></div>
      </div>
      <div className='takeAway_and_delivery'>
        <div className='takeAway'></div>
        <div className='text_area'></div>
        <div className='delivery'></div>
      </div>
      <div className='about'></div>

      <div className='contact'>
        <React.Fragment>
          <ContactForm/>
        </React.Fragment>
      </div>
      
      <div className='footer'></div>
      <div className='copyright_text'>
        <h3>®</h3> <h4>2023 SFJ Sri Lanka. All Rights Reserved.</h4>
      </div>

    </div>
  );
}

export default App;
