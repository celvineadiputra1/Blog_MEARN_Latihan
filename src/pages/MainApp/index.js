import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";

const MainApp = () => {
    return (
        <div>
            <p>Header</p>
            <Router>
                <switch>
                    <Route path="/create-post">
                        <CreateBlog />
                    </Route>
                    <Route path="/detail-blog">
                        <DetailBlog />
                    </Route>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                </switch>
            </Router>
            <p>Footer</p>
        </div>
    );
};

export default MainApp;
