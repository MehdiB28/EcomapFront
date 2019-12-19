import React,{Component} from 'react';
import {Container,Navbar,Nav,NavLink,Jumbotron, Button} from 'reactstrap';
import ActModal from './ActModal'
import IDModal from './IDModal'
import SIModal from './SIModal'


class Header extends Component{
render(){
return(
    <div>
      <Navbar color="light" expand="md" >
            <img src="./logoEco.png" alt="logo Ecomap"/>
              <Nav className="mr-auto" navbar style={{color:"dark"}}>
                <ActModal/>
              </Nav>
              
              <NavLink><Button color="success" href='/'>Se déconnecter</Button></NavLink>
      </Navbar>
      <Jumbotron fluid style={{backgroundImage:'url("./legumes.jpg")',backgroundSize:'cover',color:'white',fontWeight:'bold',marginBottom:0}}>
                    <Container fluid>
                    <h1 className="display-3">ECOMAP:L'ANNUAIRE ECORESPONSABLE ET LOCAL</h1>
                    </Container>
       </Jumbotron>
     


    </div>


)

}};

export default Header;


