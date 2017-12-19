import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
class  Word extends Component {
    memorizedWord(){
        this.props.dispatch({
            type: 'MEMORIZED',
            id: this.props.myWord.id
        })
    }
    render() {
        const {en, vn, memorized} = this.props.myWord
        const textDecorationLine = memorized ? 'line-through' : 'none'
        const memorizedButtonText = memorized ? 'foget' : 'memorized'
        return (
            <View style = {styles.container}>
                <Text style ={{textDecorationLine}}>{en} </Text>
                <Text>{vn} </Text>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity onPress = {()=> this.memorizedWord()}
                    style = {{backgroundColor: '#A01D20', padding: 10}}>
                        <Text>{memorizedButtonText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor: '#A01D20', padding: 10}}>
                        <Text>Show</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C8D6F8',
        padding: 10,
        margin: 10
    }
});
export default connect()(Word)