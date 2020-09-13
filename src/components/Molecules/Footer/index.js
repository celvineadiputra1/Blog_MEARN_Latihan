import React from "react";
import "../../../assets/SCSS/style.scss";
import "../../../assets/css/style.css";
function Footer() {
    return (
        <footer>
            <div className="container-fluid bg-default p-4">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h1 className="display-4 font-font-weight-bold text-white">
                            MEARN STACK - BLOG
                        </h1>
                    </div>
                    <div className="col-sm-12 col-md-6 text-white">
                        <b>DM ME</b>
                        <ul>
                            <li>
                                <i className="fa fa-whatsapp"></i>{" "}
                                0812-8751-2959
                            </li>
                            <li>
                                <i className="fa fa-instagram"></i> @celvineadp
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-white text-center">
                        <hr />
                        <b>Celvine Adi Putra &copy; 2020</b>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
