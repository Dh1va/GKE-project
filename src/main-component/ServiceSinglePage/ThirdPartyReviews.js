import React, { Fragment, useState } from 'react';
// import Services from '../../api/service'
// import { useParams } from 'react-router-dom'
import ModalVideo from 'react-modal-video'
// import Header from '../../components/header/Header';
import Header3 from '../../components/header3/Header3';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/data-solutions-components/Footer/Footer';
// import CtaSection from '../../components/CtaSection/CtaSection';
import Bg from '../../images/bg/page_bg01.jpg'
import icon from '../../images/icon/ser-01.svg'
import srImg from '../../images/shape/brd_shape.png'
import srImg2 from '../../images/hero/sd-img.png'
import vImg from '../../images/video/services img-03.jpg'
// import vImg2 from '../../images/video/polygon02.png'
import sImg1 from '../../images/icon/third party-1.svg'
import sImg2 from '../../images/icon/third party-2.svg'
import sImg3 from '../../images/icon/third party-3.svg'
import sImg4 from '../../images/icon/third party-4.svg'
import shape from '../../images/shape/sd-shape.png'
import sicon from '../../images/icon/check-icon.svg'


const ThirdPartyReviews = (props) => {

    // const { slug } = useParams()

    // const ServiceDetails = Services.find(item => item.slug === slug)

    const [isOpen, setOpen] = useState(false)

    return (
        <Fragment>
            <div className="sco_agency">
                <Header3 />
                <main className="page_content service-single-page">
                    <section className="page-title  pt-200 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                        <div className="container">
                            <div className="page-title-wrap sd-title-wrap">
                                <div className="row mt-none-30 align-items-end">
                                    <div className="col-lg-9 mt-30">
                                        <div className="page-title-box">
                                            <span className="sub-title"><img src={icon} alt="" /> Third Party Reviews Service</span>
                                            <h2 className="title">Independent oversight.<br /> Reliable outcomes.<br /> Confidence in every design.</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mt-30">
                                        <div className="sd-right-img pos-rel">
                                            <img src={srImg2} alt="" />
                                            <div className="sd-arrow-shape">
                                                <img className="xbzoominzoomup" src={srImg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="video pt-70 pb-65">
                        <div className="container">
                            <div className="xb-video sd-video pos-rel">
                                <img src={vImg} alt="" />
                                {/* <button className="popup-video btn-video" onClick={() => setOpen(true)}><img src={vImg2} alt="" /></button> */}
                            </div>
                        </div>
                    </div>
                    <div className="sd-ser-content_wrap pb-110">
                        <div className="container">
                            <div className="sd-ser-content">
                                <h2 className="sd-title">Independent Validation for Assured Quality</h2>
                                <p className="sd-content">
                                    At GK Engineering, our Third-Party Design Review services act as a quality checkpoint for your MEP systems before construction begins. By bringing in an experienced, independent perspective, we help clients, consultants, and contractors refine their designs, eliminate risks, and ensure compliance with codes and standards.
                                </p>
                                <br />
                                <p className="sd-content">
                                    Our engineers conduct thorough technical audits, risk assessments, and constructability reviews to confirm that your designs are practical, cost-effective, and built for long-term performance. With GK Engineering as your review partner, you gain the confidence that every system is optimized for safety, efficiency, and reliability.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sd-process_warp">
                        <div className="container">
                            <div className="sd-heading">
                                <h2 className="sd-title">Service process</h2>
                                <p className="sd-content">Our systematic approach ensures accuracy and actionable improvements.</p>
                            </div>
                            <div className="sd-process_inner ul_li">
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg1} alt="" /></div>
                                    <h3 className="xb-item--title">Compliance Check</h3>
                                    <p className="xb-item--contact">Ensure all designs meet local and international codes.</p>
                                    <span className="xb-item--number">01</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg2} alt="" /></div>
                                    <h3 className="xb-item--title">Performance Validation</h3>
                                    <p className="xb-item--contact"> Verify functionality, safety, and operational efficiency.</p>
                                    <span className="xb-item--number">02</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg3} alt="" /></div>
                                    <h3 className="xb-item--title">Risk Assessment</h3>
                                    <p className="xb-item--contact">Identify potential errors, clashes, and constructability issues.</p>
                                    <span className="xb-item--number">03</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg4} alt="" /></div>
                                    <h3 className="xb-item--title">Review Report</h3>
                                    <p className="xb-item--contact"> Deliver independent recommendations for correction and improvement.</p>
                                    <span className="xb-item--number">04</span>
                                </div>
                                <div className="sd-shape"><img src={shape} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="sd-service_wrap pt-115 pb-130">
                        <div className="container">
                            <div className="sd-ser-outcome">
                                <div className="sd-heading">
                                    <h2 className="sd-title">Services Deliverables</h2>
                                    {/* <p className="sd-content">Here are six key points related to "Boost Your Authority with Link Building" in the context of digital transformation and risk management <br /> solutions for Fortune 500 companies, with a bit more detail:</p> */}
                                </div>
                                <div className="sd-list-item ul_li">
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Detailed Compliance Verification Report.</li>
                                        <li><img src={sicon} alt="" />Independent Performance Quality Validation.</li>
                                        <li><img src={sicon} alt="" />Risk & Error Assessment.</li>
                                    </ul>
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Cost-Saving Improvement Recommendations.</li>
                                        <li><img src={sicon} alt="" />Practical Constructability Feasibility Analysis.</li>
                                        <li><img src={sicon} alt="" />Clear Stakeholder Communication Support.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sd-ser-outcome mt-65">
                                <div className="sd-heading">
                                    <h2 className="sd-title">Services outcome</h2>
                                    <p className="sd-content">Partnering with GK Engineering for Third-Party Reviews ensures:</p>
                                </div>
                                <div className="sd-list-item ul_li">
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Error-free designs.</li>
                                        <li><img src={sicon} alt="" />Independent assurance.</li>
                                        <li><img src={sicon} alt="" />Smarter decisions.</li>
                                    </ul>
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Smooth coordination.</li>
                                        <li><img src={sicon} alt="" />Cost efficiency.</li>
                                        <li><img src={sicon} alt="" />Increased confidence.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                {/* <CtaSection /> */}
            </div>
            <Footer />
            <Scrollbar />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </Fragment>
    )
};
export default ThirdPartyReviews;