import React from "react";
import Courses from "./pages/Courses";
// import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

    return (
        <Router>
            <Switch>
                <Route path="/" component={Courses}/>
                
            </Switch>
        </Router>
    );
}

export default App;
