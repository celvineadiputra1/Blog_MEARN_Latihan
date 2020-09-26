import React from 'react'
import img from "../../../assets/images/logo.svg"
import "./index.scss";
function Upload() {
    return (
        <div>
            <img src={img} alt="preview" className="img-fit" />
            <input type="file" className="form-control-file mb-2" />
        </div>
    )
}

export default Upload
