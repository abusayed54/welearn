import React from 'react';
import Miniservice from '../Miniservice/Miniservice';
import image from './../../utilities/20945784.jpg'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='first'>
                <div className="section-One flex container mx-auto justify-between items-center">
                    <div className="left-section">
                        <h1 className='text-4xl font-bold'>Get The Best <br />Tutoring Services</h1>
                    </div>
                    <div className="right-section w-1/2">
                        <img className='w-full' src={image} alt="" />
                    </div>
                </div>
                <div className='btn-wrapper container mx-auto'>
                    <button className='getting-started-btn  text-left bg-mybtn text-mywhite text-xl text-bold px-3 py-2 rounded-lg hover:bg-mydark ease-in-out duration-300'>Getting Started</button>
                </div>

            </div>
            <Miniservice></Miniservice>
        </>
    );
};

export default Home;