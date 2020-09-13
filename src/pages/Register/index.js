import React from "react";
import "../../assets/css/style.css";
import "../../assets/fonts/font-awesome.css";
import "../../assets/fonts/nucleo-icons.css";
import "../../assets/fonts/nucleo-svg.css";
import githubIcon from "../../assets/icons/github.svg";
import googleIcon from "../../assets/icons/google.svg";
import Input from "../../components/Atoms/Input";
const Register = () => {
    return (
        <div class="wrapper">
            <section class="section section-shaped section-lg">
                <div class="container pt-lg-7">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="card bg-secondary shadow border-0">
                                <div class="card-header bg-white pb-5">
                                    <div class="text-muted text-center mb-3">
                                        <small>Sign up with</small>
                                    </div>
                                    <div class="text-center">
                                        <a
                                            href="#"
                                            class="btn btn-neutral btn-icon mr-4">
                                            <span class="btn-inner--icon">
                                                <img src={githubIcon} />
                                            </span>
                                            <span class="btn-inner--text">
                                                Github
                                            </span>
                                        </a>
                                        <a
                                            href="#"
                                            class="btn btn-neutral btn-icon">
                                            <span class="btn-inner--icon">
                                                <img src={googleIcon} />
                                            </span>
                                            <span class="btn-inner--text">
                                                Google
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div class="card-body px-lg-5 py-lg-5">
                                    <div class="text-center text-muted mb-4">
                                        <small>
                                            Or sign up with credentials
                                        </small>
                                    </div>
                                    <form role="form">
                                        <Input
                                            icon="ni ni-hat-3"
                                            placeholder="Name"
                                            type="text"
                                        />
                                        <Input
                                            icon="ni ni-email-83"
                                            placeholder="Email"
                                            type="email"
                                        />
                                        <Input
                                            icon="ni ni-lock-circle-open"
                                            placeholder="Password"
                                            type="password"
                                        />
                                        <div class="text-muted font-italic">
                                            <small>
                                                password strength:{" "}
                                                <span class="text-success font-weight-700">
                                                    strong
                                                </span>
                                            </small>
                                        </div>
                                        <div class="row my-4">
                                            <div class="col-12">
                                                <div class="custom-control custom-control-alternative custom-checkbox">
                                                    <input
                                                        class="custom-control-input"
                                                        id="customCheckRegister"
                                                        type="checkbox"
                                                    />
                                                    <label
                                                        class="custom-control-label"
                                                        for="customCheckRegister">
                                                        <span>
                                                            I agree with the{" "}
                                                            <a href="#">
                                                                Privacy Policy
                                                            </a>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <button
                                                type="button"
                                                class="btn btn-primary mt-4">
                                                Create account
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
