import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>GLOTRAVELS&reg;</h3>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                        
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
