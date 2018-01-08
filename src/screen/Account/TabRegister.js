import React, { Component } from 'react';
import { View, Item, Icon, Input, Button, Text

 } from 'native-base';
 import Styles from '../../Styles'
 import styles from './styles'
import { ImageBackground } from 'react-native';
 import GetData from '../../Sever/getData';
 import {infUserUpdate} from '../../Redux/Action/actionCreator';
 import {connect} from 'react-redux'
class TabRegister extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            name:'',
            phone:'',

        }
    }
    goSignUp(){
        const { navigate } = this.props.navigation;        
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
            Alert.alert(
            'Nofication',
            'Sucessful with: ' + this.state.email,
            [
              {text: 'OK', onPress: () => navigate('MH_Login')},
            ],
            { cancelable: false }
          )
          this.setState({
              email:'',
              password:'',
              phone: '',
              name
          })
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
     render() {
         return (
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
            <Item regular style={{borderColor: 'white',borderTopWidth: 0, borderBottomWidth:0,borderLeftWidth: 0.5,borderRightWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
                <Icon name="md-lock" style = {{fontSize: 27,paddingLeft: 13 ,color: 'rgb(184, 181, 182)'}} />
                <Input style = {{color: 'white'}} 
                       placeholder='Mật khẩu của bạn'
                       underlineColorAndroid = 'transparent'
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
                   placeholderTextColor= 'rgb(184, 181, 182)'  
                   onChangeText={(phone) => this.setState({ phone })}
                   value={this.state.phone} />
            </Item>
            <Item regular style={{borderBottomLeftRadius: 5,borderBottomRightRadius: 5,borderColor: 'white',borderWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
            <Icon name="md-contact" style = {{color: 'rgb(184, 181, 182)'}} />
            <Input style = {{color: 'white'}} 
                   placeholder='Tên hiện thị'
                   underlineColorAndroid = 'transparent'
                   placeholderTextColor= 'rgb(184, 181, 182)'  
                   onChangeText={(name) => this.setState({ name })}
                   value={this.state.name} />
            </Item>           
        </View>  
        <Button light block style ={styles.button}
                        onPress={() => this.goSignUp()}>
                    <Text>Đăng ký</Text>
                </Button>    
             </ImageBackground>
           
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
)(TabRegister)