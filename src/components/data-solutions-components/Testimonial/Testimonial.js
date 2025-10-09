import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from 'react-router-dom'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ticon1 from "../../../images/icon/flower-icon-blue.svg";
import tImg1 from "../../../images/testimonial/1 project - VIDA RESIDENCE.png";
import tImg2 from "../../../images/testimonial/2 project - Nova tower.png";
import tImg3 from "../../../images/testimonial/3 project - HELIX Tower.png";
import tImg4 from "../../../images/testimonial/4 project - Dubai Harbour Car Park.png";
import tImg5 from "../../../images/testimonial/5 project - Al Wasl Island.png";
// import tImg2 from "../../../images/testimonial/ixico-logo.png";



const Testimonial = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="testimonial pt-150 pb-140">
            <div className="container">
                <div className="da-sec-titlte text-center mb-60">
                    <span className="sub_title"><span><img src={ticon1} alt="" /></span>Projects</span>
                    <h2 className="title">Who we've helped</h2>
                </div>
                <div className="da-testimonial-wrap pos-rel">
                    <div className="da-testimonial-slider swiper-container">
                        <div className="swiper-wrapper">
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation]}
                                spaceBetween={50}
                                slidesPerView={1}
                                loop={true}
                                speed={1800}
                                parallax={true}
                                ref={swiperRef}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                            >
                                <SwiperSlide className="da-testimonial">
                                    <div className="row align-items-center mt-none-30">
                                        <div className="col-lg-6 mt-30">
                                            <div className="da-tes-left">
                                                <h2 className="xb-item--title">VIDA RESIDENCE</h2>

                                                <div class="table-responsive">
                                                    <table class="table table-bordered table-striped align-middle ">
                                                    <tbody>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Client</th>
                                                        <td>Emaar</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Consultant</th>
                                                        <td>Arch Corp</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Main Contractor</th>
                                                        <td>Aroma</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">MEP Contractor</th>
                                                        <td>Oxypro Electromechanical Work LLC</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Location</th>
                                                        <td>Dubai Hills Estate</td>
                                                        </tr>
                                                    </tbody>
                                                    </table>
                                                </div>
                                                
                                                <p className="xb-item--content content--two">We are developing the MEP BIM shop drawing model from LOD 300 through LOD 500, aligned with the RIBA Plan of Work Stages 3–6 and ISO 19650 standards. The model is progressing from spatial coordination to detailed fabrication and as-built accuracy, incorporating manufacturer-specific components and on-site updates. All project data is managed within a structured Common Data Environment (CDE) to ensure seamless collaboration and traceability. On completion, the final LOD 500 model will deliver accurate asset information, COBie outputs, and full digital handover for efficient facilities management.</p>
                                                {/* <p className="xb-item--content content--three">The company develops and deploys therapeutic specific AI <br /> (Artificial  Intelligence) algorithms designed to reduce clinical trial <br /> size and  costs whilst simultaneously improving insights to increase the  likelihood of approval in neurological clinical trials.</p> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-30">
                                            <div className="da-tes-right">
                                                <div className="xb-item--author">
                                                    <img src={tImg1} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide> 
                                <SwiperSlide className="da-testimonial">
                                    <div className="row align-items-center mt-none-30">
                                        <div className="col-lg-6 mt-30">
                                            <div className="da-tes-left">
                                                <h2 className="xb-item--title">NOVA Tower</h2>
                                               
                                                <div class="table-responsive">
                                                    <table class="table table-bordered table-striped align-middle ">
                                                    <tbody>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Client</th>
                                                        <td>Alansari Real Estate Development L.L.C</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Consultant</th>
                                                        <td>Architecture & Planning Group</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Main Contractor</th>
                                                        <td>Al Masaood National General Contracting LLC / Oxypro</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">MEP Contractor</th>
                                                        <td>Oxypro Electromechanical Work LLC</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Location</th>
                                                        <td>Dubai Science Park</td>
                                                        </tr>
                                                    </tbody>
                                                    </table>
                                                </div>
                                                 <p className="xb-item--content content--two">We developed the LOD 300 MEP design intent BIM model by converting detailed AutoCAD drawings into a coordinated 3D model, aligned with RIBA Stage 3 and ISO 19650 standards. This ensured accurate system sizing, routing, and spatial coordination across architectural and structural elements, managed within a Common Data Environment (CDE) for collaboration and data reliability. The model is now being upgraded from LOD 300 to LOD 500 to generate MEP shop drawings, covering RIBA Stages 3–6. At this stage, the model incorporates manufacturer-specific components, fabrication details, and site-verified updates. Once completed, the LOD 500 model will deliver COBie-compliant data to support digital handover and long-term facilities management.</p>
                                                {/* <p className="xb-item--content content--three">The company develops and deploys therapeutic specific AI <br /> (Artificial  Intelligence) algorithms designed to reduce clinical trial <br /> size and  costs whilst simultaneously improving insights to increase the  likelihood of approval in neurological clinical trials.</p> */}
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-30">
                                            <div className="da-tes-right">
                                                <div className="xb-item--author">
                                                    <img src={tImg2} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="da-testimonial">
                                    <div className="row align-items-center mt-none-30">
                                        <div className="col-lg-6 mt-30">
                                            <div className="da-tes-left">
                                                <h2 className="xb-item--title">HELIX Tower</h2>
                                               
                                                <div class="table-responsive">
                                                    <table class="table table-bordered table-striped align-middle ">
                                                    <tbody>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Client</th>
                                                        <td>Alansari Real Estate Development LLC</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Consultant</th>
                                                        <td>Architecture & Planning Group</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Main Contractor</th>
                                                        <td>Al Shafar Engineering</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">MEP Contractor</th>
                                                        <td>Oxypro Electromechanical Work LLC</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Location</th>
                                                        <td>Dubai Science Park</td>
                                                        </tr>
                                                    </tbody>
                                                    </table>
                                                </div>
                                                 <p className="xb-item--content content--two">
                                                    We developed the LOD 300 MEP design intent BIM model by converting detailed AutoCAD drawings from the design consultant into a coordinated 3D model, aligned with RIBA Stage 3 and ISO 19650 standards. This process ensured accurate system sizing, routing, and spatial coordination with architectural and structural elements, managed through a Common Data Environment (CDE) for reliability and collaboration. The model is now being upgraded from LOD 300 to LOD 500 to produce shop drawings and achieve fabrication-level accuracy. This includes manufacturer-specific components, coordinated layouts, and site-verified updates. Once complete, the LOD 500 model will deliver COBie-compliant data to support digital handover and long-term facilities management.
                                                 </p>
                                                {/* <p className="xb-item--content content--three">The company develops and deploys therapeutic specific AI <br /> (Artificial  Intelligence) algorithms designed to reduce clinical trial <br /> size and  costs whilst simultaneously improving insights to increase the  likelihood of approval in neurological clinical trials.</p> */}
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-30">
                                            <div className="da-tes-right">
                                                <div className="xb-item--author">
                                                    <img src={tImg3} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="da-testimonial">
                                    <div className="row align-items-center mt-none-30">
                                        <div className="col-lg-6 mt-30">
                                            <div className="da-tes-left">
                                                <h2 className="xb-item--title">Dubai Harbour Car Park</h2>
                                               
                                                <div class="table-responsive">
                                                    <table class="table table-bordered table-striped align-middle ">
                                                    <tbody>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Client</th>
                                                        <td>Shamal</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Consultant</th>
                                                        <td>FNP Architecture & Engineering & Consistent</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Main Contractor</th>
                                                        <td>McLaren</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">MEP Contractor</th>
                                                        <td>Oxypro Electromechanical Work LLC</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Location</th>
                                                        <td>Dubai Harbour</td>
                                                        </tr>
                                                    </tbody>
                                                    </table>
                                                </div>
                                                 <p className="xb-item--content content--two">We are developing the MEP BIM shop drawing model from LOD 300 through LOD 500, following RIBA Stages 3–6 and ISO 19650 standards. The model progresses from spatial coordination to detailed fabrication and as-built representation, incorporating manufacturer-specific components, coordinated shop drawings, and verified on-site updates. All data is managed within a structured Common Data Environment (CDE) to ensure collaboration, traceability, and alignment with project requirements. Upon completion, the LOD 500 model will provide accurate asset data, COBie-compliant outputs, and seamless digital handover to support efficient facilities management.</p>
                                                {/* <p className="xb-item--content content--three">The company develops and deploys therapeutic specific AI <br /> (Artificial  Intelligence) algorithms designed to reduce clinical trial <br /> size and  costs whilst simultaneously improving insights to increase the  likelihood of approval in neurological clinical trials.</p> */}
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-30">
                                            <div className="da-tes-right">
                                                <div className="xb-item--author">
                                                    <img src={tImg4} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="da-testimonial">
                                    <div className="row align-items-center mt-none-30">
                                        <div className="col-lg-6 mt-30">
                                            <div className="da-tes-left">
                                                <h2 className="xb-item--title">Al Wasl Island</h2>
                                               
                                                <div class="table-responsive">
                                                    <table class="table table-bordered table-striped align-middle ">
                                                    <tbody>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Client</th>
                                                        <td>Wasl</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Consultant</th>
                                                        <td>IBA</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Main Contractor</th>
                                                        <td>China State Construction</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">MEP Contractor</th>
                                                        <td>Oxypro Electromechanical Work LLC</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row" class="text-uppercase">Location</th>
                                                        <td>Umm Suqeim 2, Dubai</td>
                                                        </tr>
                                                    </tbody>
                                                    </table>
                                                </div>
                                                 <p className="xb-item--content content--two">We are developing the MEP BIM shop drawing model from LOD 300 to LOD 500, following RIBA Stages 3–6 and ISO 19650 standards. The model evolves from spatial coordination to detailed fabrication and as-built representation, including manufacturer-specific components, coordinated shop drawings, and site-verified updates. All data is managed within a structured Common Data Environment (CDE) to ensure collaboration, traceability, and compliance with project requirements. Upon completion, the LOD 500 model will deliver accurate asset data, COBie-compliant outputs, and seamless digital handover for efficient facilities management.</p>
                                                {/* <p className="xb-item--content content--three">The company develops and deploys therapeutic specific AI <br /> (Artificial  Intelligence) algorithms designed to reduce clinical trial <br /> size and  costs whilst simultaneously improving insights to increase the  likelihood of approval in neurological clinical trials.</p> */}
                                                
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-30">
                                            <div className="da-tes-right">
                                                <div className="xb-item--author">
                                                    <img src={tImg5} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                            </Swiper>
                        </div>
                    </div>
                    <div className="da-swiper-btn swiper-button-prev" ref={prevRef}><i className="fal fa-long-arrow-left"></i></div>
                    <div className="da-swiper-btn swiper-button-next" ref={nextRef}><i className="fal fa-long-arrow-right"></i></div>
                </div>
                <div className="xb-btn text-center mt-55">
                    <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--fill_icon thm-btn--data thm-btn--data-strock">
                        <div className="xb-item--hidden"><span className="xb-item--hidden-text">View More Projects</span></div>
                        <div className="xb-item--holder">
                            <span className="xb-item--text xb-item--text1">View More Projects</span>
                            <div className="xb-item--icon"><i className="fal fa-plus"></i></div>
                            <span className="xb-item--text xb-item--text2">View More Projects</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
