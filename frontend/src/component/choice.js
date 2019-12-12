import React,{Component} from 'react';
import { CustomInput, FormGroup, Label} from 'reactstrap';


class Choice extends Component{
    constructor(props){
        super(props)
        this.state={
                Aliselect:false,
                Amaselect:false,
                Cariselect:false,
                Papselect:false,
                Recyselect:false,
                catergorie:["AMAP","Alimentaire","Caritative","Prêt-à-Porter","Recyclage"]
        }}

        

UpdateClickAli=()=>{
        this.setState({
        Aliselect:!this.state.Aliselect,     
                });
        } 

UpdateClickAma=()=>{
        this.setState({
        Amaselect:!this.state.Amaselect,
        });} 

UpdateClickCar=()=>{
        this.setState({
        Cariselect:!this.state.Cariselect,
        });} 

UpdateClickPap=()=>{
        this.setState({
        Papselect:!this.state.Papselect,
        });} 

UpdateClickRec=()=>{
        this.setState({
        Recyselect:!this.state.Recyselect
        });} 

    render(){
            
        
        return(
                <div>
                        <FormGroup style={{borderWidth:4,borderColor:"#27405C"}}>
                        <Label for="exampleCheckbox" style={{fontWeight:'bold'}}>Categories</Label>
                       

                 <div>
                        <CustomInput type="switch" id="exampleCustomSwitch" name="Alimentation" label="Alimentation" onClick={this.UpdateClickAli}/>    
                        <CustomInput type="switch" id="exampleCustomSwitch1" name="AMAP" label="AMAP" onClick={this.UpdateClickAma}/>
                        <CustomInput type="switch" id="exampleCustomSwitch2" name="Caritative" label="Caritative" onClick={this.UpdateClickCar}/>
                        <CustomInput type="switch" id="exampleCustomSwitch3" name="Prêt-à-Porter" label="Prêt-à-Porter" onClick={this.UpdateClickPap}/>
                        <CustomInput type="switch" id="exampleCustomSwitch4" name="Recyclage" label="Recyclage" onClick={this.UpdateClickRec}/>
                </div>
                </FormGroup>

                </div>
        )}
}

export default Choice;
