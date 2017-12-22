import React, { Component } from 'react';
import { 
    View, TouchableOpacity,Text, StyleSheet,Switch,Dimensions,Image,TextInput,ToastAndroid
 } from 'react-native';
 import MapView, {Marker,Callout} from 'react-native-maps'
 import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail,  Left, Body, Icon,Item, Input } from 'native-base';
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
    componentWillMount(){
        this.MyLocation();
        //this.getPlaces();
    };
    MyLocation(){//giai quyet truoc khi tim vi tri cua ban
        navigator.geolocation.getCurrentPosition((position)=>{
            this.setState({
                region:{
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.5,
                    longitudeDelta: 0.5,
                },
                marker:{
                    latitude: position.coords.latitude,
                    longitude:position.coords.longitude,
                }
            });
            this._map.animateToCoordinate(this.state.marker, 1000);
            }
            )
       };
     render() {
         return (  
             <View style={{flex:1}}>
                 <MapView
                    ref={(map)=>this._map = map}
                    style={{flex:1}}
                     initialRegion={this.state.region}
                 >
                 <Marker coordinate={this.state.marker}>
                        <View style={styles.radius} >
                            <View style={styles.maker}></View>
                        </View>
                 </Marker>
                 </MapView>
                 <TouchableOpacity
                    style={styles.btn_MyLocation}
                    onPress={this.MyLocation.bind(this)}
                    >
                    <Image
                        source={require('../../Image/location.png')}
                    />
                </TouchableOpacity>
             </View> 
         
         );
     }
 }

 const styles = StyleSheet.create({
    btn_MyLocation:{
        height:50,
        width:50,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:60,
        //left: Dimensions.get('window').width - 60,
        right:5,
        zIndex: 100,
        borderRadius:50/2,
        backgroundColor:'#01000c2f',
    },
    radius:{
        height:50,
        width:50,
        borderRadius:50/2,
        backgroundColor: '#ff000013',
        borderWidth:1,
        borderColor:'#ff00004b',
        alignItems:'center',
        justifyContent:'center'

    },
    maker:{
        height:12,
        width:12,
        borderColor:'white',
        backgroundColor:'#ff0000',
        borderRadius:12/2,
        overflow:'hidden',
    },
    view_card:{
        position:'absolute',
        height:100,
        width:Dimensions.get('window').width + 500,//800,
        bottom:75,
        left:-12,
    },
    card:{
        elevation: 2000 ,
         backgroundColor:'#f5f5f510'
      },
      card_item:{
        backgroundColor:'#f5f5f510',
       
      },
    image:{
    height: 150,
    width:250 ,
    },
    adress:{
        fontSize:14,
        textAlign: 'center',
        alignItems:'center',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white',
        position:'absolute',
        bottom:0,
        right:5,
    },
    km:{
        fontSize:14,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white',
        position:'absolute',
        top:0,
        left:2,
    },
    information:{
        flex:1,
        justifyContent:'center',
        width:200,
        borderRadius:100,
    },
    text_inf:{
        fontWeight:'bold',
        fontStyle:'italic'
    },
    view_textinput:{
        position:'absolute',
        width:Dimensions.get('window').width,
        top:10,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        flexDirection:'row'
    },
    textinput:{
        color:'red',
        height: 36,
        width:210,
        marginTop:4,
        marginLeft:5,
        padding:5,
        marginBottom:2,
        fontSize: 15,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: '#9c9a9925',

    },
    go:{
      //  color:'black',
        height: 36,
        marginTop:4,
        padding:5,
        marginBottom:2,
       // fontSize: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
      //  backgroundColor: '#9c9a9925',
        justifyContent:'center',
        alignItems:'center'
    },
    view_btn_radius:{
        position:'absolute',
        top: 10,
        right:10,
    },
    btn_radius:{
        backgroundColor: '#9c9a9925',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        padding:5,
        margin:5,
        justifyContent:'center',
        alignItems:'center',
    },
    text_radius:{
        color:'red',
        fontSize:15,
    }
});