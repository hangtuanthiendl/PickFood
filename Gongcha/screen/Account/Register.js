import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import Styles from '../../Styles';
import styles from './styles'
import firebase from 'react-native-firebase';
import GetData from '../../Sever/getData';
import {NavigationActions }from 'react-navigation';
import { StyleProvider ,TabHeading,Spinner,Container, Header, Item, Input, Icon, Button, Text, Body,Title, Left, Right,Content, Card, CardItem ,Thumbnail, List,ListItem, Tabs, Tab } from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {infUserUpdate} from '../../Redux/Action/actionCreator';
import {connect} from 'react-redux'

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
                let userinfoFalse ={
                    displayName: this.state.name,
                    email: this.state.email,
                    phoneNumber: this.state.phone,
                    photoURL: 'http://www.vince-inc.com/vincent/wp-content/uploads/2011/11/no_image.jpg',
                    uid: currentUser.uid,                
                }
				firebase.database().ref().child('User').once('value', (snap)=>{
                    if(snap.hasChild(currentUser.uid)){
						GetData.getUserInfo(currentUser.uid, (item)=>{
							let userinfoTrue = {
								displayName: item.displayName,
								email: item.email,
								phoneNumber: item.phoneNumber,
								photoURL: item.photoURL,
								uid: item.uid,	
							}
							this.props.dispatchInfoUserUpdate(userinfoTrue)
						})
					} else{
						GetData.setUserInfo(userinfoFalse)
						this.props.dispatchInfoUserUpdate(userinfoFalse)
					}			
				})
                this.props.navigation.dispatch(NavigationActions.reset({
                            index: 0,
                            actions: [
                              NavigationActions.navigate({ routeName: 'Tab'})
                            ]
                          })
                )
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
          <ImageBackground blurRadius = {10} source = {require('../../Image/backgroundAccount.jpg')} style = {styles.imagebackground} >
            <View style={Styles.containerForm}>
            <Item regular style={{borderTopLeftRadius: 5,borderTopRightRadius: 5,borderColor: 'white',borderWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
                <Icon name="md-mail-open" style = {{color: 'rgb(184, 181, 182)'}} />
                <Input style = {{color: 'white'}} 
                       placeholder='Địa chỉ Email của bạn'
                       returnKeyType='next'
                       underlineColorAndroid = 'transparent'
                       placeholderTextColor= 'rgb(184, 181, 182)'  
                       onChangeText={(email) => this.setState({ email })}
                       value={this.state.email} />
            </Item>
            <Item regular style={{borderColor: 'white',borderTopWidth: 0, borderBottomWidth:0,borderLeftWidth: 0.5,borderRightWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
                <Icon name="md-lock" style = {{fontSize: 27,paddingLeft: 13 ,color: 'rgb(184, 181, 182)'}} />
                <Input style = {{color: 'white'}} 
                       placeholder='Mật khẩu của bạn'
                       underlineColorAndroid = 'transparent'
                       returnKeyType='next'
                       placeholderTextColor= 'rgb(184, 181, 182)'  
                       onChangeText={(password) => this.setState({ password })}
                       value={this.state.password}
                        secureTextEntry = {true}/>
            </Item>    
            <Item regular style={{borderColor: 'white',borderTopWidth: 0.5, borderBottomWidth:0,borderLeftWidth: 0.5,borderRightWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
            <Icon name="ios-call" style = {{fontSize: 27,paddingLeft: 13,color: 'rgb(184, 181, 182)'}} />
            <Input style = {{color: 'white'}} 
                   placeholder='Số điện thoại của bạn'
                   underlineColorAndroid = 'transparent'
                   keyboardType='numeric'
                   returnKeyType='next'
                   placeholderTextColor= 'rgb(184, 181, 182)'  
                   onChangeText={(phone) => this.setState({ phone })}
                   value={this.state.phone} />
            </Item>
            <Item regular style={{borderBottomLeftRadius: 5,borderBottomRightRadius: 5,borderColor: 'white',borderWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
            <Icon name="md-contact" style = {{color: 'rgb(184, 181, 182)'}} />
            <Input style = {{color: 'white'}} 
                   placeholder='Tên hiện thị'
                   returnKeyType='next'
                   underlineColorAndroid = 'transparent'
                   placeholderTextColor= 'rgb(184, 181, 182)'  
                   onChangeText={(name) => this.setState({ name })}
                   value={this.state.name} />
            </Item>           
        </View>  
        
        <Button rounded light block style ={styles.button}
                        onPress={() => this.goSignUp()}>
                    <Text>Đăng ký</Text>
        </Button>
        
        <Text style={styles.textthongbao}>Thông tin của bạn sẽ được bảo mật và không được chia sẻ cho các bên thứ 3 nếu không có sự đồng ý của bạn, cảm ơn bạn!</Text>    
             </ImageBackground>
         </Tab>
          <Tab heading={ <TabHeading><Text>Đăng nhập</Text></TabHeading>}>
          <ImageBackground blurRadius = {10} source = {require('../../Image/backgroundAccount.jpg')} style = {styles.imagebackground} >
            <View style={Styles.containerForm}>
            <Item regular style={{borderTopLeftRadius: 5,borderTopRightRadius: 5,borderColor: 'white',borderWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
            <Icon name="md-mail-open" style = {{color: 'rgb(184, 181, 182)'}} />
            <Input style = {{color: 'white'}} 
                   placeholder='Địa chỉ Email của bạn'
                   underlineColorAndroid = 'transparent'
                   placeholderTextColor= 'rgb(184, 181, 182)'  
                   onChangeText={(email) => this.setState({ email })}
                   value={this.state.email} />
        </Item>
        <Item regular style={{marginTop: 5,borderBottomLeftRadius: 5,borderBottomRightRadius:5,borderColor: 'white', borderWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
            <Icon name="md-lock" style = {{fontSize: 27,paddingLeft: 13 ,color: 'rgb(184, 181, 182)'}} />
            <Input style = {{color: 'white'}} 
                   placeholder='Mật khẩu của bạn'
                   underlineColorAndroid = 'transparent'
                   placeholderTextColor= 'rgb(184, 181, 182)'  
                   onChangeText={(password) => this.setState({ password })}
                   value={this.state.password}
                    secureTextEntry = {true}/>
        </Item> 
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