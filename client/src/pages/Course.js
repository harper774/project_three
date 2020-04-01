import React, { useEffect, useState } from "react";
// import API from "../utils/API";

// import About from "../components/About";
// import Nav from "../components/Nav";
// import Popular from "../components/Popular";
import User from "../components/User";
// import Slider from "../components/Slider";
// import Header from "../components/Header";
import CourseDetail from "../components/CourseDetail";

function Course() {
    const [courses, setCourses] = useState([]);
    const [isUser, setIsUser] = useState();
    
    useEffect(() => {
        loadCourses()
    }, []);

    function loadCourses() {
        console.log("Courses");
        // API.getCourse()
        // .then(res =>
        //     setCourses(res.data)
        // )
        // .catch(err => 
        //     console.log(err));
    };

    return (
        <div>
            <User />
            <CourseDetail />
        </div>
    );
}

export default Course;
