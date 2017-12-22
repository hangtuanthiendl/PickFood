import React, { Component } from 'react';
import { View } from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation'
import User from './User';
import firebase from 'react-native-firebase'
import Login from './Login';
import Root from '../../Router';
import {infUserUpdate} from '../../Redux/Action/actionCreator'
import GetData from '../../Sever/getData'
class CheckLogin extends Component {
    componentWillMount(){
      this.checkLogin();
    }
    checkLogin(){
      if(this.props.infouser) {
        GetData.getUserInfo(this.props.infouser.uid,(user) => {
          if(user){
            this.props.dispatchInfoUserUpdate(user)
          }
          else {
            firebase.auth().signOut().then(() => {
              persistor.purge()
             }).catch((error) => {
             });
             this.props.navigation.dispatch(NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Login'})
              ]
            })
          )
          }
        })
        this.props.navigation.dispatch(NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Tab'})
          ]
        })
      )
      }else{
        this.props.navigation.dispatch(NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Login'})
          ]
        })
      )
      }
    }
    
    render() {
        return (
         <View></View>
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
	mapStateToProps,mapDispatchToProps
)(CheckLogin)