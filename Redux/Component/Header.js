import React, { Component } from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
class Header extends Component {
    state = {  }
    render() {
        return (
            <View style ={{alignItems: 'center'}}>
                <TouchableOpacity onPress = {() => this.props.dispatch({type: 'IS_ADDING'})}>
                    <Text style = {{fontSize: 25}}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default connect()(Header);