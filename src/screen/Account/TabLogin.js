import React, { Component } from 'react';
import {View, Item, Input, Button, Text, Icon} from 'native-base';
import Styles from '../../Styles'
import {ImageBackground} from 'react-native'
import styles from './styles';
export default class TabLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }
    onSignIn(){
         const { navigate, dispatch } = this.props.navigation;       
         firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
         .then(()=>{
             Alert.alert(
             'Nofication',
             'Sucessful with: ' + this.state.email,
             [
               {text: 'OK', onPress: () => dispatch(resetAction)},
             ],
             { cancelable: false }
           )
           this.setState({
               email: this.state.email,
               password: this.state.password
           })
         })
         .catch(function(error) {
             Alert.alert(
                 'Nofication',
                 'Sign In Error',
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
        <Button light block style ={styles.button}
                        onPress={() => this.onSignIn()}>
                    <Text>Đăng nhập</Text>
                </Button>  
             </ImageBackground>
        );
    }
}