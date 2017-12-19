import React, { Component } from 'react';
import { View ,TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
class Filter extends Component {
    getTextStles(statusName){
        const { myFilterStatus } = this.props
        if (statusName === myFilterStatus) return {color : 'red', fontWeight: 'bold'};
        return {color : 'white'}
    }
    setStatus(actionType){
        this.props.dispatch({type : actionType})
    }
    render() {
         return (
            <View style = {{flex: 1, backgroundColor: '#1E1E1E', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <TouchableOpacity onPress = {() => this.setStatus('FILTER_SHOW_ALL')}>
                        <Text style = {this.getTextStles('SHOW_ALL')}>Show All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.setStatus('FILTER_MEMORIZED')}>
                        <Text style ={this.getTextStles('MEMORIZED')}>Memorize</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.setStatus('FILTER_NEED_PRATICE')}>
                        <Text style = {this.getTextStles('NEED_PRATICE')}>Need Pratice</Text>
                    </TouchableOpacity>
                </View>
         );
     }
 }
 function mapSateToProps(state){
     return {
         myFilterStatus: state.filterStatus
     }
 }
 export default connect(mapSateToProps)(Filter);