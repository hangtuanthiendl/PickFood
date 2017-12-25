import React,{Component} from 'react'
import {View,Text,StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native'
import {Icon} from 'native-base';
import call from 'react-native-phone-call'
var numberPhone = '000';
export default class Detail_map extends Component{
    CallMe(number){
        numberPhone = number;
        const args = {
            number:numberPhone,
            prompt:true,
        }
       call(args).catch(console.error);
    }
    render(){
        const {params} = this.props.navigation.state;
        return(
            <View style={styles.container}>
               <View style={styles.bg_image}>
                 <Image source={params.m_image} style={styles.image}/>
               </View>
               <View style={styles.bg_gongcha}>
                        <Image style={styles.image_gongcha} source={require('../../Image/detailmap/logo.png')}/>
                        <View style={{backgroundColor:'gray',height:0.05,width:300,alignItems:'center'}}></View>
                </View>
               <View style={styles.bg_information}>
                    <View style={styles.icon}>
                        <Icon name= 'ios-map-outline' style={styles.m_icon}/>
                        <Icon name= 'ios-call-outline' style={styles.m_icon}/>
                        <Icon name= 'ios-clock-outline' style={styles.m_icon}/>
                    </View>
                    <View style={styles.information}>
                        <Text style={styles.m_text_address}>{params.m_address}</Text>
                        <Text style={styles.m_text_phone}>{params.m_phone}</Text>
                        <Text style={styles.m_text_time}>{params.m_time}</Text>
                    </View>
                    <Image style={{position:'absolute',height:150,width:100,right:20,bottom:5}} source={require('../../Image/detailmap/gongcha7.png')}/>
               </View>
               <TouchableOpacity style={styles.btn_lienhe} onPress={()=>{this.CallMe(params.m_phone)}}>
                     <Image  source={require('../../Image/detailmap/paper.png')}/>
               </TouchableOpacity>
               <TouchableOpacity style={styles.btn_thoat} onPress={()=>{this.props.navigation.goBack()}}>
                     <Icon name= 'ios-close-outline' style={{color:'white',width:80,height:80}}/>
               </TouchableOpacity>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    bg_image:{
        flex:0.5,
        backgroundColor:'white',
    },
    image:{
        resizeMode:'cover',
        height:350,
        width:Dimensions.get('window').width,
    },
    bg_gongcha:{
        flex:0.1,
        justifyContent:'center',
        backgroundColor:'white',
        paddingLeft:25,
        
    },
    image_gongcha:{
        height:50,
        width:200,
        resizeMode:'cover',
    },
    bg_information:{
        flex:0.4,
        flexDirection:'row',
        backgroundColor:'white',
    },
    icon:{
        flex:0.2,
        backgroundColor:'white',
        alignItems:'center',
    },
    m_icon:{
       margin:12,
    },

    information:{
        flex:0.8,
        backgroundColor:'white',
    },
    m_text_address:{
        color:'black',
        margin:10,
        fontSize:14,
    },
    m_text_phone:{
        color:'black',
        margin:10,
        marginTop:12,
        fontSize:14,
    },
    m_text_time:{
        color:'black',
        margin:10,
        marginTop:25,
        fontSize:14,
    },
    btn_lienhe:{
        height:80,
        width:80,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:250,
        left: Dimensions.get('window').width - 80,
        zIndex: 100,
    },
    btn_thoat:{
        height:100,
        width:100,
        position:'absolute',
        left:20,
        top:20,
    },
});