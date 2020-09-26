import React from 'react'

function Textarea({ label, res }) {
    const labelset = label !== undefined ? <label>{label}</label> : "";
    return (
        <div className="form-group">
            {labelset}
            <textarea className="form-control" {...res}></textarea>
        </div>
    )
}

export default Textarea
