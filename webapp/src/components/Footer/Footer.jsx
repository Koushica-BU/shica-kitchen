import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <div className="footer__logo">
                Cozy <strong className="logo__transform">Cravings</strong>
            </div>
            <p>We believe good food should be easy to make and enjoyable to eat. Our recipes use fresh ingredients and simple steps to help you create meals that bring people together.</p>
            <div className="footer-social-icons">
                <FontAwesomeIcon className="contact-icon" icon={faInstagram}/>
                <FontAwesomeIcon className="contact-icon" icon={faYoutube} />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li> Delivery </li>
                <li> Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in touch</h2>
            <ul>
                <li>instagram.com/shica_kitchen</li>
                <li> contact@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tastebud - All Right Reserved.</p>
    </div>
  )
}

export default Footer
