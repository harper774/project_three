import React from "react";
import "./style.scss";

function Banner() {
    return (
        <div className="courses_details_banner">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="course_text">
                            <h3>Music Search App <br></br> for beginner</h3>
                            <div className="prise">
                                {/* <span className="inactive">$89.00</span> */}
                                <span className="active">Free</span>
                            </div>
                            <div className="rating">
                                <i className="flaticon-mark-as-favorite-star"></i>
                                <i className="flaticon-mark-as-favorite-star"></i>
                                <i className="flaticon-mark-as-favorite-star"></i>
                                <i className="flaticon-mark-as-favorite-star"></i>
                                <i className="flaticon-mark-as-favorite-star"></i>
                                <span>(4.5)</span>
                            </div>
                            <div className="hours">
                                <div className="video">
                                    <div className="single_video">
                                        <i className="fa fa-clock-o"></i> <span>12 Videos</span>
                                    </div>
                                    <div className="single_video">
                                        <i className="fa fa-play-circle-o"></i> <span>9 Hours</span>
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

export default Banner;