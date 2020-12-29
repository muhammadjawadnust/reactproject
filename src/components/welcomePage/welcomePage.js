import React, { Component } from 'react';
import Spacer from 'react-add-space';

import { Link } from "react-router-dom";


// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import LoginPage from './components/loginPage/loginPage';

import LoginPage from '../../components/loginPage/loginPage';

import 'materialize-css';
import './welcomePage.css';
import BImage from '../Images/BackgroundImage.png';



class WelcomePage extends Component {
    render() {
        return (
            <div>
                <div>
                    <img className="img-responsive" src={BImage} style={{ height: '656.5px', width: '100%' }} />
                    <div className="top-left"><i className="fa fa-signal" style={{ color: ' #F89E12' }} />VAP IoT lab</div>
                    <div className="top-right"><ion-icon name="chevron-down-outline" id="arrowIcon"></ion-icon></div>
                    <div className="middleSection">
                        <div className="centered" style={{ left:'50%', fontFamily: "Myriad pro Semibold" }}>Online Education</div>
                        <div className="centered" id="weight" style={{ top: '27%', fontSize: '100.23px', left: '33%', fontWeight:'lighter' }}>Welcome</div>
                        <div className="centered" style={{ top: '44%', fontSize: '55.14px', left: '34%', fontWeight: 'bold' }}>TO VAP IoT Lab</div>
                        <div className="centered" style={{ top: '55%', fontSize: '20.05px', left: '40%', fontWeight: 'light', textAlign: 'center' }}>(Virtually Accessible Physical)</div>
                        <div className="centered" style={{
                            top: '61%',
                            padding:'2px',
                            fontSize: '20.05px',
                            left: '45%',
                            fontWeight: 'light',
                            border: '1px solid grey',
                            borderRadius: '5px',
                            width: '115px',
                            height: '35px',
                            textAlign: 'center',
                            paddingBottom: '5px'
                        }}><ion-icon name="arrow-forward-outline" id="rightArrow"></ion-icon>
                        <Spacer amount={1} /><Link to="/loginPage">Login</Link> 

                        
                        </div>
                        {/* butttttonnnnn */}

                        {/* <Link to="/loginPage" style={{color:'red'}}>Login</Link> */}
                        {/* <button to="/loginPage" tag={Link} className="" href="./loginPage" style={{color:'red'}} >Login</button> */}

                    </div>
                    <div className="vap">2019 VAP IoT Lab, All Rights Reserved</div>
                </div>
            </div>
        );
    }
}
export default WelcomePage;