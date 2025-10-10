import React from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../../../images/icon/da-fea_icon01.svg'
import icon2 from '../../../images/icon/da-fea_icon02.svg'
import icon3 from '../../../images/icon/da-fea_icon03.svg'
import icon4 from '../../../images/icon/da-fea_icon04.svg'

import hicon from '../../../images/icon/flower-icon-blue.svg'

const Features = [
    {
        title: 'Fragmented project data',
        des: ' Designs and drawings often originate from multiple consultants, resulting in clashes and inefficiencies. Our BIM Solutions (LOD 100–500) integrate every detail into one coordinated model.',
        icon: icon1,
        col:'col-lg-4 col-md-6 fea-col',
    },
    {
        title: 'Design inefficiencies',
        des: ' Poorly optimised MEP layouts increase costs, energy use, and maintenance issues. Our MEP Design Engineering ensures systems are efficient, compliant, and future-ready.',
        icon: icon2,
        col:'col-lg-2 col-md-6 fea-col',
    },
    {
        title: 'Hidden cost leaks',
        des: 'Without proper evaluation, projects face overspending on materials and execution. Through Value Engineering, we identify smarter alternatives that cut costs without compromising quality.',
        icon: icon3,
        col:'col-lg-2 col-md-6 fea-col',
    },
    {
        title: 'Unchecked risks',
        des: 'Flawed or incomplete designs often cause delays, rework, and safety concerns. Our Third-Party Reviews provide independent validation to ensure designs are practical, compliant, and risk-free.',
        icon: icon4,
        col:'col-lg-4 col-md-6 fea-col',
    },


]


const FeatureSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="feature pt-150 pb-150" style={{ backgroundColor: '#f4f5fc' }}>
            <div className="container-fluid p-0">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-8">
                        <div className="da-sec-titlte text-center mb-70">
                            <span className="sub_title"><span><img src={hicon} alt=""/></span>Challenge</span>
                            <h2 className="title">When plans get complicated, trust engineering that brings clarity.</h2>
                        </div>
                    </div>
                </div>
                <div className="da-feature-wrap">
                    <div className="row g-0">
                        {Features.map((features, fitem) => (
                            <div className={features.col} key={fitem}>
                                <div className="da-feature-item">
                                    <div className="xb-item--holder">
                                        <div className="xb-item--icon"><img src={features.icon} alt="" /></div>
                                        <h3 className="xb-item--title">{features.title}</h3>
                                        <p className="xb-item--content">{features.des}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="xb-btn text-center mt-70">
                    <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--fill_icon thm-btn--data thm-btn--data_blue">
                        <div className="xb-item--hidden"><span className="xb-item--hidden-text">Start Your Project Discussion</span></div>
                        <div className="xb-item--holder">
                            <span className="xb-item--text xb-item--text1">Start Your Project Discussion</span>
                            <div className="xb-item--icon"><i className="fal fa-plus"></i></div>
                            <span className="xb-item--text xb-item--text2">Start Your Project Discussion</span>
                        </div>
                    </Link>
                </div>
                
            </div>
        </section>
    );
}

export default FeatureSection;