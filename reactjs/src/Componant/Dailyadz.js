import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from 'D:/project/FoodShop_website/reactjs/src/ad1.jpg'
import image2 from 'D:/project/FoodShop_website/reactjs/src/ad2.jpg'
import image3 from 'D:/project/FoodShop_website/reactjs/src/ad3.jpg'

function Dailyadz() {
    return (
        <div className='daily_adz'>
            <AliceCarousel autoPlay autoPlayInterval={"2000"}>
                <p><img src={image1} className="sliderimg" alt=""/></p>
                <p><img src={image2} className="sliderimg" alt=""/></p>
                <p><img src={image3} className="sliderimg" alt=""/></p>
            </AliceCarousel>
        </div>
    );
}

export default Dailyadz;