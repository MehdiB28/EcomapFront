import React,{Component} from 'react';
import {Container, Row,Col} from 'reactstrap';
import Header from "./component/header";
import Cards from './component/cards';
import Switch from './component/switches';
import Mapp from './component/map';
import './index.css'



class App extends Component{
render(){

  var cardData=[{name:"Ecolo1",adresse:"2 rue Léon Blum",desc:"vente de produit Bio"},{name:"Ecolo2",adresse:"2 rue Léon Blum",desc:"vente de produit Bio"},{name:"Ecolo2'",adresse:"2 rue Léon Blum",desc:"vente de produit Bio"}];
  var cardList=cardData.map(function(card,i){
   return <Cards cardName={card.name} cardAdress={card.adresse} cardDesc={card.desc} key={i}/>
  })



return (

  <div>
        <div>
          <Header/>
        </div>

        
        <div>
          <Mapp/>
        </div>
        

        <Container style={{marginTop:10}}>
          <Row>
             
                        <Col xs={3}>
                          <Switch/>
                        </Col>
        
                        <Col>
                          <Row xs={{offset:3}}>
                          {cardList}
                          </Row>
                        </Col>
            
              </Row>  
        </Container>

  </div>
)

}}


export default App;
