import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Course from "./Course";
import More from "./More";

const style = {
    marginTop: 90,
    // backgroundImage: "linear-gradient(to top, #e6b980 0%, #eacda3 100%)",
    repeat: "no-repeat",
    color: "white"
}

function Popular(props) {
    return (
        <div>
            <div className="all_popular_courses" style={style}>
                <div className="container mt-5">
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
                                            <Course 
                                                courseType = { props.courseType }
                                                courseName = { props.courseName}
                                                courseRank = { props.courseRank}
                                                coursePrice = { props.coursePrice}
                                            />
                                            <More />
                                        </div>
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

export default Popular;