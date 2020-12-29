import React, { Component } from 'react';
import Spacer from 'react-add-space';

import './forumPage2.css';
import './responsiveForum2.css';


import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';
import bgImage from '../Images/aboutUs.png';


class ForumPage2 extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <img className="img-responsive" src={bgImage} id="bgImageforumPage2" />
                    <div className="top-leftforumPage2"><i className="fa fa-signal" style={{ color: '#F89E12' }} />
                        <Spacer amount={1} />
                    VAP IoT lab</div>
                    <div className="top-left1forumPage2" style={{ }}>Home</div>
                    <div className="top-left2forumPage2" style={{ }}>About</div>
                    <div className="top-left3forumPage2" style={{ }}>Blogs</div>
                    <div className="top-left4forumPage2" style={{color:' #F89E12'}}>Forum</div>
                    <div className="top-left5forumPage2" style={{ }}>Contact</div>
                    <button className="top-left6forumPage2" id="btnforumPage2" style={{ fontFamily:"Myriad pro Semibold" }}>Logout</button>


                    <div className="section">

                        <div id="container" style={{ backgroundColor: '', }}>
                            <div id="middleSectionforumPage2" style={{  }}>
                                <div className="container-fluid">
                                    <div className="row">
                                        <a href="" id="aforumTagforumPage2" style={{ }}>Forum <Spacer amount={1} />
                                            <ion-icon name="chevron-back-outline" id="iconsLessthanforumPage2" style={{ color: 'white', paddingTop: '3px' }}></ion-icon>
                                        </a>

                                        <p id="vapIDforumPage2" style={{}}> VAPIoT-HANDS ON/COMPILER</p>
                                    </div>
                                    <h2 id="h2TagforumPage2" style={{ }}>VAP IoT- HANDS ON / COMPILER</h2>
                                    <p id="pTag2forumPage2" style={{  }}>Moderator: Ben Jhone. ST</p>
                                </div>

                                <div className="row" id="midRowforumPage2" style={{ }}>

                                    <p id="pTag3forumPage2" style={{ }}>Display topics from previous:</p>
                                    <Spacer amount={3} />

                                    <select id="iconssforumPage2" className="optionsforumPage2" style={{ }}>
                                        <option className="bghover-o">All Topics</option>
                                        <option className="bghover-o">All posts </option>
                                        <option className="bghover-o">1 day</option>
                                        <option className="bghover-o">7 days</option>
                                        <option className="bghover-o">2 weeks</option>
                                        <option className="bghover-o">1 month</option>
                                        <option className="bghover-o">3 months</option>
                                        <option className="bghover-o">6 months</option>
                                        <option className="bghover-o">1 year</option>
                                    </select>
                                    <Spacer amount={4} />
                                    <p id="pTag4forumPage2" style={{ }}>Sort by:</p>
                                    <Spacer amount={3} />
                                    <select id="secondDdownforumPage2" className="optionsforumPage2" style={{ }}>
                                        <option>Post time</option>
                                        <option>Author</option>
                                        <option>Subject</option>
                                    </select>
                                    <Spacer amount={4} />
                                    <div style={{ resize: 'none' }}>
                                        <textarea className="portGoforumPage2">
                                            GO
                                        </textarea>
                                    </div>
                                    <Spacer amount={5} />
                                    <button id="searchBtnforumPage2" style={{ }}>
                                        search | <Spacer amount={22} /><i className="fa fa-search" id="searchIconforumPage2" style={{ color: '#ffb33a' }} />
                                    </button>
                                </div>
                                <hr style={{
                                    color: '#ffffff',
                                    backgroundColor: '#ffffff',
                                    height: '-1px'

                                }} />


                                <div className="container-fluid">
                                    <div id="" style={{ color: 'white' }}>
                                        <h4 className="jhnforumPage2" style={{ color: '#ffb33a' }}>Jhone</h4>
                                        <p className="ptag1forumPage2">Benn</p>
                                        <p className="ptag2forumPage2">Posts 8</p>
                                        <p className="ptagsforumPage2">joined 8.Oct.2019</p>
                                        <p className="ptagsforumPage2">1517</p>
                                    </div>

                                    <div className="row">
                                        <div className="vertical" id="verticalLine1forumPage2"></div>
                                        <div>
                                            <h3>VAPIoT-HANDS ON/COMPILER</h3>
                                            <p className="benforumPage2" id="benNameforumPage2" style={{}}>By Ben jhone. ST <ion-icon name="chevron-forward" className="iconsLessthan" style={{ color: 'white', paddingTop: '3px' }}></ion-icon>
                                            <ion-icon name="chevron-forward" className="iconsLessthanforumPage2" style={{ color: 'white', paddingTop: '8px' }}></ion-icon> <h6 id="h6TagforumPage2" style={{}}>wed 3 May 2017</h6>
                                           <h5 style={{color:'white'}}> Hello </h5> </p>
                                           <br />
                                           <p className="textSectionforumPage2">
                                               I am new here. I have very strange problem with game that I installed, but I can't start the game.
                                               <br/>
                                               I come only to select type of game:
                                               <br/>
                                               1. Journey by story
                                               <br />
                                               2. Adventure
                                               <br/>
                                               But, there is no matter, what I seleect. Then I get black screen with the little bird on right down corner.
                                               <br />
                                               Maybe do-do bird? Then I wait....And wait....Maybe few minutes. And nothing.
                                               <br />
                                               Then I use Task Manager and kill process syberia.exe - or something similar.
                                               <br />
                                               What I am doing wrong? Should I uninstall the game and install again?
                                            </p>
                                            <hr id="hrTagforumPage2" style={{ }} />
                                        </div>
                                    </div>

                                    <div className="" style={{ color: 'white' }}>
                                        <h4 className="jhnforumPage2" style={{ color: '#ffb33a' }}>gail</h4>
                                        <p className="ptag1forumPage2">Benn</p>
                                        <p className="ptag2forumPage2">Posts 8</p>
                                        <p className="ptagsforumPage2">joined 8.Oct.2019</p>
                                        <p className="ptagsforumPage2">1517</p>
                                    </div>

                                    <div className="row">
                                        <div className="vertical" id="verticalLine2forumPage2" style={{}}></div>
                                        <div>
                                            <h3>Re: Syberia 3 wont start</h3>
                                            <p className="benforumPage2" id="benName1forumPage2" style={{}}>By gail <ion-icon name="chevron-forward" className="iconsLessthan" style={{ color: 'white', paddingTop: '3px' }}></ion-icon>
                                            <ion-icon name="chevron-forward" className="iconsLessthanforumPage2" style={{ color: 'white', paddingTop: '8px' }}></ion-icon> <h6 id="h6Tag1forumPage2" style={{}}>wed 3 May 2017</h6>
                                           </p>
                                            <br/>
                                           <p className="textSectionforumPage2">
                                               Hi and welcome ponny. You could try contacting Microids directly at this link:
                                               <br/>
                                               htttp://support.syberia3.com/en/support/home  
                                              
                                            </p>
                                            <hr id="hrTag1forumPage2" style={{ }} 
                                            />
                                        </div>
                                    </div>

                                </div>






                            </div>

                        </div>
                    </div>


                    <div className="footerforumPage2" style={{ backgroundColor: 'black', paddingTop: '4px' }}>
                        <div className="Row1forumPage2"  style={{ paddingLeft: '30px', width: '90%' }}>
                            <div className="ColumnforumPage2" id="startFooterpartforumPage2" style={{}}>
                                2019  VAP IoT Lab , All Rights  Reserved
                        </div>
                            <div className="ColumnforumPage2" id="middleFooterpartcontact" style={{ }}>
                                Follow us on <br />
                                <a href="#" style={{ color: 'white' }}> <i className="fa fa-facebook" style={{ color: '#f89e12', fontSize: 'large' }} />|</a>
                                <a href="#" style={{ color: 'white' }}> <i className="fa fa-twitter" style={{ color: '#f89e12', fontSize: 'large' }} />|</a>
                                <a href="#" style={{ color: 'white' }}> <i className="fa fa-linkedin" style={{ color: '#f89e12', fontSize: 'large' }} />  </a>
                            </div>
                            <div className="ColumnforumPage2">
                                <a href="#" style={{ color: 'white', paddingLeft: '95%' }} >  <i className="fa fa-commenting-o" style={{ border: '8px solid orange', color: 'white', backgroundColor: '#f89e12', fontSize: '30px' }} />  </a>
                            </div>
                        </div>
                    </div>

                </div>


            </div >
        )
    }


}

export default ForumPage2;