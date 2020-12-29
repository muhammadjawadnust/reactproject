import React, { Component } from 'react';
import Spacer from 'react-add-space';

import './contactUs.css';
import './responsiveContact.css';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';
import bgImage from '../Images/aboutUs.png';


class ContactUs extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <img className="img-responsive" src={bgImage} id="bgImagecontact" style={{  }} />
                    <div className="top-leftcontact"><i className="fa fa-signal" style={{ color: '#F89E12' }} />
                        <Spacer amount={1} />  VAP IoT lab
                    </div>
                    <div className="top-left1contact" style={{ }}>Home</div>
                    <div className="top-left2contact" style={{ }}>About</div>
                    <div className="top-left3contact" style={{ }}>Forum</div>
                    <div className="top-left4contact" style={{ }}>Contact</div>
                    <div className="top-left5contact" style={{  }}>FAQs</div>
                    <button className="top-left6contact" id="btncontact" style={{  }}>Logout</button>


                    <div className="section">

                        <div className="top-centercontact">
                            <i><hr style={{
                                backgroundColor: '#F89E12',
                                height: '1.5px',
                                width: '75px',
                                // marginLeft:'-70px',
                                // marginTop:'20%'
                            }} /></i>

                            <h2> contact us</h2>
                            <p className="messagecontact" style={{backgroundColor:'transparent'}}>Drop us a message and we will get back to you</p>
                        </div>


                        <div id="containercontact" style={{ }}>
                            <div className="rowCcontact" >
                                <div className="columnC1contact" style={{ backgroundColor: 'white' }}>
                                    {/* <!-- Material form register --> */}
                                    <div className="">
                                        {/* <!--Card content--> */}
                                        <div className="card-body px-lg-5 pt-0">

                                            {/* <!-- Form --> */}
                                            <form className="form1" action="#!" style={{ }}>

                                                <div className="form-row">
                                                    <div className="col">
                                                        {/* <!-- First name --> */}
                                                        <div className="md-form">
                                                            <label for="materialRegisterFormFirstName" className="labelscontact">First name</label>
                                                            <input type="text" id="input1contact" className="form-control" placeholder="Ayesha" style={{ }} />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        {/* <!-- Last name --> */}
                                                        <div className="md-form">
                                                            <label for="materialRegisterFormLastName" className="labelscontact">Last name</label>
                                                            <input type="email" id="input2contact" className="form-control" placeholder="Naseer" style={{ }} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />

                                                <div className="form-row">
                                                    <div className="col">
                                                        {/* <!-- E-mail --> */}
                                                        <div className="md-form">
                                                            <label for="materialRegisterFormFirstName" className="labelscontact">E-mail</label>
                                                            <input type="text" id="input3contact" className="form-control" placeholder="ayeshanaseer@gmail.com" style={{  }} />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        {/* <!-- Phone --> */}
                                                        <div className="md-form">
                                                            <label for="materialRegisterFormFirstName" className="labelscontact">Phone</label>
                                                            <input type="text" id="input4contact"  className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" placeholder="+92 - " style={{ }} />
                                                        </div>
                                                    </div>


                                                </div>
                                                <br />

                                                {/* <!-- Subject --> */}
                                                <div className="md-form">
                                                    <label for="materialRegisterFormSubject" className="labelscontact">Subject</label>
                                                    <input type="tel" id="input5contact" className="form-control" aria-describedby="materialRegisterFormSubjectHelpBlock" placeholder="Title of your query" style={{  }} />
                                                </div>

                                                <br />
                                                <div className="verticalcontact">Information</div>

                                                { /* Message */}
                                                <div className="md-form">
                                                    <label for="materialRegisterFormMessage" className="labelscontact">Message</label>
                                                    <textarea id="areaTextcontact" className="form-control" aria-describedby="materialRegisterFormMessageHelpBlock" placeholder="Type your Query here" style={{ }}></textarea>
                                                </div>

                                                <br />
                                                {/* <!-- Submit button --> */}
                                                <button id="btnSubmitcontact" className="" type="submit">Submit</button>

                                            </form>
                                            {/* <!-- Form --> */}
                                        </div>
                                    </div>
                                    {/* <!-- Material form register --> */}
                                </div>
                                <div className="columnC2contact" style={{  backgroundColor: '#1e1e1e' }}>
                                    <div className="iconsscontact" style={{ color: 'white', fontWeight: 'lighter' }}>

                                        <div className="vertical1contact">Reach us</div>

                                        <div className="columncontact">
                                            <ion-icon name="mail" className="" id="mailBoxcontact" style={{  color: '#F89E12' }}></ion-icon>
                                            <Spacer amount={3} /> VapIotlab@pk.com

                                        </div>

                                        <br />
                                        <div className="columncontact">
                                            <ion-icon name="call" className="" id="phoneCallcontact" style={{ color: '#F89E12', }}></ion-icon>
                                            <Spacer amount={3} />  0337-7874554
                                        </div>

                                        <br />
                                        <div className="columncontact" >
                                            <ion-icon name="location" className="" id="mapLocationcontact" style={{ }}></ion-icon>
                                            <Spacer amount={3} />   Silverback Pvt Ltd. Plot No. 27. 3rd Floor , Sarah Plaza, E-11/3, Islamabad

                                        </div>



                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="footer" style={{ backgroundColor: 'black', paddingTop: '4px' }}>
                        <div className="Row1contact" style={{ paddingLeft: '30px', width: '90%' }}>
                            <div className="Columncontact" id="startFooterpartcontact" style={{ }}>
                                2019  VAP IoT Lab , All Rights  Reserved
                            </div>
                            <div className="Columncontact" id="middleFooterpartcontact" style={{ }}>
                                Follow us on <br />
                                <a href="#" style={{ color: 'white' }}> <i className="fa fa-facebook" style={{ color: '#f89e12', fontSize: 'large' }} />|</a>
                                <a href="#" style={{ color: 'white' }}> <i className="fa fa-twitter" style={{ color: '#f89e12', fontSize: 'large' }} />|</a>
                                <a href="#" style={{ color: 'white' }}> <i className="fa fa-linkedin" style={{ color: '#f89e12', fontSize: 'large' }} />  </a>
                            </div>
                            <div className="Columncontact">
                                <a href="#" style={{ color: 'white', paddingLeft: '95%' }} >  <i className="fa fa-commenting-o" style={{ border: '8px solid orange', color: 'white', backgroundColor: '#f89e12', fontSize: '30px' }} />  </a>
                            </div>
                        </div>
                    </div>

                </div>


            </div >
        )
    }


}

export default ContactUs;