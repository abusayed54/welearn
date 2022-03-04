import { useEffect, useState } from "react"

const useCourses = () => {
    const [courses, setCourses] = useState([])
    const [displayCourses, setDisplayCourses] = useState([])
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => {
                setDisplayCourses(data)
                setCourses(data)
            })
    }, [])
    return [courses, setCourses, displayCourses, setDisplayCourses]
}

export default useCourses;