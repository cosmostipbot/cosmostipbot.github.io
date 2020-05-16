import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section className="about-area pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src={require("../../images/about-img-three.png")} alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>How to use</span>
                                <h2>We Created the @cosmostipbot with usability in mind</h2>
                                <p>Use a few commands in twitter DM's or Status Update (Tweet) to engage extra with your audience</p>

                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                !tip
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                !withdraw
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                !register
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                !balance
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                !account
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                !donate
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <Link href="/about-1">
                                    <a className="default-btn">
                                        Learn More
                                    </a>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;
