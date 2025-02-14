import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/Frontend_Assets/hand_icon.png'
import arrow_icon from '../Assets/Frontend_Assets/arrow.png'
import hero_image from '../Assets/Frontend_Assets/hero_image.png'
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero_left">
                <h2>New Arrivals</h2>
                <div>
                    <div className="hand_icon">
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero_btn">
                    <div>Latest collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero_right">
                <img src={hero_image} alt="" />
            </div>


        </div>
    )
}

export default Hero