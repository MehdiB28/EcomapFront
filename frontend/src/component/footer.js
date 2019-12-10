import React,{Component} from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {transform} from 'transformation-matrix';

class Footerf extends React.Component{

    render(){
        return(
    
<MDBFooter style={{color:'white',backgroundColor:'grey',marginTop:'30px', paddingTop:"10px",borderTop:"1 solid grey",justifyContent:'space-between'}}>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
            <h5>ECOMAP</h5>
            <p>
              L'agriculture seine à côté de chez vous.
            </p>
            <h3>Adresse</h3>
            <p>126 Rue Saint-Denis 75 002 Paris</p>
          </MDBCol>
          <MDBCol md="4">
            <h5>Nous connaitre</h5>
            <ul>
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
              <img src="./logoEco.png"/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}}


export default Footerf;