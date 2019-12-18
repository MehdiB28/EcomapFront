import React,{Component} from 'react';
import { CustomInput, FormGroup, Label} from 'reactstrap';
import {bindActionCreators} from 'redux'; 
import {connect} from 'react-redux';
import {Alicards} from '../actions';
import {Amapcards} from '../actions';


class Choice extends Component{
       


// ALIMENTAIRE
handleClickAli=()=>{
        this.props.Alicards()
    }      

// // AMAP
// handleClickAma=()=>{
//         this.props.Amapcards()
//     }     

// handleClickAli=()=>{
//         this.props.Alicards()
//     }   

// handleClickAli=()=>{
//         this.props.Alicards()
//     }  

// handleClickAli=()=>{
//         this.props.Alicards()
// }

// handleClickAli=()=>{
//         this.props.Alicards()
//     }      
    render(){
            
        
        return(
                <div>
                        <FormGroup style={{borderWidth:4,borderColor:"#27405C"}}>
                                <Label for="exampleCheckbox" style={{fontWeight:'bold'}}>Categories</Label>

                                        <div>
                                                <CustomInput type="switch" id="exampleCustomSwitch" name="Alimentation" label="Alimentation" onClick={this.handleClickAli}/>    
                                                <CustomInput type="switch" id="exampleCustomSwitch1" name="AMAP" label="AMAP" onClick={this.handleClickAma}/>
                                                <CustomInput type="switch" id="exampleCustomSwitch2" name="Caritative" label="Caritative" onClick={this.handleClickCari}/>
                                                <CustomInput type="switch" id="exampleCustomSwitch3" name="Prêt-à-Porter" label="Prêt-à-Porter" onClick={this.handleClickPap}/>
                                                <CustomInput type="switch" id="exampleCustomSwitch4" name="Recyclage" label="Recyclage" onClick={this.handleClickRecy}/>
                                                <CustomInput type="switch" id="exampleCustomSwitch4" name="Recyclage" label="Activité Bénévole" onClick={this.handleClickAb}/>
                                        </div>

                         </FormGroup>

                </div>
        )}
}

function AlicardDispatch(dispatch){
        return bindActionCreators(
                {Alicards:Alicards},
                dispatch);
}

function AmapcardDispatch(dispatch){
        return bindActionCreators(
                {Amapcards:Amapcards},
                dispatch);
}



export default connect (AmapcardDispatch,AlicardDispatch)(Choice);

