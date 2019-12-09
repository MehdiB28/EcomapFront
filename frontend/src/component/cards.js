import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button,Col} from 'reactstrap';


class Cards extends Component{
render()
{

    return(
        <Col xs={9} sm={6} md={4} lg={3}>
        <div>
                <Card style={{marginBottom:30,borderRadius: 20,boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.1)"}}>
                <CardImg top width="100%" src="./home.jpg" alt="Card image cap" style={{borderRadius: "20px 20px 0px 0px"}} />
                    <CardBody>
                    <CardTitle>{this.props.cardName}</CardTitle>
                    <CardSubtitle>{this.props.cardAdress}</CardSubtitle>
                    <CardText>{this.props.cardDesc}</CardText>
                    <Button>Button</Button>
                    </CardBody>
                </Card>

        </div>
        </Col>
    )};
}

export default Cards; 