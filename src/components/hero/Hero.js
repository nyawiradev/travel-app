import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'

import wildlife from '../../assets/wildlife.jpg'

function Hero() {
    return (
        <div className='hero'>
            <img src={wildlife} width="100%" height="100%" alt="maasai" object-fit="cover" z-index="-1"/> 
            <div className="overlay"></div>
            <div className="content">
                <h2>Global Travel Destinations</h2>
                
                <form className="form">
                    <div>
                        <input type="text" placeholder='Search Destinations' />
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
