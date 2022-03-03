import React from 'react';
import useCourses from '../../hooks/useCourse';
import Card from '../Card/Card';

const Services = () => {
    const [courses] = useCourses();
    return (
        <div>
            <h1 className='text-3xl text-center text-mydark font-bold p-0 m-0'>All Courses</h1>
            <div className='grid grid-cols-3'>
                {
                    courses.map(course => <Card
                        key={course.id}
                        course={course}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Services;