import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity,StyleSheet, Text } from 'react-native';
import {connect} from 'react-redux';
class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            en: '',
            vn: ''
        }
    }
    onAdd(){
        const {en, vn} = this.state
        this.props.dispatch({
            type: 'ADDED',
            en,
            vn
        })
        this.props.dispatch({
            type: 'IS_ADDING'
        })
    }
    render() {
         return (
             <View style = {{alignItems: 'center', alignSelf: 'stretch', justifyContent:'center'}}>
                 <TextInput
                 value= {this.state.en}
                 onChangeText={en => this.setState({en: en})}
                  style = {styles.TextInput}>

                 </TextInput>
                 <TextInput 
                  value= {this.state.vn}
                  onChangeText={vn => this.setState({vn: vn})}
                     style = {styles.TextInput}>
                     
                 </TextInput>
                 <TouchableOpacity onPress = {() => this.onAdd()}>
                    <Text style = {{fontSize: 25}}> ADD </Text>
                 </TouchableOpacity>
             </View>
         );
     }
 }
 const styles = StyleSheet.create({
     TextInput: {
         height: 40,
         width: 300,
         backgroundColor: 'green'
     }
 })
 export default connect()(Form);