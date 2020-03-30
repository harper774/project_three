import React from "react";
import "./style.scss";

function Course() {
    return (
        <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="single_courses">
                <div class="thumb">
                    <a href="#">
                        <img src="https://www.getitrightbookkeeping.com/images/figures/desk.jpg" alt=""></img>
                    </a>
                </div>
                <div class="courses_info">
                    <span>Javascript</span>
                    <h3><a href="#">Music Search App Dev <br></br>
                        for beginner</a></h3>
                    <div class="star_prise d-flex justify-content-between">
                        <div class="star">
                            <i class="flaticon-mark-as-favorite-star"></i>
                            <span>(4.5)</span>
                        </div>
                        <div class="prise">
                            {/* <span class="offer">$89.00</span> */}
                            <span class="active_prise">
                                Free
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;