import React from 'react';
import sIcon1 from '../../images/icon/ab-page-icon01.svg'
import sIcon2 from '../../images/icon/ab-page-icon02.svg'
import sIcon3 from '../../images/icon/ab-page-icon03.svg'
import sIcon4 from '../../images/icon/ab-page-icon04.svg'


const FeaturesSection = (props) => {

    return (
        <section className="fanfact pt-125 pb-125">
            <div className="container">
                <div className="ap-feature_wrap">
                    <div className="row mt-none-30">
                        <div className="col-lg-3 col-md-6 mt-30">
                            <div className="ap-feature-item wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms">
                                <div className="xb-item--icon"><img src={sIcon1} alt=""/></div>
                                <h4 className="xb-item--title">Engineering Excellence</h4>
                                <p className="xb-item--content">At GK Engineering, excellence means delivering precise, reliable, and innovative MEP solutions.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-30">
                            <div className="ap-feature-item wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
                                <div className="xb-item--icon"><img src={sIcon2} alt=""/></div>
                                <h4 className="xb-item--title">Client-Centric Approach</h4>
                                <p className="xb-item--content"> For us, being client-centric means understanding needs and tailoring designs that add real value. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-30">
                            <div className="ap-feature-item wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                                <div className="xb-item--icon"><img src={sIcon3} alt=""/></div>
                                <h4 className="xb-item--title">Sustainable Solutions</h4>
                                <p className="xb-item--content">Sustainability means creating energy-efficient, cost-effective systems that stand the test of time.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-30">
                            <div className="ap-feature-item wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                                <div className="xb-item--icon"><img src={sIcon4} alt=""/></div>
                                <h4 className="xb-item--title">Seamless Delivery</h4>
                                <p className="xb-item--content">Seamless delivery means on-time execution with accuracy, coordination, and quality assurance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;