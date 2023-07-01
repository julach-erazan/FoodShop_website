import React from 'react';
import Dailyadz from 'D:/project/FoodShop_website/reactjs/src/Componant/Dailyadz.js';
import PromoAdz from 'D:/project/FoodShop_website/reactjs/src/Componant/PromoAdz.js';
import TakeandDelivery from '../Componant/TakeandDelivery';
import About from 'D:/project/FoodShop_website/reactjs/src/Componant/About.js';
import ContactForm from '../Componant/ContactForm';

function Home() {
    return (
        <div className="container">

            
            <Dailyadz/>

            <PromoAdz/>
            
            <TakeandDelivery/>

            <div id="aboutId">
                <About/>
            </div>
   
            <div id="contactId">
                <ContactForm/>
            </div>
            
            <div className='footer'></div>
            <div className='copyright_text'>
                <h3>®</h3> <h4>2023 SFJ Sri Lanka. All Rights Reserved.</h4>
            </div>

        </div>
    );
}

export default Home;