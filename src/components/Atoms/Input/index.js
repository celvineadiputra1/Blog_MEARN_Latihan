import React from "react";
import "../../../assets/css/style.css";
const Input = ({ icon, ...rest }) => {
    return (
        <div className="form-group">
            <div className="input-group input-group-alternative mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className={icon}></i>
                    </span>
                </div>
                <input className="form-control" {...rest} />
            </div>
        </div>
    );
};

export default Input;
