import React, { useEffect, useState } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
// import Nav from "../components/Nav";
import Popular from "../components/Popular";
import Slider from "../components/Slider";
import Header from "../components/Header";
// import API from "../utils/API";

function Courses() {
    const [courses, setCourses] = useState([]);
    
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
            <Header />
            <Slider />
            <About />
            <Popular />
            <Footer />
        </div>
    );
}

export default Courses;
