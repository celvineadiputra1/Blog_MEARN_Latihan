import React from "react";
import { Input, Button, Upload, Textarea } from "../../components/Atoms";

const CreateBlog = () => {
    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-sm-12">
                    <h3>Create New Blog Post</h3>
                </div>
                <div className="col-4">
                    <Input placeholder="Title Blog Post" label="Title Blog Post" />
                    <Upload />
                    <Textarea label="Isi Content" />
                    <Button text="Save" classes="btn-primary w-100 mt-4" />
                </div>
            </div>
        </div>
    );
};

export default CreateBlog;
