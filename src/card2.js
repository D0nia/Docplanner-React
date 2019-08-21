import React, { Component } from 'react';
import  { Row}from 'react-bootstrap';
import './card2.css'
import Info2 from './card2info'


class Card2 extends Component {
    state = {  }
    render() {
      const{y}=this.props 
        return ( 
        <div>
          <div className="d-flex justify-content-space-between">
             {  y.map((el,index)=> <Info2  key={index} details={el}/>)}
          </div>
       </div>
 
         );
    }
}
 
export default Card2 ;