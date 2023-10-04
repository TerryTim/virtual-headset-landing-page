import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'

import Arrow_forward from '../../assets/top-games/arrow_forward.svg'
import Arrow_backward from '../../assets/top-games/arrow_backward.svg'

import Horizon from '../../assets/top-games/Horizon.png'
import Half_Life_Alyx from '../../assets/top-games/Half-Life-Alyx.png'
import Fight_Night_Champion from '../../assets/top-games/Fight-Night-Champion.png'
import Call_of_Duty_Coold_War from '../../assets/top-games/Call of Duty Coold War.png'
import Resident_Evil_4 from '../../assets/top-games/Resident-Evil-4.png'
import Marvel_Spider_Man_2 from '../../assets/top-games/Marvel_s-Spider-Man-2.png'
import Hogwarts_Legacy from '../../assets/top-games/Hogwarts-Legacy.png'
import Final_Fantasy_XVI from '../../assets/top-games/FINAL-FANTASY-XVI.png'
import Assassin_s_Creed_Mirage from '../../assets/top-games/Assassin_s-Creed-Mirage.png'

function NextArrow(props) {
    const { style } = props;
    return (
      <div style={{ ...style, display: "none" }} />
    );
  }
  
  function PrevArrow(props) {
    const { style } = props;
    return (
      <div style={{ ...style, display: "none"}} />
    );
  }

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,

            responsive: [
                {
                    breakpoint: 1536,
                    settings: {
                      slidesToShow: 5,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: false
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: false
                    }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 786,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                  }
                },
                {
                    breakpoint: 700,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      initialSlide: 1
                    }
                  },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        

    return (
        <div  className="carousel-container" data-aos="fade-left" data-aos-delay="500">
            <div className="carousel__arrow" style={{ textAlign: "right" }}>
                <button className="button" onClick={this.previous}>
                    <img src={Arrow_backward} alt="Arrow backward" />
                </button>
                <button className="button" onClick={this.next}>
                    <img src={Arrow_forward} alt="Arrow_forward" />
                </button>
            </div>

            <Slider ref={c => (this.slider = c)} {...settings}>
                <div className="top-games__image" >
                    <img src={Horizon} alt="Horizon VR" />
                    <p>Horizon : Call of the mountain</p>
                </div>  

                <div className="top-games__image">
                    <img src={Half_Life_Alyx} alt="Half-Life Alyx" />
                    <p>Half - Life : ALYX</p>
                </div>

                <div className="top-games__image">
                    <img src={Fight_Night_Champion} alt="Fight Night Champion" />
                    <p>Fight Night Champion</p>
                </div>

                <div className="top-games__image">
                    <img src={Call_of_Duty_Coold_War} alt="Call of Duty Coold War" />
                    <p>Call of Duty : Coold War</p>
                </div>

                <div className="top-games__image">
                    <img src={Resident_Evil_4} alt="Resident Evil 4" />
                    <p>Resident Evil 4</p>
                </div>

                <div className="top-games__image">
                    <img src={Marvel_Spider_Man_2} alt="Marvel's Spider-Man 2" />
                    <p>Marvel's Spider-Man 2</p>
                </div>

                <div className="top-games__image">
                    <img src={Hogwarts_Legacy} alt="Hogwarts Legacy" />
                    <p>Hogwarts Legacy</p>
                </div>

                <div className="top-games__image">
                    <img src={Final_Fantasy_XVI} alt="FINAL FANTASY XVI" />
                    <p>FINAL FANTASY XVI</p>
                </div>

                <div className="top-games__image">
                    <img src={Assassin_s_Creed_Mirage} alt="Assassin's Creed Mirage" />
                    <p>Assassin's Creed Mirage</p>
                </div>
            </Slider>          
        </div>
      );
    }
  }
