import React, { useState, useContext } from "react";
import API from "../../../utils/API";
// import UserContext from "../utils/UserContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const isAuth = useContext(UserContext).isAuth;

    function loginMethod(email, password) {
        const userData = {email, password};
        // isAuth = false;
        API.getAuth(userData)
        .then(response => {
            if (response.error) {
                // if error, alert the user
                // eslint-disable-next-line no-undef
                // isAuth = false;
                console.log(response.error);
            }
            console.log(response);
            // if everything ok, redirect to user dashboard page
            // isAuth = true;
            return window.location.replace("/user");
            
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        loginMethod(email, password);
}

return (
    <form id="test-form" onSubmit={handleSubmit} className="white-popup-block mfp-hide">
        <div className="popup_box ">
            <div className="popup_inner">
                <div className="logo text-center">
                    <a href="#">
                    </a>
                </div>
                <h3>Sign in</h3>
                <div>
                    <div className="row">
                        <div className="col-xl-12 col-md-12">
                            <input id="email" type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}></input>
                        </div>
                        <div className="col-xl-12 col-md-12">
                            <input id="password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                        </div>
                        <div className="col-xl-12">
                            <button id="signin-btn" type="submit" className="boxed_btn_orange">Register / Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
);
}

export default Login;