import React from 'react'
import heroimage from './/heroimg.png'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
function Hero() {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
              <div className="flexColStart hero-left">
                <div className="hero-title">
                    <h1>Discover Most Suitable Property</h1>
                </div>
                <div className=" flexColStart secondaryText  hero-des">
                    <span>Find variety of properties that suit you very easily</span>
                    <span>
                        Forget all difficulties in finding a residence for you
                    </span>
                </div>
                <div className="flexCenter search-bar">
                   <HiLocationMarker color='var(--blue)' size={25}/>
                   <input type="text" />
                   <button className='button'>Search</button>
                </div>
                <div className='flexCenter stats'>
                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={500} end={980} duration={2}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Products</span>
                    </div>
                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={546} end={786} duration={2}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                    </div>
                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={0} end={28} duration={2}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Award Winning</span>
                    </div>
                </div>
              </div>
              <div className=" flexCenter hero-right">
                    <div className="image-container">
                        <img src={heroimage} alt="" />
                    </div>
              </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
