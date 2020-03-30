import React from "react";
import "./style.scss";

function Slider() {
    return (
        <div className="slider_area ">
            <div className="single_slider d-flex align-items-center justify-content-center slider_bg_1">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-6 col-md-6">
                            <div className="illastrator_png">
                                
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="slider_info">
                                <h3>Learn your <br></br>
                                    Favorite Course <br></br>
                                    From Online</h3>
                                <a href="/allcourses" className="boxed_btn">Browse Our Courses</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;