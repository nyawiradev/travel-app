import React from 'react'
import './SearchStyles.css'

import Booking from '../../assets/booking.jpg'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>Book a safari with Glotravel and experience</h2>
                    <p>To experience the romance of Kenya's colorful colonial history captured in the film Out of Africa, head to Nairobi. This bustling capital is the gateway to one of the world's most evocative and exciting travel destinations. Discover more places to visit in this fascinating country with our list of the top tourist attractions in Kenya.</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Booking} alt="/" style={{ marginRight: '1rem' }}width='400' height='200' />
                            </div>
                            <div>
                               
                            </div>
                        </div>
                        <div className="box">
                            <div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
                        <p className="offers">VIEW ALL CURRENT OFFERS</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>Destinations</label>
                            <select>
                                <option value="1">Malindi Island</option>
                                <option value="1">Amboseli</option>
                                <option value="1">Masai Mara</option>
                                <option value="1">Tsavo National Park</option>
                                <option value="1">Nairobi National Park</option>
                                <option value="1">Lake Naivasha</option>
                                <option value="1">Lake Nakuru</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>Book Now </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
