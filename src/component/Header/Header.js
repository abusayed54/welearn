import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../utilities/WelearnFinal.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header-wrapper bg-myheader w-full mb-5">
                <div className='w-11/12 mx-auto header flex justify-between items-center'>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="navigation w-1/2">
                        <ul className='text-mywhite flex justify-between items-center px-2'>

                            <li><NavLink to="./home">Home</NavLink></li>
                            <li><NavLink to="./services">Services</NavLink></li>
                            <li><NavLink to="./pricing">Pricing</NavLink></li>
                            <li><NavLink to="./aboutus">About Us</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;