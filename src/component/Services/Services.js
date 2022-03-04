import React from 'react';
import useCourses from '../../hooks/useCourse';
import Card from '../Card/Card';

const Services = () => {
    const [courses, setCourses, displayCourses, setDisplayCourses] = useCourses();
    const handleSearch = event => {
        const searchText = event.target.value;

        const matched = courses.filter(course => course.title.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayCourses(matched)
    }
    return (
        <div>
            <div className="head-wrap text-center">
                <h1 className='text-3xl text-mydark font-bold p-0 m-0 '>All Courses</h1>
                <input onChange={handleSearch} className='px-2 py-1 w-1/3 text-mydark font-semibold my-2 border-gray-700 border-solid' type="text" placeholder='Search Courses' />
            </div>
            <div className='grid grid-cols-3'>
                {
                    displayCourses.map(course => <Card
                        key={course.id}
                        course={course}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Services;