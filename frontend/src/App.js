import React,{Component} from 'react';
import {Container, Row,Col} from 'reactstrap'
import Header from "./component/header"
import Cards from './component/cards'
import Switch from './component/switches';
import Map from './component/map'

class App extends Component{
render(){


return (

  <div>
        <div>
          <Header/>
        </div>

        <div>
        <Row>
              <Map/>
         </Row>
        </div>

        <Container style={{marginTop:10}}>
          
            <Row>
            <Col xs="3">
              <Switch/>
            </Col>

            <Col xs="auto">
              <Cards/>
            </Col> 
            </Row>

        </Container>

  </div>
)

}}


export default App;
