import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/Frontend_Assets/exclusive_image.png'

export const Offers = () => {
    return (
        <div className="offers">
            <div className='offers_left'>
                <h1>Exclusive Offers for you</h1>
                <p>ONLY ON BEST SELLER PRODUCTS</p>
                <button>Check now</button>

            </div>
            <div className="offers_right">
                <img src={exclusive_image} alt="" />

            </div>
        </div>
    )
}
