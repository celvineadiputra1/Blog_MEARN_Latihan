import React from "react";
import "../../../assets/css/style.css";
function Button({ text, classes }) {
    return (
        <button type="button" className={"btn " + classes}>
            {text}
        </button>
    );
}

export default Button;
