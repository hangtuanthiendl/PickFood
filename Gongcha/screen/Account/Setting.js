import React, { Component } from 'react';
import {ImageBackground,TouchableNativeFeedback} from 'react-native';
import {Container, Content, Header, Text, View, Thumbnail,Icon,Title} from 'native-base';
import styles from './styles'
import { connect } from 'react-redux'
import {infUserUpdate, infUserClear} from '../../Redux/Action/actionCreator';
import LinearGradient from 'react-native-linear-gradient'
import ActionButton from 'react-native-action-button'
class Setting extends Component {
    state = {  }
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
            <Thumbnail large style = {styles.avatar} source = {{uri : this.props.infouser.photoURL}} />
            </TouchableNativeFeedback>
            <Text style={{fontStyle:'normal', color: '#FFF', alignSelf: 'center'}}>{this.props.infouser.displayName}</Text>
          </View> 
      </LinearGradient>
      </ImageBackground>
         <View>
         <View style = {styles.headerViewSetting}>
                <Text style = {{fontStyle: 'normal'}}>Tên tài khoản</Text>
                <Text note >{this.props.infouser.email}</Text>
            </View>
            <View style = {styles.headerViewSetting}>
                <Text style = {{fontStyle: 'normal'}}>Điện thoại</Text>
                <Text note >{this.props.infouser.phoneNumber}</Text>
            </View>
            <View style = {styles.headerViewSetting}>
                <Text style = {{fontStyle: 'normal'}}>Giới tính</Text>
                <Text note >{this.props.infouser.phoneNumber}</Text>
            </View>
            <View style = {styles.headerViewSetting}>
                <Text style = {{fontStyle: 'normal'}}>Ngày sinh</Text>
                <Text note >{this.props.infouser.phoneNumber}</Text>
            </View>
         </View>   
            </Content>
            <ActionButton buttonColor = 'rgb(168, 20, 39)'
            position= 'center'
                 onPress = {() => this.props.navigation.navigate('ModalCart',{keyItemShop : this.state.keyshop, nameItemShop: this.state.name, addressItemShop: this.state.address})}
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