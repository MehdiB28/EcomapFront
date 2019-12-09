import React,{Component} from 'react';
import { CustomInput, Form, FormGroup, Label,Input,Button} from 'reactstrap';

class Switch extends Component{
    render(){

        return(
            <div>
                <FormGroup>
                    <Input type="text" name="name" id="exampleName" placeholder="Amap..." ></Input>
                </FormGroup>

                <FormGroup>
                    <Input type="text" name="name" id="exampleName" placeholder="Ville..." ></Input>
                </FormGroup>

                <Button color="success" justify-content="center">Rechercher</Button>
                
             <div>
                <FormGroup style={{marginTop:30}}>
                        <Label for="exampleCustomRange">Distance</Label>
                        <CustomInput type="range" id="exampleCustomRange" name="customRange" min="0" max="150" />
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
        </div>
        )};
};

export default Switch;