import React from "react";
import { BlogItem, Button } from "../../components"
const Home = () => {
    return (
        <div className="container mt-3 mb-3">
            <div className="row">
                <div className="col-sm-12">
                    <Button text="Create Blog" classes="btn btn-primary w-100" />
                </div>
            </div>
            <div className="row mt-3">
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>
            <div className="row">
                <div className='col-sm-12 text-center'>
                    <Button text="Next" classes="btn-primary" />
                    <Button text="Prev" classes="btn-primary" />
                </div>
            </div>
        </div>
    );
};

export default Home;
