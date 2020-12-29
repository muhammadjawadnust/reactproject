import React, { Component } from 'react';
import './welcomeBootstrap.css';

import './responsiveWelcome.css';

import Spacer from 'react-add-space';

import { Navbar, Nav, Button } from 'react-bootstrap';
import BImage from '../Images/BImage.png';
import BImage1 from '../Images/BImage1.png';

class WelcomeBootstrap extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Navbar expand="lg" style={{ height: '0' }}>
                        <Navbar.Brand href="#home"><i className="fa fa-signal" id="vap" style={{ }} /><a id="vapId" style={{ }}>VAP IoT lab</a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto" >
                                <Nav.Link href="#home" style={{ color: '#F89E12', fontSize: '14px', fontFamily: "Myriad pro Semibold" }}>Home</Nav.Link><Spacer amount={20} />
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: '14px', fontFamily: "Myriad pro Semibold" }}>About</Nav.Link><Spacer amount={20} />
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: '14px', fontFamily: "Myriad pro Semibold" }}>Forum</Nav.Link><Spacer amount={20} />
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: '14px', fontFamily: "Myriad pro Semibold" }}>Contact</Nav.Link><Spacer amount={20} />
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: '14px', fontfamily: "Myriad pro Semibold" }}><b>FAQs</b></Nav.Link><Spacer amount={20} />
                                <button type="button" className="mr-auto" id="btn" style={{marginleft:'-40%'}}>Logout</button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                </div>   {/*  Navbar ends */}
                <div style={{ margin: '0' }} >
                    <div className="col-md-12" id="pp" >
                        <img className="img-responsive" src={BImage} id="iotImage1" style={{ }} />

                        <div style={{ paddingLeft: '45%' }} id="middleSection">
                            <div className="centered1" style={{  }} >Online Education</div>
                            <div className="centered2" style={{  }}>Welcome</div>
                            <div className="centered3" style={{ }}>TO VAP IoT Lab</div>
                            <div className="centered4" style={{  }}>(Virtually Accessible Physical)</div>
                            <div className="centered5" style={{  }}><ion-icon name="caret-forward" id="filledArrow" style={{ color: 'black', borderRadius: '50%', backgroundColor: '#F89E12', border: '1px solid #F89E12' }}></ion-icon><Spacer amount={1} />Read More
                         </div>
                        </div>



                        <img className="img-responsive" src={BImage1} id="iotImage2" style={{}} />
                    </div>
                </div>
                <div style={{marginLeft:'10%'}}>
                    <div className="Row" id="fourSections" style={{ color: 'white' }}>
                        <div className="Column" id="part1" style={{   }}>
                            <h5 id="ourSpecialityPart" style={{ }}>
                                Our speciality
                            </h5>
                                Connect with the real hardware virtually
                               
                            <br />
                                The basic technology we will<br /> be using is remote access<br /> to different IoT boards.
                        </div>
                        <div className="Column" id="part2" style={{  }}>
                            <div className="row">
                                <ion-icon name="settings" id="headIcons1" style={{ }}></ion-icon><Spacer amount={1} />
                                <h5 className="mainHeads" style={{}}>
                                    <b style={{ color: 'black', }}>Hands-On</b>
                                </h5>
                            </div>
                            <p id="para1" style={{  }}>
                                <br />Access to IoT boards<br />by burning the codes.
                            </p>
                        </div>
                        <div className="Column" id="part3" style={{  }}>
                            <div className="row" >
                                <ion-icon name="clipboard" id="headIcons2" style={{  color: '#f89e12' }}></ion-icon><Spacer amount={1} />
                                <h5 className="mainHeads" style={{ }}>
                                    <b style={{ color: 'black' }}>Training & Boards</b>
                                </h5>
                            
                            <p id="para2" style={{}}>
                                <div style={{ paddingLeft:'72px', }}><br />Preparing students for<br />rapidly changing world.</div>
                            </p></div>
                        </div>
                        <div className="Column" id="part4" style={{  }}>
                          <div className="row">
                          <ion-icon name="reader" id="headIcons3"style={{ color:'black' }}></ion-icon><Spacer amount={1} />
                          <h5 className="mainHeads" style={{  }}>                           
                                <b style={{ color: 'black' }}>Lectures</b>
                        </h5>
                          </div>
                            <p id="para3" style={{}}>
                                <br />IoT Lab related to guide<br />lines and lectures.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer" id="footer" style={{  }}>
                    <div className="Row1" style={{ paddingLeft: '30px', width: '90%' }}>
                        <div className="Column" id="footerA" style={{  }}>
                            2019  VAP IoT Lab , All Rights  Reserved
                        </div>
                        <div className="Column" id="footerB" style={{  }}>
                            Follow us on <br />
                            <a href="#" style={{ color: 'white' }}> <i className="fa fa-facebook" style={{ color: '#f89e12'}} /> |</a>
                            <a href="#" style={{ color: 'white' }}> <i className="fa fa-twitter" style={{ color: '#f89e12' }} />|</a>
                            <a href="#" style={{ color: 'white' }}> <i className="fa fa-linkedin" style={{ color: '#f89e12' }} />  </a>
                        </div>
                        <div className="Column">
                            <a href="#" style={{ color: 'white', paddingLeft: '95%' }} >  <i className="fa fa-commenting-o" id="msgBox" style={{  }} />  </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomeBootstrap;