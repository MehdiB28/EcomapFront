import React,{Component} from 'react';
import {Container,Collapse,Button,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,Jumbotron} from 'reactstrap';


class Header extends Component{
render(){
return(
    <div>
      <Navbar style={{backgroundColor:"black", color:"#FFFFFF"}} expand="md">
            <NavbarBrand href="/">ECOMAP</NavbarBrand>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="">Link 1</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Link 2</NavLink>
                </NavItem>
              </Nav>
      </Navbar>
      <Jumbotron fluid style={{backgroundImage:'url("./home.jpg")',color:'white'}}>
                    <Container fluid>
                    <h1 className="display-3">ECOMAP:L'ANNUAIRE DE L'ECOLOGIE EN FRANCE</h1>
                    </Container>
       </Jumbotron>
     


    </div>


)

}};

export default Header;


