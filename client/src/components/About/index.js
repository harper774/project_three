import React from "react";
import "./style.scss";

function About() {
    return (
        <div className="about_area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="single_about_info">
                            <h3>Why not choose us <br></br>
                                to study together
                            </h3>
                            <p> Studying online gives you more flexibility. You can work and fit your work schedule (and your hobbies) around your coursework more easily.  </p>
                            <a href="/allcourses" className="boxed_btn">Enroll a Course</a>
                        </div>
                    </div>
                    <div className="col-xl-6 offset-xl-1 col-lg-6">
                        <div className="about_tutorials">
                            <div className="courses">
                                <div className="inner_courses">
                                    <div className="text_info">
                                        <span>HTML</span>
                                        <p> For beginner</p>
                                    </div>
                                </div>
                            </div>
                            <div className="courses-blue">
                                <div className="inner_courses">
                                    <div className="text_info">
                                        <span>JavaScript</span>
                                        <p>For intermediate</p>
                                    </div>
                                </div>
                            </div>
                            <div className="courses-sky">
                                <div className="inner_courses">
                                    <div className="text_info">
                                        <span>React</span>
                                        <p> For intermediate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;