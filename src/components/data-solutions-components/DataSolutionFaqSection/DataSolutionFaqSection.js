import React, { useState } from "react";
import { Link } from "react-router-dom";

const FaqSection = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const faqsLeft = [
    {
      number: "1",
      question: "What services does GK Engineering provide?",
      answer:
        "We specialise in MEP Design Engineering, Value Engineering Solutions, Third-Party Design Reviews, and BIM Solutions (LOD 100–500). Our services cover every stage of design and construction, ensuring efficiency, compliance, and cost-effectiveness.",
    },
    {
      number: "2",
      question: "What is MEP Design Engineering?",
      answer: "MEP stands for Mechanical, Electrical, and Plumbing. Our MEP design team creates efficient, sustainable, and compliant systems for HVAC, power distribution, lighting, plumbing, and fire protection — ensuring your building operates reliably and efficiently.",
    },
    {
      number: "3",
      question: "How does Value Engineering benefit my project?",
      answer: "Value Engineering helps you reduce costs without compromising on quality. We analyse materials, systems, and layouts to identify smarter alternatives that save money, improve performance, and extend the lifecycle of your building.",
    },
    {
      number: "4",
      question: "Why should I consider Third-Party Reviews?",
      answer: "Independent reviews help you spot design flaws early. Our Third-Party Reviews ensure designs are code-compliant, buildable, and safe — preventing costly errors, delays, and rework during construction.",
    },
  ];

  const faqsRight = [
    {
      number: "5",
      question: "What are BIM Solutions, and how do they help?",
      answer: "Building Information Modelling (BIM) is a digital representation of your project. Our BIM models (LOD 100–500) provide a single source of truth, enabling clash detection, better coordination, and smoother collaboration between stakeholders.",
    },
    {
      number: "6",
      question: "Do you work on both small and large-scale projects?",
      answer: "Yes. From residential and commercial buildings to industrial projects, our engineering expertise scales to meet your project requirements — whether you need detailed design or full lifecycle support.",
    },
    {
      number: "7",
      question: "In which locations do you operate?",
      answer: "GK Engineering serves clients across India and the UAE, delivering high-quality engineering solutions that meet international standards.",
    },
    {
      number: "8",
      question: "How can I get started with GK Engineering?",
      answer: "You can reach out via our Contact page, email, or phone. Share your project details with us, and our experts will provide a tailored proposal to support your design and engineering needs.",
    },
  ];

  const renderFaqs = (faqs, offset) =>
    faqs.map((faq, index) => {
      const currentIndex = index + offset;
      const isActive = activeFaq === currentIndex;

      return (
        <li key={faq.number} className={`accordion block ${isActive ? "active-block" : ""}`}>
          <div
            className={`acc-btn ${isActive ? "active" : ""}`}
            onClick={() => toggleFaq(currentIndex)}
          >
            <span className="number">{faq.number}</span>
            {faq.question}
            <span className="arrow"></span>
          </div>
          <div
            className="acc_body"
            style={{
              maxHeight: isActive ? "1000px" : "0", // Adjust the height as needed
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <div className="content">
              <p>{faq.answer}</p>
            </div>
          </div>
        </li>
      );
    });

  return (
    <section className="faq pt-150 pb-115" style={{ backgroundColor: '#f4f5fc' }}>
      <div className="container">
        <div className="da-sec-titlte text-center mb-30">
          <h2 className="title">Your Questions, Answered!</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="da-left-faq">
              <div className="xb-faq xb-faq-two da-faq">
                <ul className="accordion_box clearfix list-unstyled">
                  {renderFaqs(faqsLeft, 0)}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="da-right-faq">
              <div className="xb-faq xb-faq-two da-faq">
                <ul className="accordion_box clearfix list-unstyled">
                  {renderFaqs(faqsRight, faqsLeft.length)}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="xb-btn text-center mt-70">
          <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--fill_icon thm-btn--data thm-btn--data_blue">
            <div className="xb-item--hidden">
              <span className="xb-item--hidden-text">Start Your Project Discussion</span>
            </div>
            <div className="xb-item--holder">
              <span className="xb-item--text xb-item--text1">Start Your Project Discussion</span>
              <div className="xb-item--icon">
                <i className="fal fa-plus"></i>
              </div>
              <span className="xb-item--text xb-item--text2">Start Your Project Discussion</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
