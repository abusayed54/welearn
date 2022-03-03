import React from 'react';
import image from './../../utilities/20945784.jpg'
import './Card.css';

const Card = (props) => {
    const { title, rating, image, description, author } = props.course;
    return (
        <div className='card-container m-2 rounded mb-4'>
            <div className="card-body p-2">
                <div className="card-img">
                    <img className='rounded-lg' src={image} alt="" />
                </div>
                <div className="card-content mt-2">
                    <h3 className='font-semibold text-center'>{title}</h3>
                    <small className='text-myparagraphcolor text-center block text-mydark'>{author}</small>
                    <p className='text-myparagraphcolor text-xs text-justify tracking-tight break-all'>{description}</p>
                    <div className='w-full flex justify-center'>
                        <button className='mx-auto bg-mybtn px-4 text-mywhite rounded-lg mt-2 hover:bg-transparent hover:text-mydark ease-in-out duration-300'>Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;