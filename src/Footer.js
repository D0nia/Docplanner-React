import React, { Component } from 'react';
import {Jumbotron,Row,Col}from 'react-bootstrap';
import './Main.css'

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className=" font-size col-lg-12">
            <Jumbotron className="jumbotron5">
            <center>
               <p className="new-clr">We are leaders in 10 countries:
               <a href="https://www.znanylekarz.pl/">Poland </a>,
               <a href="https://www.doktortakvimi.com/">Turkey </a>,
               <a href="https://www.doctoralia.es/">Spain </a>,
               <a href="https://www.miodottore.it/">Italy </a>,
               <a href="https://www.miodottore.it/">Czech Republic </a>,
               <a href="https://www.doctoralia.com.mx/">Mexico </a>,
               <a href="https://www.doctoralia.co/">Colombia </a>,
               <a href="https://www.doctoralia.co/"> Brazil</a>,
               <a href="https://www.doctoraliar.com/">Argentina </a>,
               and <a href="https://www.doctoralia.cl/">Chili </a>
             </p>
             <p className="new-clr">This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.<br/>
              www.docplanner.com © 2019</p>
            </center>
            </Jumbotron>
            </div>
            
             );
    }
}
 
export default Footer;