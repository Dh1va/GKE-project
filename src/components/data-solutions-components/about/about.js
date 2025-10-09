import React from 'react'
import shape from '../../../images/shape/Stripes image home-07.png'

const About = (props) => {

    return (
        <section className="about mt-65">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="da-about-left">
                            <h2 className="title">Well-planned engineering <br /> is the catalyst to <br /> project success.</h2>
                            <div className="img"><img src={shape} alt="" /></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="da-about-right">
                            <p className="content">In today’s fast-paced construction landscape, success depends on efficient design and precise execution.</p>
                            <p className="content">At GK Engineering, we bring together MEP expertise, Value Engineering, Third-Party Reviews, and BIM solutions to optimise every stage of your project.</p>
                            <p className="content">Our approach delivers smarter insights, reduces risks, and drives efficiency, helping you build with confidence, innovation, and long-term value.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;