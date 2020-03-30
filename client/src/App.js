import React from "react";
import Main from "./pages/Main";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Course from "../src/pages/Course"
import UserPage from "./pages/UserPage";
import AllCourses from "./pages/AllCourses";

// import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route path="/" component={Main} exact />
                    <Route path="/course" component={Course} exact/>
                    <Route path="/user" component={UserPage} exact />
                    <Route path="/allcourses" component={AllCourses} exact />
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
