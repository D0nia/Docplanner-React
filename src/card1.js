import  React, {Component}from 'react';
// import  { Jumbotron, Row, Col }from 'react-bootstrap';
import './card1.css';
import Info1 from'./card1info';



class Card1 extends Component {
    state = { 
       
         
     };
    render() { 
        const{x}=this.props
        return (  
        <div className="row">
           <div className="container-fluid d-flex justify-content-center "> 
             {  x.map((el,index)=> <Info1  key={index} info={el}/>)}
           </div>
        </div>
         );
    }
}
 
export default Card1;