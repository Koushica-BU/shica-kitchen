import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [selected, setSelected] = useState('home')
  return (
    <div className="navbar">
        <div className="nav__logo">
            Cozy <strong className="logo__transform">Cravings</strong>
        </div>
        <ul className="navbar-menu">
            <li onClick={()=>setSelected("home")} className={selected === 'home' ? "active" : ''}>Home</li>
            <li onClick={()=>setSelected("menu")} className={selected === 'menu' ? "active" : ''}>Menu</li>
            <li onClick={()=>setSelected("contact")} className={selected === 'contact' ? "active" : ''}>Contact</li>
            <li onClick={()=>setSelected("mobile-app")} className={selected === 'mobile-app' ? "active" : ''}>Mobile-app</li>
        </ul>
        <div className="navbar-right">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot">
                </div>
            </div>
            <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar
