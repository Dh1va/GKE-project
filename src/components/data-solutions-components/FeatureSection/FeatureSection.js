import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../../../images/icon/da-fea_icon01.svg';
import icon2 from '../../../images/icon/da-fea_icon02.svg';
import icon3 from '../../../images/icon/da-fea_icon03.svg';
import icon4 from '../../../images/icon/da-fea_icon04.svg';
import hicon from '../../../images/icon/flower-icon-blue.svg';

const Features = [
  {
    title: 'Fragmented project data',
    des: 'Designs and drawings often originate from multiple consultants, resulting in clashes and inefficiencies. Our BIM Solutions (LOD 100–500) integrate every detail into one coordinated model.',
    icon: icon1,
  },
  {
    title: 'Design inefficiencies',
    des: 'Poorly optimised MEP layouts increase costs, energy use, and maintenance issues. Our MEP Design Engineering ensures systems are efficient, compliant, and future-ready.',
    icon: icon2,
  },
  {
    title: 'Hidden cost leaks',
    des: 'Without proper evaluation, projects face overspending on materials and execution. Through Value Engineering, we identify smarter alternatives that cut costs without compromising quality.',
    icon: icon3,
  },
  {
    title: 'Unchecked risks',
    des: 'Flawed or incomplete designs often cause delays, rework, and safety concerns. Our Third-Party Reviews provide independent validation to ensure designs are practical, compliant, and risk-free.',
    icon: icon4,
  },
];

const FeatureSection = () => {
  const [cols, setCols] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);

      if (w >= 992) setCols(4);
      else if (w >= 768) setCols(2);
      else setCols(1);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const colWidth = `${100 / cols}%`;

  const colStyle = {
    flex: `0 0 ${colWidth}`,
    maxWidth: colWidth,
    padding: 18,
    boxSizing: 'border-box',
    display: 'flex',
    minWidth: 0,
  };

  const cardBase = {
    height: '100%',
    padding: 26,
    borderRadius: 14,
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    transition: 'all 0.25s ease',
    boxShadow: '0 3px 10px rgba(0,0,0,0.06)',
  };

  const cardHover = {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 10px 28px rgba(0,0,0,0.15)',
  };

  const ClickHandler = () => window.scrollTo(10, 0);

  return (
    <section className="feature pt-150 pb-150" style={{ backgroundColor: '#f4f5fc' }}>
      <div className="container">

        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto 70px' }}>
          <span className="sub_title" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <img src={hicon} alt="" style={{ height: 18 }} />
            <span>Challenge</span>
          </span>
          <h2 className="title" style={{ marginTop: 14 }}>
            When plans get complicated, trust engineering that brings clarity.
          </h2>
        </div>

        {/* Features Grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {Features.map((f, i) => (
            <div key={i} style={colStyle}>
              <div
                style={cardBase}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardBase)}
              >
                <div style={{ minHeight: 60, display: 'flex', alignItems: 'center' }}>
                  <img src={f.icon} alt="" style={{ width: 48, height: 'auto' }} />
                </div>

                {/* Responsive Title */}
                <h3
                  className="xb-item--title"
                  style={{
                    margin: '10px 0 0',
                    fontSize: isMobile ? '22px' : '32px',  // 👈 Responsive size
                    lineHeight: '1.3',
                    fontWeight: 700,
                  }}
                >
                  {f.title}
                </h3>

                {/* Description */}
                <p
                  className="content xb-item--content"
                  style={{
                    marginTop: 10,
                    fontSize: '17px',
                    lineHeight: '1.6',
                  }}
                >
                  {f.des}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="xb-btn text-center mt-55">
          <Link onClick={ClickHandler} to="/service" className="thm-btn thm-btn--fill_icon thm-btn--data">
            <div className="xb-item--hidden">
              <span className="xb-item--hidden-text">Start Your Project Discussion</span>
            </div>
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
};

export default FeatureSection;
