import React,{Component} from 'react';
// import RangeSlider from './slider';
import { CustomInput, Form, FormGroup, Label,Input,Button,Col} from 'reactstrap';
import InputRange from 'react-input-range';
import { flexbox } from '@material-ui/system';


class Switch extends Component{
    

    render(){

        return(
        <Col>
            <div style={{margin:"auto",display:"flex", flexDirection:"column",alignItems:"center"}}>
                <FormGroup>
                    <Input type="text" name="name" id="exampleName" placeholder="Amap..." ></Input>
                </FormGroup>

                <FormGroup>
                    <Input type="text" name="name" id="exampleName" placeholder="Ville..." ></Input>
                </FormGroup>

                <Button color="danger">Rechercher</Button>
            
            </div>
       
        </Col>
        )};
};

export default Switch;