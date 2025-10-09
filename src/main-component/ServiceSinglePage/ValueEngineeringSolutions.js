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
import vImg from '../../images/video/services img-02.jpg'
// import vImg2 from '../../images/video/polygon02.png'
import sImg1 from '../../images/icon/value engineering-1.svg'
import sImg2 from '../../images/icon/value engineering-2.svg'
import sImg3 from '../../images/icon/value engineering-3.svg'
import sImg4 from '../../images/icon/value engineering-4.svg'
import shape from '../../images/shape/sd-shape.png'
import sicon from '../../images/icon/check-icon.svg'


const ValueEngineeringSolutions = (props) => {

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
                                            <span className="sub-title"><img src={icon} alt="" /> Value Engineering Solutions Service</span>
                                            <h2 className="title">Enhance performance. <br /> Reduce cost. <br /></h2>
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
                                <h2 className="sd-title">Build smarter with GK Engineering’s Value Engineering services.</h2>
                                <p className="sd-content">
                                    At GK Engineering, our Value Engineering Design services focus on optimizing MEP systems to deliver maximum functionality, safety, and sustainability—at the lowest possible cost. By critically reviewing existing or proposed designs, we identify opportunities to reduce unnecessary expenses, improve efficiency, and enhance long-term performance.
                                </p>
                                <br />
                                <p className="sd-content">
                                    Using advanced tools like BIM and life-cycle cost analysis, we provide practical, data-driven solutions that balance innovation with affordability. Our approach ensures you don’t just save money—you gain smarter, more sustainable systems that support long-term ROI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sd-process_warp">
                        <div className="container">
                            <div className="sd-heading">
                                <h2 className="sd-title">Service Process</h2>
                                <p className="sd-content">Our structured process ensures transparency and measurable improvements.</p>
                            </div>
                            <div className="sd-process_inner ul_li">
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg1} alt="" /></div>
                                    <h3 className="xb-item--title">System Review</h3>
                                    <p className="xb-item--contact"> Evaluate existing or proposed designs to detect inefficiencies.</p>
                                    <span className="xb-item--number">01</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg2} alt="" /></div>
                                    <h3 className="xb-item--title">Option Development</h3>
                                    <p className="xb-item--contact">Propose alternative layouts and solutions for better value.</p>
                                    <span className="xb-item--number">02</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg3} alt="" /></div>
                                    <h3 className="xb-item--title"> Cost Analysis</h3>
                                    <p className="xb-item--contact">Assess life-cycle savings and long-term performance outcomes.</p>
                                    <span className="xb-item--number">03</span>
                                </div>
                                <div className="sd-process-item">
                                    <div className="xb-item--icon"><img src={sImg4} alt="" /></div>
                                    <h3 className="xb-item--title"> Design Optimization</h3>
                                    <p className="xb-item--contact">Refine systems with smarter layouts, materials, and technologies.</p>
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
                                        <li><img src={sicon} alt="" />Comprehensive System Performance Review.</li>
                                        <li><img src={sicon} alt="" />Alternative Cost-Effective Solutions.</li>
                                        <li><img src={sicon} alt="" />Detailed Life-Cycle Costing.</li>
                                    </ul>
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Optimized Energy-Saving Designs.</li>
                                        <li><img src={sicon} alt="" />Transparent Stakeholder Collaboration.</li>
                                        <li><img src={sicon} alt="" />Smarter Re-Engineered System Layouts.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sd-ser-outcome mt-65">
                                <div className="sd-heading">
                                    <h2 className="sd-title">Services outcome</h2>
                                    <p className="sd-content">Working with GK Engineering’s Value Engineering experts guarantees:</p>
                                </div>
                                <div className="sd-list-item ul_li">
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Reduced construction & operational costs.</li>
                                        <li><img src={sicon} alt="" />Smarter, more efficient designs.</li>
                                        <li><img src={sicon} alt="" />Better decision-making.</li>
                                    </ul>
                                    <ul className="sd-ser-list list-unstyled">
                                        <li><img src={sicon} alt="" />Improved collaboration.</li>
                                        <li><img src={sicon} alt="" />Future-ready systems.</li>
                                        <li><img src={sicon} alt="" />Maximized ROI.</li>
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
export default ValueEngineeringSolutions;