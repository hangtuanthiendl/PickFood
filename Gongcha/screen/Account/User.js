import React, { Component } from "react";
import { Platform, StyleSheet,TouchableOpacity, ImageBackground, TouchableNativeFeedback} from "react-native";
import firebase from 'react-native-firebase';
import { connect } from 'react-redux'
import styles from './styles';
import {NavigationActions }from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient'
import {infUserUpdate, infUserClear} from '../../Redux/Action/actionCreator';
import configureStore from '../../Redux/Store/configStore';
const {persistor} = configureStore()
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  List,
  ListItem,
  Picker,
  Form,
  View,
  H3,
  Item as FormItem,
  Thumbnail
} from "native-base";

class User extends Component {
  constructor(props) {
    super(props);      
  }
  signOut() {
    console.log('asdadsa', this.props.infouser.phoneNumber)
    firebase.auth().signOut().then(() => {
     persistor.purge()
     
    // this.props.dispatchInfoUserClear()     
    }).catch((error) => {
    });
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login'})
      ]
    })
  )
 }
  render() {
    return (
      <Container style={styles.container}>
      <Content>
      <ImageBackground blurRadius = {1} source = {require('../../Image/background.jpg')} style={styles.linearGradiant}>
      <LinearGradient colors={['rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.7)']}  style={styles.header}>             
      <View style = {styles.icon}>
            <TouchableOpacity transparent >
            <Thumbnail large style = {styles.avatar} source = {this.props.infouser ? {uri: this.props.infouser.photoURL} : null} />
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold', color: '#FFF'}}>{this.props.infouser ? this.props.infouser.displayName : 'loading...'}</Text>
          </View> 
      </LinearGradient>
     
      </ImageBackground>
        <View>
        <View style= {styles.wraper}>
        <TouchableNativeFeedback>
        <View style={styles.headerCateroryDetail}>
        <View style = {styles.row}>
        <Icon name = 'ios-cash' style = {styles.viewicon}/>
        <Text style={styles.viewmore}>Ví PF</Text>
        </View>
         <View style ={{flexDirection: 'row', alignItems: 'center'}}>
         <Text style = {styles.titleUser}>Xem ví của tôi</Text>
         </View>
         </View>
         </TouchableNativeFeedback>
          </View>
        </View>
        <TouchableNativeFeedback>
         <View style={styles.headerCateroryDetail}>
        <View style = {styles.row}>
        <Icon name = 'ios-heart' style = {styles.viewicon1}/>
        <Text style={styles.viewmore}>Ưa thích</Text>
        </View>
         <View style ={{flexDirection: 'row', alignItems: 'center'}}>
         <Text  style = {styles.titleUser}>Xem cửa hàng đã thích</Text>
         </View>
         </View>
         </TouchableNativeFeedback>
         <TouchableNativeFeedback>
         <View style={styles.headerCateroryDetail}>
        <View style = {styles.row}>
        <Icon name = 'ios-time' style = {styles.viewicon2}/>
        <Text style={styles.viewmore}>Mới xem</Text>
        </View>
         <View style ={{flexDirection: 'row', alignItems: 'center'}}>
         <Text  style = {styles.titleUser}>Sản phẩm xem gần đây</Text>
         </View>
         </View>
         </TouchableNativeFeedback>
         <TouchableNativeFeedback onPress = {() => this.props.navigation.navigate('Setting')}>
         <View style={styles.headerCateroryDetail}>
        <View style = {styles.row}>
        <Icon name = 'md-person' style = {styles.viewicon5}/>
        <Text style={styles.viewmore}>Tài khoản</Text>
        </View>  
        <Text  style = {styles.titleUser}>Xem tài khoản của tôi</Text>
         </View>
         </TouchableNativeFeedback>
         <TouchableNativeFeedback onPress = {() => this.signOut()}>
         <View style={styles.headerCateroryDetail}>
        <View style = {styles.row}>
        <Icon name = 'md-log-out' style = {styles.viewicon6}/>
        <Text style={styles.viewmore}>Đăng xuất</Text>
        </View>
         <Text  style = {styles.titleUser}>Đăng xuất tài khoản</Text>
        </View>
         </TouchableNativeFeedback>
      </Content>
      </Container>
    );
  }
}
function mapStateToProps (state) {
	return {
		infouser: state.infouser,
	}
}
function mapDispatchToProps (dispatch) {
	return{
    dispatchInfoUserUpdate: (infouser) => dispatch(infUserUpdate(infouser)),
    dispatchInfoUserClear: ()=> dispatch(infUserClear())
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(User)