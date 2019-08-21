import React, { Component } from 'react';
import  { Jumbotron,  Col }from 'react-bootstrap';
import './card1.css';


class Info1 extends Component {
    state = { 
    
    };
        render() { 
            const {info}=this.props 
        return ( 
           
            <div >
                
               <Col xs lg="4">
               <Jumbotron  className="jumbotron1 " style={{backgroundColor:info.color}}>
                    <span className="span">{info.titre}</span>
                    <h1 className="info">{info.parag}</h1>
                      <img src={info.img} className="imgs" alt="img"/>
               </Jumbotron>
               </Col>
              
            </div>
         );
    }
}
 
export default Info1;