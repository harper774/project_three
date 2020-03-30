import React from "react";
import "./style.scss";

function Popular() {
    return (
        <div class="row">
            <div class="col-xl-12">
                <div class="course_nav">
                    <nav>
                        <ul class="nav" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                    aria-controls="home" aria-selected="true">All Courses</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                    aria-controls="profile" aria-selected="false">Javascript</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                                    aria-controls="contact" aria-selected="false">CSS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="design-tab" data-toggle="tab" href="#design" role="tab"
                                    aria-controls="design" aria-selected="false">Express</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="Web-tab" data-toggle="tab" href="#Web" role="tab"
                                    aria-controls="design" aria-selected="false">React</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="Web-tab1" data-toggle="tab" href="#Web1" role="tab"
                                    aria-controls="design" aria-selected="false">Database</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="Web-tab11" data-toggle="tab" href="#Web11" role="tab"
                                    aria-controls="design" aria-selected="false">Other</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Popular;