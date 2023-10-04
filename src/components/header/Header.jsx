import React, { useState } from 'react';
import './header.css'

import Menu from '../../assets/header/menu.svg'
import Search from '../../assets/header/Search.svg'
import Shopping_bag from '../../assets/header/shopping-bag.svg'
import Star from '../../assets/header/Star 4.svg'
import Arrow_forward from '../../assets/header/arrow_forward.svg'
import Explore from '../../assets/header/explore.svg'
import Twitter from '../../assets/header/twitter.svg'
import Instagram from '../../assets/header/instagram.svg'
import Discord from '../../assets/header/discord.svg'
import Facebook from '../../assets/header/facebook.svg'
import Hero_image from '../../assets/header/vr-headset.png'
import Education from '../../assets/header/education.svg'
import Sport from '../../assets/header/sport.svg'
import Group_315 from '../../assets/header/Group 315.svg'

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const openNav = () => {
        setIsNavOpen(true);
    }

    const closeNav = () => {
        setIsNavOpen(false);
    }

    return (
        <>
            <nav className="header" id='Home'>
                <div className="header__menu-mobile">
                    <img src={Menu} alt="menu" onClick={openNav} data-aos="fade-right" />
                    <div className={`sidenav ${isNavOpen ? 'open' : ''}`} id="mySidenav">
                        <ul>
                            <li><a className="closebtn" onClick={closeNav}>&times;</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#Catalog">Catalog</a></li>
                            <li><a href="#Contact">Contact</a></li>
                            <li><a href="#Features">Features</a></li>
                        </ul>
                    </div>
                </div>

                <ul className="header__menu" data-aos="fade-right">
                    <li><a href="#">Home</a></li>
                    <li><a href="#Catalog">Catalog</a></li>
                    <li><a href="#Contact">Contact</a></li>
                    <li><a href="#Features">Features</a></li>
                </ul>

                <div className="header__logo" data-aos="fade-right">
                    <span>Holo</span><p>Gaze</p><span>.</span>
                </div>

                <div className="header__search" data-aos="fade-right">
                    <input type="text" name="search" id="" placeholder="Search games & products.." />
                    <img src={Search} alt="search" className="header__search-icon" />
                    <img src={Shopping_bag} alt="shopping bag" />
                </div>
            </nav>

            <main className="header__main">
                <div className="header__container">
                    <div className="header__label" data-aos="fade-right">
                        <p>Virtual Headsets</p>
                    </div>

                    <div className="header__titile" data-aos="fade-right" data-aos-delay="400">
                        <h1>Experience a new dimension of reality</h1>
                    </div>

                    <div className="header__description" data-aos="fade-right" data-aos-delay="800">
                        <img src={Star} alt="star" />
                        <p>Step into the future with our virtual headset, come to life right before your eyes</p>
                    </div>

                    <div className="header__btn-wrapping" data-aos="fade-right" data-aos-delay="1200">
                        <div className="header__btn header__btn--blue">
                            <a href="#">Visit Sttore
                            <img src={Arrow_forward} alt="arrow forward" /></a>
                        </div>

                        <div className="header__btn header__btn--explore">
                            <a href="#">
                            <img src={Explore} alt="explore" />
                            Explore</a>
                        </div>
                    </div>

                    <div className="header__follow" data-aos="fade-right" data-aos-delay="1600">
                        <p>FOLLOW US</p>
                        <img src={Twitter} alt="twitter" />
                        <img src={Instagram} alt="instagram" />
                        <img src={Discord} alt="discord" />
                        <img src={Facebook} alt="facebook" />
                    </div>
                </div>

                <div className="header__hero">
                    <div className="header__hero-image" data-aos="fade-left" data-aos-delay="1200">
                        <img src={Hero_image} alt="" />
                    </div>

                    <div className="header__hero-image-full" data-aos="fade-left" data-aos-delay="1200">
                        <img src={Group_315} alt="Headset VR" />
                    </div>

                    <div className="header__hero-title-wrapping" data-aos="fade-left" data-aos-delay="1600">
                        <div className="header__hero-title">
                            <img src={Education} alt="education" />
                            <p>Enhanced Education</p>
                        </div>
                        
                        <div className="header__hero-title">
                            <img src={Sport} alt="sport" />
                            <p>Training and Simulation</p>
                        </div>
                    </div>
                </div>
            </main>
            
        </>
    )
}

export default Header;
