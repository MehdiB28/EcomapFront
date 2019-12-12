import React,{Component} from 'react';
import {Container, Row,Col} from 'reactstrap';
import Header from "./component/header";
import Cards from './component/cards';
import Switch from './component/switches';
import Mapp from './component/map';
import Footerf from './component/footer';
import Choice from './component/choice';
import RangeSlider from './component/slider'
import './index.css'




class App extends Component{
render(){

  var cardData=[{name:"Ecolo1",adresse:"2 rue Léon Blum",desc:"vente de produit Bio",category:"AMAP"},{name:"Ecolo2",adresse:"2 rue Léon Blum",desc:"vente de produit Bio",category:"Alimentation"},{name:"Ecolo2'",adresse:"2 rue Léon Blum",desc:"vente de produit Bio",category:"Caritative"}];
  var cardList=cardData.map(function(card,i){
   return <Cards cardName={card.name} cardAdress={card.adresse} cardDesc={card.desc} cardCat={card.category} key={i}/>
  })

  

return (

  <div>
        <div>
          <Header/>
        </div>

        
        <div>
          <Mapp/>
        </div>
        

        <Container style={{marginTop:25}}>
          <Row>
             
                        <Col xs={3}>
                          <Switch/>
                          <RangeSlider/>
                          <Choice/>
                          
                        </Col>
        
                        <Col>
                          <Row xs={{offset:3}}>
                          {cardList}
                          </Row>
                        </Col>
            
              </Row>  
        </Container>
        <div>
          <Footerf/>
        </div>
  </div>
)

}}


export default App;
