import React from "react";
import "./style.scss";

function Banner(props) {
    return (
        <div className="courses_details_banner">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="course_text">
                            <h3>{ props.courseName }<br></br></h3>
                            <div className="prise">
                                <span className="inactive">$1,999</span>
                                <span className="active">{props.coursePrice}</span>
                            </div>
                            <div className="rating">
                                <i className="flaticon-mark-as-favorite-star"></i>
                                <i className="flaticon-mark-as-favorite-star"></i>
                                <i className="flaticon-mark-as-favorite-star"></i>
                                <i className="flaticon-mark-as-favorite-star"></i>
                                <i className="flaticon-mark-as-favorite-star"></i>
                                <span>{ props.courseRank }</span>
                            </div>
                            <div className="hours">
                                <div className="video">
                                    <div className="single_video">
                                        <i className="fa fa-clock-o"></i> <span>{ props.courseVideo } Videos</span>
                                    </div>
                                    <div className="single_video">
                                        <i className="fa fa-play-circle-o"></i> <span>{ props.courseHour } Hours</span>
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