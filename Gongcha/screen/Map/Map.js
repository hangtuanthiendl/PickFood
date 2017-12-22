import React, { Component } from 'react';
import { 
    View, TouchableOpacity,Text, StyleSheet,Switch,Dimensions,Image,TextInput,ToastAndroid
 } from 'react-native';
 import MapView, {Marker,Callout} from 'react-native-maps'
 import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail,  Left, Body, Icon,Item, Input } from 'native-base';
 const cards = [
    {
      adress: '175 Tôn Dật Tiên - Quận 7',
      adressfull:'Khu Panorama, 175 Tôn Dật Tiên, P. Tân Phong, Q.7, TP.HCM',
      km: '5.2km',
      phone:'(84.28) 62.706.333',
      time:'9:30 - 22:00',
      image: require('../../Image/gongcha1.jpg'),
    },
    {
      adress: '45A Lý Tự Trọng - Quận 1',
      adressfull:'Gian Hàng B3_28E Vincom B, 45A Lý Tự Trọng,P. Bến Nghé, Q1, TP.HCM',
      km: '8.5km',
      phone:'(84.28) 38.277.239',
      time:'9:30 - 21:30',
      image: require('../../Image/gongcha2.jpg'),
    },
    {
      adress: '159 Xa Lộ Hà Nội - Quận 2',
      adressfull:'Căn hộ số 08, tầng 01, Tòa B, Tháp T5, 159 Xa Lộ Hà Nội, P. Thảo Điền, Q.2, TP.HCM',
      km: '10.4km',
      phone:'(84.28) 37.442.313',
      time:'9:30 - 21:30',
      image: require('../../Image/gongcha3.jpg'),
    },
    {
      adress: '240 Phan Xích Long - Phú Nhuận',
      adressfull:'240 Phan Xích Long, Phường 7, Quận Phú Nhuận, TP.HCM',
      km: '15.6km',
      phone:'(84.28) 35.511.568',
      time:'9:00-22:30',
      image: require('../../Image/gongcha4.jpg'),
    },
    {
      adress: '498 An Dương Vương - Quận 5',
      adressfull:'498 An Dương Vương, Phường 4, Quận 5, TP.HCM',
      km: '14.3km',
      phone:'(84.28) 38.301.822',
      time:'9:00 - 22:00',
      image: require('../../Image/gongcha5.jpg'),
    },
  ];
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
            places:null,
            keySearch:'Gong Cha Việt Nam',
            radius:10000,
            typeMap:'standard',
        }
    }
    componentWillMount(){
        this.MyLocation();
        this.getPlaces();
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
       getUrlWithParameters(lat,long,radius,type,name,API){
        const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
        const location = `location=${lat},${long}&radius=${radius}`;
        const typeData = `&types=${type}`;
        const nameDaTa = `&name=${name}`;
        const key = `&key=${API}`;
        return `${url}${location}${typeData}${nameDaTa}${key}`;
   }
   getPlaces(){
    const url = this.getUrlWithParameters(
        this.state.region.latitude,
        this.state.region.longitude,
        this.state.radius,
        '',
        this.state.keySearch,
        'AIzaSyBxcWN1OUzvCjdsEptKu2wS6YhStLZbWt0'
    );
    fetch(url)
    .then((jsonRequest)=>jsonRequest.json())
    .then((jsonResponse)=>{
         console.log(jsonResponse);
         const arrMarkers = [];
         jsonResponse.results.map((element,i)=>{
             arrMarkers.push(
                <Marker
                     key={i}
                     coordinate = {{
                         latitude:element.geometry.location.lat,
                         longitude:element.geometry.location.lng,
                     }}>
                    <Image
                     style={{width: 25, height: 25}}
                     source={{uri: element.icon}}
                      />
                     <Callout>
                         <View style={styles.information}>
                         <Text style={styles.text_inf}>{element.name}</Text>
                         <Text style={styles.text_inf}>{element.vicinity}</Text>
                         </View>
                     </Callout>
                </Marker>
             )
         })
         console.log(JSON.stringify(arrMarkers));
         this.setState({places:arrMarkers});})
         .catch(function(error) {
              console.log('There has been a problem with your fetch operation: ' + error.message);
              });
        }
        Go(text){
            if(text != null){
                this.setState({
                    keySearch:text,
                })
                this.getPlaces();
            }
        }
        i_100x(){
        this.setState({
            radius:this.state.radius*10,
        })
        this.getPlaces();
        ToastAndroid.showWithGravity(
        'Quét bán kính: '+ this.state.radius,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        }
        i_10x(){
           this.setState({
               radius:this.state.radius/10,
           })
           this.getPlaces();
           ToastAndroid.showWithGravity(
            'Quét bán kính: '+ this.state.radius,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              );
        }
        TypeMap(type){
           if(this.state.typeMap === 'hybrid'){
                 this.setState({typeMap:'standard'})
           }
           if(this.state.typeMap === 'standard'){
            this.setState({typeMap:'hybrid'})
          }
        }
     render() {
         return (  
             <View style={{flex:1}}>
                 <MapView
                    ref={(map)=>this._map = map}
                    mapType={this.state.typeMap}
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

                <View style={styles.view_textinput}>
                     <View style={{flex:2}}/>
                     <View style={{flex:5}}>
                        <TextInput 
                            style={styles.textinput}
                            placeholder={'Gong Cha gần bạn'}
                            placeholderTextColor="red"
                            underlineColorAndroid={'transparent'}
                            onChangeText={(keySearch)=>this.setState({keySearch})}
                        />    
                     </View>
                     <View style={{flex:1}}>
                        <TouchableOpacity style={styles.go} onPress={()=>this.Go(this.state.keySearch)}>
                            <Image  source={require('../../Image/detailmap/right-arrow.png')}/>
                        </TouchableOpacity>
                    </View>
                     <View style={{flex:2}}/>  
                </View>
                <View style={styles.view_btn_radius}>
                    <TouchableOpacity style={styles.btn_radius} onPress={()=>{this.i_10x()}}>
                        <Text style={styles.text_radius}>/10</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_radius} onPress={()=>{this.i_100x()}}>
                        <Text style={styles.text_radius}>x10</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_radius} onPress={()=>{this.TypeMap(this.state.typeMap)}}>
                        <Text style={styles.text_radius}>Type</Text>
                    </TouchableOpacity>
                </View>
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