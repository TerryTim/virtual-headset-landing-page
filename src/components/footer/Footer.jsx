import React from "react";
import './footer.css'

import Twitter from '../../assets/header/twitter.svg'
import Instagram from '../../assets/header/instagram.svg'
import Discord from '../../assets/header/discord.svg'
import Facebook from '../../assets/header/facebook.svg'

function Footer() {
    return (
        <>
            <section className="footer" id="Contact" data-aos="fade-up" data-aos-delay="800">
                <div className="footer__top">
                    <div className="footer__company">
                        <div className="footer__company-logo">
                            <span>Holo</span><p>Gaze</p><span>.</span>
                        </div>
                        
                        <div className="footer__company-social">
                            <img src={Twitter} alt="twitter" />
                            <img src={Instagram} alt="instagram" />
                            <img src={Discord} alt="discord" />
                            <img src={Facebook} alt="facebook" />
                        </div>

                        <div className="footer__company-number">
                            <p>(+994) 199-28-786</p>
                        </div>
                    </div>

                    <div className="footer__menu xl">
                        <h4>Menu</h4>
                        <a href="#Home"><p>Home</p></a>
                        <a href="#Catalog"><p>Catalog</p></a>
                        <a href="#Features"><p>Features</p></a>
                        <a href="#Contact"><p>Contact</p></a>
                    </div>

                    <div className="footer__menu xl">
                        <h4>Company</h4>
                        <p>Login</p>
                        <p>Sign Up</p>
                        <p>Privacy</p>
                        <p>Products</p>
                    </div>

                    <div className="footer__menu-subcribe-container">
                        <div className="footer__menu-mobile">
                            <div className="footer__menu">
                                <h4>Menu</h4>
                                <a href="#Home"><p>Home</p></a>
                                <a href="#Catalog"><p>Catalog</p></a>
                                <a href="#Features"><p>Features</p></a>
                                <a href="#Contact"><p>Contact</p></a>
                            </div>

                            <div className="footer__menu">
                                <h4>Company</h4>
                                <p>Login</p>
                                <p>Sign Up</p>
                                <p>Privacy</p>
                                <p>Products</p>
                            </div>
                        </div>

                        <div className="footer__subscribe">
                            <h4>Subscribe Our News Letter</h4>
                            <p>Sure, please provide your email address to subscribe to newsletter</p>

                            <div className="footer__subscribe-input">
                                <input type="email" name="email" id="email" placeholder="Enter your mail..." />
                                <a href="">Subscribe</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© 2023 Your Company Name. All rights reserved.</p>
                </div>
            </section>
        </>
    )
}

export default Footer;
