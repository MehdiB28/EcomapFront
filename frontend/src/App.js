import React,{Component} from 'react';
import {Container, Row,Col} from 'reactstrap';
import Header from "./component/header";
import Switch from './container/switches';
import Mapp from './container/map';
import Footerf from './component/footer';
import Choice from './container/choice';
import RangeSlider from './container/slider'
import CardsList from './container/cardsList'
import './index.css'

 
class App extends Component{
    constructor(props){
      super(props)
      global.IP='10.2.4.48'
      //192.168.1.13
      //10.2.4.48
  }

render(){
  


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
                            <CardsList/>
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
