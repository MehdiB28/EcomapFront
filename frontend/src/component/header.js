import React,{Component} from 'react';
import {Container,Collapse,Button,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,Jumbotron} from 'reactstrap';
import ModalForm from './modalForm'

class Header extends Component{
render(){
return(
    <div>
      <Navbar expand="md" color="ligth">
            <img src="./logoEco.png"/>
              <Nav className="mr-auto" navbar style={{color:"dark"}}>
                <ModalForm/>
                <NavItem >
                  <NavLink href="">S'inscrire</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">S'identifier</NavLink>
                </NavItem>
              </Nav>
      </Navbar>
      <Jumbotron fluid style={{backgroundImage:'url("./home.jpg")',backgroundSize:'cover',color:'white',fontWeight:'bold',marginBottom:0}}>
                    <Container fluid>
                    <h1 className="display-3">ECOMAP:L'ANNUAIRE DE L'ECOLOGIE EN FRANCE</h1>
                    </Container>
       </Jumbotron>
     


    </div>


)

}};

export default Header;


