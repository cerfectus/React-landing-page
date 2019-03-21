import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class BodyLayout extends Component {
  render() {
    return (
      <div className="container">
          
      <Card
        height="80%">
          <CardImg
            top
            width="20%"
            src="https://images.unsplash.com/photo-1535462009050-27ddea306055?ixlib=rb-1.2.1&auto=format&fit=crop&w=649&q=80"
            alt="Card image cap"
            height="100%"
          />
         
        </Card>
        <Card
        height="80%">
          <CardImg
            top
            width="20%"
            src="https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="Card image cap"
            height="100%"
          />
         
        </Card>
        <Card
        height="80%">
          <CardImg
            top
            width="20%"
            src="https://images.unsplash.com/photo-1522061015878-baa3ac407d08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
            alt="Card image cap"
            height="100%"
          />
         
        </Card>
        <Card
        height="80%">
          <CardImg
            top
            width="20%"
            src="https://images.unsplash.com/photo-1531903941236-b67dd2867cff?ixlib=rb-1.2.1&auto=format&fit=crop&w=646&q=80"
            alt="Card image cap"
            height="100%"
          />
         
        </Card>
        
      </div>
    );
  }
}
export default BodyLayout