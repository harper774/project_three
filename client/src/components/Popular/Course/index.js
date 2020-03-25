import React from "react";
import "./style.scss";

function Course() {
    return (
        <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="single_courses">
                <div class="thumb">
                    <a href="#">
                        <img src="img/courses/1.png" alt=""></img>
                    </a>
                </div>
                <div class="courses_info">
                    <span>Photoshop</span>
                    <h3><a href="#">Mobile App design step by step <br></br>
                        from beginner</a></h3>
                    <div class="star_prise d-flex justify-content-between">
                        <div class="star">
                            <i class="flaticon-mark-as-favorite-star"></i>
                            <span>(4.5)</span>
                        </div>
                        <div class="prise">
                            <span class="offer">$89.00</span>
                            <span class="active_prise">
                                $49
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;