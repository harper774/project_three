import React, { useEffect, useState } from "react";
// import API from "../utils/API";

import About from "../components/About";
import User from "../components/User";
import Slider from "../components/Slider";

function Main() {
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
            <Slider />
            <About />
            <User />
        </div>
    );
}

export default Main;
