import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCourses from '../../hooks/useCourse';
import Card from '../Card/Card';

const Miniservice = () => {
    const [courses] = useCourses();

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/services')
    }
    return (
        <div>
            <div className="tutorial-btn w-full container mx-auto flex justify-center">
                <button className='text-3xl font-bold text-mybtn tracking-widest px-2 py-1 rounded-lg border-2 hover:bg-mydark hover:text-mywhite ease-in-out duration-300 mb-6'>Tutorials</button>
            </div>
            <div className="container mx-auto flex justify-between items-center">
                {
                    courses.slice(0, 3).map(course => <Card
                        key={course.id}
                        course={course}
                    ></Card>)
                }

            </div>
            <div className='load-more-btn flex justify-end container mx-auto'>
                <button onClick={() => handleClick()} className='text-xl font-semibold text-mybtn tracking-widest px-2 rounded-lg border-1 hover:bg-mywhite hover:text-mydark ease-in-out duration-300 mb-6'>Load More...</button>
            </div>
        </div>
    );
};

export default Miniservice;