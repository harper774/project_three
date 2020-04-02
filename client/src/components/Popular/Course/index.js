import React from "react";
import "./style.scss";

function Course(props) {
    return (
        <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="single_courses">
                <div class="thumb">
                    <a href="#">
                        <img src="https://www.getitrightbookkeeping.com/images/figures/desk.jpg" alt=""></img>
                    </a>
                </div>
                <div class="courses_info">
                    <span>{ props.courseType }</span>
                    <h3><a href="/course">{ props.courseName } <br></br>
                        for web developer</a></h3>
                    <div class="star_prise d-flex justify-content-between">
                        <div class="star">
                            <i class="flaticon-mark-as-favorite-star"></i>
                            <span>{ props.courseRank }</span>
                        </div>
                        <div class="prise">
                            {/* <span class="offer">$89.00</span> */}
                            <span class="active_prise">
                            { props.coursePrice }
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;