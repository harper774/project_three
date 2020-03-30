import React from "react";

function Login() {
    return (
        <form id="test-form" class="white-popup-block mfp-hide">
            <div class="popup_box ">
                <div class="popup_inner">
                    <div class="logo text-center">
                        <a href="#">
                            
                        </a>
                    </div>
                    <h3>Sign in</h3>
                    <form action="#">
                        <div class="row">
                            <div class="col-xl-12 col-md-12">
                                <input id="email" type="email" placeholder="Enter email"></input>
                            </div>
                            <div class="col-xl-12 col-md-12">
                                <input id="password" type="password" placeholder="Password"></input>
                            </div>
                            <div class="col-xl-12">
                                <button id="signin-btn" type="submit" class="boxed_btn_orange">Sign in</button>
                            </div>
                        </div>
                    </form>
                    <p class="doen_have_acc">Don’t have an account? <a class="dont-hav-acc" href="#test-form2">Sign Up</a>
                    </p>
                </div>
            </div>
        </form>
    );
}

export default Login;