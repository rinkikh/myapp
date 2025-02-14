import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Frontend_Assets/logo_big.png'
import inst_icon from '../Assets/Frontend_Assets/instagram_icon.png'
import pinterest_icon from '../Assets/Frontend_Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/Frontend_Assets/whatsapp_icon.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer_links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer_social_icon">
                <div className="footer_icon_container">
                    <img src={inst_icon} alt="" />
                </div>
                <div className="footer_icon_container">
                    <img src={pinterest_icon} alt="" />
                </div>
                <div className="footer_icon_container">
                    <img src={whatsapp_icon} alt="" />
                </div>


            </div>

            <div className="footer_copyright">
                <hr />
                <p>Copyright @ 2023 - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer