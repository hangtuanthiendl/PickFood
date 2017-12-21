import React, { Component } from 'react';
import { 
    View, Text
 } from 'react-native';
 import MapView, {Marker} from 'react-native-maps'
 export default class Map extends Component {
    constructor(props){
        super(props);
        this.state={
            region:{
                latitude: 10.8671779,
                longitude: 106.8012878,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            },
            marker:{
                latitude: 10.8671779,
                longitude:106.8012878,
            },
        }
    }
     render() {
         return (  
             <View style={{flex:1}}>
                 <MapView
                    style={{flex:1}}
                     initialRegion={this.state.region}
                 >
                 <Marker coordinate={this.state.marker}>
                  
                 </Marker>
                 </MapView>
             </View> 
         
         );
     }
 }