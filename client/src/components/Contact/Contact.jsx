import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Contact() {
    let location = useLocation();

    useEffect(() => {
        const handleLoad = () => {
            const existingScript = document.querySelector('script[src="/js/custom.js"]');
            if (existingScript) {
                existingScript.remove();
            }

            const script = document.createElement('script');
            script.src = '/js/custom.js';
            script.async = true;
            document.body.appendChild(script);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, [location]);

    return (
        <>
            <div className="information-contact   layout-2 left-col">
                <div className="content_headercms_bottom" />
                <div className="content-top-breadcum">
                    <div className="container">
                        <div className="row">
                            <div id="title-content"></div>
                        </div>
                    </div>
                </div>
                <div id="information-contact" className="container">
                    <ul className="breadcrumb">
                        <li>
                            <a href="index.html">
                                <i className="fa fa-home" />
                            </a>
                        </li>
                        <li>
                            <a href="information/contact">Contact Us</a>
                        </li>
                    </ul>
                    <div className="row">
                        <aside id="column-left" className="col-sm-3 hidden-xs">
                            <div className="box">
                                <div className="box-heading">Information</div>
                                <div className="list-group">
                                    <a className="list-group-item" href="about.html">
                                        About Us{" "}
                                    </a>
                                    <a
                                        className="list-group-item"
                                        href="information/information&information_id=6"
                                    >
                                        Delivery Information{" "}
                                    </a>
                                    <a
                                        className="list-group-item"
                                        href="information/information&information_id=3"
                                    >
                                        Privacy Policy
                                    </a>
                                    <a
                                        className="list-group-item"
                                        href="information/information&information_id=5"
                                    >
                                        Terms &amp; Conditions{" "}
                                    </a>
                                    <Link className="list-group-item" to="/contact">
                                        Contact Us{" "}
                                    </Link>
                                    <a className="list-group-item" href="information/sitemap">
                                        Site Map{" "}
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-viewport">
                                <div id="banner0" className="swiper-container  single-banner ">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <a href="#">
                                                <img
                                                    src="assets/images/left-banner-272x340.jpg"
                                                    alt="Left Banner1"
                                                    className="img-responsive"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    {/* If we need pagination */}
                                    <div className="swiper-pagination" />
                                </div>
                            </div>
                            <div className="box">
                                <div className="box-heading">Account</div>
                                <div className="list-group">
                                    <a href="account/login" className="list-group-item">
                                        Login{" "}
                                    </a>{" "}
                                    <a href="account/register" className="list-group-item">
                                        Register
                                    </a>{" "}
                                    <a href="account/forgotten" className="list-group-item">
                                        Forgotten Password{" "}
                                    </a>
                                    <a href="account/account " className="list-group-item">
                                        My Account{" "}
                                    </a>
                                    <a href="account/address" className="list-group-item">
                                        Address Book
                                    </a>{" "}
                                    <a href="account/wishlist " className="list-group-item">
                                        Wish List{" "}
                                    </a>{" "}
                                    <a href="account/order " className="list-group-item">
                                        Order History{" "}
                                    </a>{" "}
                                    <a href="account/download" className="list-group-item">
                                        Downloads{" "}
                                    </a>
                                    <a href="account/recurring" className="list-group-item">
                                        Recurring payments{" "}
                                    </a>{" "}
                                    <a href="account/reward " className="list-group-item">
                                        Reward Points{" "}
                                    </a>{" "}
                                    <a href="account/return" className="list-group-item">
                                        Returns{" "}
                                    </a>{" "}
                                    <a href="account/transaction" className="list-group-item">
                                        Transactions{" "}
                                    </a>{" "}
                                    <a href="account/newsletter" className="list-group-item">
                                        Newsletter{" "}
                                    </a>
                                </div>
                            </div>
                        </aside>
                        <div id="content" className="col-sm-9">
                            <h1>Contact Us</h1>
                            <h3>Our Location</h3>
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="row contact-info">
                                        <div className="left">
                                            <div className="address-detail">
                                                <strong>Vesture</strong>
                                                <address>Address 1</address>
                                                <a
                                                    href="https://maps.google.com/maps?q=0123456789 &hl=en-gb &t=m&z=15"
                                                    target="_blank"
                                                    className="btn btn-info"
                                                >
                                                    <i className="fa fa-map-marker" /> View Google Map{" "}
                                                </a>
                                            </div>
                                            <div className="telephone">
                                                <strong>Telephone </strong>
                                                <address>123456789 </address>
                                            </div>
                                            <div className="fax">
                                                <strong>Fax </strong>
                                                <address>0879766 </address>
                                            </div>
                                            <div className="time">
                                                <strong>Opening Times</strong>
                                                <address>9:00 AM to 6:00 PM</address>
                                            </div>
                                            <div className="comment">
                                                <strong>Comments</strong>
                                                <address>
                                                    Shop Laptop feature only the best laptop deals on the
                                                    market. By comparing laptop deals from the likes of PC
                                                    World, Comet, Dixons, The Link and Carphone Warehouse
                                                </address>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form
                                action="information/contact"
                                method="post"
                                encType="multipart/form-data"
                                className="form-horizontal"
                            >
                                <fieldset>
                                    <legend>Contact Form</legend>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-name">
                                            Your Name
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                name="name"
                                                defaultValue=""
                                                id="input-name"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-email">
                                            E-Mail Address
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                name="email"
                                                defaultValue=""
                                                id="input-email"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-enquiry">
                                            Enquiry
                                        </label>
                                        <div className="col-sm-10">
                                            <textarea
                                                name="enquiry"
                                                rows={10}
                                                id="input-enquiry"
                                                className="form-control"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <fieldset>
                                        <legend>Captcha</legend>
                                        <div className="form-group required">
                                            <label
                                                className="col-sm-3 control-label"
                                                htmlFor="input-captcha"
                                            >
                                                Enter the code in the box below
                                            </label>
                                            <div className="col-sm-8">
                                                <input
                                                    type="text"
                                                    name="captcha"
                                                    id="input-captcha"
                                                    className="form-control"
                                                />
                                                <img
                                                    src="index.php?route=extension/captcha/basic/captcha"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </fieldset>
                                </fieldset>
                                <div className="buttons">
                                    <div className="pull-right">
                                        <input
                                            className="btn btn-primary"
                                            type="submit"
                                            defaultValue="Submit"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};