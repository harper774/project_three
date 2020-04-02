import React, { useContext } from "react";
import "./style.scss";

function Header() {

    // const isAuth = useContext(UserContext);

    // function renderLogin() {
    //     if(isAuth) {
    //         return <span>log in</span>
    //     } else if(!isAuth) {
    //         return <span>log out</span>
    //     }
    // }

    return (
        <header>
            <div className="header-area ">
                <div id="sticky-header" className="main-header-area">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center no-gutters">
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo-img">
                                    <a href="index.html">
                                        <img src="img/" alt=""></img>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><a className="active" href="/">home</a></li>
                                            <li><a href="/allcourses">Courses</a></li>
                                            <li><a href="https://harperportfolio.herokuapp.com/">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div className="log_chat_area d-flex align-items-center">
                                    
                                    <a href="#test-form" className="login popup-with-form">
                                        <i className="flaticon-user"></i>
                                        <div> log in </div>
                                    </a>
                                    <div className="live_chat_btn">
                                        <a className="boxed_btn_orange" href="#">
                                            <input type="text" placeholder="Search"></input>
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;