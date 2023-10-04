import React from "react";
import './creator.css'
import Arrow_forward from '../../assets/creator/arrow_forward.svg'
import Group_people from '../../assets/creator/Group 315.svg'
import Jane_Wilson_Rectangle from '../../assets/creator/Jane Wilson Rectangle.png'
import Jane_Wilson_full from '../../assets/creator/Group creator image.svg'
import Jane_Wilson_Round from '../../assets/creator/Jane Wilson Round.png'
import Action_Buttons from '../../assets/creator/Action Buttons.svg'

function Creator() {
    return (
        <>
            <section className="creator">
                <div className="creator__text" data-aos="fade-up-right">
                    <div className="creator__title">
                        <h2>Jane Wilson, Gaming Creator</h2>
                    </div>

                    <div className="creator__content">
                        <p>A virtual headset creator is an individual or company that specializes in designing and manufacturing virtual reality headsets, also known as VR headsets.</p>
                    </div>

                    <div className="creator__btn">
                        <a href="#">Read my blog
                        <img src={Arrow_forward} alt="arrow forward" /></a>
                    </div>

                    <div className="creator__people">
                        <div className="creator__people-image">
                            <img src={Group_people} alt="people" />
                        </div>

                        <div className="creator__people-view">
                            <p>+258K Views</p>
                        </div>
                    </div>
                </div>

                <div className="creator__image" data-aos="fade-up-left" data-aos-delay="400">
                    <div className="creator__image-full">
                        <img src={Jane_Wilson_full} alt="Jane Wilson" />
                    </div>
                    
                    <div className="creator__image-rectangle">
                        <img src={Jane_Wilson_Rectangle} alt="Jane Wilson" />
                    </div>

                    <div className="creator__twitter">
                        <div className="creator__twitter-profile">
                            <div className="creator__twitter-image">
                                <img src={Jane_Wilson_Round} alt="Jane Wilson" />
                            </div>
                            
                            <div className="creator__twitter-name">
                                <b>Jane Wilson</b>
                                <p>@jjwilson</p>
                            </div>
                        </div>

                        <div className="creator__twitter-tweet">
                            <p>Virtual headsets of the future is live!</p>
                        </div>

                        <div className="creator__twitter-date">
                            <div className="creator__twitter-time">
                                <p>09:28 · 2/21/20 · </p>
                            </div>

                            <div className="creator__twitter-blue-text">
                                <p> Twitter Web App</p>
                            </div>
                        </div>

                        <div className="creator__twitter-retweets">
                            <div className="creator__twitter-retweets-number">
                                <p>24,5k</p>
                            </div>

                            <div className="creator__twitter-retweets-text">
                                <p>Retweets</p>
                            </div>

                            <div className="creator__twitter-retweets-number">
                                <p>104,21k</p>
                            </div>

                            <div className="creator__twitter-retweets-text">
                                <p>Likes</p>
                            </div>
                        </div>

                        <div className="creator__twitter-btn">
                            <img src={Action_Buttons} alt="action button" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Creator;
