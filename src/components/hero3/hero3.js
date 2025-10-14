import React from 'react';
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
// import hImg from '../../images/shape/hero-glassisom2.png'

const Hero3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="hero hero-style-six pos-rel pt-170 pb-50">
            <div className="hero-overlay"></div>
            <div className="container position-relative">
                <div className="hero_wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="xb-hero">
                                <Fade direction='up' triggerOnce={'false'} duration={800} delay={6}>
                                    <div>
                                        <h1 className="xb-item--title wow fadeInUp"style={{color:"#3450A1"}}  data-wow-delay="0ms" data-wow-duration="600ms">Powering Smart Buildings with MEP Expertise</h1>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>
                                    <div className="">
                                        <p className="xb-item--content wow fadeInUp" style={{color:"#000"}} data-wow-delay="150ms" data-wow-duration="600ms">We deliver efficient, safe, and sustainable MEP solutions covering HVAC, electrical, plumbing, and more to optimize building performance at every stage.</p>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1800} delay={9}>
                                    <div className="">
                                        <div className="xb-btn mt-50 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                                            <Link onClick={ClickHandler} to="/contact" className="hero-btn thm-btn thm-btn--fill_icon thm-btn--data d-none d-md-block">
                                                <div className="xb-item--hidden"><span className="xb-item--hidden-text">Talk To Experts</span></div>
                                                <div className="xb-item--holder">
                                                    <span className="xb-item--text xb-item--text1">Talk To Experts</span>
                                                    <div className="xb-item--icon"><i className="fal fa-plus"></i></div>
                                                    <span className="xb-item--text xb-item--text2 ">Talk To Experts</span>
                                                </div>
                                            </Link>
                                            <Link
                                            onClick={ClickHandler}
                                            to="/contact"
                                            className="static-btn"
                                            >
                                            <span>Talk To Experts</span>
                                            <span className="icon-circle">
                                                <i className="fal fa-plus"></i>
                                            </span>
                                            </Link>

                                        </div>
                                    </div>
                                    
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="xb-shape">
                    <img src={hImg} alt=""/>
                </div> */}
            </div>
        </section>
    )
}

export default Hero3;