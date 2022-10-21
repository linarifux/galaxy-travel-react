import React from 'react'
import './footer.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaSearchLocation size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                        <div>
                            <p>Pallabi, Mirpur</p>
                            <h4>Dhaka, BD</h4>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: '2rem' }} />+8801764118433</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: '2rem' }} /> linarifux@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptas, nam eaque nisi qui animi rem quasi nesciunt quidem architecto.</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: '1rem' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer