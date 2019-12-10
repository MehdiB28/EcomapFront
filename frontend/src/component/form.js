import React,{Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';

class Formulaire extends Component {
  render (){
      return(
                <Form>
                
                <FormGroup >
                    <Label for="exampleSelectMulti">Catégorie</Label>
                    <Col sm={10} style={{padding:0}}>
                    <Input type="select">
                        <option>Activités bénévoles</option>
                        <option>Alimentation</option>
                        <option>AMAP</option>
                        <option>Caritatif</option>
                        <option>Prêt-à-porter</option>
                        <option>Recyclage</option>
                    </Input>
                    </Col>
                </FormGroup>
                <FormGroup>
                <Label for="Name">Nom</Label>
                  <Col sm={10} style={{padding:0}}>
                      <Input type="name" name="name" id="nameModal" placeholder="Nom de l'activité" />
                   </Col>
                 </FormGroup>
                 <FormGroup>
                <Label for="Name">Téléphone</Label>
                  <Col sm={10} style={{padding:0}}>
                      <Input type="phone" name="phone" id="phoneModal" />
                   </Col>
                 </FormGroup>
                  
                <FormGroup>
                  <Label for="exampleAddress">Adresse</Label>
                  <Input type="text" name="address" id="exampleAddress" placeholder="128 rue Saint-Denis..."/>
                </FormGroup>
                <Row form>
                  <Col md={5}>
                    <FormGroup>
                      <Label for="exampleCity">Ville</Label>
                      <Input type="text" name="city" id="exampleCity"/>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleState">Région</Label>
                      <Input type="text" name="state" id="exampleState"/>
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="exampleZip">Code Postal</Label>
                      <Input type="text" name="zip" id="exampleZip"/>
                    </FormGroup>  
                  </Col>
                </Row>
                <FormGroup>
                     <Label for="exampleText">Description de l'activité</Label>
                        <Col sm={10} style={{padding:0}}>
                    <Input type="textarea" name="text" id="exampleText" placeholder="Décrivez votre projet de la mainière la plus précise afin que l'activité soit validée par l'équipe ;)" />
                    </Col>
                </FormGroup>
              </Form>
            );
          }}
          
export default Formulaire;
  