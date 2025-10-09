import React, { Fragment, useState } from 'react';
// import Services from '../../api/service'
// import { useParams } from 'react-router-dom'
import ModalVideo from 'react-modal-video'
import Header from '../../components/header3/Header3';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/data-solutions-components/Footer/Footer';
// import CtaSection from '../../components/CtaSection/CtaSection';
import Bg from '../../images/bg/page_bg01.jpg'
import icon from '../../images/icon/ser-01.svg'
import srImg from '../../images/shape/brd_shape.png'
import srImg2 from '../../images/hero/sd-img.png'
import vImg from '../../images/video/services img-04.jpg'
// import vImg2 from '../../images/video/polygon02.png'
import sImg1 from '../../images/icon/bim-1.svg'
import sImg2 from '../../images/icon/bim-2.svg'
import sImg3 from '../../images/icon/bim-3.svg'
import sImg4 from '../../images/icon/bim-4.svg'
import shape from '../../images/shape/sd-shape.png'
import sicon from '../../images/icon/check-icon.svg'


const BimSolutions = (props) => {

    // const { slug } = useParams()

    // const ServiceDetails = Services.find(item => item.slug === slug)

    const [isOpen, setOpen] = useState(false)

    return (
        <Fragment>
            <div className="sco_agency">
                <Header />
                <main className="page_content service-single-page">
                    <section className="page-title  pt-200 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                        <div className="container">
                            <div className="page-title-wrap sd-title-wrap">
                                <div className="row mt-none-30 align-items-end">
                                    <div className="col-lg-9 mt-30">
                                        <div className="page-title-box">
                                            <span className="sub-title"><img src={icon} alt="" /> BIM Solutions (LOD 100–500) Service</span>
                                            <h2 className="title">Smarter models. <br /> Faster delivery. <br />  Confident decisions.</h2>
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
                                <h2 className="sd-title">Transforming Design into Data-Rich Models</h2>
                                <p className="sd-content">
                                    At GK Engineering, our BIM Solutions bridge the gap between design and execution by converting static drawings into intelligent, data-driven models across all Levels of Development—from early massing (LOD 100) to as-built documentation (LOD 500).

                                </p>
                                <br />
                                <p className="sd-content">
                                   By integrating time, cost, and asset data into a unified BIM environment, we empower project teams with greater visibility, accurate forecasting, and seamless coordination. Our digital-first approach reduces risks, accelerates approvals, and ensures projects transition smoothly from design to operation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sd-process_warp">
                        <div className="container">
                            <div className="sd-heading">
                                <h2 className="sd-title">Service process</h2>
                                <p className="sd-content">Our BIM methodology blends precision with innovation at every stage</p>
                            </div>
                            <div className="sd-process_inner ul_li">
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg1} alt="" /></div>
                                    <h3 className="xb-item--title"> Model Creation</h3>
                                    <p className="xb-item--contact"> Develop coordinated BIM models across architectural and MEP disciplines.</p>
                                    <span className="xb-item--number">01</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg2} alt="" /></div>
                                    <h3 className="xb-item--title">Clash Detection</h3>
                                    <p className="xb-item--contact">Run validation checks to resolve design conflicts before construction.</p>
                                    <span className="xb-item--number">02</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg3} alt="" /></div>
                                    <h3 className="xb-item--title"> Data Integration</h3>
                                    <p className="xb-item--contact"> Incorporate time, cost, and asset data for full project control.</p>
                                    <span className="xb-item--number">03</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg4} alt="" /></div>
                                    <h3 className="xb-item--title"> Final Handover</h3>
                                    <p className="xb-item--contact"> Deliver COBie-ready models and compliance-approved documentation.</p>
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
                                        <li><img src={sicon} alt="" />4D/5D BIM Model Integration.</li>
                                        <li><img src={sicon} alt="" />Structured COBie Data Management.</li>
                                        <li><img src={sicon} alt="" />Accurate MEP Quantity Surveying.</li>
                                    </ul>
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Comprehensive Clash-Free Validation.</li>
                                        <li><img src={sicon} alt="" />Custom Revit Family Creation.</li>
                                        <li><img src={sicon} alt="" />Authority-Compliant BIM Submissions.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="sd-ser-outcome mt-65">
                                <div className="sd-heading">
                                    <h2 className="sd-title">Services outcome</h2>
                                    <p className="sd-content">With GK Engineering’s BIM Solutions, you gain:</p>
                                </div>
                                <div className="sd-list-item ul_li">
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Greater project visibility.</li>
                                        <li><img src={sicon} alt="" />Shorter schedules.</li>
                                        <li><img src={sicon} alt="" />Optimized costs.</li>
                                    </ul>
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Reduced risks.</li>
                                        <li><img src={sicon} alt="" />Seamless handovers.</li>
                                        <li><img src={sicon} alt="" />Future-ready buildings.</li>
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
export default BimSolutions;