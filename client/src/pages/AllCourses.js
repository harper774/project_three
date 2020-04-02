import React, { useEffect, useState } from "react";
import API from "../utils/API";

import User from "../components/User";
import Popular from "../components/Popular";

function AllCourses() {
    const [courses, setCourses] = useState({});
    const [isUser, setIsUser] = useState();

    useEffect(() => {
        loadCourses()
    }, []);

    function loadCourses() {
        console.log("Load Courses...");
        API.getCourses()
            .then(res => {
                console.log(res.data[0]);
                setCourses(res.data[0])
            })
        .catch (err => console.log(err));
    };

    return (
        <div>
            <User />
            <Popular
                courseType={courses.courseType}
                courseName={courses.courseName}
                courseRank={courses.courseRank}
                coursePrice={courses.coursePrice}
            />
        </div>
    );
}

export default AllCourses;
