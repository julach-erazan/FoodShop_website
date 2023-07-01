import React from 'react';
import promoImg1 from 'D:/project/FoodShop_website/reactjs/src/promo1_edit.jpg'
import promoImg2 from 'D:/project/FoodShop_website/reactjs/src/promo2_edit.jpg'
import promoImg3 from 'D:/project/FoodShop_website/reactjs/src/promo3.jpg'
function PromoAdz() {
    return ( 
        <div className='promoContainer'>
            <h2>Tastiest KOTTU in Sri Lanka</h2>
            <div className='promo_adz'>
                <div className='promo1'>
                    <img src={promoImg1} className="promo_img" alt=""/>
                </div>
                <div className='promo2'>
                    <img src={promoImg2} className="promo_img" alt=""/>
                </div>
                <div className='promo3'>
                    <img src={promoImg3} className="promo_img" alt=""/>
                </div>
            </div>
        </div>
     );
}

export default PromoAdz;