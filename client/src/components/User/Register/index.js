import React from "react";

function Login() {
    return (
        <form id="test-form2" className="white-popup-block mfp-hide">
            <div className="popup_box ">
                <div className="popup_inner">
                    <div className="logo text-center">
                        <a href="#">
                            
                        </a>
                    </div>
                    <h3>Resistration</h3>
                    <div action="/auth">
                        <div className="row">
                            <div className="col-xl-12 col-md-12">
                                <input type="email" placeholder="Enter email"></input>
                            </div>
                            <div className="col-xl-12 col-md-12">
                                <input type="password" placeholder="Password"></input>
                            </div>
                            <div className="col-xl-12 col-md-12">
                                <input type="Password" placeholder="Confirm password"></input>
                            </div>
                            <div className="col-xl-12">
                                <button id="register-btn" className="boxed_btn_orange">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Login;