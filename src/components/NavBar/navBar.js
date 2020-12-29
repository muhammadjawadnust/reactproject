import React, { Component } from 'react';
import './navBar.css';



class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid" id="nav">
                    <i className="fa fa-signal" style={{
                        fontSize: '15px',
                        marginTop: '8px',
                        color: '#F6A729',
                        float: 'left'
                    }}></i>
                    <a className="navbar-brand" href="#VAP">
                        <font className="vap1" style={{
                            fontSize: '15.72px',
                            color: '#FFFFFF'
                        }}>VAP IoT lab</font>

                        <span className="vap2" style={{
                            fontSize: '10.04px',
                            color: '#FFFFFF',
                            position: 'absolute',
                            left: '50%'
                        }}>Username.cls-sfdx</span>

                        <nav class="navbar navbar-dark navbar-expand-sm" id="downIcon">
                            <a class="navbar-brand" href="#">
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </nav>
                    </a>

                </div>

                <div className="">
                    <div className="row">
                        <div className="column" style={{
                            backgroundColor: '#1e1e1e',
                            height: '450px', width: '55%'
                        }}>
                            <div className="">
                                <ul className="nav nav-tabs" id="tabs">
                                    <li style={{ backgroundColor: 'black' }}><a href="#">Index.cls-sfdx <i className="fa fa-close" /></a></li>
                                    <div className="col-md-6 col-lg-6 col-sm-6" id="div2">
                                        <select id="icons" className="bglightblack text-black" >
                                            <option className="bghover-o">SelectIotBoards</option>
                                            <option className="bghover-o">Option 1</option>
                                            <option className="bghover-o">Option 2</option>
                                            <option className="bghover-o">Option 3</option>
                                            <option className="bghover-o">Option 4</option>
                                        </select>
                                        <a className="a1" style={{
                                            textDecoration: 'none',
                                            color: '#ffffff'
                                        }}>Port 0</a>
                                        <ul className="navbar-expand navbar-nav float-right">
                                            <li className="ml-3">
                                                <a href="#"><i className="fas fa-adjust" title="Theme " id="iconss"></i></a>
                                            </li>
                                            <li className="ml-3">
                                                <a href="#"><i className="fas fa-download" title="Theme" id="iconss"></i></a>
                                            </li>

                                            <li className="ml-3">
                                                <a href="#"><i className="fas fa-check" title="Theme " id="iconss"></i></a>
                                            </li>

                                            <li className="ml-3">
                                                <a href="#"><i className="fas fa-arrow-alt-circle-right" title="Theme" id="iconss"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="column" style={{
                            backgroundColor: '#070606',
                            border: '1px solid black',
                            height: '450px', width: '45%'
                        }}>
                            <div style={{
                                backgroundColor: '#1e1e1e',
                                padding: '7px',
                                color: 'white'
                            }}>
                                <h5>Serial Monitor</h5>
                            </div>
                            <br />

                            <div className="div3">
                                <form >
                                    <div className="Tbtn">
                                        <input type="text" className="In"></input>
                                        <button type="button" className="btn btn-warning" id="btn">Send</button>
                                    </div>
                                </form>
                                <div className="container-fluid">
                                    <ul className="Ulist">
                                        <li>Enter LED Number 0 to 9 or X to clear</li>
                                        <li>CLeared</li>
                                        <li>Turned on LED 0</li>
                                        <li>Turned on LED 3</li>
                                        <li>Turned on LED 5</li>
                                    </ul>
                                </div>
                                <br />
                                <br />
                            </div>

                            <div className="container" id="liveV">
                                <div className="div1">
                                    <i className="fa fa-box" style={{
                                        color: '#F89E12',
                                        marginRight: '35%'
                                    }}>Autoscroll </i>
                                    <select id="Soptions">
                                        <option>No line Ending</option>
                                        <option>Link 1</option>
                                        <option>Link 2</option>
                                        <option>Link 3</option>
                                        <option>Link 4</option>
                                    </select>
                                    <select id="Soptions" >
                                        <option>9600 baud</option>
                                        <option>Link 1</option>
                                        <option>Link 2</option>
                                        <option>Link 3</option>
                                        <option>Link 4</option>
                                    </select>

                                    <button type="button" className="btn btn-warning" id="btn">Clear output</button>
                                </div>
                                <div className="div2">
                                    <i className="fa fa-circle" style={{ color: 'green' }}></i> live view
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="twoMains">
                            <section className="bgblack output py-1 pl-4" id="outputt">
                                <h3 className="text-white rail fs-09">Ouptput</h3>
                            </section>

                            <div className="div4">
                                <h3>This is a heading one</h3>
                                <h5>This is a heading two</h5>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}
export default NavBar;