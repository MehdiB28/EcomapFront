import React,{Component} from 'react';
import { CustomInput, Form, FormGroup, Label,Input,Button,Col} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';




class Switch extends Component{

    render(){
        

  

        return(
        <Col>
            <div>
                <FormGroup>
                    <Input type="text" name="name" id="exampleName" placeholder="Amap..." ></Input>
                </FormGroup>

                <FormGroup>
                    <Input type="text" name="name" id="exampleName" placeholder="Ville..." ></Input>
                </FormGroup>

                <Button color="success" justify-content="center">Rechercher</Button>
                
                <FormGroup>
                    <Label for="exampleCustomRange">Custom Range</Label>
                    <CustomInput type="range" id="exampleCustomRange" name="customRange" />
                </FormGroup>


                <FormGroup style={{borderWidth:4,borderColor:"#27405C"}}>
                        <Label for="exampleCheckbox" style={{fontWeight:'bold'}}>Categories</Label>

                 <div>
                        <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="AMAP" />
                        <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Coopérative" />
                        <CustomInput type="switch" id="exampleCustomSwitch3" name="customSwitch" label="Regroupement" />
                        <CustomInput type="switch" id="exampleCustomSwitch4" name="customSwitch" label="Paysan"/>
                </div>
                </FormGroup>

            </div>
       
        </Col>
        )};
};

export default Switch;