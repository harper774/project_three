import React from "react";

function Login() {
    return (
        <form id="test-form2" class="white-popup-block mfp-hide">
            <div class="popup_box ">
                <div class="popup_inner">
                    <div class="logo text-center">
                        <a href="#">
                            <img src="img/form-logo.png" alt=""></img>
                        </a>
                    </div>
                    <h3>Resistration</h3>
                    <form action="#">
                        <div class="row">
                            <div class="col-xl-12 col-md-12">
                                <input type="email" placeholder="Enter email"></input>
                            </div>
                            <div class="col-xl-12 col-md-12">
                                <input type="password" placeholder="Password"></input>
                            </div>
                            <div class="col-xl-12 col-md-12">
                                <input type="Password" placeholder="Confirm password"></input>
                            </div>
                            <div class="col-xl-12">
                                <button type="submit" class="boxed_btn_orange">Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </form>
    );
}

export default Login;