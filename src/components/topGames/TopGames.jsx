import React from "react";
import './topGames.css'
import Carousel from './Carousel'

function TopGames() {
    return (
        <>
            <section className="top-games" id="Catalog">
                <div className="top-games__text" data-aos="fade-left" data-aos-delay="900">
                    <div className="top-games__title">
                        <h2>Top Games</h2>
                    </div>

                    <div className="top-games__description">
                        <p>If you buy video 2 games, you will receive 1 video game for free, along with a <span>50%</span> discount.</p>
                    </div>
                </div>

                <Carousel />
            </section>
        </>
    )
}

export default TopGames;
