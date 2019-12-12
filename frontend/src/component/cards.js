import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button,Col,Badge} from 'reactstrap';


class Cards extends Component{
  
    

    
   
render()
{

let style;

if(this.props.cardCat==="AMAP"){
    style={color:"success"}
} else if(this.props.cardCat==="Alimentation"){
    style={color:"primary"}
} else if(this.props.cardCat==="Caritative"){
    style={color:"warning"}
} else if (this.props.cardCat==="Prêt-à-porter"){
    style={color:"danger"}
}

    return(
        <Col xs={9} sm={6} md={4} lg={3}>
        <div style={{marginLeft:25}}>
                <Card style={{marginBottom:30,borderRadius: 20,boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.1)"}}>
                <CardImg top width="100%" src="./home.jpg" alt="Card image cap" style={{borderRadius: "20px 20px 0px 0px"}} />
                    <CardBody>
                    <CardTitle>{this.props.cardName}</CardTitle>
                    <CardSubtitle>{this.props.cardAdress}</CardSubtitle>
                    <CardText>{this.props.cardDesc}</CardText>
                    <Badge href="#" style={style} pill>{this.props.cardCat}</Badge>
                    <Button outline color="success" style={{borderRadius:15}}>Découvrir</Button>
                    </CardBody>
                </Card>

        </div>
        </Col>
    )};
}

export default Cards; 