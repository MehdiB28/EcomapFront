import React,{Component} from 'react';
import {Button} from 'reactstrap';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

class Mapp extends Component{
      constructor(){
            super();
            this.state={open:false}
      }

render(){

const Map = ReactMapboxGl({
            accessToken:
              'pk.eyJ1IjoibWVoZGliZXJyYSIsImEiOiJjazN6cjMxbmsweHRwM2xwNm55M2FkYzI3In0.JybnKPtc0YiizYCRpWTsmA'
          });
var style;

if(this.state.open){
      style={height: '75vh',width: '100vw'}
}else{
      style={height:'20vh',width:'100vw',opacity:0.5,WebkitFilter:'contrast(50%)'}
}      
return(
      <div>
            <Button color='success'onClick={()=>{this.setState({open:!this.state.open})}} style={{position:'absolute',zIndex:15,marginTop:40,marginLeft:10}}>Accès à la map </Button>
            <Map style={{}} style="mapbox://styles/mapbox/streets-v9" containerStyle={style}>
                  <Layer type="symbol" id="marker" layout={{ 'icon-image': 'harbor-15' }}>
                  <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                  </Layer>
            </Map>
      </div>
)


}};

export default Mapp;