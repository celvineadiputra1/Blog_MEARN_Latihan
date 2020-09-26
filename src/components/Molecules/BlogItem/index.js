import React from "react";
import img from "../../../assets/images/logo.svg";
const BlogItem = () => {
    return (
        <div className="col-sm-12 col-md-4 mb-2" >
            <div className="card">
                <div className="card-img-top">
                    <img src={img} alt="img" />
                </div>
                <div className='card-body'>
                    <h3>Title</h3>
                    <h6>Author</h6>
                    <p>
                        lorem lorem lorem lorem lorem lorem lorem lorem
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BlogItem;