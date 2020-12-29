import React, { Component, useState } from 'react';
import Spacer from 'react-add-space';
// import AdaptiveImage from 'react-adaptive-image';


import './compiler.css';

import './responsive.css';
import { Navbar, Nav, } from 'react-bootstrap';
import bImage from '../Images/backgroundImg.png';


import compilerBar from '../Images/compilerBar.jpg';
import LiveView from '../Images/liveView.PNG';


const index = 0;

const items = [

    {
        value: 'surili-wifi',
        arguments: " '1', '2' , '3' "
    },
    {
        value: 'surili-gsm',
        arguments: " '4', '5' , '6' "
    },
    {
        value: 'PIC',
        arguments: " '7', '8' , '9' "
    },
    {
        value: 'Adiuno',
        arguments: " '10', '11' , '12' "
    }
]

class Compiler extends Component {

    handleClick = () => {
        console.log('Click happened');

    }

    render() {
        return (
            <div className="">
                <div className="bgImagecompiler">
                    <Navbar expand="lg" style={{ height: '0' }}>
                        <Navbar.Brand href="#home" ><i className="fa fa-signal" id="vapcompiler" style={{ fontSize: 'medium' }} /><a id="navHeadcompiler"> VAP IoT Lab</a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home" style={{ color: 'white', fontSize: 'small' }}>Home</Nav.Link>
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: 'small' }}>About</Nav.Link>
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: 'small' }}>Forum</Nav.Link>
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: 'small' }}>Contact</Nav.Link>
                                <Nav.Link href="#link" style={{ color: 'white', fontSize: 'small' }}>FAQs</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div style={{ marginTop: '-1.5%', }} className="sectioncompiler">
                    <div className="rowcompiler">
                        <div className="columncompiler" id="column1">
                            <div className="navPt2">
                                <ul className="nav nav-tabs" id="tabscompiler">
                                    <li style={{ backgroundColor: '#1e1e1e', }} ><a href="#" className="Indexcompiler">Index.cls-sfdx <Spacer amount={10}/></a></li>
                                    <li className="dDowncompiler">
                                        <select id="dDmenucompiler">
                                            <option className="bghover-o" id="boardOptionscompiler">Select IoT Boards</option>
                                            {items.map((item, index) => (
                                                <option id="boardOptions" key={item.index} value={item.value}>
                                                    {item.value}
                                                </option>
                                            ))}
                                        </select>
                                    </li>
                                    <Spacer amount={2} />
                                    <li className="portcompiler">
                                        <textarea className="portAcompiler" style={{ resize: 'none' }}>
                                            Port 0
                                        </textarea>
                                    </li>
                                    <Spacer amount={4} />
                                    <div className="symbolscompiler" >
                                        <a href="#serial"><i className="fas fa-adjust" title="serial" onClick={items.arguments} id="" style={{ color: '#f89e12' }}> </i></a>
                                        <Spacer amount={4} />
                                        <a href="#download"><i className="fas fa-download" title="Theme" id="" style={{ color: '#f89e12' }}></i></a>
                                        <Spacer amount={4} />
                                        <a href="#check"><i className="fas fa-check" title="Theme " id="" style={{ color: '#f89e12' }}></i></a>
                                        <Spacer amount={4} />
                                        <a href="#circle"><i className="fas fa-arrow-alt-circle-right" title="run" onClick={this.handleClick} id="" style={{ color: '#f89e12' }}></i></a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="columncompiler" id="column2" style={{ }}>
                            <div className="div3compiler" style={{ border: '1px solid black' }}>
                                <form>
                                    <br />
                                    <div className="Tbtn">
                                        <Spacer amount={5} /> <input type="text" placeholder="Serial Monitor" className="Incompiler"></input>
                                        <button type="button" className="btn btn-warning" id="btncompiler">Send</button>
                                    </div>
                                </form>
                                <div className="container-fluid">
                                    <ul className="Ulistcompiler">
                                        <li>Enter LED Number 0 to 9 or X to clear</li>
                                        <li>CLeared</li>
                                        <li>Turned on LED 0</li>
                                        <li>Turned on LED 3</li>
                                        <li>Turned on LED 5</li>
                                    </ul>
                                </div>
                                <br /><br />
                            </div>
                            <div id="divAuto" className="row">
                                <p id="autoScrollcompiler"> <Spacer amount={8} /><i className="fa fa-square-o" style={{ border: '1px solid white', color: '#f89e12', backgroundColor: '#f89e12' }} /> <Spacer amount={2} />AutoScroll</p>
                                <Spacer amount={15} />
                                <select id="icons" className="optionscompiler" style={{ backgroundColor: 'white', color: 'black', }}>
                                    <option className="bghover-o" id="o1">No line Ending</option>
                                    <option className="bghover-o" id="o2">Option 1</option>
                                    <option className="bghover-o" id="o3">Option 2</option>
                                    <option className="bghover-o" id="o4">Option 3</option>
                                    <option className="bghover-o" id="o5">Option 4</option>
                                </select>
                                <select id="icons" className="option1compiler" style={{ backgroundColor: 'white', color: 'black', }}>
                                    <option className="bghover-o" id="o6">g600 bauds</option>
                                    <option className="bghover-o" id="o7">Option 1</option>
                                    <option className="bghover-o" id="o8">Option 2</option>
                                    <option className="bghover-o" id="o9">Option 3</option>
                                    <option className="bghover-o" id="o10">Option 4</option>
                                </select>
                                <button type="button" className="btn btn-warning" id="btnClearcompiler">Clear output</button>
                            </div>
                            <div clasName="livePart">
                                <p id="liveViewcompiler" style={{  }}><Spacer amount={2}/><i className="fa fa-circle" id="greenCirclecompiler" style={{ color: 'green' }} /><Spacer amount={2}/> Live View</p>
                                <img src={LiveView} className="img-responsive" id="Imageecompiler" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footercompiler">
                    <div className="twoMainscompiler" >
                        <div className="footerAcompiler">
                            Output
                        </div>
                        <div className="footerBcompiler">
                            <p>This is a heading one</p>
                            <p>This is a heading two</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Compiler;