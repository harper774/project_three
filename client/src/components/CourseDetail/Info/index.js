import React from "react";
import Card from "./Card";
import "./style.scss";

function Info() {
    return (
        <div className="courses_details_info">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7">
                        <div className="single_courses">
                            <h3>Objectives</h3>
                            <p>
                                This course is to teach users to build up an application is to allow users search for their favourite songs.
                                <br></br>
                                The user could search by lyrics, singer, album, or even by humming.
                            </p>
                            <h3 className="second_title">Course Outline</h3>
                        </div>
                        <div className="outline_courses_info">
                            <div id="accordion">
                                <Card />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="courses_sidebar">
                            <div className="video_thumb">

                                <a className="popup-video" href="https://www.youtube.com/watch?v=ryAxe7y_1AQ">
                                    <i className="fa fa-play"></i>
                                </a>
                            </div>
                            <div className="author_info">
                                <div className="auhor_header">
                                    <div className="thumb">
                                       
                                    </div>
                                    <div className="name">
                                        <h3>User</h3>
                                        <p>Web Developer</p>
                                    </div>
                                </div>
                                <p className="text_info">
                                    This is a brilliant course for new starters in web development.
                                </p>
                                <ul>
                                    <li><a href="#"> <i className="fa fa-envelope"></i> </a></li>
                                    <li><a href="#"> <i className="fa fa-twitter"></i> </a></li>
                                    <li><a href="#"> <i className="ti-linkedin"></i> </a></li>
                                </ul>
                            </div>
                            <a href="#" className="boxed_btn">Enrol</a>
                            <div className="feedback_info">
                                <h3>Write your feedback</h3>

                                <form action="#">
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Write your feedback"></textarea>
                                    <button type="submit" className="boxed_btn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;