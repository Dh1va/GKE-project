import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../ContactFrom/ContactForm'
import icon1 from '../../images/icon/call-calling.svg'
import icon2 from '../../images/icon/icon-sms.svg'


const ContactSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className="contact pt-85">
                <div className="container">
                    <div className="row pb-130 mt-none-30 align-items-center">
                        <div className="col-lg-8 mt-30">
                            <div className="cs-contact-wrap cs-contact-form cd-contact-form item-contact_form">
                                <h2 className="xb-title">Reach Out Today</h2>
                                <p className="xb-content">Let us help transform your project with smart, innovative engineering solutions.</p>
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-lg-4 mt-30">
                            <div className="item-contact_info">
                                <div className="xb-item--inner">
                                    <div className="xb-item--top">
                                        <h3 className="xb-item--title">Contact Info</h3>
                                        <span className="xb-item--hotline"><img src={icon1} alt="" />+91 6379868711</span>
                                        <span className="xb-item--email"><img src={icon2} alt="" /> globalking@gkbim.com</span>
                                        <ul className="social_icons_block list-unstyled ul_li">
                                            <li><Link onClick={ClickHandler} to="/contact" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li>
                                                <Link onClick={ClickHandler} to="/contact" aria-label="Twitter"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.3872 0H15.9952L10.299 7.20048L17 17H11.7545L7.64298 11.0582L2.94415 17H0.332464L6.42395 9.29688L0 0H5.37853L9.09105 5.43101L13.3872 0ZM12.4711 15.2755H13.9155L4.5917 1.63462H3.0402L12.4711 15.2755Z" fill="#0C111D" />
                                                </svg></Link>
                                            </li>
                                            <li><Link onClick={ClickHandler} to="/contact" aria-label="Linkedin"><i className="fab fa-linkedin-in"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="contact-info_widget">
                                        <h3 className="xb-title">UAE Contact Details</h3>
                                        <span className="xb-location">G K E Architectural <br /> Prospective Drawings Services L.L.C, <br/> Office No: A204- Gulf Tower, <br/> Tower A2, Oud Metha, Dubai. <br/> Primary Contact: 056-6052366 <br/> Mobile No: +971 56605 2366‬</span>
                                    </div>
                                    <div className="contact-info_widget">
                                        <h3 className="xb-title">India Contact Details</h3>
                                        <span className="xb-location">GK Global King BIM Digital Solutions<br /> No. 6, Thomas Street, <br/> Race Course Road, <br/> Trichy, Tamil Nadu - 620020. <br/> Primary Contact: +91 6379868711</span>
                                    </div>
                                    <hr className="breack-line" />
                                    <div className="contact-info_widget">
                                        <h3 className="xb-title">our office open time</h3>
                                        <span className="xb-location">Mon - Sat : 8.00-5.00 <br /> Sunday : Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gmap_canvas bg-light  pb-85">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.354809765366!2d78.69359712641287!3d10.784113618893901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf52dba76ea91%3A0xd24f35428701ff00!2sHarihar%20Alloys%20Pvt.%20Limited!5e0!3m2!1sen!2sin!4v1759130893527!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default ContactSection;