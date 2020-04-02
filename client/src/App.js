import React, { useState } from "react";
import Main from "./pages/Main";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Course from "../src/pages/Course"
import UserPage from "./pages/UserPage";
import AllCourses from "./pages/AllCourses";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const auContext = React.createContext();

// import Nav from "./components/Nav";


function App() {
    const [checkAuth, setCheckAuth] = useState();

    return (
        <auContext.Provider>
            <Header auth={checkAuth}/>
            <Router>
                <Switch>
                    <Route path="/" component={Main} exact />
                    <Route path="/course" component={Course} exact/>
                    <Route path="/user" component={UserPage} exact />
                    <Route path="/allcourses" component={AllCourses} exact />
                </Switch>
            </Router>
            <Footer />
        </auContext.Provider>
    );
}

export default App;
