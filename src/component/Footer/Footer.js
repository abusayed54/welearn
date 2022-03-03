import React from 'react';
import facebook from './../../utilities/facebook.png'
import youtube from './../../utilities/youtube.PNG'
import twitter from './../../utilities/twitter.png'
import linkedin from './../../utilities/linkedin.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-body grid grid-cols-3'>
            <div className="social-links">
                <h2>Social Links</h2>
                <div className="img-wrapper flex justify-between p-5">
                    <img src={facebook} alt="" />
                    <img src={youtube} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>
            <div className="upcomming">
                <h2>Upcoming Tutorials</h2>
                <ul className='text-myfootersmallcolor'>
                    <li>Articfial Inteligence</li>
                    <li>Machine Learning</li>
                    <li>3D Animation</li>
                    <li>GoLang</li>
                    <li>Basic Computing</li>
                </ul>
            </div>
            <div className="address">
                <h2>Address</h2>
                <div className="address-block text-myfootersmallcolor">
                    <h3 className='text-semibold'>1st Office</h3>
                    <p>Naogaon Muktir Mor, Naogaon</p>
                    <small>Email: abusayed444460@gmail.com</small>
                    <div className="address-block">
                        <h3 className='text-semibold'>2nd Office</h3>
                        <p>Mohadevpur, Fazilpur Village</p>
                        <small>Mobile: 014659656567</small>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;