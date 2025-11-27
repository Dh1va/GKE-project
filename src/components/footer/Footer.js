// import React from 'react'
// import { Link } from 'react-router-dom'
// import icon1 from '../../images/icon/sms-white.svg'
// import icon2 from '../../images/icon/call-white.svg'
// import icon3 from '../../images/icon/location.svg'
// import icon4 from '../../images/icon/sms02.svg'
// import Services from '../../api/service'

// const ClickHandler = () => {
//     window.scrollTo(10, 0);
// }

// const SubmitHandler = (e) => {
//     e.preventDefault()
// }


// const Footer = (props) => {
//     return (
//         <footer className="footer footer-style-two pt-200 bg_img pos-rel" style={{ backgroundColor: "#0c111d" }}>
//             <div className="container">
//                 <div className="xb-footer pt-120">
//                     <div className="footer-info ul_li_between">
//                         <div className="info-item ul_li">
//                             <div className="xb-item--icon">
//                                 <span><img src={icon1} alt="" /></span>
//                             </div>
//                             <div className="xb-item--holder">
//                                 <p className="xb-item--content">Write to us</p>
//                                 <h4 className="xb-item--title">innomax@gmail.com</h4>
//                             </div>
//                         </div>
//                         <div className="info-item ul_li">
//                             <div className="xb-item--icon clr-blue">
//                                 <span><img src={icon2} alt="" /></span>
//                             </div>
//                             <div className="xb-item--holder">
//                                 <p className="xb-item--content">Call Us (USA)</p>
//                                 <h4 className="xb-item--title">+(1) 1230 452 8597</h4>
//                             </div>
//                         </div>
//                         <div className="info-item ul_li">
//                             <div className="xb-item--icon clr-sky">
//                                 <span><img src={icon3} alt="" /></span>
//                             </div>
//                             <div className="xb-item--holder">
//                                 <p className="xb-item--content">Our Office</p>
//                                 <h4 className="xb-item--title">Waterloo,Park,Australia</h4>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="footer-inner mt-70 mb-100 ul_li_between align-items-start">
//                         <div className="sa-newslatter footer-widget">
//                             <span className="xb-item--sub-title">Newsletter</span>
//                             <p className="xb-item--content clr-white">Sign up to techco weekly newsletter to get the latest
//                                 updates.</p>
//                             <form className="xb-item--input_field pos-rel" onSubmit={SubmitHandler}>
//                                 <input type="email" name="gmail" id="text6" placeholder="enter your email" />
//                                 <div className="img"><img src={icon4} alt="" /></div>
//                                 <button type="submit" className="xb-item--btn"><i className="fas fa-paper-plane"></i></button>
//                             </form>
//                             <span className="xb-item--text">By continuing, you agree to innomax <Link onClick={ClickHandler} to="/terms-conditions">Terms</Link> of
//                                 Use and <Link onClick={ClickHandler} to="/privacy-policy">Privacy Policy</Link></span>
//                         </div>
//                         <div className="footer-widget">
//                             <span className="xb-item--sub-title">Company</span>
//                             <ul className="xb-item--holder list-unstyled">
//                                 <li className="xb-item--list"><Link onClick={ClickHandler} to="/about">About us</Link></li>
//                                 <li className="xb-item--list"><Link onClick={ClickHandler} to="/contact">About us</Link></li>
//                                 <li className="xb-item--list"><Link onClick={ClickHandler} to="/pricing">Price table</Link></li>
//                                 <li className="xb-item--list"><Link onClick={ClickHandler} to="/blog">Our blog</Link></li>
//                                 <li className="xb-item--list"><Link onClick={ClickHandler} to="/team">Team member</Link></li>
//                                 <li className="xb-item--list"><Link onClick={ClickHandler} to="/casestudy">Our Cases</Link></li>
//                             </ul>
//                         </div>
//                         <div className="footer-widget">
//                             <span className="xb-item--sub-title">Our Services</span>
//                             <ul className="xb-item--holder list-unstyled">
//                                 {Services.slice(0, 6).map((service, srv) => (
//                                     <li key={srv} className='xb-item--list'>
//                                         {service.title ?
//                                             <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
//                                                 <span className="icon_list_text">
//                                                     {service.title}
//                                                 </span>
//                                             </Link>
//                                             : ''}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div className="footer-widget">
//                             <span className="xb-item--sub-title">Our Industries</span>
//                             <ul className="xb-item--holder list-unstyled">
//                                 <li className="xb-item--list"><Link onClick={ClickHandler} to="/">Healthcare</Link></li>
//                                 <li className="xb-item--list"><Link onClick={ClickHandler} to="/">Lawyers</Link></li>
//                                 <li className="xb-item--list"><Link onClick={ClickHandler} to="/">Real estate</Link></li>
//                                 <li className="xb-item--list"><Link onClick={ClickHandler} to="/">Insurance</Link></li>
//                                 <li className="xb-item--list"><Link onClick={ClickHandler} to="/">Crypto</Link></li>
//                                 <li className="xb-item--list"><Link onClick={ClickHandler} to="/">Automotive</Link></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="footer-copyright mt-70 ul_li_between">
//                         <p className="copyright mt-20">Copyright © 2024 <Link onClick={ClickHandler} to="/">innomax</Link>. All rights
//                             reserved.</p>
//                         <ul className="footer-link ul_li mt-20">
//                             <li><span>Follow us :</span></li>
//                             <li><Link onClick={ClickHandler} to="/"><i className="fab fa-twitter"></i></Link></li>
//                             <li><Link onClick={ClickHandler} to="/"><i className="fab fa-facebook-f"></i></Link></li>
//                             <li><Link onClick={ClickHandler} to="/"><i className="fab fa-linkedin-in"></i></Link></li>
//                             <li><Link onClick={ClickHandler} to="/"><i className="fab fa-youtube"></i></Link></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import Bg from '../../images/bg/da-footer.jpg'
import logo from '../../images/logo/GKE logo 2.png'

const ClickHandler = () => {
  window.scrollTo(10, 0);
}

const Footer = (props) => {
  return (
    <footer className="footer footer-style-six pb-80 bg_img pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="da-footer-title">
        <h2 className="title marquee-left">
          <Link onClick={ClickHandler} to="/">
            <div className="marquee">
              <div className="marquee-content">
                <Marquee speed={50} gradient={false}>
                  Book a Discover Call Now. <span>Take advantage of our expert knowledge.</span>
                  Book a Discover Call Now. <span>Take advantage of our expert knowledge.</span>
                </Marquee>
              </div>
            </div>
          </Link>
        </h2>
      </div>
      <div className="container">
        <div className="xb-footer">
          <div className="da-footer-inner ul_li_between mt-none-30">
            <div className="xb-item--left mt-10">
              <div className="xb-item--logo mt-20">
                <Link onClick={ClickHandler} to="/home-3"><img src={logo} alt="" /></Link>
              </div>
              <span className="xb-item--content mt-20">Intelligent Construction Planning</span>
            </div>
            <ul className="xb-item--nav_item mt-30 list-unstyled ul_li">
              <li><Link onClick={ClickHandler} to="/about">About</Link></li>
              {/* <li><Link onClick={ClickHandler} to="/service">Services</Link></li> */}
              {/* <li><Link onClick={ClickHandler} to="/service">Case Study</Link></li> */}
              <li><Link onClick={ClickHandler} to="/blog-single/Why-Third-Party-MEP-Design-Review-Saves-Time-and-Cost">Blog</Link></li>
              <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-copyright mt-40 ul_li_between">
            <p className="copyright">©Copyright 2025 <Link onClick={ClickHandler} to="/home-3">GKE</Link>. All rights reserved.</p>
            <ul className="footer-links ul_li">
              {/* <li><Link onClick={ClickHandler} to="/terms-conditions">Terms of Up</Link></li>
              <li><Link onClick={ClickHandler} to="/privacy-policy">Privacy Policy</Link></li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;