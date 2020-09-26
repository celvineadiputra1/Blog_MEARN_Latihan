import React from "react";
import propTypes from "prop-types";
import "../../../assets/css/style.css";
const Input = ({ icon, label, ...rest }) => {
    const iconset = icon !== undefined ? icon : false;
    const labelset = label !== undefined ? <label>{label}</label> : "";
    if (iconset) {
        return (
            <div className="form-group">
                {labelset}
                <div className="input-group input-group-alternative mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className={iconset}></i>
                        </span>
                    </div>
                    <input className="form-control" {...rest} />
                </div>
            </div>
        );
    } else {
        return (
            <div className="form-group">
                {labelset}
                <input className="form-control" {...rest} />
            </div>
        );
    }

};

Input.propTypes = {
    icon: propTypes.string,
    label: propTypes.string
}


export default Input;
