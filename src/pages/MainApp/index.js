import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import { Header, Footer } from "../../components";
import "../MainApp/index.scss";

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <Header />
            <div className="content-wrapper">
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
            </div>
            <Footer />
        </div>
    );
};

export default MainApp;
