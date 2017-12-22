import React, { Component } from 'react';
import {StatusBar,Image,View, TextInput,TouchableOpacity, Alert , ActivityIndicator, AlertAndroid,TouchableHighlight, TouchableNativeFeedback} from 'react-native';
import { Spinner,Container, Header, Item, Input, Icon, Button, Text, Body,Title, Left, Right,Content, Card, CardItem ,Thumbnail, List,ListItem } from 'native-base';
import { LoginButton,AccessToken, LoginManager } from 'react-native-fbsdk';
import GetData from '../../Sever/getData'
import firebase from 'react-native-firebase';
import {NavigationActions }from 'react-navigation';
import { connect } from 'react-redux'
import styles from './styles'
import {infUserUpdate} from '../../Redux/Action/actionCreator';
import configureStore from '../../Redux/Store/configStore'
const {persistor, store} = configureStore()
//StatusBar.setHidden(true);
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
			isLoading: false,
        }
    }    
    onFacebook(){
		this.setState ({
				isLoading: true
		})
		LoginManager.logInWithReadPermissions(['public_profile', 'email'])
	  .then((result) => {
	    if (result.isCancelled) {
	      return Promise.reject(new Error('The user cancelled the request'));
	    }

	    console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
	    // get the access token
	    return AccessToken.getCurrentAccessToken();
	  })
	  .then(data => {
        // create a new firebase credential with the token     
	    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
        
            // login with credential
        return firebase.auth().signInWithCredential(credential);
	  })
	  .then((currentUser) => {		                
				let userinfoFalse = {
					displayName: currentUser.displayName,
					email: currentUser.email,
					phoneNumber: "123",
					photoURL: currentUser.photoURL,
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
	  .catch((error) => {
            alert(error);
			this.setState ({
					isLoading: false
			})
	  });
	}
    render() {
        const { navigate } = this.props.navigation;                       
        return (
		   <Container style = {styles.container}>
                <Image  style={styles.image}
                            source={require('../../Image/backgroundAccount.jpg')}
                           // resizeMethod = 'resize'
                    />
					{
						!this.state.isLoading &&  <View style = {{flex: 0.5}}>
						<View>
							<Text style={styles.title}>Tích sao ngay, quà trao tay</Text>
							<Text style={styles.title2}>Đăng nhập để tham gia tích điểm Ngôi Sao và nhận những phần quà bất ngờ từ PickFood.</Text>
						</View>
						<View>
							<TouchableNativeFeedback transparent onPress={() => this.props.navigation.navigate('Register')}>
								<View style={styles.button}>
									<Image  style={{width: 35, height: 35, flex: 1/8, resizeMode: Image.resizeMode.contain}}
											source={require('../../Image/mail.png')}/>
									<Text style={styles.textinbutton}>Đăng nhập bằng Email</Text>
								</View>
							</TouchableNativeFeedback>
							<TouchableNativeFeedback  transparent onPress={() => this.onFacebook()}>
								<View style={styles.button}>
									<Image  style={{width: 35, height: 35, flex: 1/8, resizeMode: Image.resizeMode.contain}}
											source={require('../../Image/fb.png')}/>
									<Text style={styles.textinbuttonfb}>Đăng nhập bằng Facebook</Text>
								</View>
							</TouchableNativeFeedback>
					</View>
					</View>
					}
					{
						this.state.isLoading && <View style={styles.wrapperLogin}>
                        <Spinner color = '#e53935'/>
                      </View>
					}
			 		  
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
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Login)
