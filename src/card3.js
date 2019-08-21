import React, { Component } from 'react';
import  { Row, Col}from 'react-bootstrap';
import Info3 from './card3info';

class Card3 extends Component {
    state = {  }
    render() { 
        const{z}=this.props 
        return ( 
        <div>
         
                <Col  xs={6} md={4}>
                    {  z.map((el,index)=> <Info3  key={index} cards={el}/>)}
               </Col>
       
        </div>
         
        );
    }
}
 
export default Card3;