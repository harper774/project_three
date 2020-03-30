import React from "react";
import "./style.scss";

function Footer() {
    return (
        <footer className="footer footer_bg_1">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="footer_widget">
                                <div className="footer_logo">
                                    <a href="#">
                                        
                                    </a>
                                </div>
                                <p>
                                    Learning online is quite good.
                                </p>
                                <div className="socail_links">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="ti-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ti-twitter-alt"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-md-6 col-lg-3">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Courses
                            </h3>
                                <ul>
                                    <li><a href="#">Javascript</a></li>
                                    <li><a href="#"> CSS</a></li>
                                    <li><a href="#">Express</a></li>
                                    <li><a href="#">React</a></li>
                                    <li><a href="#">Other Languages</a></li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-lg-2">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Resources
                            </h3>
                                <ul>
                                    <li><a href="#">Github</a></li>
                                    <li><a href="#">Monash Bootcamp</a></li>
                                    <li><a href="#">Contact me</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-lg-3">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Address
                            </h3>
                                <p>
                                    Monash Bootcamp <br></br>
                                    Melbourne VIC
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right_text">
                <div className="container">
                    <div className="footer_border"></div>
                    <div className="row">
                        <div className="col-xl-12">
                            <p className="copy_right text-center">
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> <a href="#" target="_blank"> Harper</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;