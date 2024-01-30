import React, { useState } from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { FaCloudSun } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import MobileMenu from './MobileMenu';

const Navbar = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const nav = useNavigate();

    const buttons = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Favorites',
            link: '/favorites'
        },
    ];

    const handleMobileMenu = () => {
        setOpenMobileMenu(!openMobileMenu)
    };

  return (
    <div className='navbar-main'>
        <div className="navbar-logo">
            <h1>Tal Weather App</h1>
            <FaCloudSun className='FaCloudSun' size={45} />
        </div>
        <div className="navbar-buttons">
            <nav>
            {buttons.map((btn, index) => {
                return (
                    <button onClick={() => nav(btn.link)} key={index} >{btn.title}</button>
                )
            })}
            </nav>
        </div>
        <div className="navbar-buttons-menuButton">
                    <TiThMenu size={30} onClick={handleMobileMenu}/>
                </div>
                {openMobileMenu &&
                <div className="navbar-mobileMenu">
                <MobileMenu close={handleMobileMenu} buttons={buttons} openMobileMenu={openMobileMenu}/>
                </div>
            }
    </div>
  )
}

export default Navbar