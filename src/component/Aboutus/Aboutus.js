import React from 'react';
import './Aboutus.css'

const Aboutus = () => {
    return (
        <div className='flex items-center justify-center mb-5'>
            <div className="address-wrapper text-center rounded-lg p-4">
                <h1 className='text-4xl font-bold text-mydark'>Address</h1>
                <div>
                    <h2>Office</h2>
                    <p>Rajshahi, Naogaon, Mohadevpur</p>
                    <p>Mobile: 0170000000</p>
                    <p>Email: absayed444460@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;