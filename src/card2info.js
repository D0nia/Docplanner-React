import React, { Component } from 'react';
import  { Card, CardGroup }from 'react-bootstrap';
import './card2.css'



class Info2 extends Component {
    state = {  }
    render() { 
      const {details}=this.props 

        return ( 
            <div>
              <CardGroup>
              <Card  className="text-center" border="light" style={{ width: '18rem' }}>
                <Card.Body className="cards">
                  <img  className="img1"   src={details.svg} alt="svg" />
                  <h1 className="title1">{details.title}</h1>
                  <p className="info1">{details.info}</p>
                </Card.Body>
              </Card>
              </CardGroup>
            </div>
         );
    }
}
 
export default Info2;