import React, { Component } from 'react';
import {ImageBackground,TouchableNativeFeedback, Modal, TouchableOpacity, TextInput} from 'react-native';
import {Container, Content, Header, Text, View, Thumbnail,Icon,Title, Left, Body, Right, Form, Item, Input, Button} from 'native-base';
import styles from './styles'
import { connect } from 'react-redux'
import {infUserUpdate, infUserClear} from '../../Redux/Action/actionCreator';
import LinearGradient from 'react-native-linear-gradient'
import ActionButton from 'react-native-action-button'
import MapView from 'react-native-maps'
class Setting extends Component {
    constructor(props){
        super(props)
        this.state = {
            isModalPhoneOpen: false,
            isModalNameOpen: false,
            name: this.props.infouser.displayName,
            phone: this.props.infouser.phoneNumber,
            image : this.props.infouser.photoURL,
            birthday: null,
            sex : null
        }
    }

    _hideModal = () => this.setState({isModalOpen : false})
    _openModal = () => this.setState({isModalOpen : true})
    _hideModalName = () => this.setState({isModalNameOpen : false})
    _hideModalPhone = () => this.setState({isModalPhoneOpen : false})

    render() {
        return (
            <Container style = {styles.container}>
              <Header androidStatusBarColor = 'rgb(184, 47, 64)' style = {{backgroundColor: 'rgb(184, 47, 64)', justifyContent: 'space-between'}}>
              <View style = {styles.containerLogo}>
                  <Title style = {{textAlign: 'center', alignSelf: 'center',  color: '#FFF'}}>Thiết lập tài khoản</Title>
              </View>
              <TouchableNativeFeedback onPress = {() => this.props.navigation.goBack()}>
                    <Icon name= 'md-close' style = {{fontSize: 25,  color: '#FFF',  alignSelf: 'center'}}/>
              </TouchableNativeFeedback>
          </Header>
            <Content>
            <ImageBackground blurRadius = {1} source = {require('../../Image/background.jpg')} style={styles.linearGradiant}>
            <LinearGradient colors={['rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.7)']}  style={styles.header1}>             
             <View>
            <TouchableNativeFeedback transparent >
            <Thumbnail large style = {styles.avatar} source = {{uri : this.state.image}} />
            </TouchableNativeFeedback>
          </View> 
      </LinearGradient>
      </ImageBackground>
         <View>
             <TouchableNativeFeedback onPress = {() => this.setState({isModalPhoneOpen : true})}>
             <View style = {styles.headerViewSetting}>
                <Text style = {{fontStyle: 'normal'}}>Email</Text>
                <Text note >{this.props.infouser.email}</Text>
            </View>
             </TouchableNativeFeedback>
             <TouchableNativeFeedback onPress = {() => this.setState({isModalNameOpen : true})}>
             <View style = {styles.headerViewSetting}>
                <Text style = {{fontStyle: 'normal'}}>Tên tài khoản</Text>
                <Text note >{this.state.name}</Text>
            </View>
             </TouchableNativeFeedback>
             <TouchableNativeFeedback>
             <View style = {styles.headerViewSetting}>
                <Text style = {{fontStyle: 'normal'}}>Điện thoại</Text>
                <Text note >{this.state.phone}</Text>
            </View>
             </TouchableNativeFeedback>
             <TouchableNativeFeedback>
             <View style = {styles.headerViewSetting}>
             <Text style = {{fontStyle: 'normal'}}>Giới tính</Text>
             <Text note >{this.state.sex}</Text>
         </View>
             </TouchableNativeFeedback>
             <TouchableNativeFeedback>
             <View style = {styles.headerViewSetting}>
                <Text style = {{fontStyle: 'normal'}}>Ngày sinh</Text>
                <Text note >{this.state.birthday}</Text>
            </View>
             </TouchableNativeFeedback>
         </View>   
            </Content>
            <Modal transparent
                visible = {this.state.isModalPhoneOpen}     
               onRequestClose={() => this._hideModal}>
               <ImageBackground  blurRadius = {10} source = {require('../../Image/backgroundAccount.jpg')} style = {styles.modal} >
               <View>
               <Item regular style={{borderColor: 'white',borderTopWidth: 0.5, borderBottomWidth:0,borderLeftWidth: 0.5,borderRightWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
               <Icon name="ios-call" style = {{fontSize: 27,paddingLeft: 13,color: 'rgb(184, 181, 182)'}} />
               <Input style = {{color: 'white'}} 
                      placeholder='Số điện thoại của bạn'
                      underlineColorAndroid = 'transparent'
                      keyboardType='numeric'
                      returnKeyType='next'
                      placeholderTextColor= '#FFF'  
                      onChangeText={(phone) => this.setState({ phone })}
                      value={this.state.phone} />
               </Item>
               </View>
               <Button light block style ={styles.button}
               onPress={() => this._hideModalPhone}>
           <Text>Save</Text>
                 </Button>    
               </ImageBackground>
            </Modal>
            <Modal transparent
                visible = {this.state.isModalNameOpen}     
               onRequestClose={() => this._hideModal}>
               <ImageBackground  blurRadius = {10} source = {require('../../Image/backgroundAccount.jpg')} style = {styles.modal} >
               <View>
               <Item regular style={{borderColor: 'white',borderTopWidth: 0.5, borderBottomWidth:0,borderLeftWidth: 0.5,borderRightWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
               <Icon name="ios-call" style = {{fontSize: 27,paddingLeft: 13,color: 'rgb(184, 181, 182)'}} />
               <Input style = {{color: 'white'}} 
                      placeholder='Số điện thoại của bạn'
                      underlineColorAndroid = 'transparent'
                      keyboardType='numeric'
                      returnKeyType='next'
                      placeholderTextColor= '#FFF'  
                      onChangeText={(phone) => this.setState({ phone })}
                      value={this.state.phone} />
               </Item>
               </View>
               <Button light block style ={styles.button}
               onPress={() => this._hideModalName}>
           <Text>Save</Text>
                 </Button>    
               </ImageBackground>
            </Modal>
            <ActionButton buttonColor = 'rgb(168, 20, 39)'
            position= 'center'
                 onPress = {() => this._openModal}
                icon = { <Icon name="md-create" style = {{fontSize: 25, color: '#FFFFFF'}} />} />
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
)(Setting)