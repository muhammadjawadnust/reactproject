import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import WelcomePage from './components/welcomePage/welcomePage';
import Compiler from './components/compiler/compiler';
import WelcomeBootstrap from './components/welcomeBootstrap/welcomeBootstrap';
import AboutUs from './components/aboutUs/aboutUs';
import ForumPage1 from './components/FAQs/forumPage1';
import ForumPage2 from './components/FAQs2/forumPage2';
import ContactUs from './components/contactUs/contactUs';
import LoginPage from './components/loginPage/loginPage';



const Routes = () =>{

    return(
        <Router>
            <div>
                {/* <Route path='/' exact  component={  () => <WelcomePage /> } />                */}
                <Route  path='/compiler' exact component={ () => <Compiler />} />
                {/* <Route  path='/welcomBootstrap' exact component={WelcomeBootstrap} /> */}
                 <Route  path='/aboutUs' exact component={AboutUs} />
                <Route  path='/forumPage1' exact component={ForumPage1} />
                <Route  path='/forumPage2' exact component={ForumPage2} />
               <Route  path='/contactUs' exact component={ContactUs} />
               <Route path='/loginPage' exact component={ () => <LoginPage/>} /> 
            </div> 
        </Router>

    )
}

export default Routes;


// class Routes extends Component{
//     render(){
//         return(
//             <BrowserRouter>
//             <Switch>
//                      <Route path="/welcome" exact component={WelcomePage} />
//                      <Route path="/login" exact component={LoginPage} />
//                      <Route path="/Compiler" exact component={Compiler} /> */}
//                      <Route path="/welcomeBootstrap" exact component={WelcomeBootstrap} />   
//                      <Route path="/aboutus" exact component={AboutUs} />         
//                      <Route path="/formPage1" exact component={ForumPage1} /> 
//                      <Route path="/formPage2" exact component={ForumPage2} />  
//                      <Route path="/contactus" exact component={ContactUs} /> 





//                 </Switch>
//             </BrowserRouter>
                
            
//         )
//     }
// }
