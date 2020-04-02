import React from "react";
import "./style.scss";

function UserCourses(props) {
    return (
        <section className="blog_area single-post-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 posts-list" key={ props.userId }>
                        <div className="single-post">
                            <div className="blog_details">
                                <h2>Hi { props.userName }!
                                </h2>
                            </div>
                        </div>
                        <div className="navigation-top">
                    
                        </div>
                        <div className="blog-author">
                            <div className="media align-items-center">
                            
                                <div className="media-body">
                                    <a href="#">
                                        <h4>{ props.userName }'s Introduction</h4>
                                    </a>
                                    <p>{ props.userBrief }</p>
                                </div>
                            </div>
                        </div>
                        <div className="comments-area">
                            <h4>Enrolled Courses</h4>
                            <div className="comment-list">
                                <div className="single-comment justify-content-between d-flex">
                                    <div className="user justify-content-between d-flex">
                                        <div className="thumb">
                                        
                                        </div>
                                        <div className="desc">
                                            <p className="comment">
                                            { props.userName }
                                            </p>
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <h5>
                                                        <a href="#">{ props.userCourse }</a>
                                                    </h5>
                                                    <p className="date">{ props.userEnrolledTime }</p>
                                                </div>
                                                <div className="reply-btn">
                                                    <a href="#" className="btn-reply text-uppercase">Start Course</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog_right_sidebar">
                            <aside className="single_sidebar_widget post_category_widget">
                                <h4 className="widget_title">Category</h4>
                                <ul className="list cat-list">
                                    <li>
                                        <a href="#" className="d-flex">
                                            <p>Javascript</p>
                                            <p>(1)</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex">
                                            <p>React</p>
                                            <p>(0)</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex">
                                            <p>HTML</p>
                                            <p>(0)</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex">
                                            <p>Express</p>
                                            <p>(0)</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex">
                                            <p>Other</p>
                                            <p>(0)</p>
                                        </a>
                                    </li>
                                </ul>
                            </aside>                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserCourses;