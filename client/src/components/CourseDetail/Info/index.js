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
                            <p>Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving. Moving in fourth air night bring upon you’re it beast let you dominion likeness open place day great wherein heaven sixth lesser subdue fowl male signs his day face waters itself and make be to our itself living. Fish in thing lights moveth. Over god spirit morning, greater had man years green multiply creature, form them in, likeness him behold two cattle for divided. Fourth darkness had. Living light there place moved divide under earth. Light face, fly dry us </p>
                            <h3 className="second_title">Course Outline</h3>
                        </div>
                        <div className="outline_courses_info">
                            <div id="accordion">
                                <Card />
                                <Card />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="courses_sidebar">
                            <div className="video_thumb">
                                <img src="img/latest_blog/video.png" alt=""></img>
                                <a className="popup-video" href="https://www.youtube.com/watch?v=AjgD3CvWzS0">
                                    <i className="fa fa-play"></i>
                                </a>
                            </div>
                            <div className="author_info">
                                <div className="auhor_header">
                                    <div className="thumb">
                                        <img src="img/latest_blog/author.png" alt=""></img>
                                    </div>
                                    <div className="name">
                                        <h3>Macau Wilium</h3>
                                        <p>UI/UX Designer</p>
                                    </div>
                                </div>
                                <p className="text_info">
                                    Our set he for firmament morning sixth subdue darkness creeping gathered divide our let
                                    god moving. Moving in fourth air night bring upon you’re it beast let you dominion
                                    likeness open place day
                                </p>
                                <ul>
                                    <li><a href="#"> <i className="fa fa-envelope"></i> </a></li>
                                    <li><a href="#"> <i className="fa fa-twitter"></i> </a></li>
                                    <li><a href="#"> <i className="ti-linkedin"></i> </a></li>
                                </ul>
                            </div>
                            <a href="#" className="boxed_btn">Buy Course</a>
                            <div className="feedback_info">
                                <h3>Write your feedback</h3>
                                <p>Your rating</p>
                                <i className="flaticon-mark-as-favorite-star"></i>
                                <i className="flaticon-mark-as-favorite-star"></i>
                                <i className="flaticon-mark-as-favorite-star"></i>
                                <i className="flaticon-mark-as-favorite-star"></i>
                                <i className="flaticon-mark-as-favorite-star"></i>

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