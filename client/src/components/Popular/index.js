import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Course from "./Course";
import More from "./More";


function Popular() {
    return (
        <div>
            <div className="popular_courses">
                <div className="container">
                    <Header />
                    <Nav />
                </div>

                <div className="all_courses">
                    <div class="container">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row">
                                    <Course />
                                    <More />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popular;