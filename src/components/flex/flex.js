import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import Ionicon from 'react-ionicons';
import { Navbar, Nav, } from 'react-bootstrap';
import Spacer from 'react-add-space';


// import 'materialize-css';
import './flex.css';
import BImage from '../Images/BackgroundImage.png';
import { Form } from 'react-bootstrap';

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


class Flex extends Component {
    render() {
        return (
            <div className="flexbox">
                <div className="flexbox-item flexbox-item-1 ">
                    <Navbar Navbar-inverse expand="lg" >
                        <Navbar.Brand href="#home"><ion-icon name="cellular" id="vap" style={{ fontSize: 'large', color: '#F89E12', marginTop: '10px', marginLeft: '48%' }}></ion-icon> <a href="#VAPIoT" style={{ color: 'white', fontSize: 'large' }}>VAP IoT lab</a></Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home" style={{ color: 'white', fontSize: 'small' }}>Home</Nav.Link>
                                <Nav.Link href="#about" style={{ color: 'white', fontSize: 'small' }}>About</Nav.Link>
                                <Nav.Link href="#forum" style={{ color: 'white', fontSize: 'small' }}>Forum</Nav.Link>
                                <Nav.Link href="#contact" style={{ color: 'white', fontSize: 'small' }}>Contact</Nav.Link>
                                <Nav.Link href="#faqs" style={{ color: 'white', fontSize: 'small' }}>FAQs</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className="flexbox-item" style={{ display: 'flex', marginTop: '-1.5%', height: '50px', }}>
                    <div className="flexbox-item flexbox-item-2" style={{ display: 'flex' }}>
                        <div className="flexbox-item flexbox-item-2 flexbox-item-2-inner" style={{ display: 'flex' }}>
                            Index.cls-sfdx <Spacer amount={7} /> <ion-icon name="close-outline" style={{ color: 'white', }}></ion-icon>
                        </div>
                        <div className="flexbox-item flexbox-item-2 flexbox-item-2-inner" id="dDown" style={{ display: 'flex', backgroundColor: '#3d3d3d' }}>
                            <select id="dDmenu"  >
                                <option className="bghover-o">Select Iot Boards</option>
                                {items.map((item, index) => (
                                    <option key={item.index} value={item.value}>
                                        {item.value}
                                    </option>
                                ))}
                            </select>

                            <textarea className="portA" style={{ resize: 'none' ,color:'white',height:'20px', width:'50px',textAlign: 'center', marginTop: '4px',backgroundColor: '#1e1e1e'}}>
                                <div style={{color:'white', backgroundColor:''}}>Port 0</div>
                            </textarea>

                        </div>
                    </div>
                    <div className="flexbox-item flexbox-item-3">
                        Flexbox 3
                    </div>

                </div>
                {/* 
                <div className="flexbox-item flexbox-item-3">
                    Flexbox 3
                </div>
                <div className="flexbox-item flexbox-item-4">
                    Flexbox 4
                </div>
                <div className="flexbox-item flexbox-item-5">
                    Flexbox 5
                </div> */}


            </div>



        );
    }
}
export default Flex;