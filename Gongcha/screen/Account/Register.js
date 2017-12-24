import React, { Component } from 'react';
import {TouchableNativeFeedback,Modal, View, TextInput, TouchableOpacity, Alert, ImageBackground, KeyboardAvoidingView,Dimensions, Keyboard } from 'react-native';
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
            isLoading: false,
            isModalOpen: false
        }
       // this.onSignIn = this.onSignIn.bind(this);
        //this.goSignUp = this.goSignUp.bind(this);     
    }
    onSignIn(){    
        this.setState({
            isLoading: true
        })   
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
                  this.setState({
                    isLoading: false
                })
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
              this.setState({
                isLoading: false
            })
        }
    }
    goSignUp(){
        this.setState({
            isLoading: true
        })
        const { navigate } = this.props.navigation;
        if(this.state.email != null && this.state.password !=null && this.state.phone !=null && this.state.name !=null)
        {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((currentUser)=>{
                Alert.alert(
                'Thông báo',
                'Đăng nhập thành công: ' + this.state.email,
                [
                  {text: 'OK', onPress: () => this.onSignIn()},
                ],
                { cancelable: false }
                )                 
            })
            .catch(function(error) {
                Alert.alert(
                    'Thông báo',
                    'Đăng ký thật bại',
                    [
                      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                  )
                  this.setState({
                    isLoading: false
                })
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
            this.setState({
                isLoading: false
            })
        }      
    }
    _hideModal = () =>{
        this.setState({
            isModalOpen: false
        })
    }
    _openModal(){
        this.setState({
            isModalOpen: true
        })
    }
    onResetPassword(){
        if(this.state.email != null){
            firebase.auth().sendPasswordResetEmail(this.state.email).then(function(reset){
                Alert.alert(
                    'Thông báo',
                    'Mật khẩu mới đã được gửi về ' + this.state.email,
                    [
                      {text: 'OK', onPress: () => console.log('Ok')},
                    ],
                    { cancelable: false }
                    )
            }).catch(function(error) {
                Alert.alert(
                    'Thông báo',
                    'Đã có lỗi xảy ra, vui lòng nhập lại',
                    [
                      {text: 'OK', onPress: () => console.log('Ok')},
                    ],
                    { cancelable: false }
                )
            })
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
    render() {
        return (
            <StyleProvider style ={getTheme(material)}>    
         <Container>
             <Content keyboardShouldPersistTaps='always'>
             <Tabs locked={true}>
          <Tab heading={ <TabHeading><Text>Đăng ký</Text></TabHeading>}>
          <KeyboardAvoidingView behavior = 'padding' style = {{flex: 1}}>
          <ImageBackground blurRadius = {10} source = {require('../../Image/backgroundAccount.jpg')} style = {styles.imagebackground}>
          {
              !this.state.isLoading &&  <View style = {styles.viewRef}>
              <Text style = {styles.textRef}>Để hoàn thành việc trở thành một Picker. Bạn phải điền đầy đủ thông tin bên dưới, chúng tôi đảm bảo thông tin của bạn sẽ được bảo mật</Text>
              <View style={Styles.containerForm}>
                <View style={{flexDirection: 'row',width: height/ 2.2,borderTopLeftRadius: 5,borderTopRightRadius: 5,borderColor: 'white',borderWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
                <Icon name="ios-mail-outline" style = {{fontSize: 25,color: 'rgb(184, 181, 182)', alignSelf: 'center', marginLeft: 5, marginRight: 5}} />
                <TextInput style = {{color: 'white', height: 45 , width: height/ 2.5, fontSize: 18}} 
                           placeholder='Địa chỉ Email của bạn'
                           
                           keyboardType = 'email-address'
                           returnKeyType='next'
                           autoCapitalize= 'none'
                           onSubmitEditing= {() => {this.passwordInput.focus()}}
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
                        <Text style ={{color: 'rgb(184, 47, 64)'}}>Đăng ký</Text>
                </Button> 
              </View>
          }
          {
              this.state.isLoading && <View style = {styles.viewRef}>
              <Spinner color = 'rgb(184, 47, 64)'/>
              </View>
          }         
             </ImageBackground>
             </KeyboardAvoidingView>
         </Tab>
          <Tab heading={ <TabHeading><Text>Đăng nhập</Text></TabHeading>}>
          <KeyboardAvoidingView behavior = 'padding' style = {{flex: 1}}>
          <ImageBackground blurRadius = {10} source = {require('../../Image/backgroundAccount.jpg')} style = {styles.imagebackground} >
            {
                !this.state.isLoading &&  <View style = {styles.viewRef}>
                <Text onPress = {() => this._openModal()} style = {styles.textRef}>Để hoàn thành việc đăng nhập. Bạn phải điền đầy đủ thông tin Email, Password. Nếu bạn quên Password có thể bấm vào đây</Text>
                <View style={Styles.containerForm}>
                <View style={{flexDirection: 'row',width: height/ 2.2,borderTopLeftRadius: 5,borderTopRightRadius: 5,borderColor: 'white',borderWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
                <Icon name="ios-mail-outline" style = {{fontSize: 25,color: 'rgb(184, 181, 182)', alignSelf: 'center', marginLeft: 5, marginRight: 5}} />
                <TextInput style = {{color: 'white', height: 45 , width: height/ 2.5, fontSize: 18}} 
                           placeholder='Địa chỉ Email của bạn'
                           keyboardType = 'email-address'
                           returnKeyType='next'
                           autoCapitalize= 'none'
                           onSubmitEditing= {() => this.passwordLoginInput.focus()}
                           autoCorrect = {false}
                           underlineColorAndroid = 'transparent'
                           placeholderTextColor= 'rgb(184, 181, 182)'  
                           onChangeText={(email) => this.setState({ email })}
                           value={this.state.email} />
                </View>
                <View style={{flexDirection: 'row', width: height/ 2.2,borderColor: 'white',borderWidth: 0.5, marginTop: 5 ,backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
                <Icon name="ios-lock-outline" style = {{fontSize: 25,color: 'rgb(184, 181, 182)', alignSelf: 'center', marginLeft: 5, marginRight: 5}} />
                <TextInput style = {{color: 'white', height: 45, width: height/ 2.5, fontSize: 18 }} 
                           ref = {(Input) => this.passwordLoginInput = Input}
                           placeholder='Mật khẩu của bạn'
                           underlineColorAndroid = 'transparent'
                           returnKeyType='go'
                           autoCapitalize= 'none'
                           autoCorrect = {false}   
                           placeholderTextColor= 'rgb(184, 181, 182)'  
                           onChangeText={(password) => this.setState({ password })}
                           value={this.state.password}
                            secureTextEntry = {true} />
                </View>
            </View>  
            <Button  rounded light block style ={styles.button}
                            onPress={() => this.onSignIn()}>
                        <Text style ={{color: 'rgb(184, 47, 64)'}}>Đăng nhập</Text>
                    </Button>  
                </View>
            }
            {
                this.state.isLoading && <View style = {styles.viewRef}>
                <Spinner color ='rgb(184, 47, 64)'/>
                </View>
            }
           
          
             </ImageBackground>
             </KeyboardAvoidingView>
          </Tab>
        </Tabs>    
             </Content>
             <Modal transparent
             animationType = 'slide'
             visible = {this.state.isModalOpen}     
             onRequestClose={() => this._hideModal()}>
           <ImageBackground  blurRadius = {10} source = {require('../../Image/backgroundAccount.jpg')} style = {styles.imagebackground} >
           <Header noShadow ={true} style = {{backgroundColor: 'transparent', justifyContent: 'space-between'}}>
           <View style = {{justifyContent: 'center',flexDirection: 'row',}}>
           <Title style = {{textAlign: 'center', alignSelf: 'center', color: '#FFF'}}>Đặt lại mật khẩu</Title>
       </View>
       <TouchableNativeFeedback onPress = {() => this._hideModal()}>
       <Icon name= 'md-close' style = {{fontSize: 25,  color: '#FFF',  alignSelf: 'center'}}/>
       </TouchableNativeFeedback>
           </Header>
           <View style = {styles.viewRef}>
           <Item regular style={{borderColor: 'white',borderTopWidth: 0.5, borderBottomWidth:0,borderLeftWidth: 0.5,borderRightWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
           <Icon name="ios-mail-outline" style = {{fontSize: 27,paddingLeft: 13,color: 'rgb(184, 181, 182)'}} />
           <Input style = {{color: 'white'}} 
                  placeholder='Email bạn muốn đặt lại mật khẩu'
                  underlineColorAndroid = 'transparent'
                  returnKeyType='go'
                  placeholderTextColor= '#FFF'  
                  onChangeText={(email) => this.setState({ email })}
                  value={this.state.email} />
           </Item>
           </View>
           <Button light block style ={styles.button}
           onPress={() => this.onResetPassword()}>
          <Text style = {{color: 'rgb(184, 47, 64)'}}>Rest Password</Text>
             </Button>    
           </ImageBackground>
         </Modal>
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