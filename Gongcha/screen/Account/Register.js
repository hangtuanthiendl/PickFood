import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Alert, ImageBackground, KeyboardAvoidingView,Dimensions } from 'react-native';
import Styles from '../../Styles';
import styles from './styles'
import firebase from 'react-native-firebase';
import GetData from '../../Sever/getData';
import {NavigationActions }from 'react-navigation';
import {Form, StyleProvider ,TabHeading,Spinner,Container, Header, Item, Input, Icon, Button, Text, Body,Title, Left, Right,Content, Card, CardItem ,Thumbnail, List,ListItem, Tabs, Tab } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {infUserUpdate} from '../../Redux/Action/actionCreator';
import {connect} from 'react-redux'
const {height, width} = Dimensions.get('window');

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: null,
            password: null,
            name:null,
            phone:null,

        }
       // this.onSignIn = this.onSignIn.bind(this);
        //this.goSignUp = this.goSignUp.bind(this);     
    }
    onSignIn(){       
        if(this.state.email != null, this.state.password != null){
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((currentUser)=>{
				GetData.getUserInfo(currentUser.uid, (user) =>{
					if (user){
						this.props.dispatchInfoUserUpdate(user)
						this.props.navigation.dispatch(NavigationActions.reset({
                            index: 0,
                            actions: [
                              NavigationActions.navigate({ routeName: 'Tab'})
                            ]
                          })
						)   
					} else{
						let userinfo = {
							displayName: this.state.name,
                            email: this.state.email,
                            phoneNumber: this.state.phone,
                            photoURL: 'http://www.vince-inc.com/vincent/wp-content/uploads/2011/11/no_image.jpg',
                            uid: currentUser.uid, 
							sex: 'Chưa cập nhật',
							birthday: 'Chưa cập nhật',							
						}
						GetData.setUserInfo(userinfo)
						this.props.dispatchInfoUserUpdate(userinfo)
						this.props.navigation.dispatch(NavigationActions.reset({
                            index: 0,
                            actions: [
                              NavigationActions.navigate({ routeName: 'Tab'})
                            ]
                          })
						)    
					}
				})
            })
            .catch(function(error) {
                console.log(error)
                Alert.alert(
                    'Thông báo',
                    'Đăng nhập thất bại',
                    [
                      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                  )
              });   
        } else {
            Alert.alert(
                'Thông báo',
                'Vui lòng điền đầy đủ thông tin của bạn',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
        }
    }
    goSignUp(){
        const { navigate } = this.props.navigation;
        if(this.state.email != null && this.state.password !=null && this.state.phone !=null && this.state.name !=null)
        {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((currentUser)=>{
                Alert.alert(
                'Nofication',
                'Sucessful with: ' + this.state.email,
                [
                  {text: 'OK', onPress: () => this.onSignIn()},
                ],
                { cancelable: false }
                )                 
            })
            .catch(function(error) {
                Alert.alert(
                    'Nofication',
                    'Sign Up Error',
                    [
                      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                  )
              });
        }   
        else{
            Alert.alert(
                'Thông báo',
                'Vui lòng điền đầy đủ thông tin của bạn',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
        }     
        
          
    }
    render() {
        return (
            <StyleProvider style ={getTheme(material)}>    
         <Container>
             <Tabs locked={true}>
          <Tab heading={ <TabHeading><Text>Đăng ký</Text></TabHeading>}>
          <ImageBackground blurRadius = {10} source = {require('../../Image/backgroundAccount.jpg')} style = {styles.imagebackground}>
          <KeyboardAvoidingView behavior = 'padding' >
          <View style={Styles.containerForm}>
            <View style={{flexDirection: 'row',width: height/ 2.2,borderTopLeftRadius: 5,borderTopRightRadius: 5,borderColor: 'white',borderWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
            <Icon name="ios-mail-outline" style = {{fontSize: 25,color: 'rgb(184, 181, 182)', alignSelf: 'center', marginLeft: 5, marginRight: 5}} />
            <TextInput style = {{color: 'white', height: 45 , width: height/ 2.5, fontSize: 18}} 
                       placeholder='Địa chỉ Email của bạn'
                       keyboardType = 'email-address'
                       returnKeyType='next'
                       autoCapitalize= 'none'
                       onSubmitEditing= {() => this.passwordInput.focus()}
                       autoCorrect = {false}
                       underlineColorAndroid = 'transparent'
                       placeholderTextColor= 'rgb(184, 181, 182)'  
                       onChangeText={(email) => this.setState({ email })}
                       value={this.state.email} />
            </View>
            <View style={{flexDirection: 'row', width: height/ 2.2,borderColor: 'white',borderWidth: 0.5, marginTop: 5 ,backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
            <Icon name="ios-lock-outline" style = {{fontSize: 25,color: 'rgb(184, 181, 182)', alignSelf: 'center', marginLeft: 5, marginRight: 5}} />
            <TextInput style = {{color: 'white', height: 45, width: height/ 2.5, fontSize: 18 }} 
                       onSubmitEditing= {() => this.phoneInput.focus()}
                       ref = {(Input) => this.passwordInput = Input}
                       placeholder='Mật khẩu của bạn'
                       underlineColorAndroid = 'transparent'
                       returnKeyType='next'
                       autoCapitalize= 'none'
                       autoCorrect = {false}   
                       placeholderTextColor= 'rgb(184, 181, 182)'  
                       onChangeText={(password) => this.setState({ password })}
                       value={this.state.password}
                        secureTextEntry = {true} />
            </View>
            <View style={{flexDirection: 'row',width: height/ 2.2,borderColor: 'white',borderWidth: 0.5, marginTop: 5 , backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
            <Icon name="ios-call-outline" style = {{fontSize: 25,color: 'rgb(184, 181, 182)', alignSelf: 'center', marginLeft: 5, marginRight: 5}} />
            <TextInput style = {{color: 'white', height: 45, width: height/ 2.5 , fontSize: 18}} 
                         onSubmitEditing= {() => this.nameInput.focus()}
                         ref = {(Input) => this.phoneInput = Input}
                          placeholder='Số điện thoại của bạn'
                          underlineColorAndroid = 'transparent'
                          keyboardType='numeric'
                          returnKeyType='next'
                          autoCapitalize= 'none'
                          autoCorrect = {false}  
                          placeholderTextColor= 'rgb(184, 181, 182)'  
                          onChangeText={(phone) => this.setState({ phone })}
                          value={this.state.phone} />
            </View>
            <View style={{flexDirection: 'row',width: height/ 2.2,borderBottomLeftRadius: 5,borderBottomRightRadius: 5,marginTop: 5 ,borderColor: 'white',borderWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
            <Icon name="ios-contact-outline" style = {{fontSize: 25,color: 'rgb(184, 181, 182)', alignSelf: 'center', marginLeft: 5, marginRight: 5}} />
            <TextInput style = {{color: 'white', height: 45, width: height/ 2.5 , fontSize: 18}} 
                       //onSubmitEditing= {() => this.phoneInput.focus()}
                      ref = {(Input) => this.nameInput = Input}
                      placeholder='Tên hiện thị'
                      returnKeyType='go'
                      autoCapitalize= 'none'
                      autoCorrect = {false}
                      underlineColorAndroid = 'transparent'
                      placeholderTextColor= 'rgb(184, 181, 182)'  
                      onChangeText={(name) => this.setState({ name })}
                      value={this.state.name} />
            </View>    
            </View> 
             <Button rounded light block style ={styles.button}
                        onPress={() => this.goSignUp()}>
                    <Text>Đăng ký</Text>
            </Button> 
          </KeyboardAvoidingView>
             </ImageBackground>
         </Tab>
          <Tab heading={ <TabHeading><Text>Đăng nhập</Text></TabHeading>}>
          <ImageBackground blurRadius = {10} source = {require('../../Image/backgroundAccount.jpg')} style = {styles.imagebackground} >
            <View style={Styles.containerForm}>
            <View style={{flexDirection: 'row',width: height/ 2.2,borderTopLeftRadius: 5,borderTopRightRadius: 5,borderColor: 'white',borderWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
            <Icon name="ios-mail-outline" style = {{fontSize: 25,color: 'rgb(184, 181, 182)', alignSelf: 'center', marginLeft: 5, marginRight: 5}} />
            <TextInput style = {{color: 'white', height: 45 , width: height/ 2.5, fontSize: 18}} 
                       placeholder='Địa chỉ Email của bạn'
                       keyboardType = 'email-address'
                       returnKeyType='next'
                       autoCapitalize= 'none'
                       onSubmitEditing= {() => this.passwordInput.focus()}
                       autoCorrect = {false}
                       underlineColorAndroid = 'transparent'
                       placeholderTextColor= 'rgb(184, 181, 182)'  
                       onChangeText={(email) => this.setState({ email })}
                       value={this.state.email} />
            </View>
            <View style={{flexDirection: 'row', width: height/ 2.2,borderColor: 'white',borderWidth: 0.5, marginTop: 5 ,backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
            <Icon name="ios-lock-outline" style = {{fontSize: 25,color: 'rgb(184, 181, 182)', alignSelf: 'center', marginLeft: 5, marginRight: 5}} />
            <TextInput style = {{color: 'white', height: 45, width: height/ 2.5, fontSize: 18 }} 
                       onSubmitEditing= {() => this.phoneInput.focus()}
                       ref = {(Input) => this.passwordInput = Input}
                       placeholder='Mật khẩu của bạn'
                       underlineColorAndroid = 'transparent'
                       returnKeyType='next'
                       autoCapitalize= 'none'
                       autoCorrect = {false}   
                       placeholderTextColor= 'rgb(184, 181, 182)'  
                       onChangeText={(password) => this.setState({ password })}
                       value={this.state.password}
                        secureTextEntry = {true} />
            </View>
        </View>  
        <Text style={{ paddingTop: 20,marginRight: 20,fontWeight: 'bold', color: 'white', alignSelf: 'flex-end'}}>Forgot your password?</Text>
        <Button  rounded light block style ={styles.button}
                        onPress={() => this.onSignIn()}>
                    <Text>Đăng nhập</Text>
                </Button>  
             </ImageBackground>
          </Tab>
        </Tabs>     
            </Container>
           </StyleProvider>
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
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Register)