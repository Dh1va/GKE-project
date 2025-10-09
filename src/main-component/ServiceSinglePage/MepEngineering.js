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
import vImg from '../../images/video/services img-01.jpg'
// import vImg2 from '../../images/video/polygon02.png'
import sImg1 from '../../images/icon/mep-1.svg'
import sImg2 from '../../images/icon/mep-2.svg'
import sImg3 from '../../images/icon/mep-3.svg'
import sImg4 from '../../images/icon/mep-4.svg'
import shape from '../../images/shape/sd-shape.png'
import sicon from '../../images/icon/check-icon.svg'


const MepEngineering = (props) => {

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
                                            <span className="sub-title"><img src={icon} alt="" /> MEP Design Engineering Service</span>
                                            
                                            <h2 className="title">Transform your building concepts into  efficient, functional, and sustainable environments with GK Engineering’s expert MEP solutions.</h2>
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
                                <h2 className="sd-title">Engineering systems that bring buildings to life</h2>
                                <p className="sd-content">
                                    At GK Engineering, our MEP engineering services go beyond traditional design—we create integrated systems that form the backbone of high-performing structures. Covering HVAC, electrical, plumbing, fire protection, gas distribution, and low-current systems, our solutions are tailored to meet your project’s unique requirements.
                                </p>
                                <br />
                                <p className="sd-content">
                                    From concept planning to detailed system design, we collaborate closely with clients to ensure compliance, safety, energy efficiency, and seamless execution. Our goal is to turn complex engineering into practical solutions that balance performance, cost-effectiveness, and sustainability.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sd-process_warp">
                        <div className="container">
                            <div className="sd-heading">
                                <h2 className="sd-title">Service process</h2>
                                <p className="sd-content">Our service process ensures accuracy, compliance, and efficiency.</p>
                            </div>
                            <div className="sd-process_inner ul_li">
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg1} alt="" /></div>
                                    <h3 className="xb-item--title">Requirement Study</h3>
                                    <p className="xb-item--contact"> We analyze your project needs, building functions, and performance goals.</p>
                                    <span className="xb-item--number">01</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg2} alt="" /></div>
                                    <h3 className="xb-item--title">Concept Design </h3>
                                    <p className="xb-item--contact">Preliminary MEP layouts are developed to align with architecture and project scope.</p>
                                    <span className="xb-item--number">02</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg3} alt="" /></div>
                                    <h3 className="xb-item--title"> Detailed Engineering</h3>
                                    <p className="xb-item--contact">Comprehensive designs for HVAC, electrical, plumbing, fire, and gas systems.</p>
                                    <span className="xb-item--number">03</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg4} alt="" /></div>
                                    <h3 className="xb-item--title"> Final Delivery</h3>
                                    <p className="xb-item--contact">Coordinated drawings, documents, and specifications ready for execution.</p>
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
                                    <h2 className="sd-title">Service Deliverables</h2>
                                    {/* <p className="sd-content">Here are six key points related to "Boost Your Authority with Link Building" in the context of digital transformation and risk management <br /> solutions for Fortune 500 companies, with a bit more detail:</p> */}
                                </div>
                                <div className="sd-list-item ul_li">
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Efficient HVAC System Design.</li>
                                        <li><img src={sicon} alt="" />Reliable Electrical Infrastructure Plans.</li>
                                        <li><img src={sicon} alt="" />Sustainable Plumbing & Drainage Solutions.</li>
                                    </ul>
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Integrated Fire Protection Systems.</li>
                                        <li><img src={sicon} alt="" />Safe Gas Distribution Networks.</li>
                                        <li><img src={sicon} alt="" />Smart Low-Current System Integration.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sd-ser-outcome mt-65">
                                <div className="sd-heading">
                                    <h2 className="sd-title">Service Outcomes</h2>
                                    <p className="sd-content">Partnering with GK Engineering for MEP services ensures:</p>
                                </div>
                                <div className="sd-list-item ul_li">
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Efficient, sustainable systems.</li>
                                        <li><img src={sicon} alt="" />Compliant and safe designs.</li>
                                        <li><img src={sicon} alt="" />Seamless integration.</li>
                                    </ul>
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Enhanced occupant comfort.</li>
                                        <li><img src={sicon} alt="" />Future-ready infrastructure.</li>
                                        <li><img src={sicon} alt="" />Reliable performance.</li>
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
export default MepEngineering;