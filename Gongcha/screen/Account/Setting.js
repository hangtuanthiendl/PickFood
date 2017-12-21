import React, { Component } from 'react';
import {ImageBackground,TouchableNativeFeedback, Modal, TouchableOpacity, TextInput, Alert} from 'react-native';
import {Picker,Container, Content, Header, Text, View, Thumbnail,Icon,Title, Left, Body, Right, Form, Item, Input, Button} from 'native-base';
import styles from './styles'
import { connect } from 'react-redux'
import {infUserUpdate, infUserClear} from '../../Redux/Action/actionCreator';
import LinearGradient from 'react-native-linear-gradient'
import ActionButton from 'react-native-action-button'
import DatePicker from 'react-native-datepicker'
import moment from 'moment';
import GetData from '../../Sever/getData'
const ImagePicker = require('react-native-image-picker');
const options = {
    title: 'Option',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };
class Setting extends Component {
    constructor(props){
        super(props)
        this.state = {
            isModalSexOpen : false,
            isModalPhoneOpen: false,
            isModalNameOpen: false,
            name: this.props.infouser.displayName,
            phone: this.props.infouser.phoneNumber,
            image : this.props.infouser.photoURL,
            birthday: this.props.infouser.birthday,
            sex : this.props.infouser.sex,
        }
    }
    _hideModalName() { this.setState({isModalNameOpen : false})}
    _hideModalPhone() { this.setState({isModalPhoneOpen : false})}
    _hideModalSex() { this.setState({isModalSexOpen : false})}
    updateProfilePhoto() {
        ImagePicker.launchImageLibrary(options,(response) => {
          console.log('Response = ', response);
    
        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          
        }
        });
      }
    saveData () {
        let userinfoFalse = {
            displayName: this.state.name,
            email: this.props.infouser.email,
            phoneNumber: this.state.phone,
            photoURL: this.props.infouser.photoURL,
            uid: this.props.infouser.uid,	
            sex: this.state.sex,
            birthday: this.state.birthday,			
        }
        GetData.setUserInfo(userinfoFalse)
        this.props.dispatchInfoUserUpdate(userinfoFalse)
        Alert.alert(null, 'Cập nhật thành công')
    }
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
            <TouchableNativeFeedback transparent onPress = {() => this.updateProfilePhoto()}>
            <Thumbnail large style = {styles.avatar} source = {{uri : this.state.image}} />
            </TouchableNativeFeedback>
          </View> 
      </LinearGradient>
      </ImageBackground>
         <View>
             <TouchableNativeFeedback >
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
             <TouchableNativeFeedback onPress = {() => this.setState({isModalPhoneOpen : true})}>
             <View style = {styles.headerViewSetting}>
                <Text style = {{fontStyle: 'normal'}}>Điện thoại</Text>
                <Text note >{this.state.phone}</Text>
            </View>
             </TouchableNativeFeedback>
             <TouchableNativeFeedback onPress = {() => this.setState({isModalSexOpen : true})}>
             <View style = {styles.headerViewSetting}>
             <Text style = {{fontStyle: 'normal'}}>Giới tính</Text>
             <Text note >{this.state.sex}</Text>
         </View>
             </TouchableNativeFeedback>
             <TouchableNativeFeedback>
             <View style = {styles.headerViewSetting}>
                <Text style = {{fontStyle: 'normal'}}>Ngày sinh</Text>
                <DatePicker
                style={{width: 200}}
                date={this.state.birthday}
                androidMode = 'spinner'
                mode="date"
                placeholder="select date"
                format="DD/MM/YYYY"
                minDate="01/01/1800"
                maxDate= {moment(new Date()).format("DD/MM/YYYY")}
                showIcon= {false}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateInput: {
                      borderColor: 'transparent',
                      borderWidth: 0,
                      height: undefined,
                      width: undefined,
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start'
                 },
                    dateText: {
                      color: 'grey',
                      fontSize: 13
                    }
                    // ... You can check the source to find the other keys.
                  }}
                onDateChange={(date) => {this.setState({birthday: date})}}
              />    
            </View>
             </TouchableNativeFeedback>
         </View>   
         
            </Content>
            <Modal transparent
                visible = {this.state.isModalPhoneOpen}     
               onRequestClose={() => this._hideModalPhone()}>
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
               onPress={() => this._hideModalPhone()}>
           <Text>Save</Text>
                 </Button>    
               </ImageBackground>
            </Modal>
            <Modal transparent
                visible = {this.state.isModalNameOpen}     
               onRequestClose={() => this._hideModalName()}>
               <ImageBackground  blurRadius = {10} source = {require('../../Image/backgroundAccount.jpg')} style = {styles.modal} >
               <View>
               <Item regular style={{borderColor: 'white',borderTopWidth: 0.5, borderBottomWidth:0,borderLeftWidth: 0.5,borderRightWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
               <Icon name="md-contact" style = {{fontSize: 27,paddingLeft: 13,color: 'rgb(184, 181, 182)'}} />
               <Input style = {{color: 'white'}} 
                      placeholder='Tên của bạn'
                      underlineColorAndroid = 'transparent'
                      returnKeyType='next'
                      placeholderTextColor= '#FFF'  
                      onChangeText={(name) => this.setState({ name })}
                      value={this.state.name} />
               </Item>
               </View>
               <Button light block style ={styles.button}
               onPress={() => this._hideModalName()}>
           <Text>Save</Text>
                 </Button>    
               </ImageBackground>
            </Modal>
            <Modal transparent
                visible = {this.state.isModalSexOpen}     
               onRequestClose={() => this._hideModalSex()}>
               <ImageBackground  blurRadius = {10} source = {require('../../Image/backgroundAccount.jpg')} style = {styles.modal} >
               <View>
               <Form style = {{backgroundColor: '#FFF'}}>
                <Picker
                    mode="dropdown"
                    placeholder= "Select One"
                    selectedValue={this.state.sex}
                    onValueChange={value => this.setState({ sex: value})}
               >
                 <Item label="Nam" value="Nam" />
                 <Item label="Nữ" value="Nữ" />
               </Picker>
             </Form>
               </View>
               <Button light block style ={styles.button}
               onPress={() => this._hideModalSex()}>
           <Text>Save</Text>
                 </Button>    
               </ImageBackground>
            </Modal>
            <ActionButton buttonColor = 'rgb(168, 20, 39)'
            position= 'center'
                 onPress = {() => this.saveData()}
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