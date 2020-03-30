import React, { useEffect, useState } from "react";
// import API from "../utils/API";

import User from "../components/User";
import Popular from "../components/Popular";

function AllCourses() {
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
            <Popular />
        </div>
    );
}

export default AllCourses;
