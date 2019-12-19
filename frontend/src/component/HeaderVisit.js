import React,{Component} from 'react';
import {Container,Navbar,Nav,NavLink,Jumbotron} from 'reactstrap';
import IDModal from './IDModal'
import SIModal from './SIModal'


class HeaderVisit extends Component{
render(){
return(
    <div>
      <Navbar expand="md" color="ligth">
            <img src="./logoEco.png" alt="logo Ecomap"/>
              <Nav className="mr-auto" navbar style={{color:"dark"}}>
                
              </Nav>
              
              <NavLink><IDModal/></NavLink>
              <NavLink><SIModal/></NavLink>
      </Navbar>
      <Jumbotron fluid style={{backgroundImage:'url("./meuf.png")',backgroundSize:'cover',color:'white',fontWeight:'bold',marginBottom:0}}>
                    <Container fluid>
                    <h1 className="display-3">ECOMAP: L'ANNUAIRE ECORESPONSABLE ET LOCAL</h1>
                    </Container>
       </Jumbotron>
     


    </div>


)

}};

export default HeaderVisit;


