import React from "react";
import './headset.css'
import VR_headset from '../../assets/headset/headset.png'
import Star from '../../assets/headset/Star 5.svg'

function Headset() {
    return (
        <>
            <section className="headset" id="Features">
                <div className="headset__text" data-aos="fade-left" data-aos-delay="500">
                    <div className="headset__title">
                        <h2>Our Virtual Headsets Shine with Unique Features!</h2>
                    </div>

                    <div className="headset__content-container">
                        <div className="headset__content-left">
                            <div className="headset__content">
                                <img src={Star} alt="star" />
                                <p>High-resolution OLED or LCD screens: Provide sharp and clear visuals.</p>
                            </div>

                            <div className="headset__content">
                                <img src={Star} alt="star" />
                                <p>Inside-out tracking: Built-in sensors (cameras or other sensors).</p>
                            </div>

                            <div className="headset__content">
                                <img src={Star} alt="star" />
                                <p>High-resolution OLED or LCD screens: Provide sharp and clear visuals.</p>
                            </div>
                        </div>

                        <div className="headset__content-right">
                            <div className="headset__content">
                                <img src={Star} alt="star" />
                                <p>Refresh rate: Higher refresh rates reduce motion sickness and provide.</p>
                            </div>

                            <div className="headset__content">
                                <img src={Star} alt="star" />
                                <p>Eye tracking: Monitors the movement of the user's eyes, allowing for more..</p>
                            </div>

                            <div className="headset__content">
                                <img src={Star} alt="star" />
                                <p>Refresh rate: Higher refresh rates reduce motion sickness and provide.</p>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="headset__image" data-aos="zoom-in">
                    <img src={VR_headset} alt="VR headset" />
                </div>
            </section>
        </>
    )
}

export default Headset;
