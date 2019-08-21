import React, { Component } from 'react';
import  { Card, Button, Row, Col}from 'react-bootstrap';


class Info3 extends Component {
    state = {  }
    render() { 
        const {cards}=this.props 
        return ( 
            <div className="card">
                <Card  col-lg-5 style={{ width: '18rem' }}>
                 <img src={cards.cardimg} alt="img"  />
                  <Card.Body>
                  <Card.Title>{cards.title}</Card.Title>
                  <Button variant="primary" >See Opening</Button>
                 </Card.Body>
                </Card>
            </div>
         );
    }
}
 
export default Info3;