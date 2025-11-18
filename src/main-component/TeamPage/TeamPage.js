import React, { Fragment} from 'react';
import Teams from '../../api/team';
import icon from '../../images/icon/cap.svg';
import bg from '../../images/team/team-bg.jpg';

const TeamPage = () => {
  return (
    <Fragment>
      <div className='body_wrap sco_agency'>

        <div className="container">
          <div className="page-title-wrap">
            <div className="row mt-none-30 align-items-end">
              <div className="col-lg-7 mt-30">
                <div className="page-title-box">
                  <span className="sub-title">
                    <img src={icon} alt="" />Our team
                  </span>
                  <h2 className="title mx-auto-sm">
                    Precision Engineering for Smarter Building Outcomes
                  </h2>
                </div>
              </div>
              <div className="col-lg-5 mt-30">
                <div className="count-box">
                  <h2 className="number mx-auto-sm">10 <span className="suffix">+</span></h2>
                  <span className="text mx-auto-sm">
                    Professional Team <br /> Members
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="team pt-55 pb-130">
          <div className="container">
            <div className="row mt-none-30">

              {Teams.map((team, index) => (
                <div className="col-xl-4 col-lg-6 col-md-6 mt-30" key={index}>
                  
                  {/* Hover Animation Wrapper */}
                  <div
                    className="team-item"
                    style={{
                      transition: "all 0.35s ease",
                      borderRadius: "12px",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
                      e.currentTarget.style.boxShadow = "0 18px 35px rgba(0,0,0,0.18)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.08)";
                    }}
                  >

                    {/* Card Inner */}
                    <div className="xb-item--content pos-rel">
                      <div className="xb-item--img">
                        <img src={bg} alt="" />
                      </div>
                      <div className="xb-item--item">
                        <span className="xb-item--skill">{team.exprience}</span>
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="xb-item--inner ul_li_between align-items-end">
                      <div className="xb-item--holder">
                        <div className="xb-item--avatar">
                          <img src={team.tImg} alt="" />
                        </div>
                        <div className="xb-item--author">
                          <h3 className="xb-item--name">{team.name}</h3>
                          <span className="xb-item--desig">{team.title}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default TeamPage;
