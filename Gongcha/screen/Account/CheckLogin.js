import React, { Component } from 'react';
import { View } from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation'
import User from './User';
import Login from './Login';
import Root from '../../Router';
class CheckLogin extends Component {
    componentWillMount(){
        let array = this.props.infouser
        array == 0 ? ( this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Login'})
            ]
          })
        )) : ( this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Tab'})
            ]
          })
        ))
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
export default connect(
	mapStateToProps,
)(CheckLogin)