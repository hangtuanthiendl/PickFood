import React, { Component } from 'react';
import {ImageBackground,TouchableNativeFeedback, Modal, TouchableOpacity, TextInput, Alert,Dimensions} from 'react-native';
import {Picker,Container, Content, Header, Text, View, Thumbnail,Icon,Title, Left, Body, Right, Form, Item, Input, Button} from 'native-base';
import styles from './styles'
import { connect } from 'react-redux'
import {infUserUpdate, infUserClear} from '../../Redux/Action/actionCreator';
import LinearGradient from 'react-native-linear-gradient'
import ActionButton from 'react-native-action-button'
import DatePicker from 'react-native-datepicker'
import moment from 'moment';
import GetData from '../../Sever/getData'
import Spinner from '../../../native-base-theme/components/Spinner';
const ImagePicker = require('react-native-image-picker');
const {height, width} = Dimensions.get('window');

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
            email: this.props.infouser.email,
           
        }
    }
    _hideModalName() { this.setState({isModalNameOpen : false})}
    _hideModalPhone() { this.setState({isModalPhoneOpen : false})}
    _hideModalSex() { this.setState({isModalSexOpen : false})}
    componentDidMount(){
        GetData.getUserInfo(this.props.infouser.uid, (callback)=>{
            this.setState({
                name: callback.displayName,
                email: callback.email,
                phone: callback.phoneNumber,
                image: callback.photoURL,
                sex : callback.sex,
                birthday: callback.birthday,
            })
        })
    }
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
          GetData.setProfilePicture(this.props.infouser.uid, response.path, (result) =>{
             this.setState({
                 image : result
             })
          })
        }
        });
      }
    saveData () {
        let userinfoFalse = {
            displayName: this.state.name,
            email: this.state.email,
            phoneNumber: this.state.phone,
            photoURL: this.state.image,
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
              <Right>
              <Button transparent onPress = {() => this.props.navigation.goBack()}>
                    <Icon name= 'md-close' style = {{fontSize: 25,  color: '#FFF',  alignSelf: 'center'}}/>
              </Button>
              </Right>
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
                        <Text style = {{fontStyle: 'normal', color: '#34495e'}}>Email</Text>
                        <Text note >{this.state.email}</Text>
                    </View>
                     </TouchableNativeFeedback>
                     <TouchableNativeFeedback onPress = {() => this.setState({isModalNameOpen : true})}>
                     <View style = {styles.headerViewSetting}>
                        <Text style = {{fontStyle: 'normal', color: '#34495e'}}>Tên tài khoản</Text>
                        <Text note >{this.state.name}</Text>
                    </View>
                     </TouchableNativeFeedback>
                     <TouchableNativeFeedback onPress = {() => this.setState({isModalPhoneOpen : true})}>
                     <View style = {styles.headerViewSetting}>
                        <Text style = {{fontStyle: 'normal', color: '#34495e'}}>Điện thoại</Text>
                        <Text note >{this.state.phone}</Text>
                    </View>
                     </TouchableNativeFeedback>
                     <TouchableNativeFeedback onPress = {() => this.setState({isModalSexOpen : true})}>
                     <View style = {styles.headerViewSetting}>
                     <Text style = {{fontStyle: 'normal', color: '#34495e'}}>Giới tính</Text>
                     <Text note >{this.state.sex}</Text>
                 </View>
                     </TouchableNativeFeedback>
                     <TouchableNativeFeedback>
                     <View style = {styles.headerViewSetting}>
                        <Text style = {{fontStyle: 'normal', color: '#34495e'}}>Ngày sinh</Text>
                        <DatePicker
                        style={{width: 200}}
                        date={this.state.birthday}
                       // androidMode = 'spinner'
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
                <Modal animationType = 'slide'
                        visible = {this.state.isModalPhoneOpen}     
                       onRequestClose={() => this._hideModalPhone()}>
                       <Container style = {styles.container}>
                    <Header androidStatusBarColor = 'rgb(184, 47, 64)' style = {{backgroundColor: 'rgb(184, 47, 64)'}}>
                <View style= {{justifyContent: 'space-between', flexDirection: 'row', flex: 1}}>
                   <View style = {styles.containerLogo}>
                       <Title style = {{textAlign: 'center', alignSelf: 'center', color: '#FFF'}}>{'Sửa số điện thoại'}</Title>
                   </View>
                   <Right style = {{height: undefined, width: undefined}}>
                   <Button transparent onPress = {() => this._hideModalPhone()}>
                   <Icon name= 'md-create' style = {{fontSize: 25,  color: '#FFF',  alignSelf: 'center'}}/>
                   </Button>
                   </Right>
                   </View> 
           </Header> 
            <Content  keyboardShouldPersistTaps='always' showsVerticalScrollIndicator={false}>
            <ImageBackground  blurRadius = {10} source = {require('../../Image/backgroundAccount.jpg')} style = {{height: height, width: width}} >
            <View style = {{alignItems: 'center', marginTop: 10}}>
                       <Item regular style={{borderColor: 'white',borderWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
                       <Icon name="ios-call" style = {{fontSize: 27,paddingLeft: 13,color: 'rgb(184, 181, 182)'}} />
                       <Input style = {{color: 'white'}} 
                              placeholder='Số điện thoại của bạn'
                              underlineColorAndroid = 'transparent'
                              keyboardType='numeric'
                              returnKeyType='next'
                              maxLength= {11}
                              autoFocus= {true}
                              placeholderTextColor= '#FFF'  
                              onChangeText={(phone) => this.setState({ phone })}
                              value={this.state.phone} />
                       </Item>
            </View>
            </ImageBackground>
            </Content>     
        </Container>                                 
                    </Modal>
                    <Modal animationType ='slide'
                        visible = {this.state.isModalNameOpen}     
                       onRequestClose={() => this._hideModalName()}>
                       <Container style = {styles.container}>
                    <Header androidStatusBarColor = 'rgb(184, 47, 64)' style = {{backgroundColor: 'rgb(184, 47, 64)'}}>
                <View style= {{justifyContent: 'space-between', flexDirection: 'row', flex: 1}}>
                   <View style = {styles.containerLogo}>
                       <Title style = {{textAlign: 'center', alignSelf: 'center', color: '#FFF'}}>{'Sửa tên tài khoản'}</Title>
                   </View>
                   <Right style = {{height: undefined, width: undefined}}>
                   <Button transparent onPress = {() => this._hideModalName()}>
                   <Icon name= 'md-create' style = {{fontSize: 25,  color: '#FFF',  alignSelf: 'center'}}/>
                   </Button>
                   </Right>
                   </View> 
           </Header> 
            <Content  keyboardShouldPersistTaps='always' showsVerticalScrollIndicator={false}>
            <ImageBackground  blurRadius = {10} source = {require('../../Image/backgroundAccount.jpg')} style = {{height: height, width: width}} >
            <View style = {{alignItems: 'center', marginTop: 10}}>
            <Item regular style={{borderColor: 'white',borderWidth: 0.5, backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
            <Icon name="md-contact" style = {{fontSize: 27,paddingLeft: 13,color: 'rgb(184, 181, 182)'}} />
            <Input style = {{color: 'white'}} 
                   placeholder='Tên của bạn'
                   underlineColorAndroid = 'transparent'
                   returnKeyType='next'
                   maxLength= {50}
                   autoFocus= {true}
                   placeholderTextColor= '#FFF'  
                   onChangeText={(name) => this.setState({ name })}
                   value={this.state.name} />
            </Item>
            </View>
            </ImageBackground>
            </Content>
            </Container>
                    </Modal>
                    <Modal animationType = 'slide'
                        visible = {this.state.isModalSexOpen}     
                       onRequestClose={() => this._hideModalSex()}>
                        <Container style = {styles.container}>
                    <Header androidStatusBarColor = 'rgb(184, 47, 64)' style = {{backgroundColor: 'rgb(184, 47, 64)'}}>
                <View style= {{justifyContent: 'space-between', flexDirection: 'row', flex: 1}}>
                   <View style = {styles.containerLogo}>
                       <Title style = {{textAlign: 'center', alignSelf: 'center', color: '#FFF'}}>{'Sửa giới tính'}</Title>
                   </View>
                   <Right style = {{height: undefined, width: undefined}}>
                   <Button transparent onPress = {() => this._hideModalSex()}>
                   <Icon name= 'md-create' style = {{fontSize: 25,  color: '#FFF',  alignSelf: 'center'}}/>
                   </Button>
                   </Right>
                   </View> 
           </Header> 
            <Content  keyboardShouldPersistTaps='always' showsVerticalScrollIndicator={false}>
            <ImageBackground  blurRadius = {10} source = {require('../../Image/backgroundAccount.jpg')} style = {{height: height, width: width}} >
            <View style = {{marginTop: 10}}>
            <Form style = {{backgroundColor: 'rgba(85, 79, 84,0.2)'}}>
                        <Picker
                            textStyle = {{color: 'white'}}
                            itemTextStyle = {{color : 'white'}}
                            style ={{color: 'white'}}
                            mode="dropdown"
                            placeholder= "Select One"
                            selectedValue={this.state.sex}
                            onValueChange={value => this.setState({ sex: value})}
                       >
                         <Picker.Item label="------" value="------" />
                         <Picker.Item label="Nam" value="Nam" />
                         <Picker.Item label="Nữ" value="Nữ" />
                       </Picker>
                     </Form>
            </View>
            </ImageBackground>
            </Content>
            </Container>
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